import GuidePage from '../components/GuidePage';
import aboutPurpose from '../data/about-purpose';
import aboutInstructorAebon from '../data/about-instructor-aebon';
import aboutInstructorJdy from '../data/about-instructor-jdy';
import type { ReactElement } from 'react';

const dataFiles = [aboutPurpose, aboutInstructorAebon, aboutInstructorJdy];

export default function About(): ReactElement {
  return (
    <GuidePage
      seoTitle="About"
      seoTitleEn="About"
      seoDescription="전남대학교 생성형 AI 교육 — 만든 취지와 강사(이애본·정동엽) 소개"
      path="/about"
      dataFiles={dataFiles}
    />
  );
}
