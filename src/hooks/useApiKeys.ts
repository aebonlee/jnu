import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../utils/supabase';

const STORAGE_KEY = 'teaching_api_keys';

export function useApiKeys() {
  const { user, profile } = useAuth();
  const [keys, setKeys] = useState<Record<string, string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) as Record<string, string> : {};
    } catch {
      return {} as Record<string, string>;
    }
  });

  // Sync with profile if available
  useEffect(() => {
    if (profile?.api_keys) {
      setKeys(prev => ({ ...prev, ...profile.api_keys }));
    }
  }, [profile]);

  const setApiKey = useCallback(async (provider: string, key: string) => {
    const updated = { ...keys, [provider]: key };
    setKeys(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Also save to Supabase if logged in
    if (user) {
      try {
        await supabase
          .from('user_profiles')
          .upsert({ id: user.id, api_keys: updated }, { onConflict: 'id' });
      } catch {
        // Silently fail - local storage is the fallback
      }
    }
  }, [keys, user]);

  const getApiKey = useCallback((provider: string) => {
    return keys[provider] || '';
  }, [keys]);

  const hasApiKey = useCallback((provider: string) => {
    return !!keys[provider]?.trim();
  }, [keys]);

  return { keys, setApiKey, getApiKey, hasApiKey };
}
