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
  description: '전남대학교 교수자·직원·조교를 위한 생성형 AI 교육 플랫폼',
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

  colors: [
    { name: 'blue', color: '#0046C8' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#8B1AC8' },
    { name: 'orange', color: '#C87200' },
  ],

  menuItems: [
    {
      labelKey: 'nav.education',
      path: '/courses',
      activePath: '/courses',
      dropdown: [
        { path: '/courses/professor', labelKey: 'site.nav.professor' },
        { path: '/courses/staff', labelKey: 'site.nav.staff' },
        { path: '/courses/assistant', labelKey: 'site.nav.assistant' },
      ]
    },
    { path: '/materials', labelKey: 'site.nav.materials' },
    {
      labelKey: 'site.nav.aiTools',
      path: '/tools',
      activePath: '/tools',
      dropdown: [
        { path: '/tools/syllabus', labelKey: 'site.nav.syllabus' },
        { path: '/tools/rubric', labelKey: 'site.nav.rubric' },
        { path: '/tools/assignment', labelKey: 'site.nav.assignment' },
        { path: '/tools/feedback', labelKey: 'site.nav.feedback' },
        { path: '/tools/evaluator', labelKey: 'site.nav.evaluator' },
      ]
    },
    { path: '/prompt-eval/practice', labelKey: 'site.nav.promptPractice' },
    { path: '/pricing', labelKey: 'pricing.title' },
    { path: '/community', labelKey: 'nav.community' },
  ],

  footerLinks: [
    { path: '/courses', labelKey: 'nav.education' },
    { path: '/tools', labelKey: 'site.nav.aiTools' },
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
