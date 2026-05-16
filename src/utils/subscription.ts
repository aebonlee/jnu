import { supabase, TABLES } from './supabase';
import type { Plan, Subscription, SharedKey, UsageLog } from '../types';

// ─── Plans ───

export async function getPlans(): Promise<Plan[]> {
  const { data, error } = await supabase
    .from(TABLES.plans)
    .select('*')
    .eq('is_active', true)
    .order('sort_order');

  if (error) throw error;
  return (data || []) as Plan[];
}

// ─── Subscriptions ───

export async function getActiveSubscription(userId: string): Promise<Subscription | null> {
  const { data, error } = await supabase
    .from(TABLES.subscriptions)
    .select(`*, plan:${TABLES.plans}(*)`)
    .eq('user_id', userId)
    .eq('status', 'active')
    .order('created_at', { ascending: false })
    .limit(1);

  if (error) throw error;
  if (!data || data.length === 0) return null;
  return data[0] as unknown as Subscription;
}

export async function createSubscription(
  userId: string,
  planId: string,
  orderNumber: string
): Promise<Subscription> {
  // Expire any existing active subscriptions
  await supabase
    .from(TABLES.subscriptions)
    .update({ status: 'expired' })
    .eq('user_id', userId)
    .eq('status', 'active');

  // Get plan to determine duration
  const { data: planData } = await supabase
    .from(TABLES.plans)
    .select('duration_days')
    .eq('id', planId)
    .limit(1);

  const durationDays = planData?.[0]?.duration_days || 30;
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + durationDays);

  const { data, error } = await supabase
    .from(TABLES.subscriptions)
    .insert({
      user_id: userId,
      plan_id: planId,
      status: 'active',
      expires_at: expiresAt.toISOString(),
      order_number: orderNumber,
    })
    .select()
    .single();

  if (error) throw error;
  return data as Subscription;
}

export async function createSubscriptionBySlug(
  userId: string,
  planSlug: string,
  orderNumber: string
): Promise<Subscription> {
  const { data: plans } = await supabase
    .from(TABLES.plans)
    .select('id')
    .eq('slug', planSlug)
    .limit(1);

  if (!plans || plans.length === 0) {
    throw new Error(`Plan not found: ${planSlug}`);
  }

  return createSubscription(userId, plans[0].id, orderNumber);
}

// ─── Shared Keys ───

export async function getSharedKeys(): Promise<SharedKey[]> {
  const { data, error } = await supabase
    .from(TABLES.shared_keys)
    .select('*')
    .eq('is_active', true);

  if (error) throw error;
  return (data || []) as SharedKey[];
}

export async function getSharedKeyForProvider(provider: string): Promise<string | null> {
  const { data, error } = await supabase
    .from(TABLES.shared_keys)
    .select('api_key')
    .eq('provider', provider)
    .eq('is_active', true)
    .limit(1);

  if (error) return null;
  return data?.[0]?.api_key || null;
}

// ─── Usage Logging ───

export async function logUsage(entry: Omit<UsageLog, 'id' | 'created_at'>): Promise<void> {
  try {
    await supabase
      .from(TABLES.usage_log)
      .insert(entry);
  } catch {
    // Non-critical: don't break the flow if logging fails
  }
}

export async function getUsageLogs(
  userId: string,
  limit = 50,
  offset = 0
): Promise<UsageLog[]> {
  const { data, error } = await supabase
    .from(TABLES.usage_log)
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) return [];
  return (data || []) as UsageLog[];
}

export async function getMonthlyUsage(userId: string): Promise<{ tokens: number; requests: number }> {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

  const { data, error } = await supabase
    .from(TABLES.usage_log)
    .select('input_tokens, output_tokens')
    .eq('user_id', userId)
    .gte('created_at', startOfMonth);

  if (error || !data) return { tokens: 0, requests: 0 };

  const tokens = data.reduce((sum, row) => sum + (row.input_tokens || 0) + (row.output_tokens || 0), 0);
  return { tokens, requests: data.length };
}

// ─── Admin helpers ───

export async function getAllSubscriptions(): Promise<Subscription[]> {
  const { data, error } = await supabase
    .from(TABLES.subscriptions)
    .select(`*, plan:${TABLES.plans}(*)`)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return (data || []) as unknown as Subscription[];
}

export async function getAllSharedKeys(): Promise<SharedKey[]> {
  const { data, error } = await supabase
    .from(TABLES.shared_keys)
    .select('*')
    .order('provider');

  if (error) throw error;
  return (data || []) as SharedKey[];
}

export async function upsertSharedKey(
  provider: string,
  apiKey: string,
  label?: string
): Promise<void> {
  const { error } = await supabase
    .from(TABLES.shared_keys)
    .upsert(
      { provider, api_key: apiKey, is_active: true, label: label || null, updated_at: new Date().toISOString() },
      { onConflict: 'provider' }
    );
  if (error) throw error;
}

export async function deleteSharedKey(id: string): Promise<void> {
  const { error } = await supabase
    .from(TABLES.shared_keys)
    .delete()
    .eq('id', id);
  if (error) throw error;
}

export async function grantSubscription(
  userId: string,
  planSlug: string,
  durationDays?: number
): Promise<void> {
  const { data: plans } = await supabase
    .from(TABLES.plans)
    .select('id, duration_days')
    .eq('slug', planSlug)
    .limit(1);

  if (!plans || plans.length === 0) throw new Error('Plan not found');

  const days = durationDays || plans[0].duration_days || 30;
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + days);

  // Expire existing active
  await supabase
    .from(TABLES.subscriptions)
    .update({ status: 'expired' })
    .eq('user_id', userId)
    .eq('status', 'active');

  await supabase
    .from(TABLES.subscriptions)
    .insert({
      user_id: userId,
      plan_id: plans[0].id,
      status: 'active',
      expires_at: expiresAt.toISOString(),
      order_number: `ADMIN-${Date.now()}`,
    });
}
