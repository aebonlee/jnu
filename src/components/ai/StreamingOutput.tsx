interface StreamingOutputProps { content: string; isStreaming: boolean; }

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import markdownComponents from '../markdownComponents';

export default function StreamingOutput({ content, isStreaming }: StreamingOutputProps) {
  return (
    <div className={`streaming-output ${isStreaming ? 'streaming-cursor' : ''}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents as any}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
