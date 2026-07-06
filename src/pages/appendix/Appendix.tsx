import GuidePage from '../../components/GuidePage';
import glossary from './data/glossary';
import tips from './data/tips';
import resources from './data/resources';
import claude100 from './data/claude100';
import chatgptCodes from './data/chatgptCodes';
import chatgptGuide from './data/chatgptGuide';
import '../../styles/practice.css';
import type { ReactElement } from 'react';

export default function Appendix(): ReactElement {
  return (
    <GuidePage
      seoTitle="부록"
      seoTitleEn="Appendix"
      seoDescription="용어 해설, 실전 팁, 클로드·ChatGPT 활용 팁 — 교육과 더불어 공부할 부록 자료"
      path="/appendix"
      dataFiles={[glossary, tips, resources, claude100, chatgptCodes, chatgptGuide]}
    />
  );
}
