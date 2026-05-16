import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import { MATERIAL_CATEGORIES, MATERIALS } from '../../data/materials';
import type { ReactElement } from 'react';

export default function LearningMaterials(): ReactElement {
  const { category: routeCategory } = useParams<{ category: string }>();
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(routeCategory || MATERIAL_CATEGORIES[0]?.id || 'ai-basics');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const currentCategory = MATERIAL_CATEGORIES.find(c => c.id === activeCategory);
  const categoryItems = MATERIALS.filter(m => m.categoryId === activeCategory);
  const selectedItem = selectedItemId ? MATERIALS.find(m => m.id === selectedItemId) : null;

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSelectedItemId(null);
  };

  const handleItemClick = (itemId: string) => {
    setSelectedItemId(itemId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedItemId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                {MATERIAL_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    className={`sidebar-item ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    <i className={`fa-solid ${cat.icon}`} />
                    {language === 'ko' ? cat.nameKo : cat.nameEn}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="materials-content">
              {selectedItem ? (
                <>
                  <button className="btn btn-outline btn-back" onClick={handleBackToList}>
                    <i className="fa-solid fa-arrow-left" />
                    {language === 'ko' ? '목록으로 돌아가기' : 'Back to list'}
                  </button>
                  <h2>{language === 'ko' ? selectedItem.nameKo : selectedItem.nameEn}</h2>
                  <span className="material-type">{selectedItem.type}</span>
                  <div className="markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                      {language === 'ko' ? selectedItem.contentKo : selectedItem.contentEn}
                    </ReactMarkdown>
                  </div>
                </>
              ) : currentCategory ? (
                <>
                  <h2>{language === 'ko' ? currentCategory.nameKo : currentCategory.nameEn}</h2>
                  <p className="materials-desc">
                    {language === 'ko' ? currentCategory.descKo : currentCategory.descEn}
                  </p>
                  <div className="materials-list">
                    {categoryItems.map(item => (
                      <div
                        key={item.id}
                        className="material-item"
                        onClick={() => handleItemClick(item.id)}
                        style={{ cursor: 'pointer' }}
                      >
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
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
