import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import type { ReactElement } from 'react';

const CATEGORIES = [
  { id: 'ai-basics', nameKo: 'AI 기초', nameEn: 'AI Basics', icon: 'fa-robot' },
  { id: 'document', nameKo: '문서 자동화', nameEn: 'Document Automation', icon: 'fa-file-lines' },
  { id: 'admin', nameKo: '행정 업무', nameEn: 'Administration', icon: 'fa-briefcase' },
  { id: 'prompt', nameKo: '프롬프트 엔지니어링', nameEn: 'Prompt Engineering', icon: 'fa-keyboard' },
];

const MATERIALS: Record<string, { titleKo: string; titleEn: string; descKo: string; descEn: string; items: { nameKo: string; nameEn: string; type: string }[] }> = {
  'ai-basics': {
    titleKo: 'AI 기초',
    titleEn: 'AI Basics',
    descKo: '생성형 AI의 기본 개념과 주요 서비스를 학습합니다.',
    descEn: 'Learn the fundamentals of generative AI and major services.',
    items: [
      { nameKo: '생성형 AI 개요', nameEn: 'Generative AI Overview', type: 'guide' },
      { nameKo: 'ChatGPT 활용법', nameEn: 'How to Use ChatGPT', type: 'guide' },
      { nameKo: 'Claude 활용법', nameEn: 'How to Use Claude', type: 'guide' },
      { nameKo: 'Gemini 활용법', nameEn: 'How to Use Gemini', type: 'guide' },
      { nameKo: 'AI 서비스 비교', nameEn: 'AI Service Comparison', type: 'reference' },
    ],
  },
  'document': {
    titleKo: '문서 자동화',
    titleEn: 'Document Automation',
    descKo: 'AI를 활용한 문서 작성 및 자동화를 학습합니다.',
    descEn: 'Learn document creation and automation with AI.',
    items: [
      { nameKo: '공문서 작성 가이드', nameEn: 'Official Document Guide', type: 'guide' },
      { nameKo: '회의록 정리 템플릿', nameEn: 'Meeting Minutes Template', type: 'template' },
      { nameKo: 'PPT 자동 생성', nameEn: 'Auto PPT Generation', type: 'guide' },
      { nameKo: 'Excel 수식 자동화', nameEn: 'Excel Formula Automation', type: 'guide' },
    ],
  },
  'admin': {
    titleKo: '행정 업무',
    titleEn: 'Administration',
    descKo: '행정 업무에 AI를 효과적으로 활용하는 방법을 학습합니다.',
    descEn: 'Learn how to effectively use AI in administrative tasks.',
    items: [
      { nameKo: '인사 문서 자동화', nameEn: 'HR Document Automation', type: 'guide' },
      { nameKo: '근태 데이터 분석', nameEn: 'Attendance Data Analysis', type: 'guide' },
      { nameKo: '업무 워크플로우 설계', nameEn: 'Workflow Design', type: 'guide' },
      { nameKo: '프롬프트 라이브러리', nameEn: 'Prompt Library', type: 'template' },
    ],
  },
  'prompt': {
    titleKo: '프롬프트 엔지니어링',
    titleEn: 'Prompt Engineering',
    descKo: '효과적인 프롬프트 작성 기법을 학습합니다.',
    descEn: 'Learn effective prompt writing techniques.',
    items: [
      { nameKo: 'RCF 프레임워크', nameEn: 'RCF Framework', type: 'guide' },
      { nameKo: '역할 기반 프롬프트', nameEn: 'Role-Based Prompting', type: 'guide' },
      { nameKo: '단계적 프롬프트', nameEn: 'Step-by-Step Prompting', type: 'guide' },
      { nameKo: '프롬프트 실전 예시', nameEn: 'Prompt Examples', type: 'reference' },
    ],
  },
};

export default function LearningMaterials(): ReactElement {
  const { category: routeCategory } = useParams<{ category: string }>();
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(routeCategory || 'ai-basics');

  const currentMaterial = MATERIALS[activeCategory];

  return (
    <>
      <SEOHead
        title={language === 'ko' ? '학습자료' : 'Learning Materials'}
        path="/materials"
      />

      <section className="page-header">
        <div className="container">
          <h1>{language === 'ko' ? '학습자료' : 'Learning Materials'}</h1>
          <p>{language === 'ko'
            ? '교육에 필요한 자료를 카테고리별로 제공합니다.'
            : 'Educational materials organized by category.'}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="materials-layout">
            {/* Sidebar */}
            <aside className="materials-sidebar">
              <nav>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    className={`sidebar-item ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <i className={`fa-solid ${cat.icon}`} />
                    {language === 'ko' ? cat.nameKo : cat.nameEn}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="materials-content">
              {currentMaterial && (
                <>
                  <h2>{language === 'ko' ? currentMaterial.titleKo : currentMaterial.titleEn}</h2>
                  <p className="materials-desc">
                    {language === 'ko' ? currentMaterial.descKo : currentMaterial.descEn}
                  </p>
                  <div className="materials-list">
                    {currentMaterial.items.map((item, i) => (
                      <div key={i} className="material-item">
                        <div className="material-icon">
                          <i className={`fa-solid ${item.type === 'guide' ? 'fa-book' : item.type === 'template' ? 'fa-file-alt' : 'fa-bookmark'}`} />
                        </div>
                        <div className="material-info">
                          <h4>{language === 'ko' ? item.nameKo : item.nameEn}</h4>
                          <span className="material-type">{item.type}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
