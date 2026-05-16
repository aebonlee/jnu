import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getActiveSubscription } from '../utils/subscription';
import type { Subscription } from '../types';

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!user) {
      setSubscription(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const sub = await getActiveSubscription(user.id);
      // Check if expired
      if (sub && sub.expires_at && new Date(sub.expires_at) < new Date()) {
        setSubscription(null);
      } else {
        setSubscription(sub);
      }
    } catch {
      setSubscription(null);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const isSubscribed = !!subscription;
  const planSlug = subscription?.plan?.slug || null;

  return { subscription, isSubscribed, planSlug, loading, refresh };
}
