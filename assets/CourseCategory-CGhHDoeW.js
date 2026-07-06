import{C as K,r as p,l as e,F as M,E as $,L as A}from"./index-DibKRSo5.js";import{S as O}from"./SEOHead-BIg1Sdvo.js";import{m as P}from"./markdownComponents-BmcFF4Z6.js";import{g as L,P as Q}from"./courses-D6Ru7kQm.js";import{M as W}from"./materials-CQHC2qJl.js";import{M as E,r as I}from"./TipBox-BRpknAqu.js";import{r as R}from"./index-BaOfQwbd.js";function G({text:l}){const{language:t}=K(),[o,r]=p.useState(!1),h=()=>{const n=document.createElement("textarea");n.value=l,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();try{document.execCommand("copy")}catch{}document.body.removeChild(n)},m=()=>{try{const n=navigator.clipboard?.writeText(l);n&&typeof n.catch=="function"?n.catch(()=>h()):h()}catch{h()}r(!0),window.setTimeout(()=>r(!1),1500)};return e.jsxs("div",{className:"prompt-block",children:[e.jsxs("div",{className:"prompt-block-header",children:[e.jsxs("span",{className:"prompt-block-lang",children:[e.jsx("i",{className:"fa-solid fa-terminal"})," ",t==="ko"?"프롬프트":"PROMPT"]}),e.jsxs("button",{type:"button",className:`prompt-copy-btn${o?" copied":""}`,onClick:m,"aria-label":t==="ko"?"프롬프트 복사":"Copy prompt",children:[e.jsx("i",{className:`fa-solid ${o?"fa-check":"fa-copy"}`}),o?t==="ko"?"복사됨":"Copied!":t==="ko"?"복사":"Copy"]})]}),e.jsx("pre",{className:"practice-prompt",children:e.jsx("code",{children:l})})]})}const q={foundation:[{id:"f-lab1",title:"랩 1 · 첫 대화부터 학과 안내문까지",scenario:"전남대GPT에 처음 로그인해 기본 사용법을 익히고, 실제 학과 행사 안내문을 완성합니다.",level:"입문",minutes:"약 20분",steps:[{title:"로그인하고 첫 인사",detail:"교내 계정으로 전남대GPT에 로그인한 뒤, 아래 프롬프트로 AI가 무엇을 할 수 있는지 직접 물어봅니다.",prompt:`너는 전남대학교 교직원을 돕는 AI 비서야.

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
[흐름] 도입-방법-결과-결론`,check:"8장 구성이 나오면 이번 랩 완료!"}],result:"코드 작성 → 디버깅 → 결과 정리 → 발표 구성까지 연구 마무리 흐름을 경험했습니다."}]};function z(l){return q[l]||[]}const U={foundation:[{id:"fd-basic",titleKo:"기본편 · 배운 기법 손에 익히기",titleEn:"Basic · Drill the Techniques",contentKo:`> **기반 자료**: 「역할 기반 프롬프트」·「RCF 프레임워크」·「단계적 프롬프트」
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

> **확인**: 과제 1→3으로 갈수록 결과가 어떻게 정교해지나요? 자료에서 배운 **역할·RCF·단계적 사고**가 실제로 품질을 바꾸는지 비교하세요.`,contentEn:'> **Based on**: "Role-based Prompting", "RCF Framework", "Chain of Thought"\n> **Goal**: apply the techniques you *read about* to one task, in order.\n\n### Task 1 — role only\n```\nYou are a 15-year admin officer. Write a department workshop notice.\n```\n### Task 2 — RCF (Role·Context·Format)\n```\n[Role] admin officer [Context] next Fri PM, 20 staff [Format] polite, 개조식, when/where/prep/RSVP, <400 chars.\n```\n### Task 3 — add reasoning (CoT)\n```\nBefore writing, list 3 factors that raise attendance, then rewrite the notice reflecting them.\n```\n> **Check**: how does quality sharpen from Task 1→3?'},{id:"fd-applied",titleKo:"응용편 · 내 업무에 적용",titleEn:"Applied · Apply to Your Work",contentKo:`> **기반 자료**: 「ChatGPT·Claude·Gemini 활용법」·「AI 서비스 비교」
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

> **확인**: 같은 기법도 **내 업무 맥락**을 넣으면 결과가 확 좋아집니다. 규정·수치는 반드시 원문 재확인.`,contentEn:'> **Based on**: "ChatGPT/Claude/Gemini guides", "AI Service Comparison"\n> **Goal**: apply/adapt the techniques to documents you actually handle.\n\n### Task 1 — 3 tones of your own text\n```\nRewrite this in polite / concise / friendly versions; add a one-line fit for each.\n```\n### Task 2 — answer only from a file\n```\nAnswer only from the attachment; mark missing info and cite clauses. [Q] (your question)\n```\n### Task 3 — pick the right tool\n```\nFor "fresh-info research" vs "long-rule summary", which model type fits and why?\n```'},{id:"fd-adv",titleKo:"심화편 · 나만의 AI 업무 세팅",titleEn:"Advanced · Your Own AI Setup",contentKo:`> **기반 자료**: 전 자료 종합
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

> **아카데믹 포인트**: 좋은 도구화의 핵심은 **일관성(지침)+검증(자가검토)+재현(템플릿)**. AI는 초안 생성기이고, 최종 판단·사실 확인은 사람의 몫입니다.`,contentEn:"> **Based on**: all materials combined\n> **Goal**: turn repetitive work into a set-once, reuse workflow.\n\n### Task 1 — custom instructions\n```\n[Role] dept admin helper [Rules] polite, 개조식, cite clauses, mask sensitive data. Refine for saving.\n```\n### Task 2 — self-check loop\n```\nDraft this, self-review for errors/weak evidence, then give the improved final — in one go.\n```\n### Task 3 — templatize\n```\nTurn this recurring task into a reusable prompt template; mark variables with [ ].\n```\n> **Academic**: good tooling = consistency + verification + reproducibility; humans make the final call."}],"research-writing":[{id:"rw-basic",titleKo:"기본편 · 데이터 정리 직접 해보기",titleEn:"Basic · Clean Data Yourself",contentKo:`> **기반 자료**: 「연구 데이터 분석 가이드」
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

> **아카데믹 포인트**: 결측 처리·이상치 판정은 결과를 바꿉니다. AI 제안은 초안, **처리 방법과 근거는 연구자가 결정·기록**(재현성).`,contentEn:'> **Based on**: "Research Data Analysis Guide"\n> **Goal**: hands-on reproduce the cleaning steps you *read about*, on your own data.\n\n### Task 1 — find missing/outlier/duplicate\n```\nFind suspect rows in the table; propose delete/impute/keep with reasons. [paste table]\n```\n### Task 2 — codebook\n```\nBuild a codebook: variable(snake_case) | item | type | value labels | missing code.\n```\n### Task 3 — descriptives\n```\nProduce descriptives as a table and explain 3 features with figures.\n```\n> **Academic**: cleaning decisions change results — researcher decides & documents.'},{id:"rw-applied",titleKo:"응용편 · 시각화 + 문헌 확장",titleEn:"Applied · Charts + Literature",contentKo:`> **기반 자료**: 「데이터 시각화 & 결과 해석 가이드」 + 1일차 ConnectedPapers 안내
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

> **아카데믹 포인트**: 시각화는 **메시지**에 맞춰 고르고, 문헌 AI 요약은 **원문 확인 전 초안**(환각 주의). ConnectedPapers는 탐색용, 판단은 연구자.`,contentEn:'> **Based on**: "Data Visualization Guide" + Day-1 ConnectedPapers\n> **Goal**: visualize your cleaned data and organize supporting literature.\n\n### Task 1 — choose then draw\n```\nRecommend 2-3 chart options for "group differences" with pros/cons, then how to draw the chosen one (Excel/matplotlib).\n```\n### Task 2 — ConnectedPapers map\n```\nSuggest 3 seed papers (title/author/year) for my topic and why each matters.\n```\nPaste the seed into ConnectedPapers to see the graph.\n### Task 3 — literature matrix\n```\nCompare papers: Author(Year) | RQ | Method | Sample | Findings | Limits.\n```\n> **Academic**: pick charts by message; verify AI summaries against originals.'},{id:"rw-adv",titleKo:"심화편 · 미니 연구 프로젝트 (통합)",titleEn:"Advanced · Mini Research Project",contentKo:`> **기반 자료**: 「AI 논문작성 가이드」 + 기본·응용편 결과
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

> **아카데믹 포인트**: AI는 구조화·표현을 돕는 도구입니다. **근거·데이터 해석·인용의 진위**는 연구자 책임이며, 학회/기관의 **AI 사용 지침**을 확인하고 필요시 명시하세요.`,contentEn:"> **Based on**: \"AI Paper-writing Guide\" + Basic/Applied results\n> **Goal**: integrate data→stats→charts→literature into a paper/report skeleton.\n\n### Task 1 — RQ from data\n```\nFrom the analysis + literature matrix, derive 3 testable RQs (FINER) with variables.\n```\n### Task 2 — IMRaD outline\n```\nOutline in IMRaD with a 1-2 line guide per section (or 'analysis report' structure).\n```\n### Task 3 — intro → critique → revise\n```\nWrite an academic intro (active, no translationese). Then: critique it as a harsh reviewer and rewrite.\n```\n> **Academic**: AI aids structure/wording; evidence & citation integrity are the researcher's."}],"data-budget":[{id:"db-basic",titleKo:"기본편 · 수식·집계 직접 만들기",titleEn:"Basic · Build Formulas",contentKo:`> **기반 자료**: 「Excel 수식 자동화」·「데이터 분석 기초」
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

> **아카데믹 포인트**: 자동 생성 수식도 **작은 샘플로 검산**하는 습관이 데이터 무결성을 지킵니다.`,contentEn:'> **Based on**: "Excel Formula Automation", "Data Analysis Basics"\n> **Goal**: apply/verify the guide\'s formulas on your own table.\n\n### Task 1 — aggregate\n```\n[Context] A=dept, B=spend. Give the dept-total formula + meaning + how it works.\n```\n### Task 2 — conditional aggregate/lookup\n```\nGive SUMIFS (dept & month) and XLOOKUP (unit price) with examples.\n```\n### Task 3 — fix errors\n```\nThis formula throws #N/A/#REF! — cause and fix?\n```\n> **Academic**: verify generated formulas on a small sample.'},{id:"db-applied",titleKo:"응용편 · 예산·정산 표 & 분석",titleEn:"Applied · Budget Tables",contentKo:'> **기반 자료**: 「예산·회계 실무 가이드」\n> **목표**: 내 부서 상황으로 **예산 편성·정산 표를 만들고 실적을 분석**한다.\n\n### 과제 1 — 예산 편성 표\n```\n행사 예산안을 "항목|산출근거|단가|수량|금액|비고" 표로, 합계 행과 예비비 5% 포함해 만들어줘.\n```\n\n### 과제 2 — 예산 대비 실적 분석\n```\n아래 예산 대비 집행 실적에서 증감 큰 항목 3개와 이유(추정), 차년도 시사점을 정리해줘. [표 붙여넣기]\n```\n\n### 과제 3 — 경영진용 한 줄 코멘트\n```\n이 실적 표 각 항목에 "1분에 파악할" 해석 코멘트를 담백하게 달아줘.\n```\n\n> **아카데믹 포인트**: 회계 숫자는 AI 답을 초안으로만. **규정·산출근거·합계는 원자료로 검증**하고 근거 없는 수치는 넣지 않습니다.',contentEn:'> **Based on**: "Budget & Accounting Guide"\n> **Goal**: build budget/settlement tables and analyze actuals for your unit.\n\n### Task 1 — budget table\n```\nMake an event budget: Item|Basis|Unit|Qty|Amount|Note; total row + 5% contingency.\n```\n### Task 2 — vs actuals\n```\nFind 3 big variances with reasons and next-year implications. [paste]\n```\n### Task 3 — exec comments\n```\nAdd a plain one-line interpretation per item.\n```\n> **Academic**: verify rules/basis/totals against source data.'},{id:"db-adv",titleKo:"심화편 · 규정 확인 + 업무 자동화",titleEn:"Advanced · Rules + Automation",contentKo:`> **기반 자료**: 전 자료 + 규정 문서
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

> **아카데믹 포인트**: 규정 해석의 **최종 판단은 사람**. 자동화 코드는 소규모로 시험하고, 개인정보 데이터는 교내 정책을 따르세요.`,contentEn:"> **Based on**: all materials + rule documents\n> **Goal**: verify against rules and design automation for repetitive work.\n\n### Task 1 — rule summary → checklist\n```\nSummarize practitioner essentials with clause numbers; turn into a checklist, mark easily-missed items.\n```\n### Task 2 — automation (Apps Script)\n```\nDesign a weekly dept-spend collector in Google Apps Script, with code.\n```\n### Task 3 — impact\n```\nCompare before/after time & error risk as a table.\n```\n> **Academic**: humans make the final rule call; test small; follow PII policy."}],"research-lab":[{id:"rl-basic",titleKo:"기본편 · 내 주제로 연구질문·설계",titleEn:"Basic · Your Question & Design",contentKo:'> **기반 자료**: 「연구 설계 가이드」\n> **목표**: 자료의 설계 틀을 **내 관심 주제로 직접 채운다.**\n\n### 과제 1 — 질문 정련(FINER)\n```\n"(내 관심 주제)"를 검증 가능한 연구질문으로 좁혀줘. FINER 기준 3개, 각 질문의 변수와 대상도.\n```\n\n### 과제 2 — 설계 유형 선택\n```\n위 질문 검증에 실험/준실험/설문/사례연구 중 무엇이 적절한지 장단점과 함께 추천하고, 표본 수 추정 방법도.\n```\n\n### 과제 3 — 변수·측정 정의\n```\n독립·종속·통제 변수를 정의하고 각 변수의 측정 방법(척도·도구)을 표로 정리해줘.\n```\n\n> **아카데믹 포인트**: 설계의 질은 **교란변수 통제·재현 가능성**에서 갈립니다. 타당성 판단은 연구자·지도교수의 몫.',contentEn:'> **Based on**: "Research Design Guide"\n> **Goal**: fill the design framework with your own topic.\n\n### Task 1 — refine (FINER)\n```\nNarrow "(my topic)" into 3 testable RQs (FINER), with variables and subjects.\n```\n### Task 2 — pick a design\n```\nExperiment/quasi/survey/case — which fits with pros/cons; how to estimate sample size.\n```\n### Task 3 — variables & measures\n```\nDefine independent/dependent/control variables and measurement as a table.\n```'},{id:"rl-applied",titleKo:"응용편 · 프로토콜 & 데이터 관리",titleEn:"Applied · Protocol & Data",contentKo:"> **기반 자료**: 「실험 프로토콜 & 데이터 관리 가이드」\n> **목표**: 설계를 **실행 가능한 프로토콜과 데이터 기록 체계**로 구체화한다.\n\n### 과제 1 — 프로토콜 초안\n```\n위 설계로 실험 프로토콜 초안을 만들어줘. [포함] 목적·대상·절차(단계)·측정 시점·중단 기준·필요 장비.\n```\n\n### 과제 2 — 데이터 기록 양식\n```\n원자료 기록 표를 설계해줘. [열] 대상ID|조건|측정시점|변수들|비고. 입력 규칙(단위·결측 표기)도.\n```\n\n### 과제 3 — 데이터 관리 계획(DMP)\n```\n연구 데이터 관리 계획 체크리스트를 만들어줘: 저장·백업·익명화·보관기간·공유 범위.\n```\n\n> **아카데믹 포인트**: **원자료 보존·버전관리·익명화**는 연구 무결성의 기본. 민감정보는 최소 수집·가명 처리, IRB/교내 규정 준수.",contentEn:'> **Based on**: "Protocol & Data Management Guide"\n> **Goal**: turn the design into an executable protocol and recording scheme.\n\n### Task 1 — protocol draft\n```\nDraft a protocol: purpose, subjects, procedure, timing, stop criteria, equipment.\n```\n### Task 2 — recording sheet\n```\nDesign a raw-data table: ID|Condition|Timepoint|variables|note; entry rules.\n```\n### Task 3 — DMP\n```\nDMP checklist: storage, backup, anonymization, retention, sharing.\n```'},{id:"rl-adv",titleKo:"심화편 · 분석 계획 + 연구윤리 (통합)",titleEn:"Advanced · Analysis + Ethics",contentKo:"> **기반 자료**: 「분석 코드 & 연구윤리 가이드」 + 기본·응용편\n> **목표**: 분석 계획·코드·윤리 점검을 **하나의 연구 계획서로 통합**한다.\n\n### 과제 1 — 분석 계획(가정 포함)\n```\n(내 데이터 형태, 예: 두 집단 사전/사후 점수)를 분석하려면 어떤 통계가 적절한지 가정과 함께 추천하고 검정 순서를 알려줘.\n```\n\n### 과제 2 — 분석 코드\n```\n위 분석을 파이썬(또는 R) 코드로 주석과 함께 만들어줘. 각 단계가 무엇을 검증하는지 설명도.\n```\n\n### 과제 3 — 연구윤리 점검\n```\n이 연구의 윤리 체크리스트를 만들어줘: IRB 필요 여부·동의서·개인정보·표절/이해상충·생성형 AI 사용 명시 방법.\n```\n\n> **아카데믹 포인트**: 통계의 **가정 위배**(정규성·등분산 등)를 확인하지 않으면 결과가 왜곡됩니다. 논문·보고서에 **AI 사용 방식**을 지침에 맞게 밝히는 것이 최근 기준.",contentEn:'> **Based on**: "Analysis Code & Research Ethics Guide" + Basic/Applied\n> **Goal**: integrate analysis plan, code, and ethics into one research plan.\n\n### Task 1 — analysis plan\n```\nFor my data (e.g., two-group pre/post), recommend statistics with assumptions and a test order.\n```\n### Task 2 — code\n```\nWrite Python (or R) with comments; explain what each step tests.\n```\n### Task 3 — ethics checklist\n```\nEthics checklist: IRB, consent, privacy, plagiarism/COI, GenAI-use disclosure.\n```\n> **Academic**: unchecked assumption violations distort results; disclose AI use per guidelines.'}]};function H(l){return U[l]||[]}function se(){const{category:l}=M(),{language:t}=K(),o=$(),[r,h]=p.useState(!0),[m,n]=p.useState(!0),[N,k]=p.useState(null),[v,b]=p.useState(null),[f,x]=p.useState(!1),a=L(l||"");if(!a)return e.jsxs("div",{className:"container",style:{padding:"120px 40px",textAlign:"center"},children:[e.jsx("h2",{children:t==="ko"?"과정을 찾을 수 없습니다.":"Program not found."}),e.jsx("button",{className:"btn btn-primary",onClick:()=>o("/courses"),children:t==="ko"?"교육과정으로 돌아가기":"Back to Courses"})]});const B=a.curriculum.reduce((s,i)=>s+i.sessions.length,0),T=W.filter(s=>s.categoryId===a.id),y=z(a.id),w=H(a.id),c=N?T.find(s=>s.id===N):null,d=v?w.find(s=>s.id===v):null,F=s=>{k(s),x(!1),b(null),window.scrollTo({top:0,behavior:"smooth"})},S=()=>{x(!0),k(null),b(null),window.scrollTo({top:0,behavior:"smooth"})},D=s=>{b(s),x(!1),k(null),window.scrollTo({top:0,behavior:"smooth"})},g=()=>{k(null),x(!1),b(null),window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx(O,{title:t==="ko"?a.nameKo:a.nameEn,path:`/courses/${l}`}),e.jsx("section",{className:"program-hero",style:{borderBottom:`3px solid ${a.color}`},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"program-hero-inner",children:[e.jsxs("div",{className:"program-hero-id",children:[e.jsx("div",{className:"program-hero-icon",style:{background:a.color},children:e.jsx("i",{className:`fa-solid ${a.icon}`})}),e.jsxs("div",{className:"program-hero-head",children:[e.jsxs("div",{className:"eyebrow",children:["Program ",String(a.order).padStart(2,"0")," · ",a.duration]}),e.jsx("h1",{children:t==="ko"?a.nameKo:a.nameEn}),e.jsx("p",{className:"program-hero-tagline",children:a.tagline}),e.jsx("p",{className:"program-hero-desc",children:t==="ko"?a.descKo:a.descEn})]})]}),e.jsxs("div",{className:"program-hero-aside",children:[a.instructors&&a.instructors.some(s=>s.padlet)&&e.jsx("div",{className:"program-hero-padlets",children:a.instructors.filter(s=>s.padlet).map((s,i)=>e.jsxs("a",{href:s.padlet,target:"_blank",rel:"noopener noreferrer",className:"padlet-btn",style:{background:a.color},children:[e.jsx("i",{className:"fa-solid fa-clipboard-list"}),t==="ko"?s.cohort?`패들렛 ${s.cohort}`:"패들렛 실습보드":s.cohort?`Padlet ${s.cohort}`:"Padlet Board",e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square padlet-btn-ext"})]},i))}),e.jsxs("div",{className:"program-hero-meta",children:[e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-user-check"})," ",a.audience]}),e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-layer-group"})," ",B,t==="ko"?"개 실습 교시":" sessions"]}),e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-signal"})," ",a.level]})]})]})]}),e.jsxs("div",{className:"program-platform-note",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"}),e.jsx("span",{children:t==="ko"?"본 과정은 교내 전용 플랫폼 전남대GPT(타임리GPT 기반)에서 진행되며, 모든 실습은 예시 프롬프트로 직접 따라 할 수 있습니다.":"This program runs on the campus platform JNU GPT (TimelyGPT-based); every practice includes a ready-to-use prompt."})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container course-layout",children:[e.jsx("aside",{className:"course-sidebar",children:e.jsxs("div",{className:"course-sidebar-inner",children:[e.jsxs("div",{className:"course-sidebar-title",style:{borderColor:a.color},children:[e.jsx("i",{className:`fa-solid ${a.icon}`,style:{color:a.color}}),e.jsx("span",{children:t==="ko"?a.nameKo:a.nameEn})]}),a.instructors&&a.instructors.length>0&&e.jsxs("div",{className:"course-instructor",children:[e.jsxs("span",{className:"course-instructor-label",children:[e.jsx("i",{className:"fa-solid fa-chalkboard-user"})," ",t==="ko"?"담당교수":"Instructor"]}),a.instructors.map((s,i)=>e.jsxs("div",{className:"course-instructor-row",children:[e.jsxs("span",{className:"ci-name",children:[s.cohort&&e.jsx("em",{className:"ci-cohort",children:s.cohort}),s.name]}),e.jsx("span",{className:"ci-sessions",children:t==="ko"?`1차시 ${s.session1} · 2차시 ${s.session2}`:`S1 ${s.session1} · S2 ${s.session2}`})]},i))]}),e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:t==="ko"?"과정 메뉴":"Course Menu"}),e.jsxs("button",{type:"button",className:`course-sidebar-link${!c&&!f&&!d?" active":""}`,onClick:g,children:[e.jsx("i",{className:"fa-solid fa-list-check"})," ",t==="ko"?"커리큘럼":"Curriculum"]}),(w.length>0||y.length>0)&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:`course-sidebar-link course-sidebar-toggle${m?" open":""}`,onClick:()=>n(!m),"aria-expanded":m,children:[e.jsx("i",{className:"fa-solid fa-flask-vial"})," ",t==="ko"?"실습 워크북":"Practice Workbook",e.jsx("i",{className:"fa-solid fa-chevron-down course-sidebar-chevron"})]}),m&&e.jsxs("div",{className:"course-sidebar-sublist",children:[y.length>0&&e.jsxs("button",{type:"button",className:`course-sidebar-link sub${f?" active":""}`,onClick:S,children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",t==="ko"?"실습 · 따라하기":"Hands-on Labs"]}),w.map(s=>e.jsxs("button",{type:"button",className:`course-sidebar-link sub${v===s.id?" active":""}`,onClick:()=>D(s.id),children:[e.jsx("i",{className:"fa-regular fa-square-check"})," ",t==="ko"?s.titleKo:s.titleEn]},s.id))]})]}),e.jsxs("button",{type:"button",className:`course-sidebar-link course-sidebar-toggle${r?" open":""}`,onClick:()=>h(!r),"aria-expanded":r,children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",t==="ko"?"학습자료":"Materials",e.jsx("i",{className:"fa-solid fa-chevron-down course-sidebar-chevron"})]}),r&&e.jsxs("div",{className:"course-sidebar-sublist",children:[T.map(s=>e.jsxs("button",{type:"button",className:`course-sidebar-link sub${N===s.id?" active":""}`,onClick:()=>F(s.id),children:[e.jsx("i",{className:"fa-regular fa-file-lines"})," ",t==="ko"?s.nameKo:s.nameEn]},s.id)),e.jsxs(A,{to:`/materials/${a.id}`,className:"course-sidebar-link sub more",children:[e.jsx("i",{className:"fa-solid fa-arrow-right"})," ",t==="ko"?"학습자료 전체보기":"View all materials"]})]}),e.jsxs(A,{to:`/community/${a.id}`,className:"course-sidebar-link",children:[e.jsx("i",{className:"fa-solid fa-comments"})," ",t==="ko"?"게시판":"Board"]})]}),!c&&!f&&!d&&e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:t==="ko"?"커리큘럼 바로가기":"Jump to"}),a.curriculum.map(s=>e.jsxs("a",{href:`#day-${s.day}`,className:"course-sidebar-link sub",children:[e.jsx("i",{className:"fa-regular fa-calendar"})," ",s.badge," — ",s.theme.split(" — ")[0]]},s.day))]}),e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:t==="ko"?"다른 과정":"Other Programs"}),Q.filter(s=>s.id!==a.id).map(s=>e.jsxs(A,{to:`/courses/${s.id}`,className:"course-sidebar-link sub",children:[e.jsx("i",{className:`fa-solid ${s.icon}`})," ",t==="ko"?s.nameKo:s.nameEn]},s.id))]})]})}),e.jsx("div",{className:"course-content",children:d?e.jsxs("article",{className:"material-inline",children:[e.jsxs("button",{type:"button",className:"material-inline-back",onClick:g,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",t==="ko"?"커리큘럼으로":"Back to curriculum"]}),e.jsxs("div",{className:"material-inline-eyebrow",style:{color:a.color},children:[e.jsx("i",{className:"fa-solid fa-flask-vial"})," ",t==="ko"?a.nameKo:a.nameEn," · ",t==="ko"?"실습 워크북":"Practice Workbook"]}),e.jsx("h2",{className:"material-inline-title",children:t==="ko"?d.titleKo:d.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(E,{remarkPlugins:[I],rehypePlugins:[R],components:P,children:t==="ko"?d.contentKo:d.contentEn})})]}):f?e.jsxs("div",{className:"handson",children:[e.jsxs("button",{type:"button",className:"material-inline-back",onClick:g,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",t==="ko"?"커리큘럼으로":"Back to curriculum"]}),e.jsxs("div",{className:"handson-head",children:[e.jsxs("div",{className:"material-inline-eyebrow",style:{color:a.color},children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",t==="ko"?a.nameKo:a.nameEn," · ",t==="ko"?"실습 따라하기":"Hands-on"]}),e.jsx("h2",{className:"material-inline-title",children:t==="ko"?"실습 · 따라하기":"Hands-on Labs"}),e.jsx("p",{className:"handson-intro",children:t==="ko"?"전남대GPT를 켜고 아래 랩을 순서대로 따라 해보세요. 각 단계의 예시 프롬프트를 그대로 입력하면 됩니다.":"Open JNU GPT and follow each lab. Paste the example prompts as-is."})]}),y.map(s=>e.jsxs("article",{className:"lab-card",children:[e.jsxs("div",{className:"lab-card-head",style:{borderColor:a.color},children:[e.jsx("h3",{className:"lab-title",children:s.title}),e.jsxs("div",{className:"lab-meta",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-signal"})," ",s.level]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-clock"})," ",s.minutes]})]}),e.jsx("p",{className:"lab-scenario",children:s.scenario})]}),e.jsx("ol",{className:"lab-steps",children:s.steps.map((i,j)=>e.jsxs("li",{className:"lab-step",children:[e.jsx("span",{className:"lab-step-num",style:{background:a.color},children:j+1}),e.jsxs("div",{className:"lab-step-body",children:[e.jsx("div",{className:"lab-step-title",children:i.title}),e.jsx("p",{className:"lab-step-detail",children:i.detail}),i.prompt&&e.jsx(G,{text:i.prompt}),i.check&&e.jsxs("div",{className:"lab-step-check",children:[e.jsx("i",{className:"fa-solid fa-circle-check"})," ",i.check]})]})]},j))}),e.jsxs("div",{className:"lab-result",children:[e.jsx("i",{className:"fa-solid fa-flag-checkered"})," ",s.result]})]},s.id))]}):c?e.jsxs("article",{className:"material-inline",children:[e.jsxs("button",{type:"button",className:"material-inline-back",onClick:g,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",t==="ko"?"커리큘럼으로":"Back to curriculum"]}),e.jsxs("div",{className:"material-inline-eyebrow",style:{color:a.color},children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",t==="ko"?a.nameKo:a.nameEn," · ",t==="ko"?"학습자료":"Materials"]}),e.jsx("h2",{className:"material-inline-title",children:t==="ko"?c.nameKo:c.nameEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(E,{remarkPlugins:[I],rehypePlugins:[R],components:P,children:t==="ko"?c.contentKo:c.contentEn})})]}):e.jsxs(e.Fragment,{children:[a.curriculum.map(s=>e.jsxs("div",{id:`day-${s.day}`,className:"curriculum-day",children:[e.jsxs("div",{className:"curriculum-day-head",children:[e.jsx("span",{className:"curriculum-day-badge",style:{background:a.color},children:s.badge}),e.jsxs("div",{children:[e.jsx("h2",{className:"curriculum-day-title",children:s.theme}),e.jsxs("span",{className:"curriculum-day-sub",children:["8",t==="ko"?"시간 · 4과목":"h · 4 modules"]})]})]}),e.jsx("div",{className:"curriculum-sessions",children:s.sessions.map((i,j)=>e.jsxs("div",{className:"session-card",children:[e.jsxs("div",{className:"session-time",children:[e.jsx("span",{className:"session-period",style:{color:a.color},children:i.period}),e.jsx("span",{className:"session-clock",children:i.time})]}),e.jsxs("div",{className:"session-body",children:[e.jsx("h3",{className:"session-title",children:i.title}),e.jsxs("p",{className:"session-goal",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," ",i.goal]}),e.jsx("div",{className:"session-topics",children:i.topics.map(u=>e.jsx("span",{className:"session-topic",children:u},u))}),e.jsxs("div",{className:"session-practices",children:[e.jsxs("div",{className:"session-practices-head",children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",t==="ko"?"실습 사례":"Practice"]}),i.practices.map((u,C)=>e.jsxs("div",{className:"practice-item",children:[e.jsxs("div",{className:"practice-scenario",children:[e.jsx("span",{className:"practice-num",style:{background:a.color},children:C+1}),u.scenario]}),e.jsx(G,{text:u.prompt})]},C))]})]})]},j))})]},s.day)),e.jsxs("div",{className:"program-cta",children:[e.jsxs("button",{className:"btn btn-accent btn-lg",onClick:()=>o("/login"),children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"})," ",t==="ko"?"로그인하고 학습 시작":"Log in to start"]}),e.jsxs("button",{className:"btn btn-outline",onClick:()=>o("/courses"),children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",t==="ko"?"전체 과정 보기":"All Programs"]})]})]})})]})})]})}export{se as default};
