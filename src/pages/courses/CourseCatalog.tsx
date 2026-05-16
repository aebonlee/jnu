import { useLanguage } from '../../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import { COURSE_CATEGORIES, COURSES } from '../../data/courses';
import { useState } from 'react';
import type { ReactElement } from 'react';

export default function CourseCatalog(): ReactElement {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = activeTab === 'all'
    ? COURSES
    : COURSES.filter(c => c.category === activeTab);

  return (
    <>
      <SEOHead
        title={language === 'ko' ? '교육과정' : 'Courses'}
        path="/courses"
      />

      <section className="page-header">
        <div className="container">
          <h1>{language === 'ko' ? '교육과정' : 'Courses'}</h1>
          <p>{language === 'ko'
            ? '전남대학교 교수자·직원·조교를 위한 맞춤형 AI 교육 과정'
            : 'Customized AI education courses for CNU faculty, staff, and TAs'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Category Tabs */}
          <div className="course-tabs">
            <button
              className={`course-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              {language === 'ko' ? '전체' : 'All'}
            </button>
            {COURSE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`course-tab ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                <i className={`fa-solid ${cat.icon}`} />
                {language === 'ko' ? cat.nameKo : cat.nameEn}
              </button>
            ))}
          </div>

          {/* Course Cards */}
          <div className="course-grid">
            {filteredCourses.map(course => {
              const cat = COURSE_CATEGORIES.find(c => c.id === course.category);
              return (
                <div key={course.id} className="course-card">
                  <div className="course-card-header" style={{ borderTopColor: cat?.color || '#0046C8' }}>
                    <div className="course-icon" style={{ color: cat?.color || '#0046C8' }}>
                      <i className={`fa-solid ${course.icon}`} />
                    </div>
                    <span className="course-badge" style={{ background: cat?.color || '#0046C8' }}>
                      {language === 'ko' ? cat?.nameKo : cat?.nameEn}
                    </span>
                  </div>
                  <div className="course-card-body">
                    <h3>{language === 'ko' ? course.title : course.titleEn}</h3>
                    <p>{language === 'ko' ? course.description : course.descriptionEn}</p>
                    <div className="course-meta">
                      <span><i className="fa-regular fa-clock" /> {course.duration}</span>
                      <span><i className="fa-solid fa-signal" /> {course.level}</span>
                    </div>
                    <div className="course-topics">
                      {course.topics.map(topic => (
                        <span key={topic} className="topic-tag">{topic}</span>
                      ))}
                    </div>
                  </div>
                  <div className="course-card-footer">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => navigate(`/courses/${course.category}`)}
                    >
                      {language === 'ko' ? '상세 보기' : 'View Details'} <i className="fa-solid fa-arrow-right" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
