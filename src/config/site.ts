/**
 * ============================================================
 *  CNU (전남대학교 생성형 AI 교육) 사이트 설정
 * ============================================================
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'cnu',
  name: 'CNU AI Education',
  nameKo: '전남대학교 생성형 AI 교육',
  description: '전남대GPT(타임리GPT 기반)로 배우는 전남대학교 실습 중심 생성형 AI 교육 — 기초·심화, 데이터분석&논문작성, 데이터분석&예산회계, 연구&실험지원 4개 과정',
  url: 'https://cnu.dreamitbiz.com',
  dbPrefix: 'cnu_',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'CNU', className: 'brand-dream' },
      { text: ' AI', className: 'brand-it' },
      { text: ' -Edu', className: 'brand-biz' }
    ]
  },

  themeColor: '#0046C8',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    publisherNumber: '제2026-000026호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: {
    shop: true,
    community: true,
    search: true,
    auth: true,
    license: false,
  },

  // 기본 컬러셋 = cnu(전남대 다크 그린). 나머지는 후보 컬러셋
  colors: [
    { name: 'cnu', color: '#00553F' },       // 전남대 그린 (기본)
    { name: 'academic', color: '#C8A04A' }, // 네이비+골드
    { name: 'research', color: '#14B8A6' },  // 딥네이비+틸
    { name: 'vibe', color: '#6D28D9' },      // 모던 바이올렛
  ],

  // 4개 과정명을 각각 상단 메뉴(링크)로 — 과정 내부는 좌측 사이드바로 이동
  menuItems: [
    { path: '/courses/foundation', activePath: '/courses/foundation', labelKey: 'site.nav.progFoundation' },
    { path: '/courses/research-writing', activePath: '/courses/research-writing', labelKey: 'site.nav.progResearchWriting' },
    { path: '/courses/data-budget', activePath: '/courses/data-budget', labelKey: 'site.nav.progDataBudget' },
    { path: '/courses/research-lab', activePath: '/courses/research-lab', labelKey: 'site.nav.progResearchLab' },
    { path: '/prompt-eval', activePath: '/prompt-eval', labelKey: 'site.nav.promptPractice' },
    { path: '/recommended', labelKey: 'site.nav.recommended' },
  ],

  footerLinks: [
    { path: '/courses', labelKey: 'nav.education' },
    { path: '/prompt-eval', labelKey: 'site.nav.promptPractice' },
    { path: '/community', labelKey: 'nav.community' },
    { path: '/about', labelKey: 'nav.about' },
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: '대학교육 AI', url: 'https://university.dreamitbiz.com' },
    { name: '교수학습 AI 도구', url: 'https://teaching.dreamitbiz.com' },
    { name: 'AI 프롬프트 가이드', url: 'https://ai-prompt.dreamitbiz.com' },
  ]
};

export default site;

/** AI 도구 정의 */
export interface AITool {
  id: string;
  path: string;
  icon: string;
  nameKo: string;
  nameEn: string;
  descKo: string;
  descEn: string;
}

export const AI_TOOLS: AITool[] = [
  {
    id: 'syllabus',
    path: '/tools/syllabus',
    icon: 'fa-calendar-days',
    nameKo: '강의계획서 생성기',
    nameEn: 'Syllabus Generator',
    descKo: 'AI를 활용하여 체계적인 강의계획서를 자동 생성합니다.',
    descEn: 'Generate structured syllabi automatically using AI.',
  },
  {
    id: 'rubric',
    path: '/tools/rubric',
    icon: 'fa-table-cells',
    nameKo: '루브릭 생성기',
    nameEn: 'Rubric Builder',
    descKo: '평가 기준표를 체계적으로 설계하고 생성합니다.',
    descEn: 'Design and generate structured assessment rubrics.',
  },
  {
    id: 'assignment',
    path: '/tools/assignment',
    icon: 'fa-file-pen',
    nameKo: '과제 생성기',
    nameEn: 'Assignment Generator',
    descKo: '난이도와 유형에 맞는 과제를 자동 생성합니다.',
    descEn: 'Auto-generate assignments by difficulty and type.',
  },
  {
    id: 'feedback',
    path: '/tools/feedback',
    icon: 'fa-comments',
    nameKo: '피드백 생성기',
    nameEn: 'Feedback Generator',
    descKo: '학생에게 개인화된 피드백을 자동 생성합니다.',
    descEn: 'Generate personalized feedback for students.',
  },
  {
    id: 'evaluator',
    path: '/tools/evaluator',
    icon: 'fa-check-double',
    nameKo: '학생 과제 평가',
    nameEn: 'Student Evaluator',
    descKo: '루브릭 기반으로 학생 과제를 AI가 평가합니다.',
    descEn: 'AI evaluates student work based on rubrics.',
  },
];
