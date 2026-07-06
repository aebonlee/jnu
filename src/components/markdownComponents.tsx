import CodeBlock from './CodeBlock';
import TipBox from './TipBox';

/**
 * 공통 ReactMarkdown 렌더러
 * - 코드블록(``` ```): 복사 버튼 포함 CodeBlock으로 렌더
 * - 인라인 코드: inline-code
 * - 표: 반응형 래퍼, 인용문: TipBox, 링크: 외부 새 탭
 */
const markdownComponents = {
  // CodeBlock이 자체 컨테이너를 가지므로, ReactMarkdown 기본 <pre>(마크다운 pre 박스)로 이중 래핑되지 않게 언래핑
  pre({ children }: any) {
    return <>{children}</>;
  },
  code({ inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    const text = String(children).replace(/\n$/, '');
    if (!inline && match) return <CodeBlock code={text} language={match[1]} />;
    if (!inline && !match && String(children).includes('\n')) return <CodeBlock code={text} language="" />;
    return <code className="inline-code" {...props}>{children}</code>;
  },
  table({ children }: any) {
    return <div className="table-responsive"><table>{children}</table></div>;
  },
  blockquote({ children }: any) {
    return <TipBox type="tip">{children}</TipBox>;
  },
  a({ href, children, ...props }: any) {
    if (href && href.startsWith('/')) return <a href={href} {...props}>{children}</a>;
    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  },
};

export default markdownComponents;
