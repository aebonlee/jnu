import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useSubscriptionContext } from '../contexts/SubscriptionContext';
import { useCart } from '../contexts/CartContext';
import { useToast } from '../contexts/ToastContext';
import { getPlans } from '../utils/subscription';
import useAOS from '../hooks/useAOS';
import SEOHead from '../components/SEOHead';
import type { Plan } from '../types';
import '../styles/pricing.css';

export default function Pricing() {
  const { language, t } = useLanguage();
  const { isLoggedIn } = useAuth();
  const { isSubscribed, planSlug } = useSubscriptionContext();
  const { addItem } = useCart();
  const toast = useToast();
  const navigate = useNavigate();
  const isKo = language === 'ko';
  useAOS();

  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlans()
      .then(setPlans)
      .catch(() => toast.error(isKo ? '요금제를 불러올 수 없습니다.' : 'Failed to load plans.'))
      .finally(() => setLoading(false));
  }, []);

  function handleSubscribe(plan: Plan) {
    if (!isLoggedIn) {
      toast.warning(isKo ? '로그인이 필요합니다.' : 'Please log in first.');
      navigate('/login');
      return;
    }

    if (plan.slug === 'free') {
      navigate('/settings');
      return;
    }

    // Add subscription product to cart and go to checkout
    const subscriptionProduct = {
      id: Date.now(),
      slug: `subscription-${plan.slug}`,
      category: 'subscription',
      title: `${plan.name_ko} 요금제 (${plan.duration_days}일)`,
      titleEn: `${plan.name_en} Plan (${plan.duration_days} days)`,
      description: plan.description_ko || '',
      descriptionEn: plan.description_en || '',
      price: plan.price,
      imageUrl: '',
      isSoldOut: false,
      isActive: true,
      sortOrder: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    addItem(subscriptionProduct);
    navigate('/checkout');
  }

  const formatPrice = (price: number) => {
    if (price === 0) return isKo ? '무료' : 'Free';
    return isKo ? `${price.toLocaleString()}원/월` : `₩${price.toLocaleString()}/mo`;
  };

  const getPlanIcon = (slug: string) => {
    switch (slug) {
      case 'free': return 'fa-gift';
      case 'basic': return 'fa-bolt';
      case 'premium': return 'fa-crown';
      default: return 'fa-star';
    }
  };

  return (
    <>
      <SEOHead title={t('pricing.title')} path="/pricing" />
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('pricing.title')}</h1>
          <p className="page-subtitle">{t('pricing.subtitle')}</p>
        </div>
      </section>

      <section className="pricing-section">
        <div className="container">
          {loading ? (
            <div className="text-center" style={{ padding: '60px 0' }}>
              <div className="loading-spinner" />
            </div>
          ) : (
            <div className="pricing-grid" data-aos="fade-up">
              {plans.map((plan) => {
                const isCurrent = isSubscribed && planSlug === plan.slug;
                const isFree = plan.slug === 'free';
                return (
                  <div
                    key={plan.id}
                    className={`pricing-card ${plan.slug === 'premium' ? 'featured' : ''} ${isCurrent ? 'current' : ''}`}
                  >
                    {plan.slug === 'premium' && (
                      <div className="pricing-badge">{isKo ? '추천' : 'Recommended'}</div>
                    )}
                    <div className="pricing-icon">
                      <i className={`fa-solid ${getPlanIcon(plan.slug)}`} />
                    </div>
                    <h3 className="pricing-name">{isKo ? plan.name_ko : plan.name_en}</h3>
                    <p className="pricing-desc">{isKo ? plan.description_ko : plan.description_en}</p>
                    <div className="pricing-price">{formatPrice(plan.price)}</div>

                    <ul className="pricing-features">
                      {isFree ? (
                        <>
                          <li><i className="fa-solid fa-check" /> {isKo ? '개인 API 키 사용' : 'Use your own API keys'}</li>
                          <li><i className="fa-solid fa-check" /> {isKo ? '모든 AI 도구 접근' : 'Access all AI tools'}</li>
                          <li><i className="fa-solid fa-check" /> {isKo ? '무제한 사용' : 'Unlimited usage'}</li>
                        </>
                      ) : (
                        <>
                          <li><i className="fa-solid fa-check" /> {isKo ? '공유 API 키 제공' : 'Shared API keys provided'}</li>
                          <li><i className="fa-solid fa-check" /> {isKo ? '모든 AI 도구 접근' : 'Access all AI tools'}</li>
                          {plan.monthly_token_limit ? (
                            <li><i className="fa-solid fa-check" /> {isKo ? `월 ${plan.monthly_token_limit.toLocaleString()} 토큰` : `${plan.monthly_token_limit.toLocaleString()} tokens/month`}</li>
                          ) : (
                            <li><i className="fa-solid fa-check" /> {isKo ? '무제한 토큰' : 'Unlimited tokens'}</li>
                          )}
                          {plan.daily_request_limit && (
                            <li><i className="fa-solid fa-check" /> {isKo ? `일 ${plan.daily_request_limit}회 요청` : `${plan.daily_request_limit} requests/day`}</li>
                          )}
                          <li><i className="fa-solid fa-check" /> {isKo ? '우선 지원' : 'Priority support'}</li>
                        </>
                      )}
                    </ul>

                    <button
                      className={`btn pricing-btn ${plan.slug === 'premium' ? 'btn-primary' : 'btn-outline'}`}
                      onClick={() => handleSubscribe(plan)}
                      disabled={isCurrent}
                    >
                      {isCurrent
                        ? (isKo ? '현재 플랜' : 'Current Plan')
                        : isFree
                          ? (isKo ? 'API 키 설정' : 'Set API Keys')
                          : (isKo ? '구독하기' : 'Subscribe')}
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          <div className="pricing-faq" data-aos="fade-up" data-aos-delay="200">
            <h2>{isKo ? '자주 묻는 질문' : 'FAQ'}</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>{isKo ? '개인 API 키란?' : 'What is a personal API key?'}</h4>
                <p>{isKo ? 'OpenAI, Claude, Gemini 등의 서비스에서 직접 발급받은 키로, Settings에서 입력하여 사용합니다.' : 'A key you obtain directly from OpenAI, Claude, or Gemini, entered in Settings.'}</p>
              </div>
              <div className="faq-item">
                <h4>{isKo ? '공유 키는 어떻게 다른가요?' : 'How are shared keys different?'}</h4>
                <p>{isKo ? '요금제를 구독하면 관리자가 제공하는 API 키를 자동으로 사용합니다. 별도의 키 발급이 불필요합니다.' : 'When subscribed, you automatically use admin-provided API keys. No need to get your own.'}</p>
              </div>
              <div className="faq-item">
                <h4>{isKo ? '키 우선순위는?' : 'Key priority?'}</h4>
                <p>{isKo ? '개인 키가 있으면 개인 키를 우선 사용합니다. 개인 키가 없으면 구독 공유 키를 사용합니다.' : 'Personal keys take priority. Shared keys are used only when no personal key exists.'}</p>
              </div>
              <div className="faq-item">
                <h4>{isKo ? '환불은 가능한가요?' : 'Can I get a refund?'}</h4>
                <p>{isKo ? '결제 후 7일 이내 사용량이 없는 경우 환불이 가능합니다. 자세한 내용은 고객센터로 문의하세요.' : 'Refunds are available within 7 days if no usage occurred. Contact support for details.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
