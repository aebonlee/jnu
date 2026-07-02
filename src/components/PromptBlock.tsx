import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { ReactElement } from 'react';

/**
 * 프롬프트 표시 블록 — 복사 버튼 + 자동 줄바꿈(pre-wrap)
 */
export default function PromptBlock({ text }: { text: string }): ReactElement {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const fallbackCopy = () => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch { /* ignore */ }
    document.body.removeChild(ta);
  };

  const handleCopy = () => {
    // 피드백은 즉시 표시(clipboard Promise await에 묶이지 않게), 복사는 백그라운드로
    try {
      const p = navigator.clipboard?.writeText(text);
      if (p && typeof p.catch === 'function') p.catch(() => fallbackCopy());
      else fallbackCopy();
    } catch {
      fallbackCopy();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="prompt-block">
      <button
        type="button"
        className={`prompt-copy-btn${copied ? ' copied' : ''}`}
        onClick={handleCopy}
        aria-label={language === 'ko' ? '프롬프트 복사' : 'Copy prompt'}
      >
        <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`} />
        {copied ? (language === 'ko' ? '복사됨' : 'Copied') : (language === 'ko' ? '복사' : 'Copy')}
      </button>
      <pre className="practice-prompt"><code>{text}</code></pre>
    </div>
  );
}
