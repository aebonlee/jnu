import{C as y,r as x,l as e,F as T,E as $,L as N}from"./index-CcfXgN5-.js";import{S as A}from"./SEOHead-CeT_GIJ2.js";import{M as S,m as M}from"./materials-lqP30hdx.js";import{g as E,P as G}from"./courses-D6Ru7kQm.js";import{M as I,r as F}from"./index-DQ8b204s.js";import{r as K}from"./TipBox-DhMGG732.js";function g({text:i}){const{language:l}=y(),[c,r]=x.useState(!1),d=()=>{const n=document.createElement("textarea");n.value=i,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();try{document.execCommand("copy")}catch{}document.body.removeChild(n)},m=()=>{try{const n=navigator.clipboard?.writeText(i);n&&typeof n.catch=="function"?n.catch(()=>d()):d()}catch{d()}r(!0),window.setTimeout(()=>r(!1),1500)};return e.jsxs("div",{className:"prompt-block",children:[e.jsxs("div",{className:"prompt-block-header",children:[e.jsxs("span",{className:"prompt-block-lang",children:[e.jsx("i",{className:"fa-solid fa-terminal"})," ",l==="ko"?"프롬프트":"PROMPT"]}),e.jsxs("button",{type:"button",className:`prompt-copy-btn${c?" copied":""}`,onClick:m,"aria-label":l==="ko"?"프롬프트 복사":"Copy prompt",children:[e.jsx("i",{className:`fa-solid ${c?"fa-check":"fa-copy"}`}),c?l==="ko"?"복사됨":"Copied!":l==="ko"?"복사":"Copy"]})]}),e.jsx("pre",{className:"practice-prompt",children:e.jsx("code",{children:i})})]})}const L={foundation:[{id:"f-lab1",title:"랩 1 · 첫 대화부터 학과 안내문까지",scenario:"전남대GPT에 처음 로그인해 기본 사용법을 익히고, 실제 학과 행사 안내문을 완성합니다.",level:"입문",minutes:"약 20분",steps:[{title:"로그인하고 첫 인사",detail:"교내 계정으로 전남대GPT에 로그인한 뒤, 아래 프롬프트로 AI가 무엇을 할 수 있는지 직접 물어봅니다.",prompt:`너는 전남대학교 교직원을 돕는 AI 비서야.

[작업] 행정 조교 관점에서 너를 활용할 수 있는 일 5가지를 알려줘.
[형식] 각 항목 "업무 — 활용 예시" 한 줄씩
[끝] 시간을 가장 아껴줄 1가지 추천`,check:"5가지 활용 예시가 목록으로 나오면 성공."},{title:"안내문 초안 만들기",detail:"행사 정보를 주고 공지문 초안을 받습니다. 정보를 바꿔 다시 시도해 보세요.",prompt:`아래 정보로 교내 안내문을 작성해줘.

[행사 정보]
- 행사: 생성형 AI 특강
- 일시: 7월 10일(목) 14:00
- 장소: 공대 2호관 세미나실
- 대상: 교직원

[형식] 제목 + 인사말 + 핵심정보 + 마무리 / 정중하고 간결한 공지체`,check:"제목·본문·일시/장소가 정리된 안내문이 나오는지 확인."},{title:"말투·길이 다듬기",detail:"한 번에 끝내지 말고 대화로 고칩니다.",prompt:`방금 안내문을 두 가지 버전으로 다시 써줘.

1) 더 따뜻하고 친근한 말투
2) 200자 이내 짧은 버전

[조건] 핵심 정보(일시·장소)는 두 버전 모두 유지`,check:"같은 내용이 톤·길이만 달라져 두 버전으로 나오면 성공."},{title:"내 업무에 적용",detail:"실제 본인이 곧 보내야 할 안내문 정보를 넣어 만들어 보고, 바로 복사해 사용합니다.",check:"실제로 쓸 수 있는 문서가 나왔다면 이번 랩 완료!"}],result:"전남대GPT 기본 사용 흐름(요청 → 다듬기 → 적용)을 익히고, 바로 쓸 수 있는 안내문을 완성했습니다."},{id:"f-lab2",title:"랩 2 · 회의록 10분 정리 자동화",scenario:"두서없는 회의 메모를 깔끔한 회의록 + 할 일 목록으로 바꿉니다.",level:"기초",minutes:"약 15분",steps:[{title:"메모 붙여넣기",detail:"회의 중 적은 메모(또는 녹취 텍스트)를 그대로 붙여넣고 정리를 요청합니다.",prompt:`아래 회의 메모를 정리해줘.

[출력]
1) 결정사항 3가지
2) 담당자별 할 일 — 표(담당자 | 할 일 | 기한)
3) 다음 회의 안건 후보

[회의 메모]
(여기에 붙여넣기)`,check:"결정사항·할일표·안건이 구분되어 나오는지 확인."},{title:"공유용 문장으로",detail:"팀에 보낼 형태로 다듬습니다.",prompt:`위 내용을 팀 채팅용 공유 메시지로 바꿔줘.

[형식] 3~4줄, 핵심 결정과 마감일 위주
[말투] 간결하고 명확하게`,check:"짧고 명확한 공유 문구가 나오면 성공."},{title:"템플릿화",detail:"다음에도 쓰도록 빈칸 템플릿을 만들어 저장합니다.",prompt:`"회의록 정리" 재사용 프롬프트 템플릿을 만들어줘.

[요구] [회의 메모] 칸만 채우면 → 결정사항·할일표·요약이 나오도록
[포함] 출력 형식 지시도 템플릿 안에 명시`,check:"재사용 가능한 템플릿을 메모장에 저장."}],result:"회의 메모를 즉시 회의록·할일·공유문구로 바꾸는 나만의 템플릿을 확보했습니다."},{id:"f-lab3",title:'랩 3 · 나만의 "공문 작성 도우미" 만들기',scenario:"반복되는 공문 작성을 처리하는 맞춤 GPT(전용 도우미)를 설계합니다.",level:"심화",minutes:"약 25분",steps:[{title:"도우미 지시문 설계",detail:"맞춤 GPT의 행동 규칙(지시문)을 AI와 함께 만듭니다.",prompt:`전남대 "공문 작성 도우미" 맞춤 GPT의 지시문을 작성해줘.

[규칙] 1)두문/본문/붙임 형식 유지 2)정중한 행정 어투 3)마지막에 검토 체크리스트 첨부
[출력] 복사해 바로 쓸 수 있는 지시문 전문`,check:"지시문에 형식·말투·체크리스트 규칙이 담겼는지 확인."},{title:"테스트",detail:"지시문대로 동작하는지 실제 상황으로 시험합니다.",prompt:`(위 지시문을 적용해서) 다음 공문을 작성해줘.

[내용] 학과 워크숍 참석 협조 요청
[수신] 각 부서장
[일시] 7월 15일
[조건] 지시문의 형식·체크리스트를 지킬 것`,check:"두문·본문·붙임·체크리스트가 모두 나오면 성공."},{title:"개선",detail:"아쉬운 점을 직접 지적해 지시문을 보완합니다.",prompt:`방금 결과에서 행정용어가 너무 어려웠어.

[요청] 지시문에 "어려운 용어는 괄호로 쉽게 풀어쓴다" 규칙을 추가해 다시 정리해줘.
[출력] 수정된 지시문 + 적용 예시 1개`,check:"규칙이 반영돼 더 쉬운 공문이 나오는지 확인."}],result:"공문 작성을 자동화하는 맞춤 도우미의 지시문을 완성했습니다. 동료와 공유해 보세요."},{id:"f-lab4",title:"랩 4 · 파일(PDF·엑셀)로 업무 처리",scenario:"긴 규정 PDF와 엑셀 표를 업로드해 요약·분석합니다.",level:"심화",minutes:"약 20분",steps:[{title:"규정 PDF 요약",detail:"긴 규정 문서를 올리고 필요한 부분만 뽑습니다.",prompt:`업로드한 규정에서 "출장비 정산" 관련 조항만 찾아줘.

[출력] 1)쉬운 요약 2)직원이 자주 실수하는 부분 3)근거 조항 번호
[조건] 규정에 없으면 "규정에 명시되지 않음"으로 표시`,check:"관련 조항 요약 + 실수 포인트가 나오는지 확인."},{title:"엑셀 표 해석",detail:"표를 붙여넣고 인사이트를 뽑습니다.",prompt:`아래 학과별 수강인원 표를 분석해줘.

[출력] 1)가장 많이/적게 신청한 과목 2)눈에 띄는 경향 3가지 3)보고용 한 문단 요약

[표]
(여기에 붙여넣기)`,check:"숫자 해석과 요약 문단이 나오면 성공."},{title:"결과 재가공",detail:"바로 보고서에 넣을 형태로 변환합니다.",prompt:`위 분석을 발표 슬라이드 1장으로 정리해줘.

[형식] 슬라이드 제목 1개 + 핵심 불릿 4개
[조건] 숫자 근거를 포함`,check:"발표용으로 쓸 수 있는 형태로 정리되면 완료."}],result:"파일을 활용해 요약·분석·재가공하는 흐름을 익혔습니다. 실제 업무 파일로도 연습해 보세요."}],"research-writing":[{id:"rw-lab1",title:"랩 1 · 설문 데이터 정리부터 기술통계까지",scenario:"지저분한 설문 데이터를 정리하고, 연구질문에 맞는 통계를 고릅니다.",level:"중급",minutes:"약 25분",steps:[{title:"정리 절차 설계",detail:"결측치·중복이 섞인 데이터를 어떻게 정리할지 단계로 받습니다.",prompt:`[맥락] 온라인 설문 300명 데이터에 결측치·중복 응답이 있어.

[작업] 분석 전 데이터 정리 절차를 단계별로 알려줘.
[형식] 단계별 (해야 할 일 + 주의점)`,check:"정리 단계가 순서대로, 주의점과 함께 나오는지 확인."},{title:"코드북 만들기",detail:"문항을 분석용 변수로 정리합니다.",prompt:`다음 설문 문항을 코드북 표로 만들어줘.

[표 열] 변수명 | 문항 | 유형 | 값 라벨
[조건] 변수명은 영문+언더바로 통일

[문항 목록]
(여기에 붙여넣기)`,check:"변수명·유형·라벨 3열 표가 나오면 성공."},{title:"통계 방법 고르기",detail:"연구질문에 맞는 분석을 추천받습니다.",prompt:`[맥락] 실험군/대조군 시험 점수 차이 비교. 표본 각 40명, 정규성 만족.

[작업] 1)적절한 통계 방법과 이유 2)확인할 가정 3)논문 보고 형식(t(df)=…, p=…, d=…)`,check:"방법(t검정 등)과 근거가 제시되는지 확인."},{title:"결과 문장화",detail:"통계 수치를 논문 문장으로 바꿉니다.",prompt:"독립표본 t검정 결과 t(78)=2.34, p=.022가 나왔어. 논문 결과 절에 쓸 문장으로 작성해줘.",check:"학술 문장 형태로 변환되면 완료."}],result:"데이터 정리 → 코드북 → 통계 선택 → 결과 문장화까지 분석 한 흐름을 경험했습니다."},{id:"rw-lab2",title:"랩 2 · 그래프 고르기 + 시각화 코드",scenario:"데이터에 맞는 그래프를 정하고, 그릴 수 있는 코드까지 받습니다.",level:"중급",minutes:"약 20분",steps:[{title:"그래프 종류 선택",detail:"무엇을 보여줄지에 따라 적절한 그래프를 묻습니다.",prompt:`[맥락] 연도별(2019~2025) 학과 지원자 수 변화를 보여주고 싶어.

[작업] 1)가장 적절한 그래프와 이유 2)축·범례 구성 3)캡션 예시`,check:"그래프 추천 + 이유 + 캡션이 나오는지 확인."},{title:"시각화 코드 받기",detail:"파이썬 코드를 주석과 함께 받습니다.",prompt:`아래 데이터로 막대그래프를 그리는 파이썬(matplotlib) 코드를 작성해줘.

[조건] 한글 폰트·제목·축 라벨 포함, 각 줄에 한글 주석

[데이터]
(여기에 붙여넣기)`,check:"실행 가능한 코드 + 줄별 주석이 나오면 성공."},{title:"해석 문구",detail:"그래프가 말하는 바를 글로 정리합니다.",prompt:`이 그래프를 해석해줘.

[출력] 1)읽을 수 있는 경향 3가지 2)보고서용 해설 2문장
[조건] 수치 근거 포함`,check:"경향 + 해설 문장이 나오면 완료."}],result:"적절한 그래프 선택 → 코드 → 해석까지, 데이터를 설득력 있게 표현하는 법을 익혔습니다."},{id:"rw-lab3",title:"랩 3 · 선행연구 비교 → 서론 쓰기",scenario:"여러 논문을 비교표로 정리하고, 내 연구의 차별점을 서론으로 만듭니다.",level:"중급",minutes:"약 25분",steps:[{title:"비교표 만들기",detail:"초록 몇 편을 주고 한눈에 비교합니다.",prompt:`아래 선행연구 초록 3편을 비교표로 정리해줘.

[표 열] 저자(연도) | 방법 | 결과 | 한계
표 아래에 공통 연구 공백(gap) 제시

[초록 3편]
(여기에 붙여넣기)`,check:"비교표 + 연구 공백이 도출되는지 확인."},{title:"차별점 문장화",detail:"내 연구가 다른 점을 서론용 문장으로.",prompt:`[맥락] 선행연구는 설문 기반, 내 연구는 실제 행동 데이터 사용.

[작업] 이 차별점을 서론용 학술 문장 2~3개로 정리해줘.
[조건] 왜 중요한지 근거 포함`,check:"차별점이 명확한 문장으로 나오면 성공."},{title:"서론 뼈대",detail:"서론 문단 구성을 잡습니다.",prompt:`서론 구성을 잡아줘.

[구성] 연구 배경 → 문제 제기 → 선행연구 한계 → 본 연구 목적
[출력] 문단 구성 + 각 문단 첫 문장(topic sentence)`,check:"문단 구성 + 첫 문장이 나오면 완료."}],result:"문헌검토를 표로 압축하고, 내 연구를 위치 짓는 서론 뼈대를 완성했습니다."},{id:"rw-lab4",title:"랩 4 · 결과 → IMRaD 초안 → 영문 초록",scenario:"분석 결과를 논문 구조로 풀어내고 영문 초록까지 만듭니다.",level:"심화",minutes:"약 30분",steps:[{title:"방법 절 초안",detail:"연구 정보로 방법 절을 작성합니다.",prompt:`아래 정보로 논문 "연구방법" 절 초안을 작성해줘.

[순서] 참여자 → 측정도구 → 절차 → 분석방법
[조건] 과거시제, 재현 가능하게

[연구 정보]
(여기에 붙여넣기)`,check:"4개 요소가 순서대로 담긴 초안이 나오는지 확인."},{title:"논의 뼈대",detail:"결과를 논의로 연결합니다.",prompt:`결과 요약을 바탕으로 논의(Discussion) 구성을 잡아줘.

[구성] (1)핵심 발견 (2)선행연구 비교 (3)함의 (4)한계
[출력] 각 문단 첫 문장 제안`,check:"4단 구성 + 첫 문장이 나오면 성공."},{title:"영문 초록",detail:"구조화 초록을 영어로 만듭니다.",prompt:`내 논문으로 구조화 영문 초록을 작성해줘.

[구조] 배경→목적→방법→결과→결론 / 250단어 이내
그 아래 키워드 5개

[논문 정보]
(여기에 붙여넣기)`,check:"영문 초록 + 키워드가 나오면 완료."},{title:"교정 점검",detail:"학술 영어로 다듬고 무엇을 고쳤는지 확인합니다.",prompt:`위 초록을 학술 영어로 교정해줘.

[교정] 문법·관사·시제 + hedging
[출력] 표(원문 | 수정 | 이유)`,check:"교정본 + 수정 사유 표가 나오면 이번 랩 완료!"}],result:"결과를 IMRaD 구조의 초안과 영문 초록으로 완성하는 전 과정을 경험했습니다."}],"data-budget":[{id:"db-lab1",title:"랩 1 · 부서별 집행 데이터 집계·피벗",scenario:"흩어진 예산 집행 데이터를 집계해 한눈에 보고합니다.",level:"중급",minutes:"약 20분",steps:[{title:"수식 받기",detail:"부서별 합계 수식을 받고 동작 원리를 이해합니다.",prompt:`[맥락] 엑셀 A열=부서, B열=집행액.

[작업] 부서별 집행액 합계 수식을 알려줘.
[출력] 수식 + 동작 원리를 예시로 쉽게 설명`,check:"SUMIF 등 수식과 설명이 나오는지 확인."},{title:"피벗 설계",detail:"월별·부서별 집계 피벗 구성을 추천받습니다.",prompt:`[맥락] 월별·부서별 예산 집행 현황을 한눈에 보고 싶어.

[작업] 피벗 테이블 행/열/값 구성을 추천하고 이유를 알려줘.
[출력] 구성안 + 완성 표 형태 예시`,check:"행/열/값 구성안이 나오면 성공."},{title:"문장 보고",detail:"집계 결과를 보고 문장으로 바꿉니다.",prompt:`아래 부서별 집행률 표를 요약해줘.

[출력] 집행 빠른/느린 부서 + 전체 경향을 3문장으로
[조건] 수치 근거 포함

[표]
(여기에 붙여넣기)`,check:"핵심이 3문장으로 정리되면 완료."}],result:"엑셀 집계·피벗 설계와 보고 문장화까지, 행정 데이터를 빠르게 다루는 법을 익혔습니다."},{id:"db-lab2",title:"랩 2 · 예산안 산출근거 + 증감 설명",scenario:"예산 항목의 산출 근거를 작성하고, 증액 사유를 설득력 있게 설명합니다.",level:"중급",minutes:"약 20분",steps:[{title:"산출 근거 문장",detail:"항목별 금액의 근거를 예산서 문장으로.",prompt:`[맥락] 학과 행사 예산 — 강사료 50만, 다과 20만, 인쇄 10만.

[작업] 각 항목 산출 근거를 예산서 문장으로 정리해줘.
[출력] 표(항목 | 금액 | 근거)`,check:"항목별 근거 문장이 나오는지 확인."},{title:"증감 설명",detail:"전년 대비 증액 사유를 만듭니다.",prompt:`[맥락] 올해 출장비 예산이 전년 대비 30% 증가.

[작업] 예산 심의용 증액 사유 3가지를 작성해줘.
[조건] 각 사유에 근거 포함`,check:"근거 있는 증액 사유 3가지가 나오면 성공."},{title:"검토 체크리스트",detail:"제출 전 점검 항목을 받습니다.",prompt:`예산안 제출 전 점검 체크리스트를 만들어줘.

[출력] 항목 | 확인 방법
[포함] 산출근거·규정준수·합계검증·누락 확인`,check:"체크리스트가 나오면 완료."}],result:"산출 근거·증감 설명·검토까지 예산 편성 실무 문서를 빠르게 작성했습니다."},{id:"db-lab3",title:"랩 3 · 분기 재무보고서 + 경영진 요약",scenario:"집행 데이터를 보고서로 종합하고, 30초 요약을 만듭니다.",level:"중급",minutes:"약 20분",steps:[{title:"보고서 초안",detail:"데이터로 보고서 구조를 채웁니다.",prompt:`아래 분기 집행 데이터로 재무 보고서 초안을 작성해줘.

[구성] 총괄 요약 → 부서별 집행 현황(표) → 특이사항 → 다음 분기 계획

[데이터]
(여기에 붙여넣기)`,check:"4개 구성요소가 담긴 보고서가 나오는지 확인."},{title:"경영진 요약",detail:"바쁜 의사결정자용 3문장 요약.",prompt:`위 보고서를 경영진용으로 요약해줘.

[출력] 30초 안에 파악할 3문장(현황·이슈·조치)`,check:"핵심만 담은 3문장이 나오면 성공."},{title:"예상 질문 대비",detail:"보고 시 받을 질문과 답을 준비합니다.",prompt:`이 보고서 발표 시 예상 질문에 대비해줘.

[출력] 예상 질문 3개 + 각 답변
[조건] 근거 수치 포함`,check:"Q&A가 정리되면 완료."}],result:"분기 보고서와 경영진 요약, 예상 질문 대비까지 한 번에 준비했습니다."},{id:"db-lab4",title:"랩 4 · 회계 규정 Q&A 도우미 만들기",scenario:"복잡한 회계 규정을 빠르게 확인하는 전용 도우미를 만듭니다.",level:"심화",minutes:"약 25분",steps:[{title:"규정에서 답 찾기",detail:"규정 문서를 올리고 근거와 함께 답을 받습니다.",prompt:`업로드한 회계 규정에서 "법인카드 사용 한도"를 찾아줘.

[출력] 쉬운 설명 + 근거 조항 번호 + 예외
[조건] 규정에 없으면 "규정에 명시되지 않음"으로 표시`,check:"설명 + 근거 조항이 함께 나오는지 확인."},{title:"도우미 지시문",detail:"맞춤 GPT 지시문을 설계합니다.",prompt:`전남대 "회계 규정 Q&A 도우미" 지시문을 작성해줘.

[규칙] 근거 조항 함께 제시, 규정에 없으면 "규정에 명시되지 않음", 추측 금지
[출력] 지시문 전문`,check:"근거 제시·미규정 처리 규칙이 담기면 성공."},{title:"FAQ 정리",detail:"자주 묻는 질문을 미리 정리합니다.",prompt:`직원들이 회계 규정에서 자주 묻는 질문 FAQ를 만들어줘.

[출력] 표(질문 | 간단한 답 | 근거)
[분량] 10개`,check:"FAQ 표가 나오면 완료."}],result:"근거를 제시하는 회계 규정 도우미와 FAQ를 갖춰, 규정 확인 시간을 크게 줄였습니다."}],"research-lab":[{id:"rl-lab1",title:"랩 1 · 막연한 아이디어 → 연구질문·가설",scenario:"관심사를 검증 가능한 연구질문과 변수로 구체화합니다.",level:"중급",minutes:"약 20분",steps:[{title:"연구질문 만들기",detail:"막연한 관심을 질문으로 좁힙니다.",prompt:`[맥락] "AI가 학습에 도움이 되는지" 같은 막연한 관심.

[작업] 검증 가능한 연구질문 3개 + 각 가설로 구체화
[조건] 각 질문의 변수도 표시`,check:"질문 + 가설 쌍이 나오는지 확인."},{title:"변수 정의",detail:"독립·종속·통제변수를 정리합니다.",prompt:`내 연구 변수를 정리해줘.

[출력] 표(구분 | 변수명 | 조작적 정의 | 측정 방법)

[주제]
(여기에 입력)`,check:"변수 3종 + 측정 방법 표가 나오면 성공."},{title:"범위 좁히기",detail:"현실적인 범위로 조정합니다.",prompt:`이 연구를 한 학기 안에 끝낼 수 있게 범위를 좁혀줘.

[출력] 현실적인 축소 방안 3가지 + 각 장단점`,check:"실행 가능한 범위 제안이 나오면 완료."}],result:"막연한 아이디어를 검증 가능한 연구질문·가설·변수로 구체화했습니다."},{id:"rl-lab2",title:"랩 2 · 연구계획서 배경·일정 작성",scenario:"연구계획서의 핵심 절과 추진 일정을 초안으로 만듭니다.",level:"중급",minutes:"약 25분",steps:[{title:"배경·필요성",detail:"사회적·학문적 필요를 담은 배경 절.",prompt:`아래 주제로 연구계획서 "연구 배경 및 필요성" 절을 작성해줘.

[포함] 사회적 필요 + 학문적 필요
[조건] 넓게→구체적 순서

[주제]
(여기에 입력)`,check:"두 측면이 모두 담긴 배경 절이 나오는지 확인."},{title:"추진 일정",detail:"월별 간트 표를 만듭니다.",prompt:`6개월 연구 추진 일정을 월별 간트 표로 만들어줘.

[단계] 문헌검토·설계·데이터수집·분석·작성
[출력] 표(단계 | 1~6월) + 단계별 산출물`,check:"월별 단계 표가 나오면 성공."},{title:"기대효과",detail:"활용 방안을 정리합니다.",prompt:`이 연구의 기대효과와 활용 방안을 정리해줘.

[출력] 학문적 3가지 + 실무적 3가지
[조건] 구체적 활용 상황 포함`,check:"기대효과가 분류되어 나오면 완료."}],result:"연구계획서의 배경·일정·기대효과 초안을 빠르게 확보했습니다."},{id:"rl-lab3",title:"랩 3 · 실험 프로토콜·기록 양식 설계",scenario:"재현 가능한 실험 절차와 일관된 데이터 기록 체계를 만듭니다.",level:"심화",minutes:"약 25분",steps:[{title:"프로토콜 작성",detail:"다른 사람도 재현하도록 절차서를 만듭니다.",prompt:`아래 실험을 재현 가능한 프로토콜로 정리해줘.

[구분] 준비물 · 절차(순서) · 주의사항 · 반복 횟수

[실험]
(여기에 입력)`,check:"준비물·절차·주의사항이 구분되면 확인."},{title:"변인 통제 점검",detail:"통제할 변인을 빠짐없이 짚습니다.",prompt:`이 실험의 통제 변인을 점검해줘.

[출력] 표(통제 변인 | 영향 | 통제 방법)
[조건] 놓치기 쉬운 변인까지`,check:"통제 변인 + 방법이 나오면 성공."},{title:"기록 양식",detail:"일관된 데이터 기록 표를 설계합니다.",prompt:`반복 측정 실험용 데이터 기록 표 양식을 설계해줘.

[열] 날짜 | 조건 | 측정값(단위) | 비고
[조건] 입력 규칙과 결측 처리 규칙 포함`,check:"기록 양식 + 규칙이 나오면 완료."}],result:"재현 가능한 프로토콜과 데이터 기록 체계를 갖춰 실험 준비를 마쳤습니다."},{id:"rl-lab4",title:"랩 4 · 분석 코드 작성·디버깅 → 결과 정리",scenario:"AI로 분석 코드를 만들고 오류를 고친 뒤 결과를 정리합니다.",level:"심화",minutes:"약 30분",steps:[{title:"분석 코드 받기",detail:"데이터를 불러와 요약·시각화하는 코드를 받습니다.",prompt:`CSV 실험 데이터를 분석하는 파이썬 코드를 작성해줘.

[작업] 조건별 평균·표준편차 + 그래프
[조건] 한 줄씩 한글 주석, 시드 고정`,check:"실행 가능한 코드 + 주석이 나오는지 확인."},{title:"에러 해결",detail:"실행 오류를 그대로 붙여 고칩니다.",prompt:`아래 파이썬 코드에서 에러가 나.

[출력] 1)원인 2)해결 방법 3)수정된 전체 코드

[코드와 에러]
(여기에 붙여넣기)`,check:"원인 설명 + 수정 코드가 나오면 성공."},{title:"결과 연구노트",detail:"결과를 다음 연구로 연결하는 노트로.",prompt:`오늘 실험 결과를 연구노트로 정리해줘.

[출력] (1)핵심 발견 (2)예상과 다른 점 (3)다음에 확인할 것

[오늘 결과]
(여기에 붙여넣기)`,check:"3항목 연구노트가 나오면 완료."},{title:"발표 구성",detail:"학회 발표 슬라이드 구성을 받습니다.",prompt:`이 결과로 10분 학회 발표 슬라이드를 구성해줘.

[출력] 8장(장별 제목 + 핵심 메시지)
[흐름] 도입-방법-결과-결론`,check:"8장 구성이 나오면 이번 랩 완료!"}],result:"코드 작성 → 디버깅 → 결과 정리 → 발표 구성까지 연구 마무리 흐름을 경험했습니다."}]};function B(i){return L[i]||[]}function U(){const{category:i}=T(),{language:l}=y(),c=$(),[r,d]=x.useState(!0),[m,n]=x.useState(null),[h,j]=x.useState(!1),a=E(i||"");if(!a)return e.jsxs("div",{className:"container",style:{padding:"120px 40px",textAlign:"center"},children:[e.jsx("h2",{children:l==="ko"?"과정을 찾을 수 없습니다.":"Program not found."}),e.jsx("button",{className:"btn btn-primary",onClick:()=>c("/courses"),children:l==="ko"?"교육과정으로 돌아가기":"Back to Courses"})]});const w=a.curriculum.reduce((s,t)=>s+t.sessions.length,0),b=S.filter(s=>s.categoryId===a.id),f=B(a.id),o=m?b.find(s=>s.id===m):null,P=s=>{n(s),j(!1),window.scrollTo({top:0,behavior:"smooth"})},C=()=>{j(!0),n(null),window.scrollTo({top:0,behavior:"smooth"})},k=()=>{n(null),j(!1),window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx(A,{title:l==="ko"?a.nameKo:a.nameEn,path:`/courses/${i}`}),e.jsx("section",{className:"program-hero",style:{borderBottom:`3px solid ${a.color}`},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"program-hero-inner",children:[e.jsxs("div",{className:"program-hero-id",children:[e.jsx("div",{className:"program-hero-icon",style:{background:a.color},children:e.jsx("i",{className:`fa-solid ${a.icon}`})}),e.jsxs("div",{className:"program-hero-head",children:[e.jsxs("div",{className:"eyebrow",children:["Program ",String(a.order).padStart(2,"0")," · ",a.duration]}),e.jsx("h1",{children:l==="ko"?a.nameKo:a.nameEn}),e.jsx("p",{className:"program-hero-tagline",children:a.tagline}),e.jsx("p",{className:"program-hero-desc",children:l==="ko"?a.descKo:a.descEn})]})]}),e.jsxs("div",{className:"program-hero-aside",children:[a.instructors&&a.instructors.some(s=>s.padlet)&&e.jsx("div",{className:"program-hero-padlets",children:a.instructors.filter(s=>s.padlet).map((s,t)=>e.jsxs("a",{href:s.padlet,target:"_blank",rel:"noopener noreferrer",className:"padlet-btn",style:{background:a.color},children:[e.jsx("i",{className:"fa-solid fa-clipboard-list"}),l==="ko"?s.cohort?`패들렛 ${s.cohort}`:"패들렛 실습보드":s.cohort?`Padlet ${s.cohort}`:"Padlet Board",e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square padlet-btn-ext"})]},t))}),e.jsxs("div",{className:"program-hero-meta",children:[e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-user-check"})," ",a.audience]}),e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-layer-group"})," ",w,l==="ko"?"개 실습 교시":" sessions"]}),e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-signal"})," ",a.level]})]})]})]}),e.jsxs("div",{className:"program-platform-note",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"}),e.jsx("span",{children:l==="ko"?"본 과정은 교내 전용 플랫폼 전남대GPT(타임리GPT 기반)에서 진행되며, 모든 실습은 예시 프롬프트로 직접 따라 할 수 있습니다.":"This program runs on the campus platform JNU GPT (TimelyGPT-based); every practice includes a ready-to-use prompt."})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container course-layout",children:[e.jsx("aside",{className:"course-sidebar",children:e.jsxs("div",{className:"course-sidebar-inner",children:[e.jsxs("div",{className:"course-sidebar-title",style:{borderColor:a.color},children:[e.jsx("i",{className:`fa-solid ${a.icon}`,style:{color:a.color}}),e.jsx("span",{children:l==="ko"?a.nameKo:a.nameEn})]}),a.instructors&&a.instructors.length>0&&e.jsxs("div",{className:"course-instructor",children:[e.jsxs("span",{className:"course-instructor-label",children:[e.jsx("i",{className:"fa-solid fa-chalkboard-user"})," ",l==="ko"?"담당교수":"Instructor"]}),a.instructors.map((s,t)=>e.jsxs("div",{className:"course-instructor-row",children:[e.jsxs("span",{className:"ci-name",children:[s.cohort&&e.jsx("em",{className:"ci-cohort",children:s.cohort}),s.name]}),e.jsx("span",{className:"ci-sessions",children:l==="ko"?`1차시 ${s.session1} · 2차시 ${s.session2}`:`S1 ${s.session1} · S2 ${s.session2}`})]},t))]}),e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:l==="ko"?"과정 메뉴":"Course Menu"}),e.jsxs("button",{type:"button",className:`course-sidebar-link${!o&&!h?" active":""}`,onClick:k,children:[e.jsx("i",{className:"fa-solid fa-list-check"})," ",l==="ko"?"커리큘럼":"Curriculum"]}),f.length>0&&e.jsxs("button",{type:"button",className:`course-sidebar-link${h?" active":""}`,onClick:C,children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",l==="ko"?"실습 · 따라하기":"Hands-on Labs"]}),e.jsxs("button",{type:"button",className:`course-sidebar-link course-sidebar-toggle${r?" open":""}`,onClick:()=>d(!r),"aria-expanded":r,children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",l==="ko"?"학습자료":"Materials",e.jsx("i",{className:"fa-solid fa-chevron-down course-sidebar-chevron"})]}),r&&e.jsxs("div",{className:"course-sidebar-sublist",children:[b.map(s=>e.jsxs("button",{type:"button",className:`course-sidebar-link sub${m===s.id?" active":""}`,onClick:()=>P(s.id),children:[e.jsx("i",{className:"fa-regular fa-file-lines"})," ",l==="ko"?s.nameKo:s.nameEn]},s.id)),e.jsxs(N,{to:`/materials/${a.id}`,className:"course-sidebar-link sub more",children:[e.jsx("i",{className:"fa-solid fa-arrow-right"})," ",l==="ko"?"학습자료 전체보기":"View all materials"]})]}),e.jsxs(N,{to:`/community/${a.id}`,className:"course-sidebar-link",children:[e.jsx("i",{className:"fa-solid fa-comments"})," ",l==="ko"?"게시판":"Board"]})]}),!o&&!h&&e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:l==="ko"?"커리큘럼 바로가기":"Jump to"}),a.curriculum.map(s=>e.jsxs("a",{href:`#day-${s.day}`,className:"course-sidebar-link sub",children:[e.jsx("i",{className:"fa-regular fa-calendar"})," ",s.badge," — ",s.theme.split(" — ")[0]]},s.day))]}),e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:l==="ko"?"다른 과정":"Other Programs"}),G.filter(s=>s.id!==a.id).map(s=>e.jsxs(N,{to:`/courses/${s.id}`,className:"course-sidebar-link sub",children:[e.jsx("i",{className:`fa-solid ${s.icon}`})," ",l==="ko"?s.nameKo:s.nameEn]},s.id))]})]})}),e.jsx("div",{className:"course-content",children:h?e.jsxs("div",{className:"handson",children:[e.jsxs("button",{type:"button",className:"material-inline-back",onClick:k,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",l==="ko"?"커리큘럼으로":"Back to curriculum"]}),e.jsxs("div",{className:"handson-head",children:[e.jsxs("div",{className:"material-inline-eyebrow",style:{color:a.color},children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",l==="ko"?a.nameKo:a.nameEn," · ",l==="ko"?"실습 따라하기":"Hands-on"]}),e.jsx("h2",{className:"material-inline-title",children:l==="ko"?"실습 · 따라하기":"Hands-on Labs"}),e.jsx("p",{className:"handson-intro",children:l==="ko"?"전남대GPT를 켜고 아래 랩을 순서대로 따라 해보세요. 각 단계의 예시 프롬프트를 그대로 입력하면 됩니다.":"Open JNU GPT and follow each lab. Paste the example prompts as-is."})]}),f.map(s=>e.jsxs("article",{className:"lab-card",children:[e.jsxs("div",{className:"lab-card-head",style:{borderColor:a.color},children:[e.jsx("h3",{className:"lab-title",children:s.title}),e.jsxs("div",{className:"lab-meta",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-signal"})," ",s.level]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-clock"})," ",s.minutes]})]}),e.jsx("p",{className:"lab-scenario",children:s.scenario})]}),e.jsx("ol",{className:"lab-steps",children:s.steps.map((t,u)=>e.jsxs("li",{className:"lab-step",children:[e.jsx("span",{className:"lab-step-num",style:{background:a.color},children:u+1}),e.jsxs("div",{className:"lab-step-body",children:[e.jsx("div",{className:"lab-step-title",children:t.title}),e.jsx("p",{className:"lab-step-detail",children:t.detail}),t.prompt&&e.jsx(g,{text:t.prompt}),t.check&&e.jsxs("div",{className:"lab-step-check",children:[e.jsx("i",{className:"fa-solid fa-circle-check"})," ",t.check]})]})]},u))}),e.jsxs("div",{className:"lab-result",children:[e.jsx("i",{className:"fa-solid fa-flag-checkered"})," ",s.result]})]},s.id))]}):o?e.jsxs("article",{className:"material-inline",children:[e.jsxs("button",{type:"button",className:"material-inline-back",onClick:k,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",l==="ko"?"커리큘럼으로":"Back to curriculum"]}),e.jsxs("div",{className:"material-inline-eyebrow",style:{color:a.color},children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",l==="ko"?a.nameKo:a.nameEn," · ",l==="ko"?"학습자료":"Materials"]}),e.jsx("h2",{className:"material-inline-title",children:l==="ko"?o.nameKo:o.nameEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(I,{remarkPlugins:[F],rehypePlugins:[K],components:M,children:l==="ko"?o.contentKo:o.contentEn})})]}):e.jsxs(e.Fragment,{children:[a.curriculum.map(s=>e.jsxs("div",{id:`day-${s.day}`,className:"curriculum-day",children:[e.jsxs("div",{className:"curriculum-day-head",children:[e.jsx("span",{className:"curriculum-day-badge",style:{background:a.color},children:s.badge}),e.jsxs("div",{children:[e.jsx("h2",{className:"curriculum-day-title",children:s.theme}),e.jsxs("span",{className:"curriculum-day-sub",children:["8",l==="ko"?"시간 · 4과목":"h · 4 modules"]})]})]}),e.jsx("div",{className:"curriculum-sessions",children:s.sessions.map((t,u)=>e.jsxs("div",{className:"session-card",children:[e.jsxs("div",{className:"session-time",children:[e.jsx("span",{className:"session-period",style:{color:a.color},children:t.period}),e.jsx("span",{className:"session-clock",children:t.time})]}),e.jsxs("div",{className:"session-body",children:[e.jsx("h3",{className:"session-title",children:t.title}),e.jsxs("p",{className:"session-goal",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," ",t.goal]}),e.jsx("div",{className:"session-topics",children:t.topics.map(p=>e.jsx("span",{className:"session-topic",children:p},p))}),e.jsxs("div",{className:"session-practices",children:[e.jsxs("div",{className:"session-practices-head",children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",l==="ko"?"실습 사례":"Practice"]}),t.practices.map((p,v)=>e.jsxs("div",{className:"practice-item",children:[e.jsxs("div",{className:"practice-scenario",children:[e.jsx("span",{className:"practice-num",style:{background:a.color},children:v+1}),p.scenario]}),e.jsx(g,{text:p.prompt})]},v))]})]})]},u))})]},s.day)),e.jsxs("div",{className:"program-cta",children:[e.jsxs("button",{className:"btn btn-accent btn-lg",onClick:()=>c("/login"),children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"})," ",l==="ko"?"로그인하고 학습 시작":"Log in to start"]}),e.jsxs("button",{className:"btn btn-outline",onClick:()=>c("/courses"),children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",l==="ko"?"전체 과정 보기":"All Programs"]})]})]})})]})})]})}export{U as default};
