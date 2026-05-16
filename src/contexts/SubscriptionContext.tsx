import { createContext, useContext, type ReactElement, type ReactNode } from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { useSharedKeys } from '../hooks/useSharedKeys';
import type { Subscription, SharedKey } from '../types';

interface SubscriptionContextValue {
  subscription: Subscription | null;
  isSubscribed: boolean;
  planSlug: string | null;
  loading: boolean;
  sharedKeys: SharedKey[];
  getSharedKey: (provider: string) => string | null;
  hasSharedKey: (provider: string) => boolean;
  refreshSubscription: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextValue | null>(null);

export function SubscriptionProvider({ children }: { children: ReactNode }): ReactElement {
  const { subscription, isSubscribed, planSlug, loading, refresh } = useSubscription();
  const { sharedKeys, getSharedKey, hasSharedKey } = useSharedKeys(isSubscribed);

  return (
    <SubscriptionContext.Provider value={{
      subscription,
      isSubscribed,
      planSlug,
      loading,
      sharedKeys,
      getSharedKey,
      hasSharedKey,
      refreshSubscription: refresh,
    }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscriptionContext(): SubscriptionContextValue {
  const ctx = useContext(SubscriptionContext);
  if (!ctx) throw new Error('useSubscriptionContext must be used within SubscriptionProvider');
  return ctx;
}
