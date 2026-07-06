/**
 * 과정별 실습 워크북 — 단계별 따라하기(복사용 프롬프트) 중심의 실습 자료.
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
  // ─────────────────────────────────────────────
  foundation: [
    {
      id: 'fd-wb1',
      titleKo: '실습 1 · 프롬프트 4요소',
      titleEn: 'Lab 1 · The 4 Prompt Parts',
      contentKo: `> **학습 목표**: 같은 질문도 [역할]+[맥락]+[요청]+[형식]을 갖추면 결과가 어떻게 달라지는지 직접 확인한다.
> **준비물**: 전남대GPT 로그인, 이 페이지의 프롬프트 복사.

좋은 프롬프트는 **네 가지**로 이루어집니다. 아래를 순서대로 실습하세요.

### 1단계 — 맨몸으로 물어보기 (대조군)
먼저 아무 조건 없이 물어봅니다. 결과를 기억해 두세요.
\`\`\`
신입 조교에게 보낼 업무 안내 메일 써줘.
\`\`\`

### 2단계 — 역할을 준다
\`\`\`
너는 대학 행정 15년 경력 담당자야. 신입 조교에게 보낼 업무 안내 메일을 써줘.
\`\`\`

### 3단계 — 맥락을 더한다
\`\`\`
너는 대학 행정 15년 경력 담당자야.
[상황] 이번 주 임용된 신입 조교 3명에게 첫 출근 안내를 보낸다.
신입 조교에게 보낼 업무 안내 메일을 써줘.
\`\`\`

### 4단계 — 형식·조건을 못 박는다
\`\`\`
너는 대학 행정 15년 경력 담당자야.
[상황] 이번 주 임용된 신입 조교 3명에게 첫 출근 안내를 보낸다.
[요청] 첫날 준비물·일정·연락처를 담은 안내 메일을 써줘.
[형식] 정중한 존댓말, 공백 포함 400자 이내, 마지막에 체크리스트 3줄.
\`\`\`

> **확인**: 1→4단계로 갈수록 답이 얼마나 구체적·실무적으로 바뀌었나요? **역할·맥락·형식**을 뺐을 때와 넣었을 때를 비교해 보세요.

**심화 과제** — 위 프롬프트에서 대상을 "학부모"로, 톤을 "따뜻하게"로 바꿔 다시 요청해 보세요. 대상 하나만 바꿔도 결과가 달라집니다.`,
      contentEn: `> **Goal**: See how [Role]+[Context]+[Request]+[Format] transforms the same question.
> **Prep**: Log in to 전남대GPT and copy the prompts.

### Step 1 — Ask bare (control)
\`\`\`
Write an onboarding email for a new TA.
\`\`\`

### Step 2 — Add a role
\`\`\`
You are a 15-year university admin officer. Write an onboarding email for a new TA.
\`\`\`

### Step 3 — Add context, then Step 4 — pin format
\`\`\`
You are a 15-year admin officer. [Context] 3 new TAs start this week.
[Request] first-day items, schedule, contacts. [Format] polite, under 400 chars, end with a 3-line checklist.
\`\`\`

> **Check**: how much more specific did Steps 1→4 get? Compare with/without role & format.

**Extra** — change the audience to "parents" and tone to "warm". One change shifts everything.`,
    },
    {
      id: 'fd-wb2',
      titleKo: '실습 2 · 문서 요약·표 만들기',
      titleEn: 'Lab 2 · Summarize & Tabulate',
      contentKo: `> **학습 목표**: 긴 자료를 요약하고, 엑셀에 붙일 수 있는 표로 정리하는 실무 흐름을 익힌다.
> **준비물**: 요약할 문서(공문·회의록·기사 아무거나) 또는 아래 예시.

### 1단계 — 3단계 요약
긴 자료를 붙여넣고 요청하세요. **세 가지 깊이**로 받아 비교합니다.
\`\`\`
아래 내용을 (1) 한 문장 (2) 핵심 3줄 (3) 실행 항목 목록 — 세 가지로 요약해줘.

[여기에 자료 붙여넣기]
\`\`\`

### 2단계 — 엑셀용 표로 변환
\`\`\`
위 실행 항목을 "항목 | 담당 | 기한 | 우선순위" 4열 표로 정리해줘.
엑셀에 그대로 붙일 수 있게 만들어줘.
\`\`\`

### 3단계 — 한글 안 깨지게 저장
표를 파일로 받을 때 한글이 깨진다면:
\`\`\`
이 표를 엑셀에서 안 깨지게 UTF-8 BOM 포함 CSV로 저장해줘.
\`\`\`
또는 **표를 복사해 엑셀에 붙여넣기**(탭 구분)가 가장 확실합니다.

> **팁**: "표로 정리"는 가장 잘 통하는 요청 중 하나입니다. 비교·정리가 필요하면 항상 열 이름을 직접 지정하세요.

**심화 과제** — 같은 자료를 "임원 보고용 한 페이지"와 "직원 공지용 쉬운 말" 두 버전으로 만들어 비교하세요.`,
      contentEn: `> **Goal**: Summarize long material and turn it into an Excel-ready table.

### Step 1 — 3-depth summary
\`\`\`
Summarize the below in three ways: (1) one sentence (2) 3 key lines (3) action items.
[paste material]
\`\`\`
### Step 2 — to a table
\`\`\`
Turn the action items into a table: Item | Owner | Due | Priority. Make it paste-ready for Excel.
\`\`\`
### Step 3 — no broken Korean
\`\`\`
Save this table as CSV with UTF-8 BOM so Excel doesn't break Korean.
\`\`\`
> **Tip**: "as a table" is one of the most reliable requests — always name the columns.

**Extra** — make an "executive one-pager" and a "plain staff notice" version and compare.`,
    },
    {
      id: 'fd-wb3',
      titleKo: '실습 3 · 파일 활용 & 맞춤 GPT',
      titleEn: 'Lab 3 · Files & Custom GPT',
      contentKo: `> **학습 목표**: 파일을 근거로 답하게 하고(환각 줄이기), 반복 업무용 나만의 설정을 만든다.
> **준비물**: PDF/한글 문서 1개(규정·매뉴얼 등).

### 1단계 — 파일 근거로만 답하게
파일을 업로드한 뒤:
\`\`\`
첨부한 문서에 근거해서만 답해줘. 문서에 없는 내용은 "문서에 없음"이라고 표시하고,
근거가 된 조항·페이지를 함께 알려줘.
[질문] 출장비 정산 기한은 며칠이야?
\`\`\`

### 2단계 — 환각 점검 습관
\`\`\`
방금 답변에서 문서로 확인되지 않은 부분이 있으면 표시해줘.
확실하지 않으면 "불확실"이라고 먼저 밝혀줘.
\`\`\`

### 3단계 — 나만의 맞춤 설정(프로젝트/맞춤GPT)
자주 하는 업무라면 규칙을 한 번 저장해 매번 설명을 줄입니다. 지침 예시:
\`\`\`
[역할] 너는 우리 부서 행정 도우미야.
[규칙] 항상 존댓말, 공문은 개조식, 근거 조항을 함께 제시.
[출력] 요청이 문서 작성이면 제목·본문·체크리스트 순서로.
\`\`\`

> **확인**: 파일 근거 지시가 있을 때와 없을 때, 답의 신뢰도가 어떻게 다른가요? 규정·수치는 **반드시 원문 재확인**이 원칙입니다.

**심화 과제** — 자주 쓰는 업무 프롬프트 3개를 골라 "나만의 템플릿"으로 저장해 두세요.`,
      contentEn: `> **Goal**: Ground answers in a file (reduce hallucination) and save your own reusable setup.

### Step 1 — answer only from the file
\`\`\`
Answer only from the attached document. Mark anything not in it as "not in document",
and cite the clause/page. [Q] What's the deadline for travel expense settlement?
\`\`\`
### Step 2 — hallucination check
\`\`\`
Flag anything not verified by the document; say "uncertain" first if unsure.
\`\`\`
### Step 3 — custom setup (Project/Custom GPT)
\`\`\`
[Role] dept. admin helper. [Rules] always polite, 개조식 for official docs, cite clauses.
\`\`\`
> **Check**: how does grounding change trust? Always re-verify rules/numbers against the source.`,
    },
  ],

  // ─────────────────────────────────────────────
  // 2) 데이터분석 & 논문작성  (핵심 강화)
  // ─────────────────────────────────────────────
  'research-writing': [
    {
      id: 'rw-wb1',
      titleKo: '실습 1 · 데이터 정리(클리닝)',
      titleEn: 'Lab 1 · Data Cleaning',
      contentKo: `> **학습 목표**: 지저분한 원자료를 분석 가능한 상태로 만드는 절차(결측치·이상치·중복·형식)를 실습한다.
> **준비물**: 엑셀 표 일부를 복사(없으면 아래 예시 표 사용). 전남대GPT.

### 1단계 — 정리 절차 설계
표를 붙여넣기 전에 **무엇을 어떻게 정리할지** 먼저 설계합니다.
\`\`\`
너는 사회과학 데이터 분석 전문가야.
[상황] 온라인 설문 300명 응답. 결측치·중복·이상치가 섞여 있어.
[요청] 분석 전에 데이터를 정리하는 절차를 순서대로 알려줘.
[형식] 단계별 번호 목록, 각 단계에 (1)할 일 (2)주의점, 처리 근거는 쉬운 말로.
\`\`\`

### 2단계 — 실제 표로 점검
\`\`\`
아래 표에서 결측치·이상치·중복이 의심되는 행을 찾아 표로 정리하고,
각각 어떻게 처리하면 좋을지 근거와 함께 제안해줘.

[여기에 표 붙여넣기 — 예: 응답ID | 나이 | 소속 | 만족도(1-5)]
\`\`\`

### 3단계 — 변수 코드북 만들기
분석·재현을 위해 변수 정의서를 만듭니다.
\`\`\`
이 설문 문항으로 분석용 코드북 표를 만들어줘.
[표 열] 변수명 | 문항내용 | 유형(연속/범주) | 값 라벨 | 결측 코드
[조건] 변수명은 영문 소문자+언더바 규칙으로 통일.
\`\`\`

> **아카데믹 포인트**: 결측 처리(삭제 vs 대치)와 이상치 판정 기준은 **분석 결과를 바꿉니다.** AI 제안은 초안으로만 쓰고, 처리 방법과 근거를 반드시 **연구자가 결정·기록**하세요(재현성).

**심화 과제** — 같은 데이터에 "완전 삭제(listwise)"와 "평균 대치"를 각각 적용했을 때의 장단점을 AI에게 비교시켜 보세요.`,
      contentEn: `> **Goal**: Turn messy raw data into an analyzable state (missing/outlier/duplicate/format).

### Step 1 — design the cleaning procedure
\`\`\`
You are a social-science data analyst. [Context] 300 survey responses with missing/dupes/outliers.
List the cleaning steps in order; for each give (1) what to do (2) caution, with plain reasons.
\`\`\`
### Step 2 — inspect the real table
\`\`\`
Find suspected missing/outlier/duplicate rows in the table below and propose handling with reasons.
[paste table]
\`\`\`
### Step 3 — build a codebook
\`\`\`
Make an analysis codebook: variable | item | type | value labels | missing code. snake_case names.
\`\`\`
> **Academic**: missing-data and outlier decisions change results — use AI as a draft; the researcher must decide and document (reproducibility).`,
    },
    {
      id: 'rw-wb2',
      titleKo: '실습 2 · 기술통계 & 시각화',
      titleEn: 'Lab 2 · Descriptives & Charts',
      contentKo: `> **학습 목표**: 숫자에서 패턴을 읽고, 목적에 맞는 그래프를 고르는 판단을 익힌다.
> **준비물**: 정리된 표(실습 1 결과) 또는 예시 표.

### 1단계 — 기술통계 & 패턴
\`\`\`
아래 표의 기술통계(평균·중앙값·표준편차·분포)를 요약하고,
눈에 띄는 패턴 3가지와 이상치를 찾아줘. 각 패턴은 근거 수치와 함께.

[표 붙여넣기]
\`\`\`

### 2단계 — 어떤 그래프가 맞나 (판단 훈련)
바로 그리지 말고 **선택 근거**를 먼저 물으세요.
\`\`\`
이 데이터로 "만족도의 소속별 차이"를 보여주려면
어떤 그래프가 적절한지, 후보 2~3개를 장단점과 함께 추천해줘.
\`\`\`

### 3단계 — 그래프 만들기(도구 연계)
\`\`\`
위에서 고른 그래프를 엑셀에서 그리는 방법을 단계별로 알려줘.
필요하면 구글시트/파이썬(matplotlib) 코드도 함께 줘.
\`\`\`

> **아카데믹 포인트**: "평균만 보고" 결론 내리지 마세요. 분포·표준편차·표본 수를 함께 봐야 합니다. 막대 vs 상자그림 선택은 **보여줄 메시지**에 따라 달라집니다.

**심화 과제** — 같은 데이터를 "오해를 유발하는 그래프"와 "정직한 그래프"로 각각 만들어 달라 하고, 차이(축 범위·비율)를 관찰하세요.`,
      contentEn: `> **Goal**: Read patterns from numbers and choose the right chart.

### Step 1 — descriptives & patterns
\`\`\`
Summarize descriptives (mean/median/SD/distribution) of the table and find 3 patterns + outliers with figures.
[paste table]
\`\`\`
### Step 2 — which chart? (judgment)
\`\`\`
To show "satisfaction differences by department", recommend 2-3 chart options with pros/cons.
\`\`\`
### Step 3 — make it
\`\`\`
Explain step by step how to draw the chosen chart in Excel; add Google Sheets/Python (matplotlib) code too.
\`\`\`
> **Academic**: don't conclude from the mean alone — consider distribution, SD, n. Bar vs boxplot depends on the message.`,
    },
    {
      id: 'rw-wb3',
      titleKo: '실습 3 · 문헌 탐색·정리 (ConnectedPapers)',
      titleEn: 'Lab 3 · Literature (ConnectedPapers)',
      contentKo: `> **학습 목표**: ConnectedPapers로 문헌 지도를 그리고, AI로 문헌을 구조적으로 정리한다.
> **준비물**: 관심 주제 1개, 기준 논문(seed paper) 제목 하나, [ConnectedPapers](https://www.connectedpapers.com/).

### 1단계 — 시작 논문(seed) 정하기
AI로 시작점을 잡습니다.
\`\`\`
"AHP를 활용한 대학 행정 의사결정" 주제로 시작하려 해.
많이 인용되는 대표 논문(seed) 후보 3편의 제목·저자·연도를 알려주고,
각 논문이 이 주제에서 왜 중요한지 한 줄로.
\`\`\`
그다음 **ConnectedPapers**에 seed 논문 제목을 넣어 **문헌 지도(그래프)**를 확인하세요. (연결이 굵을수록 관련성↑)

### 2단계 — 지도에서 고른 논문 요약
지도에서 고른 논문 초록/PDF를 붙여넣고:
\`\`\`
이 논문을 "핵심 주장 · 방법 · 데이터 · 한계 · 시사점" 5줄로 요약해줘.
전공자가 인용할 수 있게 정확한 용어로.
\`\`\`

### 3단계 — 문헌 매트릭스(비교표) 만들기
\`\`\`
아래 3편의 논문을 "저자(연도) | 연구질문 | 방법 | 표본 | 주요 결과 | 한계" 표로 비교해줘.
[논문 요약들 붙여넣기]
\`\`\`

> **아카데믹 포인트**: AI 요약은 **원문 확인 전 초안**입니다. 인용·수치·저자 주장은 반드시 원문 대조하세요(AI는 존재하지 않는 논문을 지어낼 수 있습니다 — 환각). ConnectedPapers는 **탐색**용, 판단은 연구자.

**심화 과제** — 문헌 매트릭스에서 "연구 공백(gap)"을 찾아 달라 하고, 거기서 내 연구질문을 도출해 보세요.`,
      contentEn: `> **Goal**: Build a literature map with ConnectedPapers and organize papers with AI.

### Step 1 — pick a seed paper
\`\`\`
For "AHP in university admin decisions", suggest 3 highly-cited seed papers (title/author/year) and why each matters.
\`\`\`
Then paste the seed title into **ConnectedPapers** to see the graph (thicker links = more related).
### Step 2 — summarize a chosen paper
\`\`\`
Summarize this paper in 5 lines: claim · method · data · limits · implications, with precise terms.
\`\`\`
### Step 3 — literature matrix
\`\`\`
Compare 3 papers: Author(Year) | RQ | Method | Sample | Findings | Limits.
\`\`\`
> **Academic**: AI summaries are drafts — verify citations/numbers against originals (AI can fabricate papers). ConnectedPapers is for discovery; the researcher decides.`,
    },
    {
      id: 'rw-wb4',
      titleKo: '실습 4 · 연구질문 → 논문 구조',
      titleEn: 'Lab 4 · RQ → Paper Outline',
      contentKo: `> **학습 목표**: 막연한 관심을 검증 가능한 연구질문으로 좁히고, 논문 뼈대를 세운다. (논문작성 대상 우선, 일반 참여자도 '보고서 구조'로 활용)
> **준비물**: 관심 주제, 실습 1~3 결과.

### 1단계 — 연구질문 구체화
\`\`\`
"대학 행정에 AI 도입" 관심을 검증 가능한 연구질문으로 좁혀줘.
FINER 기준(실현가능·흥미·참신·윤리·적절)을 만족하는 질문 3개와,
각 질문의 독립·종속 변수를 함께 제시해줘.
\`\`\`

### 2단계 — 가설·검증 설계
\`\`\`
위 연구질문 중 하나를 골라 검증하려면
어떤 데이터·분석 방법이 필요한지, 확인해야 할 조건을 정리해줘.
\`\`\`

### 3단계 — 논문 아웃라인
\`\`\`
이 연구질문으로 논문 목차를 IMRaD(서론-방법-결과-논의) 구조로 잡아줘.
각 절에 무엇을 써야 하는지 1~2줄 가이드를 붙여서.
\`\`\`

### 4단계 — 초안 다듬기(반복)
초안을 받은 뒤 대화로 다듬습니다.
\`\`\`
서론이 약해. 연구의 필요성과 공백을 더 분명히, 학술적 문체로 다시 써줘.
번역투 없이, 능동형으로.
\`\`\`

> **아카데믹 포인트**: AI는 **구조화·표현**을 돕는 도구입니다. **주장의 근거, 데이터 해석, 인용의 진위**는 연구자 책임이며, 학회·기관의 **AI 사용 지침**을 확인하고 필요시 명시하세요.

**심화 과제** — 완성한 서론을 "냉정한 심사위원" 관점에서 비판받아 보세요: \`이 서론의 약점만 심사위원 입장에서 지적해줘.\``,
      contentEn: `> **Goal**: Narrow a vague interest into a testable research question and build a paper skeleton.

### Step 1 — sharpen the RQ
\`\`\`
Narrow "AI in university admin" into 3 testable RQs meeting FINER, with independent/dependent variables.
\`\`\`
### Step 2 — design testing
\`\`\`
For one RQ, what data and analysis are needed; list conditions to verify.
\`\`\`
### Step 3 — outline (IMRaD)
\`\`\`
Outline the paper in IMRaD; add a 1-2 line guide per section.
\`\`\`
### Step 4 — refine iteratively
\`\`\`
The intro is weak — restate the need and gap more clearly, academic tone, active voice, no translationese.
\`\`\`
> **Academic**: AI helps structure/wording; evidence, interpretation, and citation integrity are the researcher's responsibility. Check your venue's AI-use policy.`,
    },
  ],

  // ─────────────────────────────────────────────
  // 3) 데이터분석 & 예산회계
  // ─────────────────────────────────────────────
  'data-budget': [
    {
      id: 'db-wb1',
      titleKo: '실습 1 · 엑셀 수식·집계',
      titleEn: 'Lab 1 · Excel Formulas',
      contentKo: `> **학습 목표**: 복잡한 엑셀 수식을 말로 설명해 받아내고, 행정 데이터를 집계한다.
> **준비물**: 엑셀 표(부서별 지출 등) 또는 예시.

### 1단계 — 수식 자동 생성
문법을 몰라도 원하는 결과를 설명하면 됩니다.
\`\`\`
[맥락] 엑셀에 A열=부서, B열=집행액 데이터가 있어.
[요청] 부서별 집행액 합계를 구하는 수식을 알려줘.
[출력] 1)수식 2)각 인자의 의미 3)작동 원리를 예시와 함께 쉽게.
\`\`\`

### 2단계 — 조건 집계·조회
\`\`\`
"특정 부서 & 특정 월"의 집행액만 합산하는 수식(SUMIFS)과,
품목명으로 단가를 찾아오는 수식(VLOOKUP/XLOOKUP)을 예시와 함께 알려줘.
\`\`\`

### 3단계 — 오류 잡기
\`\`\`
이 수식에서 #REF!(또는 #N/A) 오류가 나. 원인과 수정 방법을 알려줘.
[수식/상황 붙여넣기]
\`\`\`

> **아카데믹 포인트**: 자동 생성된 수식도 **작은 샘플로 검산**하세요. 합계·건수가 원본과 맞는지 확인하는 습관이 데이터 무결성을 지킵니다.

**심화 과제** — 같은 집계를 피벗테이블로 만드는 절차도 물어 두 방법을 비교하세요.`,
      contentEn: `> **Goal**: Get complex Excel formulas by describing the result; aggregate admin data.

### Step 1 — generate a formula
\`\`\`
[Context] A=dept, B=spend. [Request] formula for spend total by dept. [Output] formula + meaning + how it works.
\`\`\`
### Step 2 — conditional aggregate/lookup
\`\`\`
Give SUMIFS (dept & month) and VLOOKUP/XLOOKUP (unit price by item) with examples.
\`\`\`
### Step 3 — fix errors
\`\`\`
This formula throws #REF!/#N/A — cause and fix? [paste]
\`\`\`
> **Academic**: verify generated formulas on a small sample — totals/counts must match the source.`,
    },
    {
      id: 'db-wb2',
      titleKo: '실습 2 · 예산·정산·보고',
      titleEn: 'Lab 2 · Budget & Reporting',
      contentKo: `> **학습 목표**: 예산 편성·정산 표를 만들고, 숫자를 의사결정용 보고 문장으로 바꾼다.
> **준비물**: 예산/실적 숫자 또는 예시.

### 1단계 — 예산 편성 표
\`\`\`
행사 예산안을 "항목 | 산출근거 | 단가 | 수량 | 금액 | 비고" 표로 만들어줘.
합계 행과 예비비 5% 항목을 포함해줘.
\`\`\`

### 2단계 — 실적 대비 분석
\`\`\`
아래 예산 대비 집행 실적 표에서 증감이 큰 항목 3개와 그 이유(추정)를 정리하고,
차년도에 반영할 시사점을 알려줘.
[표 붙여넣기]
\`\`\`

### 3단계 — 경영진용 코멘트
\`\`\`
이 실적 표에 "의사결정자가 1분에 파악할" 한 줄 해석 코멘트를 각 항목에 달아줘.
감정 표현 없이 담백하게.
\`\`\`

> **아카데믹 포인트**: 회계·예산 숫자는 **AI 답을 초안으로만** 쓰고, 규정·산출근거·합계는 원자료로 검증하세요. 근거 없는 수치는 보고서에 넣지 않습니다.

**심화 과제** — 같은 보고서를 "요약 1페이지"와 "상세 부록" 두 층으로 나눠 만들어 보세요.`,
      contentEn: `> **Goal**: Build budget/settlement tables and turn numbers into decision-ready sentences.

### Step 1 — budget table
\`\`\`
Make an event budget: Item | Basis | Unit | Qty | Amount | Note. Include a total row and 5% contingency.
\`\`\`
### Step 2 — vs actuals
\`\`\`
From this budget-vs-actual table, find 3 big variances with likely reasons and next-year implications.
\`\`\`
### Step 3 — executive comments
\`\`\`
Add a one-line interpretation per item a decision-maker grasps in a minute; plain, no emotion.
\`\`\`
> **Academic**: treat AI numbers as drafts; verify rules/basis/totals against source data.`,
    },
    {
      id: 'db-wb3',
      titleKo: '실습 3 · 규정 확인 & 자동화',
      titleEn: 'Lab 3 · Rules & Automation',
      contentKo: `> **학습 목표**: 복잡한 규정을 실무 언어로 요약하고, 반복 업무 자동화를 설계한다.
> **준비물**: 규정/지침 문서, 반복 업무 하나.

### 1단계 — 규정 쉬운 말 요약(근거 포함)
\`\`\`
첨부 규정에서 실무자가 알아야 할 핵심만 쉽게 요약하되,
각 항목의 근거 조항 번호를 함께 표시해줘. 문서에 없으면 "없음"이라고 해줘.
\`\`\`

### 2단계 — 체크리스트로 변환
\`\`\`
위 내용을 출장비 정산 담당자가 쓸 체크리스트로 만들어줘.
빠뜨리기 쉬운 항목에는 (주의) 표시.
\`\`\`

### 3단계 — 반복 업무 자동화 설계
\`\`\`
매주 부서별 지출 시트를 자동으로 취합·정리하고 싶어.
구글 Apps Script로 구현하는 방법을 단계별로 설계해줘. 코드도 함께.
\`\`\`

> **아카데믹 포인트**: 규정 해석의 **최종 판단은 사람**입니다. 자동화 코드는 소규모로 먼저 시험하고, 개인정보가 든 데이터는 교내 정책에 맞게 다루세요.

**심화 과제** — 자동화 전/후의 소요 시간과 오류 가능성을 표로 비교해 개선 효과를 정리하세요.`,
      contentEn: `> **Goal**: Summarize complex rules into practitioner language and design automation.

### Step 1 — plain rule summary (with basis)
\`\`\`
Summarize only what a practitioner needs from the attached rules, citing clause numbers; "none" if not in doc.
\`\`\`
### Step 2 — to a checklist
\`\`\`
Turn it into a checklist for the travel-expense officer; mark easily-missed items (caution).
\`\`\`
### Step 3 — automation
\`\`\`
Design a Google Apps Script to weekly collect and organize dept spend sheets; include code.
\`\`\`
> **Academic**: humans make the final rule call; test automation small; handle PII per policy.`,
    },
  ],

  // ─────────────────────────────────────────────
  // 4) 연구 & 실험지원
  // ─────────────────────────────────────────────
  'research-lab': [
    {
      id: 'rl-wb1',
      titleKo: '실습 1 · 연구질문·설계',
      titleEn: 'Lab 1 · Question & Design',
      contentKo: `> **학습 목표**: 아이디어를 검증 가능한 연구질문으로 정련하고, 설계 방향을 잡는다.
> **준비물**: 관심 주제 1개.

### 1단계 — 질문 정련(FINER)
\`\`\`
"생성형 AI가 학습에 미치는 영향" 관심을 검증 가능한 연구질문으로 좁혀줘.
FINER(실현가능·흥미·참신·윤리·적절) 기준으로 3개, 각 질문의 변수와 대상도.
\`\`\`

### 2단계 — 설계 유형 선택
\`\`\`
위 질문을 검증하려면 실험/준실험/설문/사례연구 중 무엇이 적절한지
장단점과 함께 추천하고, 필요한 표본 수 추정 방법도 알려줘.
\`\`\`

### 3단계 — 변수·측정 정의
\`\`\`
독립·종속·통제 변수를 정의하고, 각 변수를 어떻게 측정할지(척도·도구)를 표로 정리해줘.
\`\`\`

> **아카데믹 포인트**: 좋은 설계는 **교란변수 통제**와 **재현 가능성**에서 갈립니다. AI 제안은 후보이고, 타당성 판단은 연구자·지도교수의 몫입니다.

**심화 과제** — 같은 질문에 대해 "양적 설계"와 "질적 설계" 두 안을 만들어 비교하세요.`,
      contentEn: `> **Goal**: Refine an idea into a testable question and set a design direction.

### Step 1 — refine (FINER)
\`\`\`
Narrow "effect of GenAI on learning" into 3 testable RQs (FINER), with variables and subjects.
\`\`\`
### Step 2 — pick a design
\`\`\`
Experiment/quasi/survey/case — which fits, with pros/cons; also how to estimate sample size.
\`\`\`
### Step 3 — variables & measures
\`\`\`
Define independent/dependent/control variables and how to measure each (scale/instrument) as a table.
\`\`\`
> **Academic**: good design hinges on confound control and reproducibility; the researcher judges validity.`,
    },
    {
      id: 'rl-wb2',
      titleKo: '실습 2 · 프로토콜·데이터 관리',
      titleEn: 'Lab 2 · Protocol & Data',
      contentKo: `> **학습 목표**: 실험 프로토콜 초안과 데이터 기록·관리 체계를 만든다.
> **준비물**: 실습 1의 설계.

### 1단계 — 프로토콜 초안
\`\`\`
위 설계로 실험 프로토콜 초안을 만들어줘.
[포함] 목적·대상·절차(단계별)·측정 시점·중단 기준·필요 장비.
\`\`\`

### 2단계 — 데이터 기록 양식
\`\`\`
이 실험의 원자료를 기록할 표 양식을 설계해줘.
[열] 대상ID | 조건 | 측정시점 | 변수들 | 비고
그리고 입력 규칙(단위·결측 표기)도 함께 정해줘.
\`\`\`

### 3단계 — 데이터 관리 계획
\`\`\`
연구 데이터 관리 계획(DMP)의 핵심 항목을 체크리스트로 만들어줘.
저장·백업·익명화·보관기간·공유 범위를 포함해서.
\`\`\`

> **아카데믹 포인트**: **원자료 보존·버전 관리·익명화**는 연구 무결성의 기본입니다. 개인정보·민감정보는 최소 수집·가명 처리하고 교내/IRB 규정을 따르세요.

**심화 과제** — 프로토콜을 "동료 연구자 검토용"으로 만들어, 재현에 부족한 정보가 없는지 점검받으세요.`,
      contentEn: `> **Goal**: Draft an experiment protocol and a data recording/management scheme.

### Step 1 — protocol draft
\`\`\`
Draft a protocol from the design: purpose, subjects, step-by-step procedure, timing, stop criteria, equipment.
\`\`\`
### Step 2 — recording sheet
\`\`\`
Design a raw-data table: SubjectID | Condition | Timepoint | variables | note; set entry rules (units/missing).
\`\`\`
### Step 3 — data management plan
\`\`\`
Make a DMP checklist: storage, backup, anonymization, retention, sharing scope.
\`\`\`
> **Academic**: raw-data preservation, versioning, anonymization are integrity basics; follow IRB/campus rules.`,
    },
    {
      id: 'rl-wb3',
      titleKo: '실습 3 · 분석·연구윤리',
      titleEn: 'Lab 3 · Analysis & Ethics',
      contentKo: `> **학습 목표**: 분석 절차를 설계하고, 연구윤리(표절·AI 사용·IRB)를 점검한다.
> **준비물**: 수집(예정) 데이터의 형태.

### 1단계 — 분석 계획
\`\`\`
이런 형태의 데이터(예: 두 집단 사전/사후 점수)를 분석하려면
어떤 통계 방법이 적절한지 가정과 함께 추천하고, 검정 순서를 알려줘.
\`\`\`

### 2단계 — 분석 코드/절차
\`\`\`
위 분석을 파이썬(또는 R)으로 수행하는 코드를 주석과 함께 만들어줘.
각 단계가 무엇을 검증하는지 설명도 붙여서.
\`\`\`

### 3단계 — 연구윤리 점검
\`\`\`
이 연구의 윤리 점검 체크리스트를 만들어줘.
[포함] IRB 필요 여부, 동의서, 개인정보 보호, 표절·이해상충, 생성형 AI 사용 명시 방법.
\`\`\`

> **아카데믹 포인트**: 통계 방법의 **가정 위배**(정규성·등분산 등)를 확인하지 않으면 결과가 왜곡됩니다. 또한 논문·보고서에 **AI를 어떻게 썼는지** 학회 지침에 맞게 밝히는 것이 최근 기준입니다.

**심화 과제** — 분석 결과 초안을 "통계 검토자" 관점에서 비판받아, 가정·해석의 허점을 찾아보세요.`,
      contentEn: `> **Goal**: Design the analysis and check research ethics (plagiarism, AI use, IRB).

### Step 1 — analysis plan
\`\`\`
For data like two-group pre/post scores, recommend suitable statistics with assumptions and a test order.
\`\`\`
### Step 2 — analysis code
\`\`\`
Write Python (or R) code with comments; explain what each step tests.
\`\`\`
### Step 3 — ethics checklist
\`\`\`
Make an ethics checklist: IRB need, consent, privacy, plagiarism/COI, how to disclose GenAI use.
\`\`\`
> **Academic**: unchecked assumption violations (normality/homogeneity) distort results; disclose AI use per venue guidelines.`,
    },
  ],
};

export function getWorkbook(programId: string): WorkbookModule[] {
  return WORKBOOK[programId] || [];
}
