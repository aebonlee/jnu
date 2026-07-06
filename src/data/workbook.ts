/**
 * 과정별 실습 워크북 — 둘째날(8시간)을 이 워크북만으로 자기주도 실습할 수 있게 구성.
 * 원칙:
 *  - 학습자료를 '기반'으로 한 확장 실습(반복 아님). 손으로 재현 → 내 업무 적용 → 심화.
 *  - 이원 트랙: [공통](데이터·AI 활용) + [트랙 A](과정 주제 심화) + [트랙 B](업무 활용, 비전공·다수).
 *  - 시니어 초보자도 따라올 수 있게 쉬운 단계 + 전남대GPT 실전 + 업무 적용.
 */
export interface WorkbookModule {
  id: string;
  titleKo: string;
  titleEn: string;
  contentKo: string;
  contentEn: string;
}

const GUIDE_KO = `> **오늘 이렇게 진행합니다 (8시간, 자기주도 실습).** 위에서부터 순서대로 따라 하되, 내 상황에 맞는 트랙을 고르세요.
> - **[공통]** 은 모두 함께 — 데이터·AI 툴 다루는 기본기.
> - **[트랙 A]** 는 과정 주제(논문/예산/연구)를 더 깊게 원하는 분.
> - **[트랙 B]** 는 주제와 관련이 덜하고 **내 업무에 바로 쓰고 싶은** 분(다수).
>
> **처음이신가요?** 괜찮습니다. 각 과제의 회색 상자(프롬프트)를 **복사 버튼으로 복사 → 전남대GPT에 붙여넣기 → 내 상황에 맞게 [ ] 부분만 바꾸기**, 이 3가지만 하면 됩니다. 막히면 "더 쉽게 설명해줘"라고 다시 물어보세요.`;

