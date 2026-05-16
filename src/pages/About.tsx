import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import type { ReactElement } from 'react';

export default function About(): ReactElement {
  const { language } = useLanguage();

  return (
    <>
      <SEOHead
        title={language === 'ko' ? '소개' : 'About'}
        path="/about"
      />

      <section className="page-header">
        <div className="container">
          <h1>{language === 'ko' ? '전남대학교 생성형 AI 교육' : 'CNU Generative AI Education'}</h1>
          <p>{language === 'ko'
            ? '교수자·직원·조교를 위한 맞춤형 AI 교육 프로그램'
            : 'Customized AI education program for faculty, staff, and TAs'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h2><i className="fa-solid fa-bullseye" /> {language === 'ko' ? '교육 목표' : 'Educational Goals'}</h2>
              <ul>
                <li>{language === 'ko' ? '생성형 AI의 원리와 활용법 이해' : 'Understanding generative AI principles and applications'}</li>
                <li>{language === 'ko' ? 'AI 기반 교수학습 혁신 역량 강화' : 'Strengthening AI-based teaching innovation capabilities'}</li>
                <li>{language === 'ko' ? '실무 중심의 AI 도구 활용 능력 배양' : 'Developing practical AI tool utilization skills'}</li>
                <li>{language === 'ko' ? '프롬프트 엔지니어링 역량 개발' : 'Developing prompt engineering competencies'}</li>
              </ul>
            </div>

            <div className="about-card">
              <h2><i className="fa-solid fa-users" /> {language === 'ko' ? '교육 대상' : 'Target Audience'}</h2>
              <div className="about-targets">
                <div className="target-item">
                  <i className="fa-solid fa-chalkboard-user" />
                  <h4>{language === 'ko' ? '교수자' : 'Faculty'}</h4>
                  <p>{language === 'ko' ? '강의계획서, 루브릭, 과제 설계 등 교수학습 혁신' : 'Syllabus, rubric, assignment design for teaching innovation'}</p>
                </div>
                <div className="target-item">
                  <i className="fa-solid fa-briefcase" />
                  <h4>{language === 'ko' ? '직원' : 'Staff'}</h4>
                  <p>{language === 'ko' ? '문서 자동화, 데이터 분석, 업무 효율화' : 'Document automation, data analysis, workflow optimization'}</p>
                </div>
                <div className="target-item">
                  <i className="fa-solid fa-user-graduate" />
                  <h4>{language === 'ko' ? '조교' : 'Teaching Assistants'}</h4>
                  <p>{language === 'ko' ? 'AI 채점, 피드백 생성, 학습자료 제작' : 'AI grading, feedback generation, material creation'}</p>
                </div>
              </div>
            </div>

            <div className="about-card">
              <h2><i className="fa-solid fa-wand-magic-sparkles" /> {language === 'ko' ? 'AI 도구' : 'AI Tools'}</h2>
              <p>{language === 'ko'
                ? '5가지 AI 교수학습 도구를 활용하여 교수학습 업무를 혁신합니다.'
                : 'Innovate teaching tasks with 5 AI teaching tools.'}</p>
              <div className="about-tools">
                <span className="about-tool-tag"><i className="fa-solid fa-calendar-days" /> {language === 'ko' ? '강의계획서 생성기' : 'Syllabus Generator'}</span>
                <span className="about-tool-tag"><i className="fa-solid fa-table-cells" /> {language === 'ko' ? '루브릭 생성기' : 'Rubric Builder'}</span>
                <span className="about-tool-tag"><i className="fa-solid fa-file-pen" /> {language === 'ko' ? '과제 생성기' : 'Assignment Generator'}</span>
                <span className="about-tool-tag"><i className="fa-solid fa-comments" /> {language === 'ko' ? '피드백 생성기' : 'Feedback Generator'}</span>
                <span className="about-tool-tag"><i className="fa-solid fa-check-double" /> {language === 'ko' ? '학생 과제 평가' : 'Student Evaluator'}</span>
              </div>
            </div>

            <div className="about-card">
              <h2><i className="fa-solid fa-user-tie" /> {language === 'ko' ? '강사 정보' : 'Instructor'}</h2>
              <div className="instructor-info">
                <h4>{language === 'ko' ? '이애본 박사 (Ph.D Aebon Lee)' : 'Dr. Aebon Lee (Ph.D)'}</h4>
                <p>{language === 'ko' ? 'DreamIT Biz 대표' : 'CEO of DreamIT Biz'}</p>
                <ul>
                  <li>{language === 'ko' ? '경기대학교 경영정보학과 겸임교수' : 'Adjunct Professor at Kyonggi University'}</li>
                  <li>{language === 'ko' ? 'AI·디지털 교육 전문가' : 'AI & Digital Education Expert'}</li>
                  <li>{language === 'ko' ? '84개 교육 사이트 운영' : 'Operating 84 education sites'}</li>
                </ul>
                <div className="instructor-contact">
                  <p><i className="fa-solid fa-envelope" /> aebon@dreamitbiz.com</p>
                  <p><i className="fa-solid fa-globe" /> www.dreamitbiz.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
