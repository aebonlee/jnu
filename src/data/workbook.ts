/**
 * 과정별 실습 워크북 — 학습자료를 '기반'으로 한 확장 실습(기본→응용→심화).
 * 자료의 예제를 반복하지 않고, 손으로 재현→내 업무 적용→통합 프로젝트로 난이도를 올린다.
 * 각 과정 사이드바 '실습 워크북' 드롭다운에 표시.
 */
export interface WorkbookModule {
  id: string;
  titleKo: string;
  titleEn: string;
  contentKo: string;
  contentEn: string;
}

export const WORKBOOK: Record<string, WorkbookModule[]> = {
  // ─────────────────────────────────────────────
  // 1) 생성형 AI 기초·심화
  //    (학습자료: 역할 기반 프롬프트 / RCF 프레임워크 / 단계적 프롬프트 / 각 툴 활용법)
  // ─────────────────────────────────────────────
  foundation: [
    {
      id: 'fd-basic',
      titleKo: '기본편 · 배운 기법 손에 익히기',
      titleEn: 'Basic · Drill the Techniques',
      contentKo: `> **기반 자료**: 「역할 기반 프롬프트」·「RCF 프레임워크」·「단계적 프롬프트」
> **목표**: 자료에서 *읽은* 기법을 한 작업에 **직접 순서대로 적용**하며 체감한다.

하나의 과제("부서 워크숍 안내문")를 기법 단계마다 다시 요청하며 결과 변화를 관찰하세요.

### 과제 1 — 역할만 부여 (자료: 역할 기반 프롬프트)
\`\`\`
너는 대학 행정 15년 경력 담당자야. 부서 워크숍 안내문을 써줘.
\`\`\`

### 과제 2 — RCF 틀 적용 (Role·Context·Format)
\`\`\`
[역할] 대학 행정 담당자
[맥락] 다음 주 금요일 오후, 부서원 20명 대상 워크숍 안내
[형식] 정중한 존댓말, 개조식, 일시·장소·준비물·회신방법 포함, 공백 400자 이내
위 조건으로 워크숍 안내문을 써줘.
\`\`\`

### 과제 3 — 단계적 사고 덧붙이기 (CoT)
\`\`\`
위 안내문을 쓰기 전에, 참석률을 높이려면 어떤 요소가 필요한지 먼저 3가지 정리하고,
그 근거를 반영해 안내문을 다시 써줘.
\`\`\`

> **확인**: 과제 1→3으로 갈수록 결과가 어떻게 정교해지나요? 자료에서 배운 **역할·RCF·단계적 사고**가 실제로 품질을 바꾸는지 비교하세요.`,
      contentEn: `> **Based on**: "Role-based Prompting", "RCF Framework", "Chain of Thought"
> **Goal**: apply the techniques you *read about* to one task, in order.

### Task 1 — role only
\`\`\`
You are a 15-year admin officer. Write a department workshop notice.
\`\`\`
### Task 2 — RCF (Role·Context·Format)
\`\`\`
[Role] admin officer [Context] next Fri PM, 20 staff [Format] polite, 개조식, when/where/prep/RSVP, <400 chars.
\`\`\`
### Task 3 — add reasoning (CoT)
\`\`\`
Before writing, list 3 factors that raise attendance, then rewrite the notice reflecting them.
\`\`\`
> **Check**: how does quality sharpen from Task 1→3?`,
    },
    {
      id: 'fd-applied',
      titleKo: '응용편 · 내 업무에 적용',
      titleEn: 'Applied · Apply to Your Work',
      contentKo: `> **기반 자료**: 「ChatGPT·Claude·Gemini 활용법」·「AI 서비스 비교」
> **목표**: 자료의 기법을 **내가 실제로 다루는 문서·자료**에 적용·변형한다.

### 과제 1 — 내 문서로 3종 톤 변형
자신이 최근 쓴 공문/메일을 붙여넣고:
\`\`\`
이 글을 정중한 버전·간결한 버전·친근한 버전 3가지로 다시 써줘.
각 버전이 어떤 상황에 맞는지 한 줄로 설명도 붙여서.
\`\`\`

### 과제 2 — 파일 근거로만 답하게 (환각 줄이기)
규정·매뉴얼 PDF를 업로드하고:
\`\`\`
첨부 문서에 근거해서만 답해줘. 없는 내용은 "문서에 없음"이라 표시하고 근거 조항도 함께.
[질문] (내 업무 관련 질문)
\`\`\`

### 과제 3 — 도구 골라 쓰기 (자료: AI 서비스 비교)
\`\`\`
"최신 정보가 필요한 조사"와 "긴 규정 문서 요약"에는 각각 어떤 성격의 모델이 맞는지
이유와 함께 추천해줘. (부록 'AI 모델 고르기' 참고)
\`\`\`

> **확인**: 같은 기법도 **내 업무 맥락**을 넣으면 결과가 확 좋아집니다. 규정·수치는 반드시 원문 재확인.`,
      contentEn: `> **Based on**: "ChatGPT/Claude/Gemini guides", "AI Service Comparison"
> **Goal**: apply/adapt the techniques to documents you actually handle.

### Task 1 — 3 tones of your own text
\`\`\`
Rewrite this in polite / concise / friendly versions; add a one-line fit for each.
\`\`\`
### Task 2 — answer only from a file
\`\`\`
Answer only from the attachment; mark missing info and cite clauses. [Q] (your question)
\`\`\`
### Task 3 — pick the right tool
\`\`\`
For "fresh-info research" vs "long-rule summary", which model type fits and why?
\`\`\``,
    },
    {
      id: 'fd-adv',
      titleKo: '심화편 · 나만의 AI 업무 세팅',
      titleEn: 'Advanced · Your Own AI Setup',
      contentKo: `> **기반 자료**: 전 자료 종합
> **목표**: 반복 업무를 **한 번 세팅해 계속 쓰는** 워크플로우로 만든다.

### 과제 1 — 맞춤 지침 설계 (프로젝트/맞춤GPT)
\`\`\`
[역할] 우리 부서 행정 도우미
[규칙] 항상 존댓말·개조식, 근거 조항 제시, 민감정보는 가림 권고
[출력] 문서 요청 시 제목→본문→체크리스트 순
이 지침을 저장용으로 다듬어줘.
\`\`\`

### 과제 2 — 자가검증 루프 (생성→검토→개선)
\`\`\`
아래 업무를 초안 작성하고, 스스로 오류·근거 부족을 검토한 뒤, 개선한 최종본까지 한 번에 줘.
[업무] (예: 회의 결과 공지)
\`\`\`

### 과제 3 — 반복업무 템플릿화
자주 하는 업무 하나를 골라:
\`\`\`
이 업무를 매번 빠르게 처리할 수 있는 '재사용 프롬프트 템플릿'으로 만들어줘.
바꿔 넣을 부분은 [ ]로 표시해서.
\`\`\`

> **아카데믹 포인트**: 좋은 도구화의 핵심은 **일관성(지침)+검증(자가검토)+재현(템플릿)**. AI는 초안 생성기이고, 최종 판단·사실 확인은 사람의 몫입니다.`,
      contentEn: `> **Based on**: all materials combined
> **Goal**: turn repetitive work into a set-once, reuse workflow.

### Task 1 — custom instructions
\`\`\`
[Role] dept admin helper [Rules] polite, 개조식, cite clauses, mask sensitive data. Refine for saving.
\`\`\`
### Task 2 — self-check loop
\`\`\`
Draft this, self-review for errors/weak evidence, then give the improved final — in one go.
\`\`\`
### Task 3 — templatize
\`\`\`
Turn this recurring task into a reusable prompt template; mark variables with [ ].
\`\`\`
> **Academic**: good tooling = consistency + verification + reproducibility; humans make the final call.`,
    },
  ],

  // ─────────────────────────────────────────────
  // 2) 데이터분석 & 논문작성  (핵심 강화)
  //    (학습자료: 연구 데이터 분석 가이드 / 데이터 시각화 & 결과 해석 / AI 논문작성 가이드)
  // ─────────────────────────────────────────────
  'research-writing': [
    {
      id: 'rw-basic',
      titleKo: '기본편 · 데이터 정리 직접 해보기',
      titleEn: 'Basic · Clean Data Yourself',
      contentKo: `> **기반 자료**: 「연구 데이터 분석 가이드」
> **목표**: 자료에서 *읽은* 정리 절차를 **내 데이터(또는 제공 표)로 직접 손을 움직여** 재현한다.

가이드는 '왜/무엇을'을 다뤘습니다. 여기서는 **실제로 정리**합니다.

### 과제 1 — 내 표로 결측·이상치·중복 찾기
엑셀 표 일부를 복사해 붙여넣고:
\`\`\`
아래 표에서 결측치·이상치·중복 의심 행을 찾아 표로 정리하고,
각각 (삭제/대치/유지) 중 무엇이 적절한지 근거와 함께 제안해줘.
[표 붙여넣기 — 없으면 임의의 설문 표를 만들어줘라고 요청]
\`\`\`

### 과제 2 — 변수 코드북 만들기
\`\`\`
이 데이터의 분석용 코드북을 만들어줘.
[열] 변수명(snake_case) | 문항내용 | 유형(연속/범주) | 값 라벨 | 결측 코드
\`\`\`

### 과제 3 — 기술통계 산출·해석
\`\`\`
정리된 데이터의 기술통계(평균·중앙값·표준편차·분포)를 표로 내고,
숫자에서 읽히는 특징 3가지를 근거와 함께 설명해줘.
\`\`\`

> **아카데믹 포인트**: 결측 처리·이상치 판정은 결과를 바꿉니다. AI 제안은 초안, **처리 방법과 근거는 연구자가 결정·기록**(재현성).`,
      contentEn: `> **Based on**: "Research Data Analysis Guide"
> **Goal**: hands-on reproduce the cleaning steps you *read about*, on your own data.

### Task 1 — find missing/outlier/duplicate
\`\`\`
Find suspect rows in the table; propose delete/impute/keep with reasons. [paste table]
\`\`\`
### Task 2 — codebook
\`\`\`
Build a codebook: variable(snake_case) | item | type | value labels | missing code.
\`\`\`
### Task 3 — descriptives
\`\`\`
Produce descriptives as a table and explain 3 features with figures.
\`\`\`
> **Academic**: cleaning decisions change results — researcher decides & documents.`,
    },
    {
      id: 'rw-applied',
      titleKo: '응용편 · 시각화 + 문헌 확장',
      titleEn: 'Applied · Charts + Literature',
      contentKo: `> **기반 자료**: 「데이터 시각화 & 결과 해석 가이드」 + 1일차 ConnectedPapers 안내
> **목표**: 정리한 데이터를 **시각화**하고, 관련 **문헌을 탐색·정리**해 분석을 뒷받침한다.

### 과제 1 — 그래프 '선택' 후 제작
바로 그리지 말고 근거부터:
\`\`\`
이 데이터로 "집단 간 차이"를 보여주려면 어떤 그래프가 적절한지 후보 2~3개를 장단점과 함께 추천하고,
고른 그래프를 엑셀(또는 파이썬 matplotlib)로 그리는 방법을 단계별로 알려줘.
\`\`\`

### 과제 2 — ConnectedPapers 문헌 지도
\`\`\`
내 주제의 대표 논문(seed) 후보 3편을 제목·저자·연도로 추천하고, 각 논문이 왜 중요한지 한 줄로.
\`\`\`
→ 추천 seed 제목을 [ConnectedPapers](https://www.connectedpapers.com/)에 넣어 **문헌 지도**를 확인(연결이 굵을수록 관련성↑).

### 과제 3 — 문헌 매트릭스
지도에서 고른 논문 요약을 붙여:
\`\`\`
이 논문들을 "저자(연도) | 연구질문 | 방법 | 표본 | 주요 결과 | 한계" 표로 비교해줘.
\`\`\`

> **아카데믹 포인트**: 시각화는 **메시지**에 맞춰 고르고, 문헌 AI 요약은 **원문 확인 전 초안**(환각 주의). ConnectedPapers는 탐색용, 판단은 연구자.`,
      contentEn: `> **Based on**: "Data Visualization Guide" + Day-1 ConnectedPapers
> **Goal**: visualize your cleaned data and organize supporting literature.

### Task 1 — choose then draw
\`\`\`
Recommend 2-3 chart options for "group differences" with pros/cons, then how to draw the chosen one (Excel/matplotlib).
\`\`\`
### Task 2 — ConnectedPapers map
\`\`\`
Suggest 3 seed papers (title/author/year) for my topic and why each matters.
\`\`\`
Paste the seed into ConnectedPapers to see the graph.
### Task 3 — literature matrix
\`\`\`
Compare papers: Author(Year) | RQ | Method | Sample | Findings | Limits.
\`\`\`
> **Academic**: pick charts by message; verify AI summaries against originals.`,
    },
    {
      id: 'rw-adv',
      titleKo: '심화편 · 미니 연구 프로젝트 (통합)',
      titleEn: 'Advanced · Mini Research Project',
      contentKo: `> **기반 자료**: 「AI 논문작성 가이드」 + 기본·응용편 결과
> **목표**: 데이터→통계→시각화→문헌을 **하나의 연구 흐름으로 통합**해 논문/보고서 뼈대까지 만든다.

### 과제 1 — 데이터에서 연구질문 도출
기본·응용편 결과를 붙여:
\`\`\`
위 분석 결과와 문헌 매트릭스를 근거로, 검증 가능한 연구질문 3개를 FINER 기준으로 도출하고
각 질문의 독립·종속 변수를 제시해줘.
\`\`\`

### 과제 2 — 논문/보고서 구조(IMRaD)
\`\`\`
이 연구질문으로 IMRaD(서론-방법-결과-논의) 목차를 잡고, 각 절에 무엇을 쓸지 1~2줄 가이드를 붙여줘.
(논문이 아니면 '분석 보고서' 구조로)
\`\`\`

### 과제 3 — 서론 초안 → 심사 관점 비평 → 개선
\`\`\`
연구의 필요성과 공백을 담은 서론을 학술적 문체(번역투 없이, 능동형)로 써줘.
\`\`\`
이어서:
\`\`\`
방금 서론을 냉정한 심사위원 입장에서 약점만 지적하고, 그 지적을 반영해 다시 써줘.
\`\`\`

> **아카데믹 포인트**: AI는 구조화·표현을 돕는 도구입니다. **근거·데이터 해석·인용의 진위**는 연구자 책임이며, 학회/기관의 **AI 사용 지침**을 확인하고 필요시 명시하세요.`,
      contentEn: `> **Based on**: "AI Paper-writing Guide" + Basic/Applied results
> **Goal**: integrate data→stats→charts→literature into a paper/report skeleton.

### Task 1 — RQ from data
\`\`\`
From the analysis + literature matrix, derive 3 testable RQs (FINER) with variables.
\`\`\`
### Task 2 — IMRaD outline
\`\`\`
Outline in IMRaD with a 1-2 line guide per section (or 'analysis report' structure).
\`\`\`
### Task 3 — intro → critique → revise
\`\`\`
Write an academic intro (active, no translationese). Then: critique it as a harsh reviewer and rewrite.
\`\`\`
> **Academic**: AI aids structure/wording; evidence & citation integrity are the researcher's.`,
    },
  ],

  // ─────────────────────────────────────────────
  // 3) 데이터분석 & 예산회계
  //    (학습자료: Excel 수식 자동화 / 예산·회계 실무 가이드 / 데이터 분석 기초)
  // ─────────────────────────────────────────────
  'data-budget': [
    {
      id: 'db-basic',
      titleKo: '기본편 · 수식·집계 직접 만들기',
      titleEn: 'Basic · Build Formulas',
      contentKo: `> **기반 자료**: 「Excel 수식 자동화」·「데이터 분석 기초」
> **목표**: 자료에서 본 수식을 **내 표에 직접 적용·검산**한다.

### 과제 1 — 집계 수식 받아 적용
\`\`\`
[맥락] A열=부서, B열=집행액. [요청] 부서별 합계 수식을 알려주고, 각 인자의 의미와 작동을 예시로 설명해줘.
\`\`\`
→ 실제 엑셀에 넣어 **소계 합이 원본과 맞는지 검산**.

### 과제 2 — 조건 집계·조회
\`\`\`
"특정 부서 & 특정 월" 합산(SUMIFS)과 품목 단가 조회(XLOOKUP) 수식을 예시와 함께 알려줘.
\`\`\`

### 과제 3 — 오류 잡기
\`\`\`
이 수식에서 #N/A(또는 #REF!)가 나. 원인과 수정 방법을 알려줘. [수식/상황 붙여넣기]
\`\`\`

> **아카데믹 포인트**: 자동 생성 수식도 **작은 샘플로 검산**하는 습관이 데이터 무결성을 지킵니다.`,
      contentEn: `> **Based on**: "Excel Formula Automation", "Data Analysis Basics"
> **Goal**: apply/verify the guide's formulas on your own table.

### Task 1 — aggregate
\`\`\`
[Context] A=dept, B=spend. Give the dept-total formula + meaning + how it works.
\`\`\`
### Task 2 — conditional aggregate/lookup
\`\`\`
Give SUMIFS (dept & month) and XLOOKUP (unit price) with examples.
\`\`\`
### Task 3 — fix errors
\`\`\`
This formula throws #N/A/#REF! — cause and fix?
\`\`\`
> **Academic**: verify generated formulas on a small sample.`,
    },
    {
      id: 'db-applied',
      titleKo: '응용편 · 예산·정산 표 & 분석',
      titleEn: 'Applied · Budget Tables',
      contentKo: `> **기반 자료**: 「예산·회계 실무 가이드」
> **목표**: 내 부서 상황으로 **예산 편성·정산 표를 만들고 실적을 분석**한다.

### 과제 1 — 예산 편성 표
\`\`\`
행사 예산안을 "항목|산출근거|단가|수량|금액|비고" 표로, 합계 행과 예비비 5% 포함해 만들어줘.
\`\`\`

### 과제 2 — 예산 대비 실적 분석
\`\`\`
아래 예산 대비 집행 실적에서 증감 큰 항목 3개와 이유(추정), 차년도 시사점을 정리해줘. [표 붙여넣기]
\`\`\`

### 과제 3 — 경영진용 한 줄 코멘트
\`\`\`
이 실적 표 각 항목에 "1분에 파악할" 해석 코멘트를 담백하게 달아줘.
\`\`\`

> **아카데믹 포인트**: 회계 숫자는 AI 답을 초안으로만. **규정·산출근거·합계는 원자료로 검증**하고 근거 없는 수치는 넣지 않습니다.`,
      contentEn: `> **Based on**: "Budget & Accounting Guide"
> **Goal**: build budget/settlement tables and analyze actuals for your unit.

### Task 1 — budget table
\`\`\`
Make an event budget: Item|Basis|Unit|Qty|Amount|Note; total row + 5% contingency.
\`\`\`
### Task 2 — vs actuals
\`\`\`
Find 3 big variances with reasons and next-year implications. [paste]
\`\`\`
### Task 3 — exec comments
\`\`\`
Add a plain one-line interpretation per item.
\`\`\`
> **Academic**: verify rules/basis/totals against source data.`,
    },
    {
      id: 'db-adv',
      titleKo: '심화편 · 규정 확인 + 업무 자동화',
      titleEn: 'Advanced · Rules + Automation',
      contentKo: `> **기반 자료**: 전 자료 + 규정 문서
> **목표**: 규정을 근거로 확인하고, 반복 업무를 **자동화 시나리오로 설계**하는 실무를 통합한다.

### 과제 1 — 규정 요약(근거 포함) → 체크리스트
\`\`\`
첨부 규정에서 실무 핵심만 쉽게 요약하되 근거 조항 번호를 함께 표시하고,
그걸 담당자용 체크리스트로 만들어줘. 빠뜨리기 쉬운 항목엔 (주의).
\`\`\`

### 과제 2 — 자동화 설계(Apps Script)
\`\`\`
매주 부서별 지출 시트를 자동 취합·정리하고 싶어. 구글 Apps Script로 단계별 설계 + 코드를 줘.
\`\`\`

### 과제 3 — 효과 정리
\`\`\`
자동화 전/후의 소요 시간·오류 가능성을 표로 비교해 개선 효과를 정리해줘.
\`\`\`

> **아카데믹 포인트**: 규정 해석의 **최종 판단은 사람**. 자동화 코드는 소규모로 시험하고, 개인정보 데이터는 교내 정책을 따르세요.`,
      contentEn: `> **Based on**: all materials + rule documents
> **Goal**: verify against rules and design automation for repetitive work.

### Task 1 — rule summary → checklist
\`\`\`
Summarize practitioner essentials with clause numbers; turn into a checklist, mark easily-missed items.
\`\`\`
### Task 2 — automation (Apps Script)
\`\`\`
Design a weekly dept-spend collector in Google Apps Script, with code.
\`\`\`
### Task 3 — impact
\`\`\`
Compare before/after time & error risk as a table.
\`\`\`
> **Academic**: humans make the final rule call; test small; follow PII policy.`,
    },
  ],

  // ─────────────────────────────────────────────
  // 4) 연구 & 실험지원
  //    (학습자료: 연구 설계 가이드 / 실험 프로토콜 & 데이터 관리 / 분석 코드 & 연구윤리)
  // ─────────────────────────────────────────────
  'research-lab': [
    {
      id: 'rl-basic',
      titleKo: '기본편 · 내 주제로 연구질문·설계',
      titleEn: 'Basic · Your Question & Design',
      contentKo: `> **기반 자료**: 「연구 설계 가이드」
> **목표**: 자료의 설계 틀을 **내 관심 주제로 직접 채운다.**

### 과제 1 — 질문 정련(FINER)
\`\`\`
"(내 관심 주제)"를 검증 가능한 연구질문으로 좁혀줘. FINER 기준 3개, 각 질문의 변수와 대상도.
\`\`\`

### 과제 2 — 설계 유형 선택
\`\`\`
위 질문 검증에 실험/준실험/설문/사례연구 중 무엇이 적절한지 장단점과 함께 추천하고, 표본 수 추정 방법도.
\`\`\`

### 과제 3 — 변수·측정 정의
\`\`\`
독립·종속·통제 변수를 정의하고 각 변수의 측정 방법(척도·도구)을 표로 정리해줘.
\`\`\`

> **아카데믹 포인트**: 설계의 질은 **교란변수 통제·재현 가능성**에서 갈립니다. 타당성 판단은 연구자·지도교수의 몫.`,
      contentEn: `> **Based on**: "Research Design Guide"
> **Goal**: fill the design framework with your own topic.

### Task 1 — refine (FINER)
\`\`\`
Narrow "(my topic)" into 3 testable RQs (FINER), with variables and subjects.
\`\`\`
### Task 2 — pick a design
\`\`\`
Experiment/quasi/survey/case — which fits with pros/cons; how to estimate sample size.
\`\`\`
### Task 3 — variables & measures
\`\`\`
Define independent/dependent/control variables and measurement as a table.
\`\`\``,
    },
    {
      id: 'rl-applied',
      titleKo: '응용편 · 프로토콜 & 데이터 관리',
      titleEn: 'Applied · Protocol & Data',
      contentKo: `> **기반 자료**: 「실험 프로토콜 & 데이터 관리 가이드」
> **목표**: 설계를 **실행 가능한 프로토콜과 데이터 기록 체계**로 구체화한다.

### 과제 1 — 프로토콜 초안
\`\`\`
위 설계로 실험 프로토콜 초안을 만들어줘. [포함] 목적·대상·절차(단계)·측정 시점·중단 기준·필요 장비.
\`\`\`

### 과제 2 — 데이터 기록 양식
\`\`\`
원자료 기록 표를 설계해줘. [열] 대상ID|조건|측정시점|변수들|비고. 입력 규칙(단위·결측 표기)도.
\`\`\`

### 과제 3 — 데이터 관리 계획(DMP)
\`\`\`
연구 데이터 관리 계획 체크리스트를 만들어줘: 저장·백업·익명화·보관기간·공유 범위.
\`\`\`

> **아카데믹 포인트**: **원자료 보존·버전관리·익명화**는 연구 무결성의 기본. 민감정보는 최소 수집·가명 처리, IRB/교내 규정 준수.`,
      contentEn: `> **Based on**: "Protocol & Data Management Guide"
> **Goal**: turn the design into an executable protocol and recording scheme.

### Task 1 — protocol draft
\`\`\`
Draft a protocol: purpose, subjects, procedure, timing, stop criteria, equipment.
\`\`\`
### Task 2 — recording sheet
\`\`\`
Design a raw-data table: ID|Condition|Timepoint|variables|note; entry rules.
\`\`\`
### Task 3 — DMP
\`\`\`
DMP checklist: storage, backup, anonymization, retention, sharing.
\`\`\``,
    },
    {
      id: 'rl-adv',
      titleKo: '심화편 · 분석 계획 + 연구윤리 (통합)',
      titleEn: 'Advanced · Analysis + Ethics',
      contentKo: `> **기반 자료**: 「분석 코드 & 연구윤리 가이드」 + 기본·응용편
> **목표**: 분석 계획·코드·윤리 점검을 **하나의 연구 계획서로 통합**한다.

### 과제 1 — 분석 계획(가정 포함)
\`\`\`
(내 데이터 형태, 예: 두 집단 사전/사후 점수)를 분석하려면 어떤 통계가 적절한지 가정과 함께 추천하고 검정 순서를 알려줘.
\`\`\`

### 과제 2 — 분석 코드
\`\`\`
위 분석을 파이썬(또는 R) 코드로 주석과 함께 만들어줘. 각 단계가 무엇을 검증하는지 설명도.
\`\`\`

### 과제 3 — 연구윤리 점검
\`\`\`
이 연구의 윤리 체크리스트를 만들어줘: IRB 필요 여부·동의서·개인정보·표절/이해상충·생성형 AI 사용 명시 방법.
\`\`\`

> **아카데믹 포인트**: 통계의 **가정 위배**(정규성·등분산 등)를 확인하지 않으면 결과가 왜곡됩니다. 논문·보고서에 **AI 사용 방식**을 지침에 맞게 밝히는 것이 최근 기준.`,
      contentEn: `> **Based on**: "Analysis Code & Research Ethics Guide" + Basic/Applied
> **Goal**: integrate analysis plan, code, and ethics into one research plan.

### Task 1 — analysis plan
\`\`\`
For my data (e.g., two-group pre/post), recommend statistics with assumptions and a test order.
\`\`\`
### Task 2 — code
\`\`\`
Write Python (or R) with comments; explain what each step tests.
\`\`\`
### Task 3 — ethics checklist
\`\`\`
Ethics checklist: IRB, consent, privacy, plagiarism/COI, GenAI-use disclosure.
\`\`\`
> **Academic**: unchecked assumption violations distort results; disclose AI use per guidelines.`,
    },
  ],
};

export function getWorkbook(programId: string): WorkbookModule[] {
  return WORKBOOK[programId] || [];
}
