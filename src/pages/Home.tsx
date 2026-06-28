import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { AI_TOOLS } from '../config/site';
import { COURSE_CATEGORIES } from '../data/courses';
import useCountUp from '../hooks/useCountUp';
import useAOS from '../hooks/useAOS';
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  useAOS();

  const stat0 = useCountUp(4);
  const stat1 = useCountUp(16);
  const stat2 = useCountUp(32);
  const stat3 = useCountUp(65);

  const stats = [
    { value: stat0.count, label: language === 'ko' ? '전문 과정' : 'Programs', suffix: '' },
    { value: stat1.count, label: language === 'ko' ? '과정당 시간' : 'Hours / Program', suffix: 'h' },
    { value: stat2.count, label: language === 'ko' ? '실습 교시' : 'Practice Sessions', suffix: '' },
    { value: stat3.count, label: language === 'ko' ? '실습 사례' : 'Practice Cases', suffix: '+' },
  ];

  return (
    <>
      <SEOHead title={t('site.home.title')} />

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <h1 className="hero-title" data-aos="fade-up">
            {t('site.home.heroTitle')}<br />
            <span className="hero-highlight">{t('site.home.heroHighlight')}</span>
          </h1>
          <p className="hero-desc" data-aos="fade-up" data-aos-delay="100">
            {t('site.home.heroDesc')}
          </p>
          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="200">
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/courses')}>
              <i className="fa-solid fa-graduation-cap" /> {t('site.home.heroCTA')}
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => navigate('/tools')}>
              <i className="fa-solid fa-wand-magic-sparkles" /> {t('site.home.heroSecondaryCTA')}
            </button>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>{t('site.home.coursesTitle')}</h2>
            <p>{t('site.home.coursesDesc')}</p>
          </div>
          <div className="course-category-grid">
            {COURSE_CATEGORIES.map((cat, i) => (
              <div
                key={cat.id}
                className="course-category-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                onClick={() => navigate(`/courses/${cat.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="category-icon" style={{ background: cat.color }}>
                  <i className={`fa-solid ${cat.icon}`} />
                </div>
                <span className="category-duration"><i className="fa-regular fa-clock" /> {cat.duration}</span>
                <h3>{language === 'ko' ? cat.nameKo : cat.nameEn}</h3>
                <p className="category-tagline">{cat.tagline}</p>
                <p>{language === 'ko' ? cat.descKo : cat.descEn}</p>
                <div className="category-tags">
                  {cat.highlights.slice(0, 3).map((h) => (
                    <span key={h} className="category-tag">{h}</span>
                  ))}
                </div>
                <span className="category-link">
                  {language === 'ko' ? '커리큘럼 보기' : 'View Curriculum'} <i className="fa-solid fa-arrow-right" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>{t('site.home.toolsTitle')}</h2>
            <p>{t('site.home.toolsDesc')}</p>
          </div>
          <div className="ai-tools-grid">
            {AI_TOOLS.map((tool, i) => (
              <div
                key={tool.id}
                className="ai-tool-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
                onClick={() => navigate(tool.path)}
                style={{ cursor: 'pointer' }}
              >
                <div className="tool-icon">
                  <i className={`fa-solid ${tool.icon}`} />
                </div>
                <h4>{language === 'ko' ? tool.nameKo : tool.nameEn}</h4>
                <p>{language === 'ko' ? tool.descKo : tool.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section stats-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>{t('site.home.statsTitle')}</h2>
          </div>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="stat-value">{stat.value}{stat.suffix}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>{t('site.home.ctaTitle')}</h2>
            <p>{t('site.home.ctaDesc')}</p>
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/register')}>
              <i className="fa-solid fa-user-plus" /> {t('site.home.ctaButton')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
