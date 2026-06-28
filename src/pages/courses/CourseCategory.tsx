import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import { getProgramById } from '../../data/courses';
import type { ReactElement } from 'react';

export default function CourseCategory(): ReactElement {
  const { category } = useParams<{ category: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const program = getProgramById(category || '');

  if (!program) {
    return (
      <div className="container" style={{ padding: '120px 40px', textAlign: 'center' }}>
        <h2>{language === 'ko' ? '과정을 찾을 수 없습니다.' : 'Program not found.'}</h2>
        <button className="btn btn-primary" onClick={() => navigate('/courses')}>
          {language === 'ko' ? '교육과정으로 돌아가기' : 'Back to Courses'}
        </button>
      </div>
    );
  }

  const totalSessions = program.curriculum.reduce((s, d) => s + d.sessions.length, 0);

  return (
    <>
      <SEOHead
        title={language === 'ko' ? program.nameKo : program.nameEn}
        path={`/courses/${category}`}
      />

      {/* Program header */}
      <section className="program-hero" style={{ borderBottom: `3px solid ${program.color}` }}>
        <div className="container">
          <div className="program-hero-inner">
            <div className="program-hero-icon" style={{ background: program.color }}>
              <i className={`fa-solid ${program.icon}`} />
            </div>
            <div className="program-hero-text">
              <div className="eyebrow">Program {String(program.order).padStart(2, '0')} · {program.duration}</div>
              <h1>{language === 'ko' ? program.nameKo : program.nameEn}</h1>
              <p className="program-hero-tagline">{program.tagline}</p>
              <p className="program-hero-desc">{language === 'ko' ? program.descKo : program.descEn}</p>
              <div className="program-hero-meta">
                <span><i className="fa-solid fa-user-check" /> {program.audience}</span>
                <span><i className="fa-solid fa-layer-group" /> {totalSessions}{language === 'ko' ? '개 실습 교시' : ' sessions'}</span>
                <span><i className="fa-solid fa-signal" /> {program.level}</span>
              </div>
            </div>
          </div>

          <div className="program-platform-note">
            <i className="fa-solid fa-shield-halved" />
            <span>{language === 'ko'
              ? '본 과정은 교내 전용 플랫폼 전남대GPT(타임리GPT 기반)에서 진행되며, 모든 실습은 예시 프롬프트로 직접 따라 할 수 있습니다.'
              : 'This program runs on the campus platform CNU GPT (TimelyGPT-based); every practice includes a ready-to-use prompt.'}</span>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section">
        <div className="container">
          {program.curriculum.map((day) => (
            <div key={day.day} className="curriculum-day">
              <div className="curriculum-day-head">
                <span className="curriculum-day-badge" style={{ background: program.color }}>{day.badge}</span>
                <div>
                  <h2 className="curriculum-day-title">{day.theme}</h2>
                  <span className="curriculum-day-sub">8{language === 'ko' ? '시간 · 4교시' : 'h · 4 sessions'}</span>
                </div>
              </div>

              <div className="curriculum-sessions">
                {day.sessions.map((session, si) => (
                  <div key={si} className="session-card">
                    <div className="session-time">
                      <span className="session-period" style={{ color: program.color }}>{session.period}</span>
                      <span className="session-clock">{session.time}</span>
                    </div>
                    <div className="session-body">
                      <h3 className="session-title">{session.title}</h3>
                      <p className="session-goal"><i className="fa-solid fa-bullseye" /> {session.goal}</p>

                      <div className="session-topics">
                        {session.topics.map((topic) => (
                          <span key={topic} className="session-topic">{topic}</span>
                        ))}
                      </div>

                      <div className="session-practices">
                        <div className="session-practices-head">
                          <i className="fa-solid fa-laptop-code" /> {language === 'ko' ? '실습 사례' : 'Practice'}
                        </div>
                        {session.practices.map((pc, pi) => (
                          <div key={pi} className="practice-item">
                            <div className="practice-scenario">
                              <span className="practice-num" style={{ background: program.color }}>{pi + 1}</span>
                              {pc.scenario}
                            </div>
                            <pre className="practice-prompt"><code>{pc.prompt}</code></pre>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="program-cta">
            <button className="btn btn-accent btn-lg" onClick={() => navigate('/register')}>
              <i className="fa-solid fa-user-plus" /> {language === 'ko' ? '수강 신청하기' : 'Enroll Now'}
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/courses')}>
              <i className="fa-solid fa-arrow-left" /> {language === 'ko' ? '전체 과정 보기' : 'All Programs'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