export const WORKBOOK: Record<string, WorkbookModule[]> = {
  // ═════════════════════════════════════════════
  // 1) 생성형 AI 기초·심화
  // ═════════════════════════════════════════════
  foundation: [
    {
      id: 'fd-guide', titleKo: '① 오늘의 실습 안내', titleEn: '① How Today Works',
      contentKo: `${GUIDE_KO}

### 오늘의 흐름 (예시 시간표)
| 시간 | 내용 | 트랙 |
| --- | --- | --- |
| 1교시 (2h) | 프롬프트 기본기 손에 익히기 | 공통 |
| 2교시 (2h) | 내 문서·자료에 적용 | 공통 |
| 3교시 (2h) | 심화 프롬프트 기법 | 트랙 A |
| 4교시 (2h) | 내 업무 자동화·템플릿화 | 트랙 B |

### 시작 전 준비
1. 전남대GPT 로그인 확인.
2. 오늘 다룰 **내 자료 1~2개**(공문·표·규정 등)를 준비.
3. 모델은 잘 모르면 **Auto**, 긴 문서면 상위 모델. (부록 'AI 모델 고르기' 참고)

> **시니어 팁**: 한 번에 완벽하게 하려 하지 마세요. 초안을 받고 "더 정중하게", "표로", "3줄로"처럼 **말로 고쳐가는 것**이 가장 빠릅니다.`,
      contentEn: `> **Self-guided 8-hour day.** Follow top-down; pick your track.
> - **[Common]** everyone — data/AI basics. **[Track A]** deeper on the topic. **[Track B]** apply to your own work.
>
> **New to this?** Copy a prompt box → paste into 전남대GPT → change the [ ] parts. If stuck, ask "explain more simply".

### Flow
| Time | Content | Track |
| --- | --- | --- |
| 1 (2h) | Prompt basics | Common |
| 2 (2h) | Apply to your docs | Common |
| 3 (2h) | Advanced techniques | Track A |
| 4 (2h) | Automate your work | Track B |`,
    },
    {
      id: 'fd-common1', titleKo: '② [공통] 프롬프트 기본기', titleEn: '② [Common] Prompt Basics',
      contentKo: `> **기반 자료**: 「역할 기반 프롬프트」·「RCF 프레임워크」·「단계적 프롬프트」 · **약 2시간**
> **목표**: 같은 요청도 요소를 갖추면 결과가 달라짐을 손으로 확인한다.

하나의 과제("부서 워크숍 안내문")를 단계마다 다시 요청하며 결과 변화를 관찰하세요.

### 과제 1 — 맨몸 vs 역할 부여
\`\`\`
부서 워크숍 안내문 써줘.
\`\`\`
그다음:
\`\`\`
너는 대학 행정 15년 경력 담당자야. 부서 워크숍 안내문을 써줘.
\`\`\`

### 과제 2 — RCF 틀 채우기 (Role·Context·Format)
\`\`\`
[역할] 대학 행정 담당자
[맥락] 다음 주 금요일 오후, [부서원 20명] 대상 워크숍
[형식] 정중한 존댓말·개조식, 일시/장소/준비물/회신방법 포함, 공백 400자 이내
이 조건으로 안내문을 써줘.
\`\`\`

### 과제 3 — 단계적 사고(CoT) 붙이기
\`\`\`
안내문을 쓰기 전에 참석률을 높일 요소 3가지를 먼저 정리하고, 그걸 반영해 다시 써줘.
\`\`\`

> **✅ 확인**: 과제 1→3으로 갈수록 얼마나 정교해졌나요?
> **🙋 막히면**: "방금 답을 더 정중하게 다시 써줘" / "표로 바꿔줘"로 이어서 다듬으세요.`,
      contentEn: `> **Based on**: Role/RCF/CoT materials · **~2h**. Ask one task ("workshop notice") at each level and compare.

### T1 — bare vs role
\`\`\`
Write a workshop notice.
\`\`\`
\`\`\`
You are a 15-year admin officer. Write a workshop notice.
\`\`\`
### T2 — RCF
\`\`\`
[Role] admin [Context] next Fri PM, [20 staff] [Format] polite, 개조식, when/where/prep/RSVP, <400 chars.
\`\`\`
### T3 — CoT
\`\`\`
First list 3 factors to raise attendance, then rewrite reflecting them.
\`\`\`
> ✅ Compare T1→T3.  🙋 Stuck? follow up: "more polite" / "as a table".`,
    },
    {
      id: 'fd-common2', titleKo: '③ [공통] 내 문서에 적용', titleEn: '③ [Common] Your Documents',
      contentKo: `> **기반 자료**: 「각 툴 활용법」·「AI 서비스 비교」 · **약 2시간**
> **목표**: 기법을 **내가 실제로 쓰는 문서**에 적용한다.

### 과제 1 — 3종 톤 변형
최근 쓴 공문/메일을 붙여넣고:
\`\`\`
이 글을 정중한·간결한·친근한 3가지 버전으로 다시 써주고, 각 버전이 맞는 상황을 한 줄로.
\`\`\`

### 과제 2 — 파일 근거로만 답하게 (환각 줄이기)
규정/매뉴얼 PDF를 업로드하고:
\`\`\`
첨부 문서에 근거해서만 답해줘. 없는 내용은 "문서에 없음"이라 표시하고 근거 조항도 함께.
[질문] [내 업무 관련 질문]
\`\`\`

### 과제 3 — 긴 자료 3단계 요약
\`\`\`
아래 자료를 (1)한 문장 (2)핵심 3줄 (3)실행 항목 목록 — 세 가지로 요약해줘.
[자료 붙여넣기]
\`\`\`

> **✅ 확인**: 내 업무 맥락을 넣으니 결과가 얼마나 좋아졌나요? 규정·수치는 반드시 **원문 재확인**.`,
      contentEn: `> **Based on**: tool guides / comparison · **~2h**. Apply techniques to your real documents.

### T1 — 3 tones
\`\`\`
Rewrite this in polite/concise/friendly; add a one-line fit for each.
\`\`\`
### T2 — answer only from a file
\`\`\`
Answer only from the attachment; mark missing info + cite clauses. [Q] ...
\`\`\`
### T3 — 3-depth summary
\`\`\`
Summarize as (1) one line (2) 3 key lines (3) action items. [paste]
\`\`\``,
    },
    {
      id: 'fd-trackA', titleKo: '④ [트랙 A] 심화 프롬프트 기법', titleEn: '④ [Track A] Advanced',
      contentKo: `> **대상**: 프롬프트를 더 깊게 다루고 싶은 분 · **약 2시간**

### 과제 1 — 다중 관점으로 검토
\`\`\`
[내 기획/제안]을 전략가·현장직원·고객·상급자 4가지 입장에서 각각 평가해줘.
\`\`\`

### 과제 2 — 약점 미리 발견 (레드팀)
\`\`\`
이 아이디어에 가장 비판적인 사람 입장에서 약점만 날카롭게 지적해줘. 그다음 보완책도.
\`\`\`

### 과제 3 — 구조화 출력 (표/JSON)
\`\`\`
[목록 자료]를 "이름 | 담당 | 기한 | 상태" 표로 정리하고, 같은 내용을 시스템에 넣을 수 있게 JSON으로도 줘.
\`\`\`

> **✅ 확인**: 관점을 바꾸면 안 보이던 문제가 드러납니다. 발표·제안 전 사전 점검에 유용.`,
      contentEn: `> **For**: those wanting deeper prompting · **~2h**

### T1 — multi-perspective
\`\`\`
Evaluate [my plan] from strategist/staff/customer/manager viewpoints.
\`\`\`
### T2 — red-team
\`\`\`
Attack this idea as its harshest critic; then give fixes.
\`\`\`
### T3 — structured output
\`\`\`
Turn [list] into a table Name|Owner|Due|Status, and also JSON.
\`\`\``,
    },
    {
      id: 'fd-trackB', titleKo: '⑤ [트랙 B] 내 업무 자동화·템플릿', titleEn: '⑤ [Track B] Automate Your Work',
      contentKo: `> **대상**: 배운 걸 **바로 내 업무에** 쓰고 싶은 분(다수) · **약 2시간**
> **목표**: 반복 업무를 한 번 세팅해 계속 쓰는 형태로 만든다.

### 과제 1 — 맞춤 지침 저장 (프로젝트/맞춤GPT)
\`\`\`
[역할] 우리 부서 행정 도우미
[규칙] 항상 존댓말·개조식, 근거 조항 제시, 민감정보 가림 권고
[출력] 문서 요청 시 제목→본문→체크리스트 순
이 지침을 저장용으로 다듬어줘.
\`\`\`

### 과제 2 — 자가검증 루프
\`\`\`
[내 업무: 예-회의 결과 공지]를 초안 작성하고, 스스로 오류·근거부족을 점검한 뒤 개선한 최종본까지 한 번에 줘.
\`\`\`

### 과제 3 — 재사용 템플릿 만들기
\`\`\`
[자주 하는 업무]를 매번 빠르게 처리할 '재사용 프롬프트 템플릿'으로 만들어줘. 바꿀 부분은 [ ]로 표시.
\`\`\`

> **✅ 확인**: 오늘 만든 지침·템플릿을 저장해 두면 내일부터 바로 씁니다. 이게 진짜 실력입니다.`,
      contentEn: `> **For**: apply now to your work (majority) · **~2h**

### T1 — save custom instructions
\`\`\`
[Role] dept helper [Rules] polite, 개조식, cite clauses, mask sensitive data. Refine for saving.
\`\`\`
### T2 — self-check loop
\`\`\`
Draft [my task], self-review, then give the improved final in one go.
\`\`\`
### T3 — reusable template
\`\`\`
Make a reusable prompt template for [recurring task]; mark variables with [ ].
\`\`\``,
    },
  ],

  // ═════════════════════════════════════════════
  // 2) 데이터분석 & 논문작성  (데이터分析 主 · 논문 補, 이원 트랙 핵심)
  // ═════════════════════════════════════════════
  'research-writing': [
    {
      id: 'rw-guide', titleKo: '① 오늘의 실습 안내', titleEn: '① How Today Works',
      contentKo: `${GUIDE_KO}

### 오늘의 흐름 (8시간)
| 시간 | 내용 | 트랙 |
| --- | --- | --- |
| 1교시 (2h) | 데이터 다루기 기본(정리·통계) | 공통 |
| 2교시 (2h) | 데이터에서 인사이트·시각화 | 공통 |
| 3교시 (2h) | **트랙 선택** — A: 문헌·연구·논문 / B: 업무 데이터 활용 | A 또는 B |
| 4교시 (2h) | 트랙 심화 + 나만의 템플릿 | A 또는 B |

> **이 과정은 '데이터분석'이 중심입니다.** 논문작성이 목표인 분은 **트랙 A**를, 논문과 관련이 덜한 분은 **트랙 B(내 부서 데이터·보고서)**를 고르시면 됩니다. 둘 다 해봐도 좋습니다.

### 시작 전 준비
1. 전남대GPT 로그인.
2. **내 업무 데이터 1개**(엑셀 표 일부, 설문 결과, 부서 통계 등). 없으면 "예시 표 만들어줘"로 생성.
3. 모델: 표 분석은 Auto/상위, 긴 문서 요약은 상위 모델.`,
      contentEn: `> **Self-guided 8h.** [Common] data/AI basics · [Track A] literature/research/paper · [Track B] your work data.
> This course centers on **data analysis**; paper-goal learners pick Track A, others pick Track B.

### Flow
| Time | Content | Track |
| --- | --- | --- |
| 1 (2h) | Handle data (clean/stats) | Common |
| 2 (2h) | Insights & charts | Common |
| 3 (2h) | Choose A (papers) or B (work data) | A/B |
| 4 (2h) | Deepen + templates | A/B |`,
    },
    {
      id: 'rw-common1', titleKo: '② [공통] 데이터 다루기 기본', titleEn: '② [Common] Handle Data',
      contentKo: `> **기반 자료**: 「연구 데이터 분석 가이드」 · **약 2시간**
> **목표**: 지저분한 표를 분석 가능한 상태로 **직접 정리**한다. (가이드는 '왜', 여기선 '직접')

### 과제 1 — 정리 절차 이해 + 내 표 점검
\`\`\`
아래 표에서 결측치·이상치·중복 의심 행을 찾아 표로 정리하고,
각각 (삭제/대치/유지) 중 무엇이 적절한지 근거와 함께 제안해줘.
[표 붙여넣기 — 없으면 "설문 300명 예시 표 만들어줘"]
\`\`\`

### 과제 2 — 변수 코드북
\`\`\`
이 데이터의 분석용 코드북을 만들어줘.
[열] 변수명(영문소문자_언더바) | 문항내용 | 유형(연속/범주) | 값 라벨 | 결측 코드
\`\`\`

### 과제 3 — 기술통계 산출·해석
\`\`\`
정리된 데이터의 기술통계(평균·중앙값·표준편차·분포)를 표로 내고,
숫자에서 읽히는 특징 3가지를 근거 수치와 함께 쉬운 말로 설명해줘.
\`\`\`

> **✅ 확인**: 평균만 보지 말고 분포·표준편차·표본 수를 함께 보세요.
> **🎓 포인트**: 결측·이상치 처리는 결과를 바꿉니다. AI 제안은 초안, **결정·기록은 사람**(재현성).`,
      contentEn: `> **Based on**: "Research Data Analysis Guide" · **~2h**. Clean a real table yourself.

### T1 — inspect
\`\`\`
Find suspect missing/outlier/duplicate rows; propose delete/impute/keep with reasons. [paste table]
\`\`\`
### T2 — codebook
\`\`\`
Build a codebook: variable | item | type | value labels | missing code.
\`\`\`
### T3 — descriptives
\`\`\`
Descriptives as a table + 3 features explained simply with figures.
\`\`\`
> 🎓 Cleaning changes results — researcher decides & documents.`,
    },
    {
      id: 'rw-common2', titleKo: '③ [공통] 인사이트 & 시각화', titleEn: '③ [Common] Insights & Charts',
      contentKo: `> **기반 자료**: 「데이터 시각화 & 결과 해석 가이드」 · **약 2시간**
> **목표**: 숫자에서 패턴을 읽고, 목적에 맞는 그래프를 만든다.

### 과제 1 — 패턴·교차 분석
\`\`\`
이 데이터에서 소속(또는 그룹)별로 만족도가 어떻게 다른지 비교하고,
눈에 띄는 패턴 3가지와 이상치를 근거 수치와 함께 정리해줘.
\`\`\`

### 과제 2 — 그래프 '선택' 후 제작
\`\`\`
"그룹 간 차이"를 보여주려면 어떤 그래프가 적절한지 후보 2~3개를 장단점과 함께 추천하고,
고른 그래프를 엑셀(또는 파이썬 matplotlib)로 그리는 방법을 단계별로 알려줘.
\`\`\`

### 과제 3 — 결과 한 문단 해석
\`\`\`
위 분석을 보고서에 넣을 "결과 해석 한 문단"으로 써줘. 과장 없이, 한계도 한 줄 포함해서.
\`\`\`

> **✅ 확인**: 막대 vs 상자그림은 **보여줄 메시지**에 따라 다릅니다.
> **🎓 포인트**: "오해를 유발하는 그래프"와 "정직한 그래프"를 각각 만들어 축·비율 차이를 관찰해 보세요.`,
      contentEn: `> **Based on**: "Visualization Guide" · **~2h**.

### T1 — patterns
\`\`\`
Compare satisfaction by group; find 3 patterns + outliers with figures.
\`\`\`
### T2 — choose then draw
\`\`\`
Recommend 2-3 charts for "group differences" with pros/cons; steps to draw the chosen one.
\`\`\`
### T3 — one-paragraph interpretation
\`\`\`
Write a results paragraph for a report; no overstatement, one line of limitation.
\`\`\``,
    },
    {
      id: 'rw-trackA', titleKo: '④ [트랙 A · 논문/연구] 문헌 → 연구질문 → 논문 구조', titleEn: '④ [Track A] Literature → RQ → Paper',
      contentKo: `> **대상**: 논문작성·연구가 목표인 분 · **약 3~4시간(4교시 포함)**
> **기반 자료**: 「AI 논문작성 가이드」 + 1일차 ConnectedPapers·연구방법론

### 과제 1 — 문헌 지도 (ConnectedPapers)
\`\`\`
"[내 주제]"의 대표 논문(seed) 후보 3편을 제목·저자·연도로 추천하고, 각 논문이 왜 중요한지 한 줄로.
\`\`\`
→ 추천 seed 제목을 [ConnectedPapers](https://www.connectedpapers.com/)에 넣어 **문헌 지도**를 확인(연결 굵을수록 관련성↑).

### 과제 2 — 문헌 매트릭스
지도에서 고른 논문 초록/요약을 붙여:
\`\`\`
이 논문들을 "저자(연도) | 연구질문 | 방법 | 표본 | 주요 결과 | 한계" 표로 비교하고,
표에서 드러나는 '연구 공백(gap)'을 짚어줘.
\`\`\`

### 과제 3 — 연구질문 → IMRaD 구조
\`\`\`
위 공백과 내 데이터를 근거로 검증 가능한 연구질문 3개를 FINER 기준으로 도출하고,
그중 하나로 논문 목차를 IMRaD(서론-방법-결과-논의)로 잡아 각 절 가이드를 1~2줄씩.
\`\`\`

### 과제 4 — 서론 초안 → 심사 비평 → 개선
\`\`\`
연구 필요성과 공백을 담은 서론을 학술적 문체(번역투 없이·능동형)로 써줘.
\`\`\`
이어서:
\`\`\`
방금 서론을 냉정한 심사위원 입장에서 약점만 지적하고, 반영해 다시 써줘.
\`\`\`

> **🎓 포인트**: AI 문헌 요약은 **원문 확인 전 초안**(존재하지 않는 논문을 지어낼 수 있음—환각). 인용·수치·주장은 원문 대조. 논문에 **AI 사용 방식**을 학회 지침대로 밝히세요.`,
      contentEn: `> **For**: paper/research goal · **~3-4h**. Based on "AI Paper Guide" + Day-1 ConnectedPapers.

### T1 — literature map
\`\`\`
Suggest 3 seed papers for "[my topic]" and why each matters.
\`\`\` → paste into ConnectedPapers.
### T2 — matrix + gap
\`\`\`
Compare papers (Author(Year)|RQ|Method|Sample|Findings|Limits) and point out the gap.
\`\`\`
### T3 — RQ → IMRaD
\`\`\`
Derive 3 FINER RQs from the gap + my data; outline one in IMRaD with per-section guides.
\`\`\`
### T4 — intro → critique → revise
\`\`\`
Write an academic intro; then critique as a harsh reviewer and rewrite.
\`\`\`
> 🎓 Verify AI summaries against originals; disclose AI use per guidelines.`,
    },
    {
      id: 'rw-trackB', titleKo: '⑤ [트랙 B · 업무 활용] 내 데이터로 보고·자동화', titleEn: '⑤ [Track B] Work Data & Reports',
      contentKo: `> **대상**: 논문과 관련이 덜하고 **내 업무 데이터**에 바로 쓰고 싶은 분(다수) · **약 3~4시간**
> **목표**: 부서 데이터를 정리·분석·보고·자동화하는 실무 흐름을 완성한다.

### 과제 1 — 내 부서 데이터 요약·표
\`\`\`
[내 부서 데이터 표 붙여넣기]를 항목별로 집계해 "항목 | 값 | 비중 | 비고" 표로 정리하고,
바로 눈에 띄는 특징 3가지를 한 줄씩 알려줘.
\`\`\`

### 과제 2 — 보고서용 해석·요약
\`\`\`
위 표를 "상급자가 1분에 파악할" 보고용으로: 핵심 3줄 + 표 + 한 줄 코멘트 순으로 정리해줘. 담백하게.
\`\`\`

### 과제 3 — 반복 집계 자동화 설계
\`\`\`
매주 이런 표를 자동으로 취합·정리하고 싶어. 구글 스프레드시트에서 하는 방법(수식 또는 Apps Script)을 단계별로 알려줘.
\`\`\`

### 과제 4 — 나만의 업무 템플릿
\`\`\`
이 '데이터 정리→요약→보고' 과정을 매번 빠르게 하는 재사용 프롬프트 템플릿으로 만들어줘. 바꿀 부분은 [ ].
\`\`\`

> **✅ 확인**: 오늘 만든 템플릿을 저장하면 내일부터 반복 업무 시간이 확 줄어듭니다.
> **🎓 포인트**: 자동 결과도 **작은 샘플로 검산**(합계·건수), 개인정보는 가려서 다루기.`,
      contentEn: `> **For**: apply to your own work data (majority) · **~3-4h**.

### T1 — summarize your data
\`\`\`
Aggregate [my table] into Item|Value|Share|Note and give 3 quick features.
\`\`\`
### T2 — report interpretation
\`\`\`
Make it report-ready: 3 key lines + table + one-line comment; plain.
\`\`\`
### T3 — automate weekly
\`\`\`
Automate this weekly in Google Sheets (formula or Apps Script), step by step.
\`\`\`
### T4 — template
\`\`\`
Make a reusable template for clean→summarize→report; mark [ ].
\`\`\``,
    },
  ],

  // ═════════════════════════════════════════════
  // 3) 데이터분석 & 예산회계  (데이터 主 · 예산회계 補, 이원 트랙)
  // ═════════════════════════════════════════════
  'data-budget': [
    {
      id: 'db-guide', titleKo: '① 오늘의 실습 안내', titleEn: '① How Today Works',
      contentKo: `${GUIDE_KO}

### 오늘의 흐름 (8시간)
| 시간 | 내용 | 트랙 |
| --- | --- | --- |
| 1교시 (2h) | 엑셀·데이터 다루기 기본 | 공통 |
| 2교시 (2h) | 행정 데이터 집계·분석 | 공통 |
| 3교시 (2h) | **트랙 선택** — A: 예산·회계 심화 / B: 일반 행정 업무 자동화 | A 또는 B |
| 4교시 (2h) | 트랙 심화 + 나만의 템플릿 | A 또는 B |

> **데이터 다루기가 중심입니다.** 예산·회계 담당이면 **트랙 A**, 그 외 행정 업무 다수이면 **트랙 B**를 고르세요.

### 시작 전 준비
1. 전남대GPT 로그인.
2. **내 업무 표 1개**(지출 내역, 부서 통계 등). 없으면 "예시 표 만들어줘".`,
      contentEn: `> **Self-guided 8h.** [Common] Excel/data basics · [Track A] budget/accounting · [Track B] general admin automation.

### Flow
| Time | Content | Track |
| --- | --- | --- |
| 1 (2h) | Excel/data basics | Common |
| 2 (2h) | Aggregate/analyze admin data | Common |
| 3 (2h) | A: budget/accounting or B: admin automation | A/B |
| 4 (2h) | Deepen + templates | A/B |`,
    },
    {
      id: 'db-common1', titleKo: '② [공통] 엑셀·데이터 기본', titleEn: '② [Common] Excel & Data',
      contentKo: `> **기반 자료**: 「Excel 수식 자동화」·「데이터 분석 기초」 · **약 2시간**
> **목표**: 수식을 말로 받아내고, 내 표에 적용·검산한다.

### 과제 1 — 집계 수식 받아 적용
\`\`\`
[맥락] A열=부서, B열=집행액. [요청] 부서별 합계 수식을 알려주고, 각 인자의 의미와 작동을 예시로 쉽게 설명해줘.
\`\`\`
→ 엑셀에 넣어 **소계 합이 원본과 맞는지 검산**.

### 과제 2 — 조건 집계·조회
\`\`\`
"특정 부서 & 특정 월" 합산(SUMIFS)과 품목 단가 조회(XLOOKUP) 수식을 예시와 함께 알려줘.
\`\`\`

### 과제 3 — 오류 잡기
\`\`\`
이 수식에서 #N/A(또는 #REF!)가 나. 원인과 수정 방법을 초보도 알게 알려줘. [수식/상황 붙여넣기]
\`\`\`

> **🎓 포인트**: 자동 생성 수식도 **작은 샘플로 검산**하는 습관이 데이터 무결성을 지킵니다.`,
      contentEn: `> **Based on**: Excel/Data Basics · **~2h**.

### T1 — aggregate
\`\`\`
[A=dept, B=spend] give dept-total formula + meaning + how it works.
\`\`\`
### T2 — conditional
\`\`\`
SUMIFS (dept & month) and XLOOKUP (unit price) with examples.
\`\`\`
### T3 — fix
\`\`\`
This throws #N/A/#REF! — cause and fix (beginner-friendly).
\`\`\``,
    },
    {
      id: 'db-common2', titleKo: '③ [공통] 행정 데이터 집계·분석', titleEn: '③ [Common] Analyze Admin Data',
      contentKo: `> **기반 자료**: 「데이터 분석 기초」 · **약 2시간**
> **목표**: 행정 데이터를 집계하고 특징을 읽는다.

### 과제 1 — 집계·비교
\`\`\`
[지출 내역 표 붙여넣기]를 부서별·항목별로 집계하고, 지출이 큰 항목 3개와 특이점을 정리해줘.
\`\`\`

### 과제 2 — 추세·비중
\`\`\`
월별 추세와 항목별 비중을 표로 내고, 어떤 그래프로 보여주면 좋을지 추천해줘.
\`\`\`

### 과제 3 — 한 문단 해석
\`\`\`
위 결과를 보고용 한 문단으로 담백하게 정리하고, 주의해서 볼 점 한 줄을 덧붙여줘.
\`\`\`

> **🎓 포인트**: 합계·건수는 원본과 대조해 검산. 이상한 값은 원인을 찾은 뒤 처리.`,
      contentEn: `> **Based on**: Data Basics · **~2h**.

### T1 — aggregate/compare
\`\`\`
Aggregate [spend table] by dept/item; find top-3 spend items and anomalies.
\`\`\`
### T2 — trend/share
\`\`\`
Monthly trend and item share as a table; recommend a chart.
\`\`\`
### T3 — one-paragraph
\`\`\`
Summarize for a report; add one caution line.
\`\`\``,
    },
    {
      id: 'db-trackA', titleKo: '④ [트랙 A · 예산·회계] 편성·정산·보고', titleEn: '④ [Track A] Budget & Reporting',
      contentKo: `> **대상**: 예산·회계 담당 · **약 3~4시간**
> **기반 자료**: 「예산·회계 실무 가이드」

### 과제 1 — 예산 편성 표
\`\`\`
[행사/사업]의 예산안을 "항목|산출근거|단가|수량|금액|비고" 표로, 합계 행과 예비비 5% 포함해 만들어줘.
\`\`\`

### 과제 2 — 예산 대비 실적 분석
\`\`\`
[예산 대비 집행 실적 표]에서 증감 큰 항목 3개와 이유(추정), 차년도 시사점을 정리해줘.
\`\`\`

### 과제 3 — 경영진용 코멘트
\`\`\`
이 실적 표 각 항목에 "1분에 파악할" 해석 코멘트를 담백하게 달아줘.
\`\`\`

### 과제 4 — 규정 확인(근거 포함)
\`\`\`
첨부 회계 규정에서 [정산/집행] 관련 핵심만 쉽게 요약하되 근거 조항 번호를 함께, 없으면 "없음"으로.
\`\`\`

> **🎓 포인트**: 회계 숫자는 AI 답을 초안으로만. **규정·산출근거·합계는 원자료로 검증**하고 근거 없는 수치는 넣지 않습니다.`,
      contentEn: `> **For**: budget/accounting · **~3-4h**. Based on "Budget & Accounting Guide".

### T1 — budget table
\`\`\`
Item|Basis|Unit|Qty|Amount|Note; total + 5% contingency.
\`\`\`
### T2 — vs actuals
\`\`\`
Top-3 variances with reasons and next-year implications.
\`\`\`
### T3 — exec comments
\`\`\`
One-line interpretation per item.
\`\`\`
### T4 — rules
\`\`\`
Summarize settlement/execution rules with clause numbers.
\`\`\``,
    },
    {
      id: 'db-trackB', titleKo: '⑤ [트랙 B · 업무 활용] 행정 업무 자동화', titleEn: '⑤ [Track B] Admin Automation',
      contentKo: `> **대상**: 예산 외 일반 행정 업무 다수 · **약 3~4시간**
> **목표**: 반복 행정 업무를 문서화·자동화한다.

### 과제 1 — 규정·지침 쉬운 요약 → 체크리스트
\`\`\`
[규정/지침 붙여넣기]에서 실무 핵심만 쉽게 요약(근거 조항 표시)하고, 담당자용 체크리스트로 만들어줘. 빠뜨리기 쉬운 항목엔 (주의).
\`\`\`

### 과제 2 — 공문·안내문 빠르게
\`\`\`
[상황]에 맞는 공문을 격식 있는 공문체(개조식·하십시오체)로, 번역투 없이, 공백 500자 이내로.
\`\`\`

### 과제 3 — 반복 집계 자동화
\`\`\`
매주 부서별 [항목] 시트를 자동 취합·정리하고 싶어. 구글 스프레드시트 방법(수식 또는 Apps Script)을 단계별로.
\`\`\`

### 과제 4 — 나만의 업무 템플릿
\`\`\`
[자주 하는 행정 업무]를 빠르게 처리하는 재사용 프롬프트 템플릿으로 만들어줘. 바꿀 부분 [ ] 표시.
\`\`\`

> **🎓 포인트**: 규정 해석의 **최종 판단은 사람**. 자동화는 소규모 시험 후 확대, 개인정보는 교내 정책 준수.`,
      contentEn: `> **For**: general admin (majority) · **~3-4h**.

### T1 — rules → checklist
\`\`\`
Summarize rules (cite clauses) → checklist; mark easily-missed (caution).
\`\`\`
### T2 — official doc fast
\`\`\`
Official doc in 개조식·하십시오체, no translationese, <500 chars.
\`\`\`
### T3 — automate
\`\`\`
Automate weekly dept sheet in Google Sheets (formula/Apps Script), step by step.
\`\`\`
### T4 — template
\`\`\`
Reusable template for [recurring admin task]; mark [ ].
\`\`\``,
    },
  ],

  // ═════════════════════════════════════════════
  // 4) 연구 & 실험지원  (연구방법 主 · 업무 활용 補, 이원 트랙)
  // ═════════════════════════════════════════════
  'research-lab': [
    {
      id: 'rl-guide', titleKo: '① 오늘의 실습 안내', titleEn: '① How Today Works',
      contentKo: `${GUIDE_KO}

### 오늘의 흐름 (8시간)
| 시간 | 내용 | 트랙 |
| --- | --- | --- |
| 1교시 (2h) | 연구질문·설계 다루기 | 공통 |
| 2교시 (2h) | 데이터·프로토콜·기록 | 공통 |
| 3교시 (2h) | **트랙 선택** — A: 분석·연구윤리 심화 / B: 연구행정·업무 활용 | A 또는 B |
| 4교시 (2h) | 트랙 심화 + 나만의 템플릿 | A 또는 B |

> **연구 실습이 중심입니다.** 직접 연구하는 분은 **트랙 A**, 연구 지원·행정 다수이면 **트랙 B**를 고르세요.

### 시작 전 준비
1. 전남대GPT 로그인.  2. **내 관심 주제 또는 지원 업무 1개**.`,
      contentEn: `> **Self-guided 8h.** [Common] question/design · [Track A] analysis/ethics · [Track B] research admin.

### Flow
| Time | Content | Track |
| --- | --- | --- |
| 1 (2h) | Question & design | Common |
| 2 (2h) | Data/protocol/records | Common |
| 3 (2h) | A: analysis/ethics or B: research admin | A/B |
| 4 (2h) | Deepen + templates | A/B |`,
    },
    {
      id: 'rl-common1', titleKo: '② [공통] 연구질문·설계', titleEn: '② [Common] Question & Design',
      contentKo: `> **기반 자료**: 「연구 설계 가이드」 · **약 2시간**
> **목표**: 관심 주제를 검증 가능한 질문·설계로 구체화한다.

### 과제 1 — 질문 정련(FINER)
\`\`\`
"[내 관심 주제 또는 지원 과제]"를 검증 가능한 연구질문으로 좁혀줘. FINER 기준 3개, 변수와 대상도.
\`\`\`

### 과제 2 — 설계 유형 선택
\`\`\`
위 질문 검증에 실험/준실험/설문/사례연구 중 무엇이 적절한지 장단점과 함께 추천하고, 표본 수 추정 방법도.
\`\`\`

### 과제 3 — 변수·측정 정의
\`\`\`
독립·종속·통제 변수를 정의하고 각 변수의 측정 방법(척도·도구)을 표로 정리해줘.
\`\`\`

> **🎓 포인트**: 설계의 질은 **교란변수 통제·재현 가능성**에서 갈립니다. 타당성 판단은 연구자·지도교수의 몫.`,
      contentEn: `> **Based on**: "Research Design Guide" · **~2h**.

### T1 — refine (FINER)
\`\`\`
Narrow "[my topic]" into 3 testable RQs (FINER), with variables/subjects.
\`\`\`
### T2 — design
\`\`\`
Experiment/quasi/survey/case — which fits + sample size method.
\`\`\`
### T3 — variables
\`\`\`
Define IV/DV/control variables and measurement as a table.
\`\`\``,
    },
    {
      id: 'rl-common2', titleKo: '③ [공통] 프로토콜·데이터 기록', titleEn: '③ [Common] Protocol & Records',
      contentKo: `> **기반 자료**: 「실험 프로토콜 & 데이터 관리 가이드」 · **약 2시간**
> **목표**: 설계를 실행 가능한 프로토콜·기록 체계로 만든다.

### 과제 1 — 프로토콜 초안
\`\`\`
위 설계로 실험/조사 프로토콜 초안을 만들어줘. [포함] 목적·대상·절차(단계)·측정 시점·중단 기준·필요 자원.
\`\`\`

### 과제 2 — 데이터 기록 양식
\`\`\`
원자료 기록 표를 설계해줘. [열] 대상ID|조건|측정시점|변수들|비고. 입력 규칙(단위·결측 표기)도.
\`\`\`

### 과제 3 — 데이터 관리 계획(DMP)
\`\`\`
연구 데이터 관리 계획 체크리스트: 저장·백업·익명화·보관기간·공유 범위.
\`\`\`

> **🎓 포인트**: **원자료 보존·버전관리·익명화**는 연구 무결성의 기본. 민감정보는 최소 수집·가명, IRB/교내 규정 준수.`,
      contentEn: `> **Based on**: "Protocol & Data Guide" · **~2h**.

### T1 — protocol
\`\`\`
Draft a protocol: purpose, subjects, procedure, timing, stop criteria, resources.
\`\`\`
### T2 — recording sheet
\`\`\`
Raw-data table: ID|Condition|Timepoint|variables|note; entry rules.
\`\`\`
### T3 — DMP
\`\`\`
DMP checklist: storage, backup, anonymization, retention, sharing.
\`\`\``,
    },
    {
      id: 'rl-trackA', titleKo: '④ [트랙 A · 연구] 분석·연구윤리', titleEn: '④ [Track A] Analysis & Ethics',
      contentKo: `> **대상**: 직접 연구·분석하는 분 · **약 3~4시간**
> **기반 자료**: 「분석 코드 & 연구윤리 가이드」

### 과제 1 — 분석 계획(가정 포함)
\`\`\`
[내 데이터 형태, 예: 두 집단 사전/사후 점수]를 분석하려면 어떤 통계가 적절한지 가정과 함께 추천하고 검정 순서를.
\`\`\`

### 과제 2 — 분석 코드
\`\`\`
위 분석을 파이썬(또는 R) 코드로 주석과 함께 만들어줘. 각 단계가 무엇을 검증하는지 설명도.
\`\`\`

### 과제 3 — 결과 해석·시각화
\`\`\`
분석 결과(예시 수치)를 논문/보고용 한 문단으로 해석하고, 적절한 그래프를 추천해줘. 과장 없이 한계 포함.
\`\`\`

### 과제 4 — 연구윤리 점검
\`\`\`
이 연구의 윤리 체크리스트: IRB 필요 여부·동의서·개인정보·표절/이해상충·생성형 AI 사용 명시 방법.
\`\`\`

> **🎓 포인트**: 통계의 **가정 위배**(정규성·등분산)를 확인하지 않으면 결과 왜곡. 논문에 **AI 사용 방식**을 지침대로 밝히세요.`,
      contentEn: `> **For**: research/analysis · **~3-4h**. Based on "Analysis & Ethics Guide".

### T1 — analysis plan
\`\`\`
For [my data], recommend statistics with assumptions and a test order.
\`\`\`
### T2 — code
\`\`\`
Python/R with comments; explain what each step tests.
\`\`\`
### T3 — interpret/visualize
\`\`\`
Interpret results in a paragraph; recommend a chart; include a limitation.
\`\`\`
### T4 — ethics
\`\`\`
Ethics checklist: IRB, consent, privacy, plagiarism/COI, GenAI disclosure.
\`\`\``,
    },
    {
      id: 'rl-trackB', titleKo: '⑤ [트랙 B · 업무 활용] 연구행정·지원 업무', titleEn: '⑤ [Track B] Research Admin',
      contentKo: `> **대상**: 연구 지원·행정 업무 다수 · **약 3~4시간**
> **목표**: 연구 관련 행정·문서 업무를 AI로 빠르게 처리한다.

### 과제 1 — 연구계획서/보고서 초안
\`\`\`
[사업/과제 개요]로 연구(지원)계획서 목차와 각 절 초안을 잡아줘. 표 형식이 필요한 부분은 표로.
\`\`\`

### 과제 2 — 규정·공고 요약
\`\`\`
[연구비/과제 공고 또는 규정]에서 신청자가 꼭 알아야 할 핵심과 일정을 표로 정리하고, 준비물 체크리스트를 만들어줘.
\`\`\`

### 과제 3 — 데이터·문서 정리 자동화
\`\`\`
[반복하는 연구행정 업무: 예-과제별 진행현황 취합]을 매주 자동 정리하는 방법을 단계별로 설계해줘.
\`\`\`

### 과제 4 — 나만의 업무 템플릿
\`\`\`
[자주 하는 연구행정 업무]를 빠르게 처리하는 재사용 프롬프트 템플릿을 만들어줘. 바꿀 부분 [ ] 표시.
\`\`\`

> **🎓 포인트**: 공고·규정 요약은 근거를 함께 확인하고, 최종 판단은 사람. 개인정보·미공개 연구정보는 신중히.`,
      contentEn: `> **For**: research admin/support (majority) · **~3-4h**.

### T1 — plan/report draft
\`\`\`
From [project outline], outline a research(-support) plan with per-section drafts; tables where needed.
\`\`\`
### T2 — call/rule summary
\`\`\`
Summarize a grant call/rules: essentials + schedule as a table; prep checklist.
\`\`\`
### T3 — automate
\`\`\`
Design weekly auto-collation for [recurring research-admin task], step by step.
\`\`\`
### T4 — template
\`\`\`
Reusable template for [recurring task]; mark [ ].
\`\`\``,
    },
  ],
};

export function getWorkbook(programId: string): WorkbookModule[] {
  return WORKBOOK[programId] || [];
}
