import{l as t}from"./index-CcfXgN5-.js";import{T as c,C as s}from"./TipBox-DhMGG732.js";const u={code({inline:e,className:o,children:a,...r}){const i=/language-(\w+)/.exec(o||""),n=String(a).replace(/\n$/,"");return!e&&i?t.jsx(s,{code:n,language:i[1]}):!e&&!i&&String(a).includes(`
`)?t.jsx(s,{code:n,language:""}):t.jsx("code",{className:"inline-code",...r,children:a})},table({children:e}){return t.jsx("div",{className:"table-responsive",children:t.jsx("table",{children:e})})},blockquote({children:e}){return t.jsx(c,{type:"tip",children:e})},a({href:e,children:o,...a}){return e&&e.startsWith("/")?t.jsx("a",{href:e,...a,children:o}):t.jsx("a",{href:e,target:"_blank",rel:"noopener noreferrer",...a,children:o})}},p=[{id:"foundation",nameKo:"기초·심화 자료",nameEn:"Foundations",icon:"fa-seedling",descKo:"생성형 AI 도구와 프롬프트 작성 기법 학습자료입니다.",descEn:"Materials on generative AI tools and prompt-writing techniques."},{id:"research-writing",nameKo:"데이터분석·논문작성 자료",nameEn:"Data Analysis & Writing",icon:"fa-chart-line",descKo:"데이터 분석과 문서·논문 작성에 필요한 학습자료입니다.",descEn:"Materials for data analysis and academic/document writing."},{id:"data-budget",nameKo:"데이터분석·예산회계 자료",nameEn:"Data Analysis & Budget",icon:"fa-coins",descKo:"엑셀·데이터 처리와 예산·회계 실무 학습자료입니다.",descEn:"Materials for spreadsheet/data work and budgeting & accounting."},{id:"research-lab",nameKo:"연구·실험지원 자료",nameEn:"Research & Experiment",icon:"fa-flask",descKo:"연구·실험 과정을 지원하는 업무 설계·프롬프트 학습자료입니다.",descEn:"Materials supporting the research and experiment workflow."}],m=[{id:"ai-overview",categoryId:"foundation",nameKo:"생성형 AI 개요",nameEn:"Generative AI Overview",type:"guide",contentKo:`## 생성형 AI란?

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
- $40: ChatGPT Plus + Claude Pro (best of both)`},{id:"research-data-analysis",categoryId:"research-writing",nameKo:"연구 데이터 분석 가이드",nameEn:"Research Data Analysis Guide",type:"guide",contentKo:`## 연구 데이터 분석 완전 가이드

Day 1(데이터분석, 8시간) 전 과정을 아우르는 심화 자료입니다. 연구 설계·표본에서 출발해 전처리·기술통계·추론통계·검정 선택·재현가능성까지 다루며, 각 단계에 AI 활용 프롬프트와 파이썬 코드 요청 예시를 제공합니다.

---

## 1. 변수와 측정 척도

분석 방법은 변수의 **측정 척도**에 의해 결정됩니다.

| 척도 | 성질 | 예시 | 중심경향 | 대표 통계 |
|------|------|------|----------|-----------|
| 명목(nominal) | 분류만 | 성별, 학과 | 최빈값 | 빈도·카이제곱 |
| 서열(ordinal) | 순서 있음 | 리커트 만족도 | 중앙값 | 순위상관·비모수 |
| 등간(interval) | 간격 동일, 절대영 없음 | 온도(℃), 표준점수 | 평균 | t·ANOVA·상관 |
| 비율(ratio) | 절대영 있음 | 시간, 점수, 소득 | 평균 | 모든 모수통계 |

**핵심**: 서열척도(리커트)를 등간처럼 평균 낼지는 논쟁적입니다. 항목 수가 많고(5점 이상) 합산척도(composite)일 때 관례적으로 모수통계를 적용합니다.

---

## 2. 표본 설계와 표본 크기

- **모집단 → 표집틀 → 표본**: 표집틀이 모집단을 대표하지 못하면 표집오차 발생.
- **확률표집**: 단순무작위·계통·층화(stratified)·군집(cluster). **비확률표집**: 편의·눈덩이(일반화 제한).
- **검정력 분석(power analysis)**: 연구 설계 단계에서 필요 표본 크기를 산정합니다. 네 요소가 상호 결정됩니다 — 효과크기, 유의수준(α=.05), 검정력(1−β=.80 권장), 표본 크기.

\`\`\`
독립표본 t-검정을 계획 중이야. 예상 효과크기 Cohen's d=0.5(중간), α=.05, 검정력 .80일 때
집단당 필요한 표본 크기를 계산해줘. statsmodels 또는 G*Power 기준으로 근거와 함께 설명해줘.
\`\`\`

---

## 3. 데이터 전처리

### 3.1 결측치(missing data)
결측 **메커니즘**을 먼저 진단해야 처리법이 정당화됩니다.
- **MCAR**(완전무작위결측): 결측이 어떤 변수와도 무관 → 완전제거해도 편향 적음
- **MAR**(무작위결측): 관측된 다른 변수로 설명 가능 → 대치(imputation) 권장
- **MNAR**(비무작위결측): 결측 자체가 값과 관련 → 민감도 분석 필요

처리법: 완전제거(listwise/pairwise), 단일대치(평균·중앙·최빈), 회귀대치, **다중대치(MICE)**, KNN 대치. 단일 평균대치는 분산을 축소시키므로 지양하고, 결측률이 높으면 다중대치를 권장합니다.

### 3.2 이상치(outliers)
- 일변량: **IQR 규칙**(Q1−1.5×IQR 미만 / Q3+1.5×IQR 초과), z-score(절댓값 3 초과)
- 다변량: **마할라노비스 거리**(카이제곱 임계값과 비교)
- 처리 원칙: 삭제보다 **원인 규명** 우선(입력오류 vs 진짜 극단값). 윈저라이징(winsorizing)·변환도 대안.

### 3.3 변환·인코딩
- 표준화(z-score), 정규화(min-max), 왜도 완화(로그·제곱근·Box-Cox), 범주형 더미/원-핫 인코딩

\`\`\`
첨부한 데이터의 전처리 계획을 세워줘.
1) 변수별 결측률과 추정 결측 메커니즘(MCAR/MAR/MNAR) 판단 근거
2) 권장 대치 방법과 이유
3) IQR·z-score 기준 이상치 탐지 결과와 처리 방안
4) 왜도가 큰 변수의 변환 제안
pandas 코드와 함께 단계별로 제시해줘.
\`\`\`

---

## 4. 기술통계와 분포 진단

- **중심경향**: 평균·중앙값·최빈값 (분포가 치우치면 중앙값이 대표성 높음)
- **산포**: 분산·표준편차·범위·IQR·변동계수(CV = SD/M, 단위 다른 변수 비교)
- **분포 형태**: 왜도(skewness, 0=대칭), 첨도(kurtosis)
- **정규성 검정**: Shapiro-Wilk(표본<50 권장), Kolmogorov-Smirnov, 그리고 **Q-Q plot** 시각 확인. 표본이 크면 사소한 이탈도 유의하게 나오므로 그래프와 병행 판단.

\`\`\`
첨부 데이터의 기술통계표를 작성해줘.
- 연속형: n·평균·표준편차·중앙값·최소/최대·왜도·첨도
- 범주형: 빈도·백분율
- Shapiro-Wilk 정규성 검정 결과와 Q-Q plot 해석
- 표로 정리하고, 정규성 위배 변수는 별도 표시해줘.
\`\`\`

---

## 5. 추론통계와 가설검정 논리

- **가설**: 귀무가설(H0, 차이 없음) vs 대립가설(H1). 단측/양측 선택은 사전 이론에 근거.
- **오류**: 1종 오류(α, 참인 H0 기각) / 2종 오류(β, 거짓 H0 채택). 검정력 = 1−β.
- **p-value 해석**: "H0가 참일 때 관측된 결과 이상이 나올 확률". *효과의 크기나 중요도가 아님*. p<.05를 진리로 삼는 태도와 p-hacking(유의성 낚기)을 경계.
- **효과크기 필수 보고**: Cohen's d(평균차), η²/부분η²(분산설명), r(상관), Odds Ratio(로지스틱).
- **신뢰구간(95% CI)**: 점추정 + 불확실성을 함께 제시.
- **다중비교 보정**: 여러 검정 동시 수행 시 Bonferroni(보수적) 또는 Benjamini-Hochberg(FDR).

---

## 6. 통계 검정 선택 가이드

연구질문 → 변수 척도·집단 수·대응 여부·가정 충족을 따져 결정합니다.

| 상황 | 모수 검정 | 비모수 대안 | 효과크기 |
|------|-----------|-------------|----------|
| 2집단 독립 비교 | 독립표본 t | Mann-Whitney U | Cohen's d |
| 2집단 대응 비교 | 대응표본 t | Wilcoxon signed-rank | Cohen's d |
| 3집단+ 비교 | 일원분산분석(ANOVA) | Kruskal-Wallis | η² |
| 사후검정 | Tukey HSD(등분산)/Games-Howell | Dunn | — |
| 범주 연관 | 카이제곱 | Fisher 정확검정(기대빈도<5) | Cramér's V |
| 두 연속변수 관계 | Pearson r | Spearman ρ | r |
| 예측·설명 | 다중회귀 | — | R², β |
| 이분 결과 예측 | 로지스틱 회귀 | — | Odds Ratio |

**회귀 진단(가정 점검)**: 선형성, 오차 독립성(Durbin-Watson≈2), 등분산성(잔차 산점도), 잔차 정규성(Q-Q), 다중공선성(VIF<10, 이상적으로 <5).

\`\`\`
연구질문: [예: 교수법(3종)에 따라 시험 점수 평균이 다른가?]
데이터: 집단 3개, 집단당 n=30, 종속변수 연속형.
1) 적절한 검정을 추천하고 이유를 설명해줘
2) 충족해야 할 가정과 검정 방법(정규성·등분산성)
3) 가정 위배 시 대안(비모수/보정)
4) 유의하면 어떤 사후검정을 쓸지
scipy/statsmodels/pingouin 코드까지 포함해줘.
\`\`\`

---

## 7. 재현가능한 분석 워크플로

- **코드 기반 분석**: GUI 클릭 대신 스크립트로 기록 → 재현·검증 가능
- **난수 시드 고정**(random_state) → 동일 결과 재생산
- **버전관리·데이터 사전(data dictionary)**: 원자료·전처리코드·결과를 분리 보관, 원자료는 읽기전용

---

## 추천 도구

- **Python**: pandas, numpy, scipy.stats, statsmodels, pingouin(효과크기·검정 간편)
- **R**: tidyverse, rstatix / **GUI**: JASP, jamovi(무료, 논문용 출력)
- **표본설계**: G*Power
- **AI**: 전남대GPT, ChatGPT(Advanced Data Analysis, CSV 업로드 분석), Claude

## 연구윤리·데이터 관리 (중요)

- 개인정보 **비식별화** 후 분석, IRB 승인 범위 준수
- 원자료(raw) 보존, 전처리는 사본에서 수행
- **AI에 미공개 연구데이터·개인정보 업로드 금지** — 요약·구조만 공유
- 분석 결과·수치는 AI 출력을 그대로 믿지 말고 원 도구로 재검증`,contentEn:`## Complete Guide to Research Data Analysis

A deep resource covering Day 1 (Data Analysis, 8h): from study design and sampling to preprocessing, descriptive/inferential statistics, test selection, and reproducibility, each with AI prompts.

## 1. Variables & Measurement Scales
Nominal / ordinal / interval / ratio determine which statistics are valid. Treating Likert (ordinal) as interval is acceptable for multi-item composite scales.

## 2. Sampling & Sample Size
Probability vs non-probability sampling; run a power analysis (effect size, α=.05, power=.80) to size your sample before collecting data.

## 3. Preprocessing
Diagnose missingness (MCAR/MAR/MNAR) before choosing deletion vs imputation (prefer multiple imputation/MICE). Detect outliers via IQR, z-score, Mahalanobis distance; investigate causes before removing. Transform skewed variables (log/Box-Cox), encode categoricals.

## 4. Descriptive Statistics & Distribution
Central tendency, dispersion (SD, IQR, CV), skewness/kurtosis, and normality (Shapiro-Wilk + Q-Q plots).

## 5. Inference & Hypothesis Testing
H0/H1, Type I/II errors, power. p-value is not effect size; avoid p-hacking. Always report effect sizes (Cohen's d, eta-squared, r) and 95% CIs; correct for multiple comparisons (Bonferroni/FDR).

## 6. Choosing a Test
Independent/paired t or Mann-Whitney/Wilcoxon; ANOVA or Kruskal-Wallis (with post-hoc); chi-square/Fisher; Pearson/Spearman; multiple/logistic regression. Check regression assumptions (linearity, independence, homoscedasticity, residual normality, VIF<10).

## 7. Reproducibility
Script-based analysis, fixed random seeds, version control, read-only raw data.

## Tools
Python (pandas, scipy, statsmodels, pingouin), R, JASP/jamovi, G*Power, ChatGPT ADA/Claude.

## Ethics
De-identify data, keep raw data read-only, never upload personal/unpublished data to AI, and re-verify AI outputs with real tools.`},{id:"data-visualization",categoryId:"research-writing",nameKo:"데이터 시각화 & 결과 해석 가이드",nameEn:"Data Visualization & Interpretation Guide",type:"guide",contentKo:`## 데이터 시각화 & 결과 해석 완전 가이드

Day 1 후반부(시각화·해석) 심화 자료입니다. 시각화 이론에서 출판용 그림 제작, 통계 결과의 학술적 서술(APA)까지 다룹니다.

---

## 1. 시각화의 원칙

- **데이터-잉크 비율(Tufte)**: 정보를 나르지 않는 장식(3D, 그림자, 불필요한 격자)을 제거.
- **정직성**: y축은 원칙적으로 0에서 시작(막대그래프). 축 절단(truncation)은 차이를 과장.
- **비교 용이성**: 정렬·정돈, 색은 의미 있을 때만. **색맹 접근성**(viridis 등 컬러세이프 팔레트) 고려.
- **적정 밀도**: 과밀 산점도는 투명도(alpha)·비닝·2D 밀도로 완화.

---

## 2. 목적별 차트 선택

| 목적/데이터 | 권장 차트 | 피할 것 |
|-------------|-----------|---------|
| 단일 연속변수 분포 | 히스토그램, 밀도, 박스플롯, 바이올린 | 파이차트 |
| 범주별 값 비교 | 막대그래프(정렬), 점그래프 | 3D 막대 |
| 두 연속변수 관계 | 산점도 + 회귀선/신뢰밴드 | — |
| 시간 추세 | 선그래프 | 막대 남용 |
| 집단×연속 비교 | 박스플롯/바이올린 + 개별점(jitter) | 평균만 막대 |
| 상관행렬·다변량 | 히트맵, 페어플롯 | — |
| 비율(부분-전체) | 누적막대, 100%막대 | 파이(항목 다수 시) |

**해석 포인트**: 박스플롯은 중앙값·사분위·이상치를, 바이올린은 분포 형태까지 보여줍니다. **오차막대는 반드시 무엇인지 명시**(표준편차 SD vs 표준오차 SE vs 95% CI) — 서로 크게 다릅니다.

---

## 3. 코드로 그리는 출판용 그림 (Python)

\`\`\`
아래 데이터로 집단별 종속변수를 비교하는 그림을 seaborn으로 그려줘.
- 박스플롯 + 개별 관측치(stripplot, jitter, alpha=0.5)
- 한글 폰트 설정 포함, 제목·축 라벨(단위 포함)
- 색맹 안전 팔레트(colorblind), 300 dpi로 저장하는 코드까지
- 각 줄에 한글 주석
[데이터 붙여넣기]
\`\`\`

\`\`\`
두 변수의 관계를 산점도 + 회귀선 + 95% 신뢰밴드로 그리는 matplotlib/seaborn 코드를 작성하고,
Pearson r과 p값을 그림 주석(annotate)으로 표시해줘.
\`\`\`

**출판 규격 체크리스트**: 벡터(PDF/SVG) 또는 300+ dpi, 흑백 인쇄 가독성, 폰트 크기(축 라벨 최소 8pt), 캡션(그림 번호 + 무엇을 보여주는지 + 표본 수 + 오차막대 정의).

---

## 4. 시각화 도구

- **Python**: matplotlib(정밀 제어), seaborn(통계그래프), plotly(인터랙티브)
- **R**: ggplot2(문법적 그래픽), patchwork(패널 조합)
- **노코드**: Datawrapper·Flourish(웹 퍼블리싱), Excel(빠른 탐색)

---

## 5. 결과 해석과 학술적 서술 (APA)

통계 결과는 **수치 + 방향 + 크기 + 유의성**을 함께 서술합니다.

- t-검정: t(자유도)=값, p=값, Cohen's d=값
  - 예: "실험집단(M=82.4, SD=6.1)이 통제집단(M=76.2, SD=7.0)보다 유의하게 높았다, t(78)=4.21, p<.001, d=0.94(큰 효과)."
- ANOVA: F(df1, df2)=값, p=값, 부분η²=값 + 사후검정 결과
- 상관: r(df)=값, p=값
- 회귀: β(표준화계수), t, p, R²(설명량), F검정

\`\`\`
아래 분석 결과를 논문 '결과' 절 문장으로 작성해줘.
- APA 7판 통계 보고 형식(기호 이탤릭 규칙 설명 포함)
- 방향·효과크기·신뢰구간을 함께 서술
- 과장 없이 객관적으로
결과: [예: 독립표본 t검정, t(78)=4.21, p<.001, d=0.94, 두 집단 평균/표준편차]
\`\`\`

\`\`\`
아래 결과들을 APA 형식 표(Table)로 정리해줘.
- 열: 변수, M, SD, 검정통계량, p, 효과크기
- 표 제목과 주석(note) 규칙도 알려줘
\`\`\`

**해석 시 주의**: 통계적 유의성 ≠ 실질적 중요성. 상관 ≠ 인과. 표본이 크면 사소한 차이도 유의해지므로 효과크기로 실질성을 판단.

---

## 6. 자주 하는 실수 (Do / Don't)

**Do**: 오차막대 종류 명시, 축 범위 정직, 표본 수 표기, 색맹 팔레트, 원자료 기반 재현
**Don't**: y축 절단으로 과장, 파이차트 남용, "유의하므로 중요"라는 비약, 상관을 인과로 서술`,contentEn:`## Complete Guide to Data Visualization & Interpretation

Deep resource for the visualization/interpretation half of Day 1: from design principles to publication-ready figures and APA-style reporting.

## 1. Principles
Maximize data-ink (Tufte); start bar axes at zero; use colorblind-safe palettes (viridis); reduce overplotting with alpha/binning.

## 2. Choosing Charts
Histogram/box/violin (distribution), sorted bars/dot plots (comparison), scatter+regression (relationship), line (trend), heatmap/pairplot (multivariate). Always state what error bars mean (SD vs SE vs 95% CI).

## 3. Publication Figures (Python)
Use seaborn/matplotlib for boxplot+jittered points, scatter+regression+CI band; export at 300+ dpi or vector; include full captions (figure number, content, n, error-bar definition).

## 4. Tools
matplotlib, seaborn, plotly; ggplot2; Datawrapper, Flourish, Excel.

## 5. Interpretation & APA Reporting
Report value + direction + effect size + significance, e.g., t(78)=4.21, p<.001, d=0.94. Provide APA tables. Remember: significance is not importance; correlation is not causation.

## 6. Do / Don't
**Do**: label error bars, honest axes, report n, colorblind palettes. **Don't**: truncate axes to exaggerate, overuse pie charts, equate significance with importance.`},{id:"paper-writing",categoryId:"research-writing",nameKo:"AI 논문작성 가이드",nameEn:"AI Academic Writing Guide",type:"guide",contentKo:`## AI 논문작성 완전 가이드

Day 2(논문작성, 8시간) 전 과정 심화 자료입니다. 학술 글쓰기 구조(IMRaD), 체계적 문헌검토, 섹션별 집필법, 학술 영어, 투고·심사 대응, 연구윤리를 AI 활용과 함께 다룹니다.

---

## 1. 학술 논문의 구조 (IMRaD)

- **Title/Abstract**: 논문의 얼굴. 구조화 초록(배경·목적·방법·결과·결론).
- **Introduction**: 넓은 배경 → 선행연구 → 연구 공백(gap) → 목적/가설. **CARS 모델**(Create A Research Space): ①연구 영역 설정 ②틈새 확립 ③틈새 점유.
- **Methods**: 재현 가능하도록 상세히(참여자, 설계, 측정도구·신뢰도, 절차, 분석). 과거시제·수동태 관례.
- **Results**: 해석 없이 사실만. 표·그림 + 통계 보고(APA).
- **Discussion**: 핵심 발견 요약 → 선행연구와 비교·해석 → 이론적·실무적 함의 → **한계** → 후속연구 → 결론.

---

## 2. 문헌 검토 (Literature Review)

### 2.1 검색 전략
- 핵심 개념을 키워드로 분해 → **불리언 연산자**(AND/OR/NOT), 절단(truncation, 예: educat*), 구문검색
- DB: RISS·KCI(국내), Web of Science·Scopus·Google Scholar·PubMed(국제)
- 포함/배제 기준 사전 정의. 체계적 고찰은 **PRISMA 흐름도**(식별→선별→적격성→포함)로 문서화.

### 2.2 문헌 관리·종합
- 인용관리 도구: **Zotero(무료)**·EndNote·Mendeley로 서지·인용 자동화
- **문헌 매트릭스**(저자·연도·이론·표본·방법·주요결과·한계)로 종합 → 주제별로 통합 서술(단순 나열 금지)

\`\`\`
아래 첨부 논문들을 문헌 매트릭스로 정리해줘.
- 열: 저자(연도), 이론적 틀, 표본, 연구방법, 주요 결과, 한계
- 공통된 연구 공백(gap) 3가지와, 내 연구가 메울 지점을 제안
- 국문/영문 추가 검색 키워드 조합도 제시
[논문 PDF 여러 편 첨부]
\`\`\`

---

## 3. 섹션별 집필 전략

### 3.1 Introduction
funnel 구조(넓게→좁게). 마지막 문단에 연구목적·질문·가설을 명시.
\`\`\`
아래 주제로 서론을 CARS 모델에 따라 구성해줘.
- 1문단: 연구 영역의 중요성(근거·통계 포함)
- 2문단: 선행연구 흐름 요약
- 3문단: 연구 공백 확립
- 4문단: 본 연구의 목적·질문·기여
각 문단 첫 문장(topic sentence)을 제시하고, 근거 없는 단정은 피해줘.
주제: [입력]
\`\`\`

### 3.2 Methods
\`\`\`
아래 정보로 '연구방법' 절 초안을 작성해줘. 재현 가능하도록:
- 참여자(모집·표본크기 근거·인구통계)
- 측정도구(출처·신뢰도 Cronbach's alpha)
- 절차(시간 순서)
- 분석 계획(사용 검정·소프트웨어·유의수준)
과거시제로 작성해줘.
[연구 정보 입력]
\`\`\`

### 3.3 Results & Discussion
\`\`\`
결과 요약을 줄 테니 논의(Discussion)를 구성해줘.
(1) 핵심 발견 재진술 (2) 선행연구와 일치/불일치 해석 (3) 이론적·실무적 함의
(4) 연구의 한계(표본·설계·측정) (5) 후속연구 제언
각 문단 topic sentence를 제시하고, 결과를 과대해석하지 마.
\`\`\`

---

## 4. 학술 영어 문체

- **Hedging(단정 완화)**: may, suggest, appear to, is likely to — 과학적 겸손. 반대로 근거 확실하면 명확히.
- **명사화·수동태**: 방법·결과에서 관례적이나 과도하면 가독성 저하.
- **응집성(cohesion)**: 접속표현(however, moreover, in contrast), 지시어로 문장 연결.
- **자주 틀리는 것**: 관사(a/an/the), 시제(선행연구=현재/과거완료, 방법·결과=과거), 단복수, 콜로케이션.

\`\`\`
다음 문단을 국제 학술지 수준의 영어로 교정해줘.
- 문법·관사·시제·단복수 교정
- 적절한 hedging 적용, 과장 축소
- 응집성(연결어) 개선
- 무엇을 왜 고쳤는지 표(원문/수정/사유)로 정리
[문단 붙여넣기]
\`\`\`

---

## 5. 초록·키워드·투고

\`\`\`
본문을 바탕으로 구조화 영문 초록을 작성해줘.
- 250단어 이내, 배경·목적·방법·결과(수치 포함)·결론 순
- 검색 최적화된 키워드 5개(본문에 안 나온 동의어 포함)
\`\`\`

**투고 전략**: 목표 저널의 Aim & Scope 부합 확인, 영향력지표(JCR/SJR)와 게재 소요·오픈액세스 정책 고려, **약탈적 저널(predatory)** 주의. 저자 가이드라인(형식·인용 스타일 APA/IEEE 등) 준수.

\`\`\`
내 논문 초록/키워드/분야를 줄 테니 적합한 투고 저널 후보와 각 저널의 Scope 부합 이유,
그리고 커버레터(cover letter) 초안을 작성해줘.
\`\`\`

**심사 대응**: 리뷰어 지적에 point-by-point로 정중히 응답, 반영 사항은 수정본 위치 명시, 이견은 근거로 반박.

---

## 6. 인용·표절·연구윤리 (필수)

- **인용/표절**: 직접인용은 따옴표+출처, 간접인용도 반드시 출처. 자기표절·중복게재 금지.
- **저자됨(authorship)**: ICMJE 기준(기여·승인·책임). 유령/선물 저자 금지.
- **AI 사용 명시**: COPE·ICMJE 지침상 **생성형 AI는 저자가 될 수 없으며**, 사용 사실(도구·범위)을 방법/사사에 밝혀야 합니다. 다수 저널이 요구.
- **환각(hallucination) 검증**: AI가 만든 인용·수치·출처는 반드시 원문 대조. 존재하지 않는 참고문헌 삽입 사고 빈발.
- **데이터**: 미공개 연구데이터·개인정보를 AI에 입력 금지.

---

## 추천 도구

- **문헌**: RISS, Google Scholar, Web of Science, Zotero
- **작성·교정**: 전남대GPT, ChatGPT, Claude, Grammarly, DeepL Write
- **다논문 분석**: NotebookLM
- **표절 검사**: Turnitin, ithenticate`,contentEn:`## Complete Guide to AI-Assisted Academic Writing

Deep resource for Day 2 (Academic Writing, 8h): IMRaD structure, systematic literature review, section-by-section drafting, academic English, submission/review, and research ethics.

## 1. IMRaD Structure
Title/Abstract, Introduction (CARS model: territory, niche, occupying), Methods (reproducible), Results (facts only), Discussion (findings, comparison, implications, limitations, conclusion).

## 2. Literature Review
Boolean search with truncation; databases (RISS, Web of Science, Scopus, Google Scholar); PRISMA flow for systematic reviews; manage with Zotero/EndNote; synthesize via a literature matrix (not a list).

## 3. Section-by-Section Drafting
Introduction as a funnel; Methods in past tense with reproducible detail (participants, instruments/reliability, procedure, analysis); Results with APA stats; Discussion linking findings to prior work with limitations.

## 4. Academic English
Use hedging (may, suggest), manage nominalization/passive, ensure cohesion; watch articles, tense, number, collocations.

## 5. Abstract, Keywords & Submission
Structured <=250-word abstract; SEO keywords; match journal scope; beware predatory journals; respond to reviewers point-by-point.

## 6. Citation, Plagiarism & Ethics (Essential)
Always cite; follow ICMJE authorship; per COPE/ICMJE, AI cannot be an author and its use must be disclosed; verify AI-generated citations (hallucination risk); never input unpublished/personal data.

## Tools
RISS, Google Scholar, Zotero, ChatGPT/Claude, Grammarly, DeepL Write, NotebookLM, Turnitin.`},{id:"excel-automation",categoryId:"data-budget",nameKo:"Excel 수식 자동화",nameEn:"Excel Formula Automation",type:"guide",contentKo:`## AI를 활용한 Excel 업무 자동화

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
**Do**: run and verify AI-generated code, re-check figures. **Don't**: input participants' personal or unpublished data; disclose AI use per policy.`}];export{m as M,p as a,u as m};
