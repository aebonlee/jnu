import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import { getCoursesByCategory, getCategoryById } from '../../data/courses';
import type { ReactElement } from 'react';

export default function CourseCategory(): ReactElement {
  const { category } = useParams<{ category: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const cat = getCategoryById(category || '');
  const courses = getCoursesByCategory(category || '');

  if (!cat) {
    return (
      <div className="container" style={{ padding: '120px 40px', textAlign: 'center' }}>
        <h2>{language === 'ko' ? '카테고리를 찾을 수 없습니다.' : 'Category not found.'}</h2>
        <button className="btn btn-primary" onClick={() => navigate('/courses')}>
          {language === 'ko' ? '교육과정으로 돌아가기' : 'Back to Courses'}
        </button>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={language === 'ko' ? cat.nameKo : cat.nameEn}
        path={`/courses/${category}`}
      />

      <section className="page-header" style={{ borderBottom: `3px solid ${cat.color}` }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <div className="category-icon-lg" style={{ background: cat.color }}>
              <i className={`fa-solid ${cat.icon}`} />
            </div>
            <div>
              <h1 style={{ margin: 0 }}>{language === 'ko' ? cat.nameKo : cat.nameEn}</h1>
              <p style={{ margin: 0, opacity: 0.8 }}>{language === 'ko' ? cat.descKo : cat.descEn}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="course-grid">
            {courses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-card-header" style={{ borderTopColor: cat.color }}>
                  <div className="course-icon" style={{ color: cat.color }}>
                    <i className={`fa-solid ${course.icon}`} />
                  </div>
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
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button className="btn btn-outline" onClick={() => navigate('/courses')}>
              <i className="fa-solid fa-arrow-left" /> {language === 'ko' ? '전체 과정 보기' : 'View All Courses'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
