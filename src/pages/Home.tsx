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
  const stat3 = useCountUp(70);

  const stats = [
    { value: stat0.count, label: language === 'ko' ? '전문 과정' : 'Programs', suffix: '' },
    { value: stat1.count, label: language === 'ko' ? '과정당 시간' : 'Hours / Program', suffix: 'h' },
    { value: stat2.count, label: language === 'ko' ? '실습 교시' : 'Practice Sessions', suffix: '' },
    { value: stat3.count, label: language === 'ko' ? '실습 사례' : 'Practice Cases', suffix: '+' },
  ];

  const isKo = language === 'ko';
  const marqueeWords = (isKo
    ? '전남대GPT · 프롬프트 · 데이터분석 · 논문작성 · 예산회계 · 연구지원 · 실습 · 평가하기'
    : 'CNU GPT · Prompts · Data Analysis · Writing · Budget · Research · Practice · Evaluation'
  ).split(' · ');

  return (
    <>
      <SEOHead title={t('site.home.title')} />

      {/* Hero — Editorial */}
      <section className="hero-ed">
        <div className="hero-ed-bg" aria-hidden="true" />
        <div className="container">
          <div className="hero-ed-grid">
            <div className="hero-ed-main">
              <div className="hero-ed-eyebrow" data-aos="fade-up">
                <span>{isKo ? '전남대학교 · 2026 · 전남대GPT 실습 교육' : 'Chonnam National University · 2026 · CNU GPT'}</span>
              </div>
              <h1 className="hero-ed-title" data-aos="fade-up" data-aos-delay="50">
                {isKo ? '전남대GPT로 배우는' : 'Learn with CNU GPT'}<br />
                <span className="accent">{isKo ? '생성형 AI 실무' : 'Hands-on Generative AI'}</span><br />
                <span className="accent">{isKo ? '4개 과정 · 16시간' : '4 Programs · 16 Hours'}</span>
              </h1>
              <p className="hero-ed-lead" data-aos="fade-up" data-aos-delay="100">
                {isKo
                  ? '전남대GPT(타임리GPT 기반)로 배우는 실습 중심 생성형 AI 교육. 기초·심화부터 데이터분석·논문작성·예산회계·연구지원까지, 각 과정 2일 16시간 동안 예시 프롬프트로 직접 따라 하고 결과를 평가하며 익힙니다.'
                  : 'Hands-on generative AI training on CNU GPT (TimelyGPT-based). From foundations to data analysis, writing, budgeting, and research — 2 days / 16 hours per program, with ready-to-use prompts and evaluation practice.'}
              </p>
              <div className="hero-ed-actions" data-aos="fade-up" data-aos-delay="150">
                <button className="btn btn-primary btn-lg" onClick={() => navigate('/courses')}>
                  <i className="fa-solid fa-graduation-cap" /> {isKo ? '교육과정 보기' : 'View Courses'}
                </button>
                <button className="btn btn-accent btn-lg" onClick={() => navigate('/prompt-eval')}>
                  <i className="fa-solid fa-clipboard-check" /> {isKo ? '프롬프트 실습·평가' : 'Prompt Lab'}
                </button>
              </div>
            </div>

            <aside className="hero-ed-side" data-aos="fade-left" data-aos-delay="100">
              <div className="hero-ed-metrics">
                <div className="hero-metric">
                  <div className="hero-metric-num accent">4</div>
                  <div className="hero-metric-label">{isKo ? '전문 과정' : 'Programs'}</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-num">16<span className="small">h</span></div>
                  <div className="hero-metric-label">{isKo ? '과정당 시간' : 'Hours each'}</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-num">2<span className="small">{isKo ? '일' : 'd'}</span></div>
                  <div className="hero-metric-label">{isKo ? '과정당 일수' : 'Days each'}</div>
                </div>
                <div className="hero-metric">
                  <div className="hero-metric-num accent">80<span className="small">%</span></div>
                  <div className="hero-metric-label">{isKo ? '실습 비율' : 'Hands-on'}</div>
                </div>
              </div>
              <div className="hero-ed-card">
                <div className="hero-ed-card-eyebrow">2026 · CNU GPT Programs</div>
                <div className="hero-ed-card-title">{isKo ? '4개 과정 · 각 2일 16시간' : 'Four Programs · 16h each'}</div>
                <ul className="hero-ed-card-list">
                  {COURSE_CATEGORIES.map((p) => (
                    <li key={p.id}>
                      <span className="hero-card-name">{isKo ? p.nameKo : p.nameEn}</span>
                      <span className="hero-card-dur">{p.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="marquee-group">
              {marqueeWords.map((w, j) => (
                <span key={`${i}-${j}`}>{w}<span className="dot">&#10022;</span></span>
              ))}
            </span>
          ))}
        </div>
      </div>

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
