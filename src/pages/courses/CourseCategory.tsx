import { useState } from 'react';
import { useParams, useNavigate, Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import { getProgramById, PROGRAMS } from '../../data/courses';
import { MATERIALS } from '../../data/materials';
import type { ReactElement } from 'react';

export default function CourseCategory(): ReactElement {
  const { category } = useParams<{ category: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [matOpen, setMatOpen] = useState(true);

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
  const materials = MATERIALS.filter((m) => m.categoryId === program.id);

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

      {/* Curriculum with left sidebar */}
      <section className="section">
        <div className="container course-layout">
          {/* ── 왼쪽 과정 메뉴 ── */}
          <aside className="course-sidebar">
            <div className="course-sidebar-inner">
              <div className="course-sidebar-title" style={{ borderColor: program.color }}>
                <i className={`fa-solid ${program.icon}`} style={{ color: program.color }} />
                <span>{language === 'ko' ? program.nameKo : program.nameEn}</span>
              </div>

              <nav className="course-sidebar-nav">
                <span className="course-sidebar-label">{language === 'ko' ? '과정 메뉴' : 'Course Menu'}</span>
                <NavLink end to={`/courses/${program.id}`} className="course-sidebar-link active">
                  <i className="fa-solid fa-list-check" /> {language === 'ko' ? '커리큘럼' : 'Curriculum'}
                </NavLink>

                {/* 학습자료 — 드롭다운으로 해당 과목 자료 연결 */}
                <button
                  type="button"
                  className={`course-sidebar-link course-sidebar-toggle${matOpen ? ' open' : ''}`}
                  onClick={() => setMatOpen(!matOpen)}
                  aria-expanded={matOpen}
                >
                  <i className="fa-solid fa-folder-open" /> {language === 'ko' ? '학습자료' : 'Materials'}
                  <i className="fa-solid fa-chevron-down course-sidebar-chevron" />
                </button>
                {matOpen && (
                  <div className="course-sidebar-sublist">
                    {materials.map((m) => (
                      <Link
                        key={m.id}
                        to={`/materials/${program.id}?m=${m.id}`}
                        className="course-sidebar-link sub"
                      >
                        <i className="fa-regular fa-file-lines" /> {language === 'ko' ? m.nameKo : m.nameEn}
                      </Link>
                    ))}
                    <Link to={`/materials/${program.id}`} className="course-sidebar-link sub more">
                      <i className="fa-solid fa-arrow-right" /> {language === 'ko' ? '학습자료 전체보기' : 'View all materials'}
                    </Link>
                  </div>
                )}

                <NavLink to={`/community/${program.id}`} className="course-sidebar-link">
                  <i className="fa-solid fa-comments" /> {language === 'ko' ? '게시판' : 'Board'}
                </NavLink>
              </nav>

              <nav className="course-sidebar-nav">
                <span className="course-sidebar-label">{language === 'ko' ? '커리큘럼 바로가기' : 'Jump to'}</span>
                {program.curriculum.map((day) => (
                  <a key={day.day} href={`#day-${day.day}`} className="course-sidebar-link sub">
                    <i className="fa-regular fa-calendar" /> {day.badge} — {day.theme.split(' — ')[0]}
                  </a>
                ))}
              </nav>

              <nav className="course-sidebar-nav">
                <span className="course-sidebar-label">{language === 'ko' ? '다른 과정' : 'Other Programs'}</span>
                {PROGRAMS.filter((p) => p.id !== program.id).map((p) => (
                  <Link key={p.id} to={`/courses/${p.id}`} className="course-sidebar-link sub">
                    <i className={`fa-solid ${p.icon}`} /> {language === 'ko' ? p.nameKo : p.nameEn}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* ── 오른쪽 본문(기존 커리큘럼) ── */}
          <div className="course-content">
          {program.curriculum.map((day) => (
            <div key={day.day} id={`day-${day.day}`} className="curriculum-day">
              <div className="curriculum-day-head">
                <span className="curriculum-day-badge" style={{ background: program.color }}>{day.badge}</span>
                <div>
                  <h2 className="curriculum-day-title">{day.theme}</h2>
                  <span className="curriculum-day-sub">8{language === 'ko' ? '시간 · 8교시(50분)' : 'h · 8 periods (50min)'}</span>
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
        </div>
      </section>
    </>
  );
}
