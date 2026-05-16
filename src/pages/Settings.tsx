import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useApiKeys } from '../hooks/useApiKeys';
import { useToast } from '../contexts/ToastContext';
import { PROVIDER_LIST } from '../config/ai-providers';
import SEOHead from '../components/SEOHead';
import ApiKeyInput from '../components/ai/ApiKeyInput';

export default function Settings() {
  const { user, profile, updateProfile } = useAuth();
  const { language, t } = useLanguage();
  const { getApiKey, setApiKey, hasApiKey } = useApiKeys();
  const toast = useToast();

  const [activeTab, setActiveTab] = useState('apiKeys');
  const [displayName, setDisplayName] = useState(profile?.display_name || user?.user_metadata?.full_name || '');
  const [saving, setSaving] = useState(false);

  async function handleSaveProfile() {
    setSaving(true);
    try {
      await updateProfile({ display_name: displayName });
      toast.success(t('settings.saved'));
    } catch (err) {
      toast.error((err as Error).message || 'Error saving profile');
    }
    setSaving(false);
  }

  const tabs = [
    { id: 'apiKeys', icon: 'fa-key', label: t('settings.apiKeys') },
    { id: 'profile', icon: 'fa-user', label: t('settings.profile') },
    { id: 'usage', icon: 'fa-chart-simple', label: t('settings.usage') },
  ];

  return (
    <div className="settings-page">
      <SEOHead title={t('settings.title')} path="/settings" />
      <div className="container">
        <h1>{t('settings.title')}</h1>
        <div className="settings-layout">
          <nav>
            <ul className="settings-nav">
              {tabs.map(tab => (
                <li key={tab.id}>
                  <button
                    className={`settings-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <i className={`fa-solid ${tab.icon}`} /> {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            {activeTab === 'apiKeys' && (
              <div className="settings-card">
                <h2>{t('settings.apiKeys')}</h2>
                <p className="settings-card-desc">{t('settings.apiKeysDesc')}</p>
                <div className="api-key-cards">
                  {PROVIDER_LIST.map(provider => (
                    <div key={provider.id} className="api-key-card">
                      <div className="api-key-provider">
                        <span className="dot" style={{ background: provider.color }} />
                        <span>{provider.name}</span>
                      </div>
                      <ApiKeyInput
                        value={getApiKey(provider.id)}
                        onChange={(val) => setApiKey(provider.id, val)}
                        placeholder={provider.keyPrefix ? `${provider.keyPrefix}...` : 'API Key'}
                      />
                      <span className={`api-key-status ${hasApiKey(provider.id) ? 'valid' : 'empty'}`}>
                        {hasApiKey(provider.id) ? '✓ Set' : 'Empty'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="settings-card">
                <h2>{t('settings.profile')}</h2>
                <p className="settings-card-desc">{t('settings.profileDesc')}</p>
                <div className="profile-avatar-section">
                  <div className="profile-avatar">
                    {profile?.avatar_url ? <img src={profile.avatar_url} alt="" /> : (displayName || 'U').charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '4px' }}>{displayName || 'User'}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>{user?.email}</div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">{t('auth.name')}</label>
                  <input className="form-input" value={displayName} onChange={e => setDisplayName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">{t('auth.email')}</label>
                  <input className="form-input" value={user?.email || ''} disabled />
                </div>
                <div className="settings-btn-group">
                  <button className="btn btn-primary btn-sm" onClick={handleSaveProfile} disabled={saving}>
                    {saving ? '...' : t('settings.save')}
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div className="settings-card">
                <h2>{t('settings.usage')}</h2>
                <p className="settings-card-desc">{t('settings.usageDesc')}</p>
                <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-light)' }}>
                  <p style={{ fontSize: '40px', marginBottom: '12px', opacity: 0.15 }}><i className="fa-solid fa-chart-simple" /></p>
                  <p>{language === 'ko' ? '사용 이력은 AI 도구를 사용한 후 표시됩니다.' : 'Usage history will appear after using AI tools.'}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
