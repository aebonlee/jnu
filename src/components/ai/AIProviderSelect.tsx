interface AIProviderSelectProps { selected: string; onSelect: (id: string) => void; apiKeys?: Record<string, string>; }

import { PROVIDER_LIST } from '../../config/ai-providers';
import { useLanguage } from '../../contexts/LanguageContext';

export default function AIProviderSelect({ selected, onSelect, apiKeys }: AIProviderSelectProps) {
  const { t } = useLanguage();

  return (
    <div>
      <label className="ai-form-label">
        <span className="label-icon"><i className="fa-solid fa-microchip" /></span>
        {t('ai.selectProvider')}
      </label>
      <div className="provider-select">
        {PROVIDER_LIST.map(provider => {
          const hasKey = !!apiKeys?.[provider.id]?.trim();
          return (
            <button
              key={provider.id}
              className={`provider-chip provider-${provider.id} ${selected === provider.id ? 'active' : ''}`}
              onClick={() => onSelect(provider.id)}
              title={hasKey ? provider.name : `${provider.name} (API key required)`}
            >
              <span className="provider-dot" style={{ background: provider.color }} />
              {provider.name}
              {!hasKey && <span style={{ fontSize: '10px', opacity: 0.5 }}><i className="fa-solid fa-key" /></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
