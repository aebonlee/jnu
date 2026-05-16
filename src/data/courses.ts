export interface Course {
  id: string;
  category: 'professor' | 'staff' | 'assistant';
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  duration: string;
  level: string;
  topics: string[];
  icon: string;
}

export const COURSE_CATEGORIES = [
  {
    id: 'professor',
    nameKo: '교수자 맞춤 과정',
    nameEn: 'Faculty Courses',
    descKo: '대학 교수자를 위한 AI 교수학습 혁신 과정',
    descEn: 'AI teaching innovation courses for university faculty',
    icon: 'fa-chalkboard-user',
    color: '#0046C8',
  },
  {
    id: 'staff',
    nameKo: '직원 맞춤 과정',
    nameEn: 'Staff Courses',
    descKo: '대학 직원을 위한 AI 업무 자동화 과정',
    descEn: 'AI workflow automation courses for university staff',
    icon: 'fa-briefcase',
    color: '#00855A',
  },
  {
    id: 'assistant',
    nameKo: '조교 맞춤 과정',
    nameEn: 'Teaching Assistant Courses',
    descKo: '조교를 위한 AI 활용 학습 지원 과정',
    descEn: 'AI-powered learning support courses for teaching assistants',
    icon: 'fa-user-graduate',
    color: '#8B1AC8',
  },
];

export const COURSES: Course[] = [
  // 교수자 과정
  {
    id: 'prof-syllabus',
    category: 'professor',
    title: 'AI 기반 강의계획서 설계',
    titleEn: 'AI-Based Syllabus Design',
    description: 'AI를 활용하여 학습 성과 기반의 체계적인 강의계획서를 설계합니다.',
    descriptionEn: 'Design outcome-based syllabi systematically using AI.',
    duration: '4시간',
    level: '기초',
    topics: ['CLO 설계', '블룸 분류학', 'AI 강의계획서 생성'],
    icon: 'fa-calendar-days',
  },
  {
    id: 'prof-rubric',
    category: 'professor',
    title: 'AI 활용 평가 루브릭 개발',
    titleEn: 'AI-Powered Rubric Development',
    description: '공정하고 체계적인 평가 기준표를 AI로 개발합니다.',
    descriptionEn: 'Develop fair and systematic assessment rubrics with AI.',
    duration: '3시간',
    level: '기초',
    topics: ['평가 기준 설계', '루브릭 유형', 'AI 루브릭 생성'],
    icon: 'fa-table-cells',
  },
  {
    id: 'prof-feedback',
    category: 'professor',
    title: 'AI 피드백 & 학생 평가',
    titleEn: 'AI Feedback & Student Assessment',
    description: '개인화된 피드백과 루브릭 기반 학생 평가를 AI로 자동화합니다.',
    descriptionEn: 'Automate personalized feedback and rubric-based student assessment with AI.',
    duration: '4시간',
    level: '중급',
    topics: ['피드백 자동화', '과제 평가', '학습 분석'],
    icon: 'fa-comments',
  },
  {
    id: 'prof-prompt',
    category: 'professor',
    title: '교수자를 위한 프롬프트 엔지니어링',
    titleEn: 'Prompt Engineering for Faculty',
    description: '교수학습에 최적화된 프롬프트 작성 기법을 학습합니다.',
    descriptionEn: 'Learn prompt writing techniques optimized for teaching.',
    duration: '3시간',
    level: '기초',
    topics: ['프롬프트 기초', 'RCF 프레임워크', '교수학습 프롬프트'],
    icon: 'fa-keyboard',
  },
  // 직원 과정
  {
    id: 'staff-doc',
    category: 'staff',
    title: 'AI 기반 문서 작성 자동화',
    titleEn: 'AI Document Automation',
    description: '공문서, 회의록, 보고서 등 행정 문서를 AI로 자동 작성합니다.',
    descriptionEn: 'Automate official documents, meeting minutes, and reports with AI.',
    duration: '4시간',
    level: '기초',
    topics: ['공문서 작성', '회의록 정리', '보고서 생성'],
    icon: 'fa-file-lines',
  },
  {
    id: 'staff-excel',
    category: 'staff',
    title: 'AI 활용 Excel 데이터 분석',
    titleEn: 'AI-Powered Excel Analysis',
    description: 'AI를 활용하여 Excel 수식 생성, 피벗 테이블, 데이터 시각화를 수행합니다.',
    descriptionEn: 'Generate Excel formulas, pivot tables, and visualizations using AI.',
    duration: '4시간',
    level: '중급',
    topics: ['수식 자동 생성', '피벗 테이블', '차트 시각화'],
    icon: 'fa-table',
  },
  {
    id: 'staff-ppt',
    category: 'staff',
    title: 'AI 활용 PPT 보고자료 제작',
    titleEn: 'AI PPT Report Creation',
    description: 'Gamma, Canva 등 AI 도구로 전문적인 프레젠테이션을 제작합니다.',
    descriptionEn: 'Create professional presentations using AI tools like Gamma and Canva.',
    duration: '3시간',
    level: '기초',
    topics: ['Gamma AI', 'Canva', '데이터 시각화'],
    icon: 'fa-presentation-screen',
  },
  {
    id: 'staff-workflow',
    category: 'staff',
    title: '업무 자동화 워크플로우 설계',
    titleEn: 'Workflow Automation Design',
    description: '반복 업무를 분석하고 AI 기반 자동화 워크플로우를 설계합니다.',
    descriptionEn: 'Analyze repetitive tasks and design AI-based automation workflows.',
    duration: '3시간',
    level: '중급',
    topics: ['업무 분석', '자동화 설계', 'ROI 계산'],
    icon: 'fa-diagram-project',
  },
  // 조교 과정
  {
    id: 'ta-grading',
    category: 'assistant',
    title: 'AI 활용 채점 & 피드백',
    titleEn: 'AI-Assisted Grading & Feedback',
    description: '루브릭 기반 과제 채점과 개인화 피드백을 AI로 지원합니다.',
    descriptionEn: 'Support rubric-based grading and personalized feedback with AI.',
    duration: '3시간',
    level: '기초',
    topics: ['과제 평가', '채점 기준', '피드백 작성'],
    icon: 'fa-check-double',
  },
  {
    id: 'ta-material',
    category: 'assistant',
    title: 'AI 학습자료 제작',
    titleEn: 'AI Learning Material Creation',
    description: '수업 보조 자료, 퀴즈, 연습 문제를 AI로 제작합니다.',
    descriptionEn: 'Create supplementary materials, quizzes, and exercises with AI.',
    duration: '4시간',
    level: '기초',
    topics: ['퀴즈 생성', '보조 자료', '과제 설계'],
    icon: 'fa-file-pen',
  },
  {
    id: 'ta-prompt',
    category: 'assistant',
    title: '조교를 위한 AI 활용법',
    titleEn: 'AI Tools for Teaching Assistants',
    description: '조교 업무에 AI를 효과적으로 활용하는 방법을 학습합니다.',
    descriptionEn: 'Learn to effectively use AI in teaching assistant duties.',
    duration: '3시간',
    level: '기초',
    topics: ['프롬프트 기초', 'AI 도구 활용', '업무 효율화'],
    icon: 'fa-wand-magic-sparkles',
  },
];

export function getCoursesByCategory(category: string) {
  return COURSES.filter(c => c.category === category);
}

export function getCategoryById(id: string) {
  return COURSE_CATEGORIES.find(c => c.id === id);
}
