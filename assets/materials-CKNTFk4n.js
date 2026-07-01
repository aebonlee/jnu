const e=[{id:"foundation",nameKo:"기초·심화 자료",nameEn:"Foundations",icon:"fa-seedling",descKo:"생성형 AI 도구와 프롬프트 작성 기법 학습자료입니다.",descEn:"Materials on generative AI tools and prompt-writing techniques."},{id:"research-writing",nameKo:"데이터분석·논문작성 자료",nameEn:"Data Analysis & Writing",icon:"fa-chart-line",descKo:"데이터 분석과 문서·논문 작성에 필요한 학습자료입니다.",descEn:"Materials for data analysis and academic/document writing."},{id:"data-budget",nameKo:"데이터분석·예산회계 자료",nameEn:"Data Analysis & Budget",icon:"fa-coins",descKo:"엑셀·데이터 처리와 예산·회계 실무 학습자료입니다.",descEn:"Materials for spreadsheet/data work and budgeting & accounting."},{id:"research-lab",nameKo:"연구·실험지원 자료",nameEn:"Research & Experiment",icon:"fa-flask",descKo:"연구·실험 과정을 지원하는 업무 설계·프롬프트 학습자료입니다.",descEn:"Materials supporting the research and experiment workflow."}],t=[{id:"ai-overview",categoryId:"foundation",nameKo:"생성형 AI 개요",nameEn:"Generative AI Overview",type:"guide",contentKo:`## 생성형 AI란?

생성형 AI(Generative AI)는 텍스트, 이미지, 코드, 음악 등 새로운 콘텐츠를 생성할 수 있는 인공지능 기술입니다. 기존 AI가 분류나 예측에 초점을 맞췄다면, 생성형 AI는 **창작**에 초점을 맞춥니다.

### 핵심 기술: 대규모 언어 모델(LLM)

생성형 AI의 핵심은 **대규모 언어 모델(Large Language Model)**입니다.

- **학습 방식**: 인터넷의 방대한 텍스트 데이터를 학습하여 언어의 패턴과 구조를 이해
- **작동 원리**: 입력된 텍스트(프롬프트)를 바탕으로 다음에 올 가장 적절한 단어를 예측하여 문장 생성
- **트랜스포머 아키텍처**: 2017년 Google이 발표한 "Attention Is All You Need" 논문이 기반

### 주요 AI 모델

| 모델 | 개발사 | 특징 |
|------|--------|------|
| GPT-4o | OpenAI | 범용 최강, 멀티모달, 코드 생성 우수 |
| Claude 3.5 | Anthropic | 긴 문맥(200K), 정확한 분석, 안전성 |
| Gemini 1.5 | Google | Google 서비스 통합, 100만 토큰 문맥 |
| Copilot | Microsoft | Office 365 통합, 업무 생산성 |

### 교육 분야 활용 사례

1. **강의 설계**: AI로 학습 목표, 강의계획서, 평가 루브릭 생성
2. **자료 제작**: 퀴즈, 시험문제, 보충 학습자료 자동 생성
3. **학생 피드백**: 과제에 대한 개인화된 피드백 자동 작성
4. **연구 보조**: 논문 요약, 문헌 검토, 데이터 분석 지원
5. **행정 자동화**: 공문서 초안, 회의록 정리, 보고서 작성

### 생성형 AI 발전 타임라인

- **2017년**: 트랜스포머 아키텍처 발표 (Google)
- **2020년**: GPT-3 출시 (OpenAI)
- **2022년 11월**: ChatGPT 출시 - AI 대중화의 시작
- **2023년 3월**: GPT-4 출시, Claude 출시
- **2023년 12월**: Gemini 출시 (Google)
- **2024년**: GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro 등 경쟁 심화
- **2025년**: AI 에이전트 시대 본격화

### 주의사항

- **환각(Hallucination)**: AI가 사실이 아닌 정보를 생성할 수 있음 → 반드시 검증 필요
- **저작권**: AI 생성물의 저작권 문제는 아직 법적으로 명확하지 않음
- **개인정보**: 민감한 개인정보를 AI에 입력하지 않도록 주의
- **학술 윤리**: AI 활용 시 출처 명시 및 학교 정책 준수 필요`,contentEn:`## What is Generative AI?

Generative AI refers to artificial intelligence that can create new content such as text, images, code, and music. While traditional AI focused on classification and prediction, generative AI focuses on **creation**.

### Core Technology: Large Language Models (LLM)

- **Training**: Learns patterns from massive text data across the internet
- **How it works**: Predicts the most appropriate next word based on input (prompt)
- **Transformer architecture**: Based on Google's 2017 "Attention Is All You Need" paper

### Key AI Models

| Model | Company | Strengths |
|-------|---------|-----------|
| GPT-4o | OpenAI | General purpose, multimodal, strong code generation |
| Claude 3.5 | Anthropic | Long context (200K), accurate analysis, safety |
| Gemini 1.5 | Google | Google integration, 1M token context |
| Copilot | Microsoft | Office 365 integration, productivity |

### Use Cases in Education

1. **Course Design**: Generate learning objectives, syllabi, rubrics
2. **Material Creation**: Auto-generate quizzes, exams, supplementary materials
3. **Student Feedback**: Personalized feedback on assignments
4. **Research Support**: Paper summaries, literature reviews, data analysis
5. **Administration**: Draft official documents, meeting minutes, reports

### Important Considerations

- **Hallucination**: AI may generate false information — always verify
- **Copyright**: Legal status of AI-generated content is still evolving
- **Privacy**: Never input sensitive personal data into AI
- **Academic integrity**: Follow institutional policies on AI use`},{id:"chatgpt-guide",categoryId:"foundation",nameKo:"ChatGPT 활용법",nameEn:"How to Use ChatGPT",type:"guide",contentKo:`## ChatGPT 시작하기

ChatGPT는 OpenAI가 개발한 대화형 AI 서비스로, 전 세계에서 가장 널리 사용되는 생성형 AI입니다.

### 가입 및 설정

1. **회원가입**: [chat.openai.com](https://chat.openai.com) 접속 → Google/Microsoft/Apple 계정으로 간편 가입
2. **요금제 선택**:
   - **Free**: GPT-4o mini 무제한, GPT-4o 제한적 사용
   - **Plus ($20/월)**: GPT-4o 확장, DALL-E, 고급 데이터 분석
   - **Team ($25/월)**: 팀 협업, 관리자 콘솔, 더 높은 사용량
3. **기본 설정**: 설정 → 한국어 인터페이스 선택, 커스텀 지시사항 설정

### 핵심 기능

#### 1. 텍스트 대화
\`\`\`
프롬프트 예시:
"대학교 1학년 대상 '인공지능 개론' 수업의 15주차 강의계획서를 작성해주세요.
각 주차별로 주제, 학습목표, 수업활동, 과제를 포함해주세요."
\`\`\`

#### 2. 이미지 생성 (DALL-E)
- 수업 자료용 다이어그램, 인포그래픽 생성
- 프레젠테이션 삽입 이미지 제작

#### 3. 코드 인터프리터 (고급 데이터 분석)
- Excel/CSV 파일 업로드 → 자동 분석 및 시각화
- 성적 데이터 통계 분석, 설문조사 결과 차트 생성
- Python 코드 자동 실행

#### 4. GPTs (맞춤형 AI)
- 특정 목적에 맞는 맞춤형 ChatGPT 생성
- 예: "강의계획서 전문가", "학술 논문 리뷰어"

### 교수자를 위한 활용 팁

1. **커스텀 지시사항 설정**: "나는 전남대학교 교수이며, 한국어로 응답해주세요. 교육학적 관점을 반영해주세요."
2. **대화 기록 정리**: 유용한 대화는 즐겨찾기로 저장
3. **파일 활용**: 강의자료 PDF를 업로드하여 요약/퀴즈 생성
4. **반복 프롬프트**: 자주 사용하는 프롬프트는 메모장에 저장해두고 재활용

### GPT-4o vs GPT-4o mini 비교

| 항목 | GPT-4o | GPT-4o mini |
|------|--------|-------------|
| 성능 | 최상위 | 우수 |
| 속도 | 빠름 | 매우 빠름 |
| 비용 | Plus 필요 | 무료 |
| 이미지 인식 | O | O |
| 추천 용도 | 복잡한 분석/작문 | 간단한 질의/브레인스토밍 |`,contentEn:`## Getting Started with ChatGPT

ChatGPT is OpenAI's conversational AI service and the most widely used generative AI globally.

### Setup
1. Sign up at [chat.openai.com](https://chat.openai.com)
2. **Pricing**: Free (GPT-4o mini), Plus ($20/mo for GPT-4o, DALL-E), Team ($25/mo)
3. Set language preferences and custom instructions

### Key Features
1. **Text Conversations** — Course planning, content creation, Q&A
2. **Image Generation (DALL-E)** — Diagrams, infographics for lectures
3. **Code Interpreter** — Upload Excel/CSV for automatic analysis
4. **GPTs** — Create custom ChatGPT for specific purposes

### Tips for Educators
- Set custom instructions with your role context
- Upload lecture PDFs for summarization and quiz generation
- Save frequently used prompts for reuse
- Use GPT-4o for complex tasks, GPT-4o mini for quick queries`},{id:"claude-guide",categoryId:"foundation",nameKo:"Claude 활용법",nameEn:"How to Use Claude",type:"guide",contentKo:`## Claude 소개

Claude는 Anthropic이 개발한 AI 어시스턴트로, **안전성**과 **정확성**에 중점을 둡니다. 특히 긴 문서 분석과 학술 작업에 강점을 보입니다.

### 가입 및 요금

1. **가입**: [claude.ai](https://claude.ai) 접속 → Google/이메일 가입
2. **요금제**:
   - **Free**: Claude 3.5 Sonnet 제한적 사용
   - **Pro ($20/월)**: 5배 사용량, Claude 3.5 Opus, Projects, Artifacts
   - **Team ($25/월)**: 팀 협업, 관리자 기능

### Claude만의 핵심 기능

#### 1. Projects (프로젝트)
- 관련 문서와 지시사항을 하나의 프로젝트로 묶어 관리
- 예: "2024-2학기 인공지능개론" 프로젝트에 강의계획서, 교재 PDF, 평가 기준 등을 업로드
- 프로젝트 내 대화는 해당 문맥을 자동 참조

\`\`\`
프로젝트 활용 예시:
1. 프로젝트 생성: "전남대 AI교육 2024"
2. 문서 업로드: 강의계획서.pdf, 학생목록.csv, 교재요약.pdf
3. 커스텀 지시: "교수자 관점에서 답변하고, 블룸 분류학을 반영하세요"
4. 대화 시작: "이번 학기 중간고사 문제를 출제해주세요"
\`\`\`

#### 2. Artifacts (아티팩트)
- AI가 생성한 문서, 코드, 차트를 별도 패널에 실시간 표시
- 마크다운 문서, HTML 페이지, React 컴포넌트 등 다양한 형식 지원
- 생성물을 바로 복사하거나 다운로드 가능

#### 3. 긴 문맥 처리 (200K 토큰)
- 약 500페이지 분량의 문서를 한 번에 분석 가능
- 논문 전문 분석, 교재 전체 요약, 대량 데이터 처리에 적합
- ChatGPT 대비 약 1.5배 긴 문맥 지원

### 학술 작업에서의 강점

1. **논문 분석**: 논문 PDF 업로드 → 핵심 주장, 방법론, 한계점 요약
2. **루브릭 설계**: 블룸 분류학 기반의 체계적 평가 기준 생성
3. **피드백 작성**: 학생 과제를 업로드하면 건설적이고 구체적인 피드백 생성
4. **번역/교정**: 학술 논문의 영한/한영 번역 및 교정

### ChatGPT와의 비교

| 항목 | Claude | ChatGPT |
|------|--------|---------|
| 문맥 길이 | 200K 토큰 | 128K 토큰 |
| 학술 정확도 | 매우 높음 | 높음 |
| 이미지 생성 | X | O (DALL-E) |
| 프로젝트 관리 | Projects | GPTs |
| 코드 실행 | Artifacts | Code Interpreter |
| 웹 검색 | O (제한적) | O |`,contentEn:`## Introduction to Claude

Claude is Anthropic's AI assistant focused on **safety** and **accuracy**, with strengths in long document analysis and academic work.

### Key Features
1. **Projects**: Bundle related documents and instructions into a managed project
2. **Artifacts**: Real-time display of generated documents, code, charts in a side panel
3. **Long Context (200K tokens)**: Analyze ~500 pages at once

### Academic Strengths
- Paper analysis: Upload PDFs for key argument summaries
- Rubric design: Bloom's taxonomy-based assessment criteria
- Feedback writing: Constructive feedback on student assignments
- Translation/proofreading: Academic paper translation

### Claude vs ChatGPT
| Feature | Claude | ChatGPT |
|---------|--------|---------|
| Context | 200K tokens | 128K tokens |
| Image Gen | No | Yes (DALL-E) |
| Projects | Projects | GPTs |
| Code Exec | Artifacts | Code Interpreter |`},{id:"gemini-guide",categoryId:"foundation",nameKo:"Gemini 활용법",nameEn:"How to Use Gemini",type:"guide",contentKo:`## Google Gemini 소개

Gemini는 Google DeepMind가 개발한 멀티모달 AI로, **Google 생태계와의 완벽한 통합**이 최대 장점입니다.

### 가입 및 요금

1. **가입**: [gemini.google.com](https://gemini.google.com) → Google 계정으로 바로 사용
2. **요금제**:
   - **Free**: Gemini 1.5 Flash 기본 사용
   - **Advanced ($19.99/월)**: Gemini 1.5 Pro, 100만 토큰, Google One 2TB 포함

### 핵심 기능

#### 1. Google Workspace 통합
- **Gmail**: 이메일 요약, 답장 초안 자동 생성
- **Google Docs**: 문서 내에서 직접 AI 활용 (초안 작성, 교정, 요약)
- **Google Sheets**: 수식 자동 생성, 데이터 분석, 차트 추천
- **Google Slides**: 프레젠테이션 자동 생성, 디자인 추천
- **Google Meet**: 실시간 회의 요약, 액션 아이템 추출

\`\`\`
활용 예시: Google Docs에서
1. 빈 문서 열기
2. "Help me write" 클릭
3. "전남대학교 AI 교육 프로그램 제안서를 작성해줘" 입력
4. AI가 초안 생성 → 수정/보완
\`\`\`

#### 2. 멀티모달 기능
- **이미지 인식**: 수업 자료 사진을 촬영하여 텍스트 변환
- **PDF 분석**: Google Drive의 PDF를 직접 분석
- **비디오 이해**: YouTube 동영상 내용 요약 (Gemini Advanced)

#### 3. Google 검색 통합
- 실시간 웹 정보를 반영한 최신 답변
- 출처 링크 자동 제공 → 검증 용이

### 대학 행정에서의 활용

1. **공지사항 작성**: Gmail에서 학생/교직원 대상 공지 초안 생성
2. **회의 준비**: Google Calendar 일정에서 안건 자동 정리
3. **데이터 분석**: Sheets에 성적 데이터 → 분포 분석, 차트 자동 생성
4. **프레젠테이션**: Slides에서 교육 보고 자료 자동 생성

### Gemini의 강점과 한계

**강점**:
- Google 서비스 사용자에게 가장 편리한 접근성
- 100만 토큰 문맥으로 초대량 문서 처리 가능
- 실시간 검색 통합으로 최신 정보 반영
- Google One 2TB 클라우드 저장소 포함 (Advanced)

**한계**:
- 한국어 성능이 ChatGPT/Claude 대비 다소 부족
- 이미지 생성 기능이 제한적
- Workspace 통합은 유료 플랜에서만 완전 지원`,contentEn:`## Google Gemini Overview

Gemini is Google DeepMind's multimodal AI with seamless Google ecosystem integration.

### Key Features
1. **Google Workspace Integration**: Gmail, Docs, Sheets, Slides, Meet
2. **Multimodal**: Image recognition, PDF analysis, video understanding
3. **Google Search Integration**: Real-time web information with source links

### University Administration Use Cases
- Draft announcements in Gmail
- Auto-summarize meetings from Calendar
- Analyze grade data in Sheets
- Generate presentation slides automatically

### Strengths & Limitations
**Strengths**: Best for Google users, 1M token context, real-time search
**Limitations**: Korean performance slightly behind GPT/Claude, limited image generation`},{id:"ai-comparison",categoryId:"foundation",nameKo:"AI 서비스 비교",nameEn:"AI Service Comparison",type:"reference",contentKo:`## 주요 AI 서비스 종합 비교

### 기본 정보 비교

| 항목 | ChatGPT | Claude | Gemini | Copilot |
|------|---------|--------|--------|---------|
| **개발사** | OpenAI | Anthropic | Google | Microsoft |
| **최신 모델** | GPT-4o | Claude 3.5 Sonnet | Gemini 1.5 Pro | GPT-4 기반 |
| **무료 사용** | O (제한) | O (제한) | O (제한) | O (제한) |
| **유료 가격** | $20/월 | $20/월 | $19.99/월 | $20/월 |
| **한국어 성능** | ★★★★★ | ★★★★★ | ★★★★☆ | ★★★★☆ |

### 기능 비교

| 기능 | ChatGPT | Claude | Gemini | Copilot |
|------|---------|--------|--------|---------|
| **문맥 길이** | 128K | 200K | 1M | 128K |
| **이미지 생성** | O (DALL-E) | X | O (제한) | O (DALL-E) |
| **이미지 인식** | O | O | O | O |
| **파일 업로드** | O | O | O | O |
| **웹 검색** | O | O (제한) | O | O (Bing) |
| **코드 실행** | O | Artifacts | X | X |
| **플러그인/확장** | GPTs | Projects | Extensions | Plugins |

### 용도별 추천

#### 교수자에게 추천
- **강의계획서 작성**: Claude (정확한 구조화) 또는 ChatGPT (범용)
- **시험문제 출제**: ChatGPT (다양한 유형) 또는 Claude (정확성)
- **학생 피드백**: Claude (섬세한 분석) > ChatGPT
- **연구 논문 분석**: Claude (긴 문서) > ChatGPT > Gemini

#### 직원에게 추천
- **공문서 작성**: ChatGPT 또는 Claude
- **데이터 분석**: ChatGPT (Code Interpreter) > Gemini (Sheets)
- **이메일 작성**: Gemini (Gmail 통합) > ChatGPT
- **PPT 제작**: Gemini (Slides) 또는 Copilot (PowerPoint)

#### 조교에게 추천
- **채점 보조**: Claude (루브릭 기반) > ChatGPT
- **학습자료 제작**: ChatGPT (다양한 형식) > Claude
- **학생 질의 대응**: ChatGPT (빠른 응답) > Claude

### 비용 효율성 분석

| 시나리오 | 추천 서비스 | 이유 |
|----------|------------|------|
| 예산 없음 | ChatGPT Free + Gemini Free | 무료 조합으로 대부분 커버 |
| 개인 사용 ($20) | ChatGPT Plus | 가장 범용적 |
| 학술 중심 ($20) | Claude Pro | 긴 문서, 정확한 분석 |
| Google 중심 ($20) | Gemini Advanced | Workspace 통합 |
| 최대 활용 ($40) | ChatGPT Plus + Claude Pro | 용도별 최적 조합 |

### 실전 팁

1. **무료 버전부터 시작**: 각 서비스의 무료 버전을 모두 사용해보고 자신에게 맞는 것 선택
2. **목적별 사용**: 하나의 서비스에 의존하지 말고, 작업 유형에 맞게 사용
3. **결과 교차 검증**: 중요한 내용은 2개 이상의 AI에서 확인
4. **프롬프트 재활용**: 효과적인 프롬프트를 발견하면 다른 AI에서도 시도`,contentEn:`## AI Service Comparison

### Overview

| Feature | ChatGPT | Claude | Gemini | Copilot |
|---------|---------|--------|--------|---------|
| **Company** | OpenAI | Anthropic | Google | Microsoft |
| **Price** | $20/mo | $20/mo | $19.99/mo | $20/mo |
| **Context** | 128K | 200K | 1M | 128K |
| **Image Gen** | DALL-E | No | Limited | DALL-E |
| **Korean** | ★★★★★ | ★★★★★ | ★★★★☆ | ★★★★☆ |

### Recommendations by Role
- **Faculty**: Claude for accuracy, ChatGPT for versatility
- **Staff**: Gemini for Google integration, ChatGPT for documents
- **TAs**: ChatGPT for speed, Claude for grading

### Cost-Effective Combinations
- Free: ChatGPT Free + Gemini Free
- $20: ChatGPT Plus (most versatile) or Claude Pro (academic focus)
- $40: ChatGPT Plus + Claude Pro (best of both)`},{id:"research-data-analysis",categoryId:"research-writing",nameKo:"연구 데이터 분석 가이드",nameEn:"Research Data Analysis Guide",type:"guide",contentKo:`## AI를 활용한 연구 데이터 분석

연구 데이터의 전처리부터 기술통계·가설검정까지, AI로 분석 과정을 효율화하는 방법입니다. (Day 1 커리큘럼 연계)

### 1. 데이터 전처리
결측치·이상치 처리, 형 변환·스케일링은 분석의 첫 단계입니다.

\`\`\`
다음 데이터의 전처리 방안을 제안해줘.
- 결측치: 변수별 결측 비율과 처리 방법(삭제/대치) 추천
- 이상치: IQR 기준 탐지 및 처리 방안
- 변수별 형 변환/정규화 필요 여부
[데이터 상단 20행 붙여넣기]
\`\`\`

### 2. 기술통계
\`\`\`
첨부 데이터의 기술통계표를 작성해줘.
- 연속형: 평균·표준편차·중앙값·최소/최대
- 범주형: 빈도·비율
- 표로 정리하고 특이점을 해석해줘
\`\`\`

### 3. 가설검정 설계
연구질문에 맞는 검정(t-검정·ANOVA·카이제곱·상관/회귀)을 선택합니다.

\`\`\`
연구질문: [예: 교육 전·후 점수 차이가 유의한가?]
데이터 구조: [집단 수, 표본 크기, 변수 척도]
적절한 통계 검정을 추천하고, 가정(정규성·등분산성) 확인 방법과 함께 설명해줘.
\`\`\`

### 추천 도구
- **ChatGPT(Advanced Data Analysis)/Claude**: CSV 업로드 → 분석·차트 자동
- **전남대GPT**: 교내 실습 환경

### 주의사항
**Do**: 통계 결과를 원자료로 재확인, 검정 가정 위배 여부 점검
**Don't**: 개인정보·미공개 연구데이터 무단 업로드, 결과 맹신`,contentEn:`## AI-Assisted Research Data Analysis

### 1. Data Preprocessing
Handle missing values (drop/impute), outliers (IQR), and scaling before analysis.

### 2. Descriptive Statistics
Ask AI to summarize continuous (mean/SD/median) and categorical (frequency) variables in a table.

### 3. Hypothesis Testing
Describe your research question and data structure; let AI recommend the right test (t-test/ANOVA/chi-square/regression) and how to check assumptions.

### Tools
ChatGPT (Advanced Data Analysis), Claude, or JNU GPT for in-class practice.

### Do / Don't
**Do**: verify results against raw data, check test assumptions. **Don't**: upload personal or unpublished data, trust results blindly.`},{id:"data-visualization",categoryId:"research-writing",nameKo:"데이터 시각화 & 결과 해석 가이드",nameEn:"Data Visualization & Interpretation Guide",type:"guide",contentKo:`## AI를 활용한 데이터 시각화와 결과 해석

분석 결과를 효과적으로 시각화하고, 논문에 쓸 수 있게 해석하는 방법입니다. (Day 1 커리큘럼 연계)

### 1. 목적별 차트 선택
| 목적 | 권장 차트 |
|------|-----------|
| 집단 간 비교 | 막대그래프(오차막대) |
| 두 변수 관계 | 산점도 + 추세선 |
| 분포 확인 | 히스토그램·박스플롯 |
| 시간 변화 | 선그래프 |

### 2. 시각화 생성 프롬프트
\`\`\`
첨부 데이터로 다음 시각화를 만들어줘.
- 집단별 평균 비교: 막대그래프(오차막대 포함)
- 두 변수 관계: 산점도 + 추세선
- 분포: 히스토그램 또는 박스플롯
각 그래프에 제목·축 라벨(한글)을 넣고, 해석 코멘트도 함께 작성해줘.
\`\`\`

### 3. 결과를 논문 문장으로
\`\`\`
아래 분석 결과를 논문 '결과' 서술 문장으로 바꿔줘.
- 수치: [예: t(38)=2.41, p=.021]
- APA 스타일, 과장 없는 객관적 서술로
\`\`\`

### 추천 도구
- **ChatGPT/Claude**: 데이터 업로드 → 차트 생성·해석
- **Datawrapper·Flourish**: 웹 기반 인터랙티브 시각화
- **Excel·matplotlib**: 기본 정적 차트

### 주의사항
**Do**: 축 범위·표본 수를 명시해 오해 방지
**Don't**: 축을 왜곡하거나 오해를 유발하는 그래프 사용 금지`,contentEn:`## AI-Assisted Data Visualization & Interpretation

### 1. Choose the Right Chart
Bar (group comparison), scatter+trendline (relationship), histogram/boxplot (distribution), line (time).

### 2. Generate Visuals
Ask AI to create titled, labeled charts from your data with interpretation notes.

### 3. Turn Results into Prose
Provide statistics (e.g., t(38)=2.41, p=.021) and ask for APA-style objective result sentences.

### Tools
ChatGPT/Claude, Datawrapper, Flourish, Excel, matplotlib.

### Do / Don't
**Do**: state axis ranges and sample sizes. **Don't**: use distorted or misleading axes.`},{id:"paper-writing",categoryId:"research-writing",nameKo:"AI 논문작성 가이드",nameEn:"AI Academic Writing Guide",type:"guide",contentKo:`## AI를 활용한 학술 논문 작성

문헌 검토부터 IMRaD 초안, 영문 교정, 초록·투고까지 논문 작성 전 과정을 지원합니다. (Day 2 커리큘럼 연계)

### 1. 문헌 검토 & 연구 위치잡기
\`\`\`
아래 논문 PDF들을 기반으로 선행연구를 정리해줘.
- 연구질문·방법·주요결과·한계를 표로 비교
- 연구 공백(gap)과 본 연구의 기여점을 제안
[논문 PDF 2~3편 첨부]
\`\`\`

### 2. IMRaD 구조 초안
\`\`\`
다음 연구를 IMRaD(서론·방법·결과·논의) 구조로 초안 작성해줘.
- 주제/가설: ...
- 방법: ...
- 결과 요약: ...
각 섹션은 핵심 문장 위주로, 근거 없는 서술은 넣지 마.
\`\`\`

### 3. 영문 교정 & 학술 문체
\`\`\`
다음 문단을 학술 영어로 교정해줘.
- 문법·관사·시제 교정
- 적절한 hedging(단정 완화) 표현 사용
- 변경 사항을 목록으로 요약
[문단 붙여넣기]
\`\`\`

### 4. 초록·키워드·투고 준비
\`\`\`
본문을 바탕으로 250단어 이내 영문 초록과 키워드 5개를 작성해줘.
구조: 배경 · 목적 · 방법 · 결과 · 결론
\`\`\`

### 연구윤리 주의 (중요)
- AI 사용 사실을 **저널·학교 정책에 따라 명시**
- **환각(허위 인용)** 방지 — 인용·수치는 반드시 원문과 대조 검증
- 미공개 데이터·타인 저작물 무단 입력 금지`,contentEn:`## AI-Assisted Academic Writing

### 1. Literature Review
Upload paper PDFs; ask AI to compare research questions, methods, results, and limitations, then identify the gap and your contribution.

### 2. IMRaD Draft
Provide topic, method, and result summary; ask for an IMRaD draft with core sentences only (no unsupported claims).

### 3. English Proofreading
Ask AI to correct grammar/articles/tense, apply appropriate hedging, and list the changes.

### 4. Abstract & Submission
Generate a <=250-word abstract (background, purpose, method, results, conclusion) and 5 keywords.

### Research Ethics (Important)
Disclose AI use per journal policy; verify all citations/numbers against sources (avoid hallucinations); never input unpublished or third-party data.`},{id:"excel-automation",categoryId:"data-budget",nameKo:"Excel 수식 자동화",nameEn:"Excel Formula Automation",type:"guide",contentKo:`## AI를 활용한 Excel 업무 자동화

### AI로 Excel 수식 생성하기

복잡한 Excel 수식을 직접 작성하는 대신, AI에게 원하는 결과를 설명하면 수식을 자동 생성합니다.

#### 수식 생성 프롬프트 공식

\`\`\`
다음 조건에 맞는 Excel 수식을 만들어주세요.

- 데이터 위치: [시트명, 셀 범위]
- 원하는 결과: [계산/분석 내용]
- 조건: [필터링 조건]
- 출력 형식: [숫자/텍스트/날짜]
\`\`\`

### 자주 사용하는 수식 예시

#### 1. 성적 처리
\`\`\`
B열에 중간고사(100점), C열에 기말고사(100점), D열에 과제(50점)가 있습니다.
E열에 총점(중간 30% + 기말 40% + 과제 30%)을 계산하고,
F열에 학점(A+: 95이상, A0: 90이상, B+: 85이상, B0: 80이상,
C+: 75이상, C0: 70이상, D: 60이상, F: 60미만)을 부여하는 수식을 만들어주세요.
\`\`\`

**AI 생성 결과**:
\`\`\`excel
E2: =B2*0.3 + C2*0.4 + D2*0.3
F2: =IFS(E2>=95,"A+", E2>=90,"A0", E2>=85,"B+", E2>=80,"B0", E2>=75,"C+", E2>=70,"C0", E2>=60,"D", TRUE,"F")
\`\`\`

#### 2. 출석 관리
\`\`\`
A열에 학생 이름, B~P열에 15주차 출석 데이터가 있습니다.
(O: 출석, X: 결석, L: 지각)
Q열에 출석 횟수, R열에 결석 횟수, S열에 출석률(%)을 계산하는 수식을 만들어주세요.
\`\`\`

#### 3. 피벗 테이블 분석
\`\`\`
학과별, 학년별 수강생 수를 집계하는 피벗 테이블 생성 방법을 단계별로 알려주세요.
데이터: A열(학번), B열(이름), C열(학과), D열(학년), E열(수강과목)
\`\`\`

### ChatGPT Code Interpreter 활용

ChatGPT Plus에서 Excel/CSV 파일을 직접 업로드하면:

1. **자동 분석**: 데이터 구조 파악 및 기술 통계 제공
2. **시각화**: 차트/그래프 자동 생성
3. **이상치 탐지**: 데이터의 오류나 이상값 발견
4. **보고서 생성**: 분석 결과를 요약한 보고서 출력

\`\`\`
프롬프트: "이 성적 데이터를 분석해주세요.
1. 과목별 평균, 중앙값, 표준편차를 계산해주세요.
2. 성적 분포를 히스토그램으로 시각화해주세요.
3. 학과별 성적 차이를 박스플롯으로 비교해주세요.
4. 분석 결과를 요약해주세요."
\`\`\`

### VBA 매크로 자동 생성

반복 작업을 자동화하는 VBA 매크로도 AI로 생성할 수 있습니다.

\`\`\`
매월 각 학과에서 제출하는 보고서 Excel 파일 10개를
하나의 종합 시트로 병합하는 VBA 매크로를 작성해주세요.
조건: 각 파일의 "데이터" 시트에서 2행부터 마지막 행까지 복사
\`\`\``,contentEn:`## Excel Automation with AI

### Formula Generation
Ask AI to create formulas by describing what you need:
- Grade calculation with weighted scores
- Attendance tracking and statistics
- Pivot table analysis

### ChatGPT Code Interpreter
Upload Excel/CSV files for:
- Automatic statistical analysis
- Chart/graph visualization
- Anomaly detection
- Summary report generation

### VBA Macro Generation
AI can write VBA macros for repetitive tasks like merging multiple Excel files.`},{id:"budget-accounting",categoryId:"data-budget",nameKo:"예산·회계 실무 가이드",nameEn:"Budget & Accounting Guide",type:"guide",contentKo:`## AI를 활용한 예산·회계 실무

예산 편성부터 정산·증빙, 재무 보고, 회계 규정 확인까지 AI로 효율화합니다. (Day 2 커리큘럼 연계)

### 1. 예산 편성
\`\`\`
다음 사업의 예산안을 항목별로 편성해줘.
- 사업명/기간/총액: ...
- 항목: 인건비·운영비·재료비·여비 등 표준 분류로
- 각 항목의 산출근거를 표로 정리해줘
\`\`\`

### 2. 정산 & 증빙
\`\`\`
아래 지출 내역의 정산표를 만들어줘.
- 항목별 집행액 vs 예산액, 집행률(%)
- 필요한 증빙서류(세금계산서/영수증/거래명세서) 체크리스트
[지출 내역 붙여넣기]
\`\`\`

### 3. 재무 보고서
\`\`\`
아래 데이터로 사업 결산 보고서 초안을 작성해줘.
- 예산 대비 집행 현황(표)
- 주요 집행 내용 요약, 잔액 및 사유
\`\`\`

### 4. 회계 규정 Q&A 도우미
\`\`\`
다음 상황이 회계 규정상 가능한지 검토해줘.
- 상황: [예: 연구비로 노트북 구입 가능 여부]
- 관련 규정 조항·근거와 대안을 함께 제시
(규정 원문을 첨부하면 정확도가 올라갑니다)
\`\`\`

### 추천 도구
- **ChatGPT/Claude**: 표 계산·문서 초안
- **Excel**: 집계·집행률 계산
- **전남대GPT**: 교내 실습 환경

### 주의사항
**Do**: 규정 원문을 첨부해 검토, 산출근거·집행률 재확인
**Don't**: AI 답변만 믿고 규정 인용 금지(환각 가능), 민감 회계정보 무단 입력 금지`,contentEn:`## AI-Assisted Budgeting & Accounting

### 1. Budgeting
Ask AI to build an itemized budget (labor/operations/materials/travel) with justification tables.

### 2. Settlement & Evidence
Generate a settlement table (spent vs budget, execution rate) and a required-documents checklist.

### 3. Financial Reports
Draft a project closing report: budget-vs-execution table, summary, remaining balance and reasons.

### 4. Accounting Rules Q&A
Describe a situation and ask whether it is allowed under the rules, with cited clauses and alternatives (attach the rulebook for accuracy).

### Do / Don't
**Do**: attach source rules, re-verify figures. **Don't**: cite rules from AI alone (hallucination risk), input sensitive financial data.`},{id:"data-analysis-basics",categoryId:"data-budget",nameKo:"데이터 분석 기초",nameEn:"Data Analysis Basics",type:"guide",contentKo:`## AI를 활용한 기초 데이터 분석

### 데이터 분석이 필요한 행정 업무

- 수강 현황 분석 (학과별, 학년별 수강생 분포)
- 강의평가 결과 분석 (교과목별 평균, 추이)
- 예산 집행 현황 분석 (항목별 비율, 전년 대비)
- 교직원 연수 참여율 분석
- 학생 취업률/진학률 통계

### ChatGPT로 데이터 분석하기

#### 1단계: 데이터 준비
- Excel/CSV 파일로 데이터 정리
- 열 이름을 명확하게 설정 (한국어 가능)
- 비어있는 셀이나 오류 데이터 사전 정리

#### 2단계: 분석 요청 프롬프트

\`\`\`
이 데이터를 분석해주세요.

분석 요청:
1. 기술 통계 (평균, 중앙값, 표준편차, 최소/최대)
2. 학과별 비교 분석
3. 전년 대비 증감률 계산
4. 주요 인사이트 3가지 도출
5. 시각화: 막대그래프, 원형차트 생성

결과를 한국어로 작성하고, 보고서에 바로 사용할 수 있는 형태로 정리해주세요.
\`\`\`

#### 3단계: 시각화 요청

\`\`\`
다음 차트를 만들어주세요:
1. 학과별 수강생 수 막대그래프 (내림차순)
2. 학년별 비율 원형차트
3. 최근 5년간 수강생 추이 꺾은선 그래프

차트에 한국어 레이블을 사용하고, 색상은 파란색 계열로 통일해주세요.
\`\`\`

### 보고서 작성 프롬프트

\`\`\`
위 분석 결과를 바탕으로 보고서를 작성해주세요.

보고서 형식:
1. 요약 (Executive Summary) - 3줄 이내
2. 분석 배경 및 목적
3. 분석 방법 및 데이터 범위
4. 주요 분석 결과 (표와 차트 포함)
5. 시사점 및 제언
6. 첨부: 상세 데이터 표

대학 행정 보고서에 적합한 공식적인 문체로 작성해주세요.
\`\`\`

### 자주 사용하는 분석 프롬프트

| 분석 유형 | 프롬프트 |
|----------|---------|
| 비교 분석 | "A그룹과 B그룹의 차이를 분석해주세요" |
| 추이 분석 | "최근 5년간 변화 추이를 분석해주세요" |
| 분포 분석 | "데이터의 분포를 히스토그램으로 보여주세요" |
| 상관 분석 | "두 변수 간의 상관관계를 분석해주세요" |
| 이상치 탐지 | "데이터에서 이상값을 찾아주세요" |`,contentEn:`## Basic Data Analysis with AI

### Common Administrative Analysis Tasks
- Enrollment statistics, course evaluation analysis, budget tracking, employment rates

### Steps
1. **Prepare data** in Excel/CSV format
2. **Upload to ChatGPT** Code Interpreter
3. **Request analysis** with specific metrics
4. **Request visualizations** (bar charts, pie charts, line graphs)
5. **Generate report** in formal format

### Useful Analysis Prompts
- Comparison: "Compare groups A and B"
- Trends: "Analyze 5-year trends"
- Distribution: "Show histogram of data"
- Correlation: "Analyze relationship between variables"`},{id:"research-design",categoryId:"research-lab",nameKo:"연구 설계 가이드",nameEn:"Research Design Guide",type:"guide",contentKo:`## AI를 활용한 연구 설계

연구 주제 구체화, 선행연구 탐색, 연구계획서 작성을 지원합니다. (Day 1 커리큘럼 연계)

### 1. 연구질문 구체화
\`\`\`
아래 관심 주제를 연구 가능한 질문으로 다듬어줘.
- 관심 주제: ...
- FINER/PICO 기준으로 구체화해 후보 질문 3개 제시
- 각 질문의 독립·종속 변수를 명시해줘
\`\`\`

### 2. 선행연구 탐색·정리
\`\`\`
아래 주제의 선행연구 동향을 정리해줘 (첨부 논문 기반).
- 핵심 이론·주요 발견·연구공백을 표로
- 국문/영문 검색 키워드 조합도 제안
\`\`\`

### 3. 연구계획서 작성
\`\`\`
다음 정보로 연구계획서 초안을 작성해줘.
- 연구질문/목적, 배경, 방법(설계·표본·측정), 일정
- 기대효과와 한계 포함
\`\`\`

### 추천 도구
- **RISS·Google Scholar**: 문헌 탐색
- **ChatGPT/Claude**: 정리·초안
- **NotebookLM**: 여러 논문 기반 Q&A

### 주의사항
**Do**: 인용·수치는 원문과 대조 검증
**Don't**: 표절, 존재하지 않는 논문(환각) 인용 금지`,contentEn:`## AI-Assisted Research Design

### 1. Refine Research Questions
Turn a topic into researchable questions (FINER/PICO), with variables specified.

### 2. Literature Review
Summarize prior work from attached papers (theories, findings, gaps) and suggest search keywords.

### 3. Research Proposal
Draft a proposal: question, background, method (design/sample/measures), timeline, expected impact and limits.

### Tools
RISS, Google Scholar, ChatGPT/Claude, NotebookLM.

### Do / Don't
**Do**: verify citations against sources. **Don't**: plagiarize or cite hallucinated papers.`},{id:"experiment-protocol",categoryId:"research-lab",nameKo:"실험 프로토콜 & 데이터 관리 가이드",nameEn:"Experiment Protocol & Data Management Guide",type:"guide",contentKo:`## AI를 활용한 실험 설계와 데이터 관리

실험 프로토콜 설계와 실험 데이터의 체계적 기록·관리를 지원합니다. (Day 2 커리큘럼 연계)

### 1. 실험 프로토콜 설계
\`\`\`
다음 실험의 프로토콜을 단계별로 설계해줘.
- 실험 목적/가설: ...
- 변수(독립·종속·통제), 재료·장비
- 절차(순서), 반복 횟수, 예상 위험요소와 대응
\`\`\`

### 2. 실험 데이터 기록 체계
\`\`\`
아래 실험의 데이터 기록용 표(스키마)를 설계해줘.
- 측정 변수·단위·측정 시점
- 메타데이터(조건·일시·담당자) 컬럼 포함
- 결측/이상치 기록 규칙 제안
\`\`\`

### 3. 데이터 관리 원칙
- **파일 명명 규칙**: 날짜_실험명_버전 (예: 20260702_assayA_v1)
- **버전관리·백업**: 3-2-1 원칙(사본3·매체2·오프사이트1)
- **원자료 보존**: raw 데이터는 별도 보관, 사본으로 작업

### 추천 도구
- **전자연구노트(ELN)**, **Excel/Google Sheets**, **ChatGPT/Claude**

### 주의사항
**Do**: 원자료(raw)는 읽기전용 보관, 메타데이터 필수 기록
**Don't**: 원자료 직접 수정, 미공개 실험데이터 AI 무단 업로드 금지`,contentEn:`## AI-Assisted Experiment Protocol & Data Management

### 1. Protocol Design
Design a step-by-step protocol: purpose/hypothesis, variables, materials, procedure, replicates, risks.

### 2. Data Recording Schema
Design a recording table: measured variables/units/timepoints, metadata columns, missing/outlier rules.

### 3. Data Management
File naming, version control, 3-2-1 backup, and raw-data preservation.

### Tools
Electronic lab notebook, Excel/Sheets, ChatGPT/Claude.

### Do / Don't
**Do**: keep raw data read-only, always record metadata. **Don't**: edit raw data, upload unpublished data to AI.`},{id:"rcf-framework",categoryId:"foundation",nameKo:"RCF 프레임워크",nameEn:"RCF Framework",type:"guide",contentKo:`## RCF 프레임워크: 효과적인 프롬프트의 3요소

RCF는 **Role(역할)**, **Context(맥락)**, **Format(형식)**의 약자로, 프롬프트 작성의 기본 구조를 제공합니다.

### R - Role (역할)

AI에게 특정 역할을 부여하여 답변의 관점과 전문성을 설정합니다.

\`\`\`
예시:
- "당신은 20년 경력의 대학교 교수학습센터 전문가입니다."
- "당신은 교육공학 박사이자 AI 교육 컨설턴트입니다."
- "당신은 대학 행정 업무에 정통한 사무관입니다."
\`\`\`

**역할 설정의 효과**:
- 전문적인 용어와 관점으로 답변
- 해당 분야의 관행과 규범을 반영
- 일관된 톤과 깊이 유지

### C - Context (맥락)

배경 정보, 제약 조건, 목적을 명확히 제공합니다.

\`\`\`
예시:
- "전남대학교 공과대학에서 1학년 100명 대상 수업입니다."
- "이 보고서는 교육부에 제출할 중간보고서입니다."
- "예산은 500만원이고, 기간은 3개월입니다."
\`\`\`

**맥락 제공의 요소**:
- **누구를 위한 것인가** (대상/독자)
- **어떤 상황인가** (배경/제약)
- **왜 필요한가** (목적/의도)
- **어떤 수준인가** (전문성/난이도)

### F - Format (형식)

원하는 출력물의 형식을 구체적으로 지정합니다.

\`\`\`
예시:
- "표 형식으로 정리해주세요."
- "5개의 글머리 기호로 요약해주세요."
- "500자 이내로 작성해주세요."
- "마크다운 형식으로 헤더와 하위 항목을 포함해주세요."
\`\`\`

### RCF 통합 예시

#### 예시 1: 강의계획서 작성
\`\`\`
[Role] 당신은 교육공학 전문가이자 대학 강의 설계 컨설턴트입니다.

[Context] 전남대학교 경영학과 3학년 대상 "AI와 비즈니스" 교과목의
15주차 강의계획서를 작성해야 합니다. 수강생은 약 40명이며,
AI 관련 사전 지식이 없는 학생들입니다. 실습 중심의 수업을 원합니다.

[Format] 다음 형식으로 작성해주세요:
- 각 주차별: 주제, 학습목표(행동동사 사용), 수업방법, 과제
- 평가 계획: 비율과 방법
- 참고교재 및 자료
- 표 형식으로 정리
\`\`\`

#### 예시 2: 업무 보고서
\`\`\`
[Role] 당신은 대학 행정 실무에 정통한 보고서 작성 전문가입니다.

[Context] 전남대학교 AI교육센터의 2024년 상반기 사업 보고서를
작성해야 합니다. 센터장이 대학본부 보고용으로 사용할 예정입니다.
교육 실적: 6회, 참여자 250명, 만족도 4.6/5.0, 예산 집행률 85%

[Format]
- A4 3페이지 분량
- 사업 개요, 추진 실적, 성과 분석, 하반기 계획 순서
- 핵심 수치는 표로 정리
- 시사점 3가지를 도출
\`\`\`

### RCF 활용 체크리스트

- [ ] Role: AI에게 명확한 역할/전문성을 부여했는가?
- [ ] Context: 충분한 배경 정보를 제공했는가?
- [ ] Context: 대상/목적/제약을 명시했는가?
- [ ] Format: 원하는 출력 형식을 지정했는가?
- [ ] Format: 분량/길이를 지정했는가?`,contentEn:`## RCF Framework: 3 Elements of Effective Prompts

**R**ole - **C**ontext - **F**ormat

### Role
Assign a specific expertise to the AI.

### Context
Provide background, constraints, purpose, and audience.

### Format
Specify desired output structure, length, and style.

### Example
\`\`\`
[Role] You are an education technology expert.
[Context] Design a 15-week syllabus for 40 business students with no AI background.
[Format] Table format with weekly topics, objectives, activities, and assignments.
\`\`\``},{id:"role-based-prompt",categoryId:"foundation",nameKo:"역할 기반 프롬프트",nameEn:"Role-Based Prompting",type:"guide",contentKo:`## 역할 기반 프롬프트 기법

### 역할 부여의 원리

AI에게 특정 역할을 부여하면, 그 역할에 맞는 지식, 관점, 어조로 답변합니다. 이를 **페르소나 설정**이라고도 합니다.

### 효과적인 역할 설정 공식

\`\`\`
당신은 [경력/자격]을 가진 [전문 분야]의 [직위]입니다.
[추가 특성: 소통 스타일, 가치관, 전문 영역]
\`\`\`

### 교육 분야 역할 예시

#### 1. 교수학습 전문가
\`\`\`
당신은 20년 경력의 교육공학 교수이자 교수학습센터 소장입니다.
블룸의 분류학, 역량기반교육, 플립러닝에 정통하며,
실제 대학 현장에서 교수법 컨설팅을 수백 건 수행한 경험이 있습니다.
실용적이고 구체적인 조언을 제공합니다.
\`\`\`

#### 2. 학술 논문 리뷰어
\`\`\`
당신은 SCI급 학술지의 편집위원이자 심사위원입니다.
연구 방법론, 통계 분석, 논리적 구성에 대해 엄격하면서도
건설적인 피드백을 제공합니다. APA 7판 양식에 정통합니다.
\`\`\`

#### 3. 학생 멘토
\`\`\`
당신은 대학생 학습 코칭 전문가입니다.
학생의 입장에서 이해하기 쉽게 설명하되,
학문적 깊이를 잃지 않는 설명을 합니다.
격려하면서도 정확한 정보를 제공합니다.
\`\`\`

### 다중 역할 활용법

하나의 주제를 여러 관점에서 분석할 때 유용합니다.

\`\`\`
다음 교육 정책을 3가지 관점에서 분석해주세요.

1. [교수자 관점] 수업 현장에서의 실행 가능성과 영향
2. [학생 관점] 학습 경험과 성과에 미치는 영향
3. [행정 관점] 예산, 인력, 시스템 측면의 고려사항

각 관점별로 장점 3가지, 우려사항 2가지, 제안 1가지를 제시해주세요.
\`\`\`

### 역할 기반 프롬프트 패턴

| 상황 | 역할 설정 | 효과 |
|------|----------|------|
| 강의 설계 | 교수학습 컨설턴트 | 교육학 이론 기반 설계 |
| 논문 작성 | 학술지 편집위원 | 엄격한 학술적 기준 적용 |
| 학생 상담 | 학습 코치 | 이해하기 쉬운 설명 |
| 행정 문서 | 대학 행정 전문가 | 공식 문서 형식 준수 |
| 프로그램 기획 | 교육 프로그램 기획자 | 체계적 커리큘럼 설계 |
| 데이터 분석 | 교육 데이터 분석가 | 통계적 해석과 인사이트 |

### 주의사항

1. **과도한 역할 설정 지양**: 핵심적인 전문성만 명시
2. **일관성 유지**: 대화 중 역할이 바뀌지 않도록 주의
3. **실재하는 역할 사용**: AI가 이해할 수 있는 구체적인 직업/직위 사용
4. **윤리적 역할만 설정**: 불법적이거나 비윤리적인 역할 부여 금지`,contentEn:`## Role-Based Prompting

### Principle
Assigning a specific role makes AI respond with appropriate expertise, perspective, and tone.

### Formula
"You are a [qualification] [title] in [field]. [Additional traits]"

### Education Role Examples
1. Teaching & learning expert with 20 years experience
2. Academic journal reviewer
3. Student mentor and learning coach

### Multi-Perspective Analysis
Ask AI to analyze from multiple viewpoints (faculty, student, administration).

### Best Practices
- Keep role descriptions focused on key expertise
- Maintain consistency throughout the conversation
- Use realistic, specific roles`},{id:"chain-of-thought",categoryId:"foundation",nameKo:"단계적 프롬프트 (Chain of Thought)",nameEn:"Step-by-Step Prompting",type:"guide",contentKo:`## 단계적 프롬프트 기법

### Chain of Thought (CoT) 란?

복잡한 문제를 해결할 때, AI에게 **단계별로 생각하도록 유도**하는 기법입니다. "생각의 사슬"이라고도 부르며, 추론 정확도를 크게 향상시킵니다.

### 기본 사용법

#### 방법 1: 단순 지시
\`\`\`
단계별로 생각하며 답변해주세요.
\`\`\`

#### 방법 2: 단계 명시
\`\`\`
다음 단계를 따라 분석해주세요:
1단계: 문제를 파악합니다
2단계: 관련 정보를 정리합니다
3단계: 가능한 해결책을 도출합니다
4단계: 최적의 방안을 선택하고 근거를 설명합니다
\`\`\`

### Few-Shot 프롬프트

예시를 제공하여 AI가 원하는 패턴으로 응답하도록 유도합니다.

\`\`\`
아래 예시와 같은 형식으로 학습목표를 작성해주세요.

[예시 1]
교과목: 통계학 개론
학습목표: "본 수업을 수료한 학생은 주어진 데이터셋에 대해
적절한 통계 검정 방법을 선택하고, SPSS를 활용하여 분석을
수행한 후, 결과를 학술적 형식으로 해석할 수 있다."

[예시 2]
교과목: 마케팅 원론
학습목표: "본 수업을 수료한 학생은 소비자 행동 이론을 바탕으로
시장을 세분화하고, STP 전략을 수립하여 마케팅 계획서를
작성할 수 있다."

[작성 요청]
교과목: 인공지능 개론
위 예시와 동일한 형식과 수준으로 학습목표를 작성해주세요.
\`\`\`

### 단계적 프롬프트 실전 활용

#### 시험 문제 출제
\`\`\`
다음 단계에 따라 시험 문제를 출제해주세요.

1단계: 교과목의 핵심 학습목표를 확인합니다
  - 교과목: [교과목명]
  - 학습목표: [목표 나열]

2단계: 블룸의 분류학 수준별 문항 수를 결정합니다
  - 기억/이해: 10문항 (객관식)
  - 적용/분석: 5문항 (단답형)
  - 평가/창조: 2문항 (서술형)

3단계: 각 수준에 맞는 문항을 작성합니다
  - 객관식: 5지선다, 정답과 오답 해설 포함
  - 단답형: 모범답안 포함
  - 서술형: 채점 기준(루브릭) 포함

4단계: 난이도와 변별력을 검토합니다
\`\`\`

#### 연구 계획 수립
\`\`\`
다음 연구 주제에 대한 연구 계획을 단계별로 수립해주세요.

연구 주제: "생성형 AI 활용이 대학생의 학습 성과에 미치는 영향"

1단계: 선행연구 분석
  - 주요 이론적 배경
  - 기존 연구의 한계점

2단계: 연구 설계
  - 연구 가설 수립
  - 변인 정의 (독립/종속/통제)
  - 연구 방법 선택 (실험/조사/혼합)

3단계: 데이터 수집 계획
  - 대상, 표본 크기, 수집 도구

4단계: 분석 방법
  - 통계 분석 방법 선택 및 근거

5단계: 기대 결과 및 시사점
\`\`\`

### 프롬프트 체이닝 (연쇄 프롬프트)

하나의 큰 작업을 여러 프롬프트로 나누어 순차 실행합니다.

\`\`\`
[1차 프롬프트] "인공지능 개론" 수업의 15주차 주제 목록을 만들어주세요.
     ↓ (결과 확인 후)
[2차 프롬프트] 3주차 "자연어처리" 주제의 상세 수업 계획을 작성해주세요.
     ↓ (결과 확인 후)
[3차 프롬프트] 이 수업에서 사용할 실습 과제를 3개 설계해주세요.
     ↓ (결과 확인 후)
[4차 프롬프트] 첫 번째 과제의 평가 루브릭을 작성해주세요.
\`\`\`

이 방식은 각 단계의 결과를 검토하고 수정한 후 다음 단계로 진행하므로 최종 결과의 품질이 높습니다.`,contentEn:`## Chain of Thought Prompting

### What is CoT?
A technique that guides AI to think step-by-step, improving reasoning accuracy.

### Methods
1. **Simple instruction**: "Think step by step"
2. **Explicit steps**: Define numbered stages
3. **Few-shot**: Provide examples for pattern matching

### Prompt Chaining
Break large tasks into sequential prompts:
1. Generate topic list → 2. Detail one topic → 3. Design exercises → 4. Create rubric

Each step is reviewed before proceeding to the next.`},{id:"analysis-code-ethics",categoryId:"research-lab",nameKo:"분석 코드 & 연구윤리 가이드",nameEn:"Analysis Code & Research Ethics Guide",type:"guide",contentKo:`## AI를 활용한 분석 코드 작성과 연구윤리

분석 코드 작성·디버깅, 연구노트 정리, 연구윤리·IRB 준비를 지원합니다.

### 1. 분석 코드 작성
\`\`\`
아래 분석을 Python(pandas) 코드로 작성해줘.
- 데이터: [구조 설명]
- 분석: [예: 집단별 평균 비교 t-검정 + 시각화]
- 주석은 한글로, 재현 가능하게
\`\`\`

### 2. 코드 디버깅
\`\`\`
아래 코드에서 [에러 메시지] 오류가 나. 원인과 수정안을 설명해줘.
[코드 붙여넣기]
\`\`\`

### 3. 연구노트 정리
\`\`\`
오늘 실험/분석 로그를 연구노트 형식으로 정리해줘.
- 목적 · 방법 · 결과 · 다음 단계
\`\`\`

### 4. 연구윤리 & IRB 준비
\`\`\`
아래 연구의 IRB 심의 준비를 도와줘.
- 연구개요, 대상자·동의 절차, 개인정보 보호 방안
- 심의 유형(면제/신속/정규) 판단 근거 제시
\`\`\`

### 주의사항 (중요)
- AI 생성 코드는 **반드시 실행·검증**, 결과 수치 재확인
- 연구대상자 개인정보·미공개 데이터 AI 입력 금지
- **AI 사용 사실을 연구윤리 정책에 따라 명시**`,contentEn:`## AI-Assisted Analysis Code & Research Ethics

### 1. Writing Analysis Code
Ask AI for reproducible Python (pandas) code with comments for your described analysis.

### 2. Debugging
Paste code and the error; ask for the cause and a fix.

### 3. Research Notes
Turn today's log into a research note: purpose, method, results, next steps.

### 4. Ethics & IRB
Prepare IRB materials: overview, consent, privacy protection, and review-type rationale.

### Do / Don't (Important)
**Do**: run and verify AI-generated code, re-check figures. **Don't**: input participants' personal or unpublished data; disclose AI use per policy.`}];export{t as M,e as a};
