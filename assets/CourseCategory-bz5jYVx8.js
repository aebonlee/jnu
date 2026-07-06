import{C as R,r as p,l as e,F as D,E as O,L as S}from"./index-BK80Z5SL.js";import{S as B}from"./SEOHead-B_diNES5.js";import{m as I}from"./markdownComponents-FHQbgoqE.js";import{g as $,P as Q}from"./courses-D6Ru7kQm.js";import{M as z}from"./materials-CQHC2qJl.js";import{M as E,r as C}from"./TipBox-B1aDpkk1.js";import{r as K}from"./index-Cymh2Y_1.js";function T({text:o}){const{language:a}=R(),[l,r]=p.useState(!1),h=()=>{const i=document.createElement("textarea");i.value=o,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();try{document.execCommand("copy")}catch{}document.body.removeChild(i)},m=()=>{try{const i=navigator.clipboard?.writeText(o);i&&typeof i.catch=="function"?i.catch(()=>h()):h()}catch{h()}r(!0),window.setTimeout(()=>r(!1),1500)};return e.jsxs("div",{className:"prompt-block",children:[e.jsxs("div",{className:"prompt-block-header",children:[e.jsxs("span",{className:"prompt-block-lang",children:[e.jsx("i",{className:"fa-solid fa-terminal"})," ",a==="ko"?"프롬프트":"PROMPT"]}),e.jsxs("button",{type:"button",className:`prompt-copy-btn${l?" copied":""}`,onClick:m,"aria-label":a==="ko"?"프롬프트 복사":"Copy prompt",children:[e.jsx("i",{className:`fa-solid ${l?"fa-check":"fa-copy"}`}),l?a==="ko"?"복사됨":"Copied!":a==="ko"?"복사":"Copy"]})]}),e.jsx("pre",{className:"practice-prompt",children:e.jsx("code",{children:o})})]})}const W={foundation:[{id:"f-lab1",title:"랩 1 · 첫 대화부터 학과 안내문까지",scenario:"전남대GPT에 처음 로그인해 기본 사용법을 익히고, 실제 학과 행사 안내문을 완성합니다.",level:"입문",minutes:"약 20분",steps:[{title:"로그인하고 첫 인사",detail:"교내 계정으로 전남대GPT에 로그인한 뒤, 아래 프롬프트로 AI가 무엇을 할 수 있는지 직접 물어봅니다.",prompt:`너는 전남대학교 교직원을 돕는 AI 비서야.

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
[흐름] 도입-방법-결과-결론`,check:"8장 구성이 나오면 이번 랩 완료!"}],result:"코드 작성 → 디버깅 → 결과 정리 → 발표 구성까지 연구 마무리 흐름을 경험했습니다."}]};function U(o){return W[o]||[]}const q={foundation:[{id:"fd-wb1",titleKo:"실습 1 · 프롬프트 4요소",titleEn:"Lab 1 · The 4 Prompt Parts",contentKo:`> **학습 목표**: 같은 질문도 [역할]+[맥락]+[요청]+[형식]을 갖추면 결과가 어떻게 달라지는지 직접 확인한다.
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

**심화 과제** — 위 프롬프트에서 대상을 "학부모"로, 톤을 "따뜻하게"로 바꿔 다시 요청해 보세요. 대상 하나만 바꿔도 결과가 달라집니다.`,contentEn:`> **Goal**: See how [Role]+[Context]+[Request]+[Format] transforms the same question.
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

**Extra** — change the audience to "parents" and tone to "warm". One change shifts everything.`},{id:"fd-wb2",titleKo:"실습 2 · 문서 요약·표 만들기",titleEn:"Lab 2 · Summarize & Tabulate",contentKo:`> **학습 목표**: 긴 자료를 요약하고, 엑셀에 붙일 수 있는 표로 정리하는 실무 흐름을 익힌다.
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

**심화 과제** — 같은 자료를 "임원 보고용 한 페이지"와 "직원 공지용 쉬운 말" 두 버전으로 만들어 비교하세요.`,contentEn:'> **Goal**: Summarize long material and turn it into an Excel-ready table.\n\n### Step 1 — 3-depth summary\n```\nSummarize the below in three ways: (1) one sentence (2) 3 key lines (3) action items.\n[paste material]\n```\n### Step 2 — to a table\n```\nTurn the action items into a table: Item | Owner | Due | Priority. Make it paste-ready for Excel.\n```\n### Step 3 — no broken Korean\n```\nSave this table as CSV with UTF-8 BOM so Excel doesn\'t break Korean.\n```\n> **Tip**: "as a table" is one of the most reliable requests — always name the columns.\n\n**Extra** — make an "executive one-pager" and a "plain staff notice" version and compare.'},{id:"fd-wb3",titleKo:"실습 3 · 파일 활용 & 맞춤 GPT",titleEn:"Lab 3 · Files & Custom GPT",contentKo:`> **학습 목표**: 파일을 근거로 답하게 하고(환각 줄이기), 반복 업무용 나만의 설정을 만든다.
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

**심화 과제** — 자주 쓰는 업무 프롬프트 3개를 골라 "나만의 템플릿"으로 저장해 두세요.`,contentEn:'> **Goal**: Ground answers in a file (reduce hallucination) and save your own reusable setup.\n\n### Step 1 — answer only from the file\n```\nAnswer only from the attached document. Mark anything not in it as "not in document",\nand cite the clause/page. [Q] What\'s the deadline for travel expense settlement?\n```\n### Step 2 — hallucination check\n```\nFlag anything not verified by the document; say "uncertain" first if unsure.\n```\n### Step 3 — custom setup (Project/Custom GPT)\n```\n[Role] dept. admin helper. [Rules] always polite, 개조식 for official docs, cite clauses.\n```\n> **Check**: how does grounding change trust? Always re-verify rules/numbers against the source.'}],"research-writing":[{id:"rw-wb1",titleKo:"실습 1 · 데이터 정리(클리닝)",titleEn:"Lab 1 · Data Cleaning",contentKo:`> **학습 목표**: 지저분한 원자료를 분석 가능한 상태로 만드는 절차(결측치·이상치·중복·형식)를 실습한다.
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

**심화 과제** — 같은 데이터에 "완전 삭제(listwise)"와 "평균 대치"를 각각 적용했을 때의 장단점을 AI에게 비교시켜 보세요.`,contentEn:"> **Goal**: Turn messy raw data into an analyzable state (missing/outlier/duplicate/format).\n\n### Step 1 — design the cleaning procedure\n```\nYou are a social-science data analyst. [Context] 300 survey responses with missing/dupes/outliers.\nList the cleaning steps in order; for each give (1) what to do (2) caution, with plain reasons.\n```\n### Step 2 — inspect the real table\n```\nFind suspected missing/outlier/duplicate rows in the table below and propose handling with reasons.\n[paste table]\n```\n### Step 3 — build a codebook\n```\nMake an analysis codebook: variable | item | type | value labels | missing code. snake_case names.\n```\n> **Academic**: missing-data and outlier decisions change results — use AI as a draft; the researcher must decide and document (reproducibility)."},{id:"rw-wb2",titleKo:"실습 2 · 기술통계 & 시각화",titleEn:"Lab 2 · Descriptives & Charts",contentKo:`> **학습 목표**: 숫자에서 패턴을 읽고, 목적에 맞는 그래프를 고르는 판단을 익힌다.
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

**심화 과제** — 같은 데이터를 "오해를 유발하는 그래프"와 "정직한 그래프"로 각각 만들어 달라 하고, 차이(축 범위·비율)를 관찰하세요.`,contentEn:'> **Goal**: Read patterns from numbers and choose the right chart.\n\n### Step 1 — descriptives & patterns\n```\nSummarize descriptives (mean/median/SD/distribution) of the table and find 3 patterns + outliers with figures.\n[paste table]\n```\n### Step 2 — which chart? (judgment)\n```\nTo show "satisfaction differences by department", recommend 2-3 chart options with pros/cons.\n```\n### Step 3 — make it\n```\nExplain step by step how to draw the chosen chart in Excel; add Google Sheets/Python (matplotlib) code too.\n```\n> **Academic**: don\'t conclude from the mean alone — consider distribution, SD, n. Bar vs boxplot depends on the message.'},{id:"rw-wb3",titleKo:"실습 3 · 문헌 탐색·정리 (ConnectedPapers)",titleEn:"Lab 3 · Literature (ConnectedPapers)",contentKo:`> **학습 목표**: ConnectedPapers로 문헌 지도를 그리고, AI로 문헌을 구조적으로 정리한다.
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

**심화 과제** — 문헌 매트릭스에서 "연구 공백(gap)"을 찾아 달라 하고, 거기서 내 연구질문을 도출해 보세요.`,contentEn:'> **Goal**: Build a literature map with ConnectedPapers and organize papers with AI.\n\n### Step 1 — pick a seed paper\n```\nFor "AHP in university admin decisions", suggest 3 highly-cited seed papers (title/author/year) and why each matters.\n```\nThen paste the seed title into **ConnectedPapers** to see the graph (thicker links = more related).\n### Step 2 — summarize a chosen paper\n```\nSummarize this paper in 5 lines: claim · method · data · limits · implications, with precise terms.\n```\n### Step 3 — literature matrix\n```\nCompare 3 papers: Author(Year) | RQ | Method | Sample | Findings | Limits.\n```\n> **Academic**: AI summaries are drafts — verify citations/numbers against originals (AI can fabricate papers). ConnectedPapers is for discovery; the researcher decides.'},{id:"rw-wb4",titleKo:"실습 4 · 연구질문 → 논문 구조",titleEn:"Lab 4 · RQ → Paper Outline",contentKo:`> **학습 목표**: 막연한 관심을 검증 가능한 연구질문으로 좁히고, 논문 뼈대를 세운다. (논문작성 대상 우선, 일반 참여자도 '보고서 구조'로 활용)
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

**심화 과제** — 완성한 서론을 "냉정한 심사위원" 관점에서 비판받아 보세요: \`이 서론의 약점만 심사위원 입장에서 지적해줘.\``,contentEn:"> **Goal**: Narrow a vague interest into a testable research question and build a paper skeleton.\n\n### Step 1 — sharpen the RQ\n```\nNarrow \"AI in university admin\" into 3 testable RQs meeting FINER, with independent/dependent variables.\n```\n### Step 2 — design testing\n```\nFor one RQ, what data and analysis are needed; list conditions to verify.\n```\n### Step 3 — outline (IMRaD)\n```\nOutline the paper in IMRaD; add a 1-2 line guide per section.\n```\n### Step 4 — refine iteratively\n```\nThe intro is weak — restate the need and gap more clearly, academic tone, active voice, no translationese.\n```\n> **Academic**: AI helps structure/wording; evidence, interpretation, and citation integrity are the researcher's responsibility. Check your venue's AI-use policy."}],"data-budget":[{id:"db-wb1",titleKo:"실습 1 · 엑셀 수식·집계",titleEn:"Lab 1 · Excel Formulas",contentKo:`> **학습 목표**: 복잡한 엑셀 수식을 말로 설명해 받아내고, 행정 데이터를 집계한다.
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

**심화 과제** — 같은 집계를 피벗테이블로 만드는 절차도 물어 두 방법을 비교하세요.`,contentEn:"> **Goal**: Get complex Excel formulas by describing the result; aggregate admin data.\n\n### Step 1 — generate a formula\n```\n[Context] A=dept, B=spend. [Request] formula for spend total by dept. [Output] formula + meaning + how it works.\n```\n### Step 2 — conditional aggregate/lookup\n```\nGive SUMIFS (dept & month) and VLOOKUP/XLOOKUP (unit price by item) with examples.\n```\n### Step 3 — fix errors\n```\nThis formula throws #REF!/#N/A — cause and fix? [paste]\n```\n> **Academic**: verify generated formulas on a small sample — totals/counts must match the source."},{id:"db-wb2",titleKo:"실습 2 · 예산·정산·보고",titleEn:"Lab 2 · Budget & Reporting",contentKo:`> **학습 목표**: 예산 편성·정산 표를 만들고, 숫자를 의사결정용 보고 문장으로 바꾼다.
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

**심화 과제** — 같은 보고서를 "요약 1페이지"와 "상세 부록" 두 층으로 나눠 만들어 보세요.`,contentEn:"> **Goal**: Build budget/settlement tables and turn numbers into decision-ready sentences.\n\n### Step 1 — budget table\n```\nMake an event budget: Item | Basis | Unit | Qty | Amount | Note. Include a total row and 5% contingency.\n```\n### Step 2 — vs actuals\n```\nFrom this budget-vs-actual table, find 3 big variances with likely reasons and next-year implications.\n```\n### Step 3 — executive comments\n```\nAdd a one-line interpretation per item a decision-maker grasps in a minute; plain, no emotion.\n```\n> **Academic**: treat AI numbers as drafts; verify rules/basis/totals against source data."},{id:"db-wb3",titleKo:"실습 3 · 규정 확인 & 자동화",titleEn:"Lab 3 · Rules & Automation",contentKo:`> **학습 목표**: 복잡한 규정을 실무 언어로 요약하고, 반복 업무 자동화를 설계한다.
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

**심화 과제** — 자동화 전/후의 소요 시간과 오류 가능성을 표로 비교해 개선 효과를 정리하세요.`,contentEn:'> **Goal**: Summarize complex rules into practitioner language and design automation.\n\n### Step 1 — plain rule summary (with basis)\n```\nSummarize only what a practitioner needs from the attached rules, citing clause numbers; "none" if not in doc.\n```\n### Step 2 — to a checklist\n```\nTurn it into a checklist for the travel-expense officer; mark easily-missed items (caution).\n```\n### Step 3 — automation\n```\nDesign a Google Apps Script to weekly collect and organize dept spend sheets; include code.\n```\n> **Academic**: humans make the final rule call; test automation small; handle PII per policy.'}],"research-lab":[{id:"rl-wb1",titleKo:"실습 1 · 연구질문·설계",titleEn:"Lab 1 · Question & Design",contentKo:`> **학습 목표**: 아이디어를 검증 가능한 연구질문으로 정련하고, 설계 방향을 잡는다.
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

**심화 과제** — 같은 질문에 대해 "양적 설계"와 "질적 설계" 두 안을 만들어 비교하세요.`,contentEn:'> **Goal**: Refine an idea into a testable question and set a design direction.\n\n### Step 1 — refine (FINER)\n```\nNarrow "effect of GenAI on learning" into 3 testable RQs (FINER), with variables and subjects.\n```\n### Step 2 — pick a design\n```\nExperiment/quasi/survey/case — which fits, with pros/cons; also how to estimate sample size.\n```\n### Step 3 — variables & measures\n```\nDefine independent/dependent/control variables and how to measure each (scale/instrument) as a table.\n```\n> **Academic**: good design hinges on confound control and reproducibility; the researcher judges validity.'},{id:"rl-wb2",titleKo:"실습 2 · 프로토콜·데이터 관리",titleEn:"Lab 2 · Protocol & Data",contentKo:`> **학습 목표**: 실험 프로토콜 초안과 데이터 기록·관리 체계를 만든다.
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

**심화 과제** — 프로토콜을 "동료 연구자 검토용"으로 만들어, 재현에 부족한 정보가 없는지 점검받으세요.`,contentEn:"> **Goal**: Draft an experiment protocol and a data recording/management scheme.\n\n### Step 1 — protocol draft\n```\nDraft a protocol from the design: purpose, subjects, step-by-step procedure, timing, stop criteria, equipment.\n```\n### Step 2 — recording sheet\n```\nDesign a raw-data table: SubjectID | Condition | Timepoint | variables | note; set entry rules (units/missing).\n```\n### Step 3 — data management plan\n```\nMake a DMP checklist: storage, backup, anonymization, retention, sharing scope.\n```\n> **Academic**: raw-data preservation, versioning, anonymization are integrity basics; follow IRB/campus rules."},{id:"rl-wb3",titleKo:"실습 3 · 분석·연구윤리",titleEn:"Lab 3 · Analysis & Ethics",contentKo:`> **학습 목표**: 분석 절차를 설계하고, 연구윤리(표절·AI 사용·IRB)를 점검한다.
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

**심화 과제** — 분석 결과 초안을 "통계 검토자" 관점에서 비판받아, 가정·해석의 허점을 찾아보세요.`,contentEn:"> **Goal**: Design the analysis and check research ethics (plagiarism, AI use, IRB).\n\n### Step 1 — analysis plan\n```\nFor data like two-group pre/post scores, recommend suitable statistics with assumptions and a test order.\n```\n### Step 2 — analysis code\n```\nWrite Python (or R) code with comments; explain what each step tests.\n```\n### Step 3 — ethics checklist\n```\nMake an ethics checklist: IRB need, consent, privacy, plagiarism/COI, how to disclose GenAI use.\n```\n> **Academic**: unchecked assumption violations (normality/homogeneity) distort results; disclose AI use per venue guidelines."}]};function H(o){return q[o]||[]}function te(){const{category:o}=D(),{language:a}=R(),l=O(),[r,h]=p.useState(!0),[m,i]=p.useState(!0),[N,b]=p.useState(null),[y,k]=p.useState(null),[f,x]=p.useState(!1),s=$(o||"");if(!s)return e.jsxs("div",{className:"container",style:{padding:"120px 40px",textAlign:"center"},children:[e.jsx("h2",{children:a==="ko"?"과정을 찾을 수 없습니다.":"Program not found."}),e.jsx("button",{className:"btn btn-primary",onClick:()=>l("/courses"),children:a==="ko"?"교육과정으로 돌아가기":"Back to Courses"})]});const G=s.curriculum.reduce((t,n)=>t+n.sessions.length,0),A=z.filter(t=>t.categoryId===s.id),v=U(s.id),w=H(s.id),c=N?A.find(t=>t.id===N):null,d=y?w.find(t=>t.id===y):null,F=t=>{b(t),x(!1),k(null),window.scrollTo({top:0,behavior:"smooth"})},M=()=>{x(!0),b(null),k(null),window.scrollTo({top:0,behavior:"smooth"})},L=t=>{k(t),x(!1),b(null),window.scrollTo({top:0,behavior:"smooth"})},g=()=>{b(null),x(!1),k(null),window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx(B,{title:a==="ko"?s.nameKo:s.nameEn,path:`/courses/${o}`}),e.jsx("section",{className:"program-hero",style:{borderBottom:`3px solid ${s.color}`},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"program-hero-inner",children:[e.jsxs("div",{className:"program-hero-id",children:[e.jsx("div",{className:"program-hero-icon",style:{background:s.color},children:e.jsx("i",{className:`fa-solid ${s.icon}`})}),e.jsxs("div",{className:"program-hero-head",children:[e.jsxs("div",{className:"eyebrow",children:["Program ",String(s.order).padStart(2,"0")," · ",s.duration]}),e.jsx("h1",{children:a==="ko"?s.nameKo:s.nameEn}),e.jsx("p",{className:"program-hero-tagline",children:s.tagline}),e.jsx("p",{className:"program-hero-desc",children:a==="ko"?s.descKo:s.descEn})]})]}),e.jsxs("div",{className:"program-hero-aside",children:[s.instructors&&s.instructors.some(t=>t.padlet)&&e.jsx("div",{className:"program-hero-padlets",children:s.instructors.filter(t=>t.padlet).map((t,n)=>e.jsxs("a",{href:t.padlet,target:"_blank",rel:"noopener noreferrer",className:"padlet-btn",style:{background:s.color},children:[e.jsx("i",{className:"fa-solid fa-clipboard-list"}),a==="ko"?t.cohort?`패들렛 ${t.cohort}`:"패들렛 실습보드":t.cohort?`Padlet ${t.cohort}`:"Padlet Board",e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square padlet-btn-ext"})]},n))}),e.jsxs("div",{className:"program-hero-meta",children:[e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-user-check"})," ",s.audience]}),e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-layer-group"})," ",G,a==="ko"?"개 실습 교시":" sessions"]}),e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-signal"})," ",s.level]})]})]})]}),e.jsxs("div",{className:"program-platform-note",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"}),e.jsx("span",{children:a==="ko"?"본 과정은 교내 전용 플랫폼 전남대GPT(타임리GPT 기반)에서 진행되며, 모든 실습은 예시 프롬프트로 직접 따라 할 수 있습니다.":"This program runs on the campus platform JNU GPT (TimelyGPT-based); every practice includes a ready-to-use prompt."})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container course-layout",children:[e.jsx("aside",{className:"course-sidebar",children:e.jsxs("div",{className:"course-sidebar-inner",children:[e.jsxs("div",{className:"course-sidebar-title",style:{borderColor:s.color},children:[e.jsx("i",{className:`fa-solid ${s.icon}`,style:{color:s.color}}),e.jsx("span",{children:a==="ko"?s.nameKo:s.nameEn})]}),s.instructors&&s.instructors.length>0&&e.jsxs("div",{className:"course-instructor",children:[e.jsxs("span",{className:"course-instructor-label",children:[e.jsx("i",{className:"fa-solid fa-chalkboard-user"})," ",a==="ko"?"담당교수":"Instructor"]}),s.instructors.map((t,n)=>e.jsxs("div",{className:"course-instructor-row",children:[e.jsxs("span",{className:"ci-name",children:[t.cohort&&e.jsx("em",{className:"ci-cohort",children:t.cohort}),t.name]}),e.jsx("span",{className:"ci-sessions",children:a==="ko"?`1차시 ${t.session1} · 2차시 ${t.session2}`:`S1 ${t.session1} · S2 ${t.session2}`})]},n))]}),e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:a==="ko"?"과정 메뉴":"Course Menu"}),e.jsxs("button",{type:"button",className:`course-sidebar-link${!c&&!f&&!d?" active":""}`,onClick:g,children:[e.jsx("i",{className:"fa-solid fa-list-check"})," ",a==="ko"?"커리큘럼":"Curriculum"]}),(w.length>0||v.length>0)&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:`course-sidebar-link course-sidebar-toggle${m?" open":""}`,onClick:()=>i(!m),"aria-expanded":m,children:[e.jsx("i",{className:"fa-solid fa-flask-vial"})," ",a==="ko"?"실습 워크북":"Practice Workbook",e.jsx("i",{className:"fa-solid fa-chevron-down course-sidebar-chevron"})]}),m&&e.jsxs("div",{className:"course-sidebar-sublist",children:[v.length>0&&e.jsxs("button",{type:"button",className:`course-sidebar-link sub${f?" active":""}`,onClick:M,children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",a==="ko"?"실습 · 따라하기":"Hands-on Labs"]}),w.map(t=>e.jsxs("button",{type:"button",className:`course-sidebar-link sub${y===t.id?" active":""}`,onClick:()=>L(t.id),children:[e.jsx("i",{className:"fa-regular fa-square-check"})," ",a==="ko"?t.titleKo:t.titleEn]},t.id))]})]}),e.jsxs("button",{type:"button",className:`course-sidebar-link course-sidebar-toggle${r?" open":""}`,onClick:()=>h(!r),"aria-expanded":r,children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",a==="ko"?"학습자료":"Materials",e.jsx("i",{className:"fa-solid fa-chevron-down course-sidebar-chevron"})]}),r&&e.jsxs("div",{className:"course-sidebar-sublist",children:[A.map(t=>e.jsxs("button",{type:"button",className:`course-sidebar-link sub${N===t.id?" active":""}`,onClick:()=>F(t.id),children:[e.jsx("i",{className:"fa-regular fa-file-lines"})," ",a==="ko"?t.nameKo:t.nameEn]},t.id)),e.jsxs(S,{to:`/materials/${s.id}`,className:"course-sidebar-link sub more",children:[e.jsx("i",{className:"fa-solid fa-arrow-right"})," ",a==="ko"?"학습자료 전체보기":"View all materials"]})]}),e.jsxs(S,{to:`/community/${s.id}`,className:"course-sidebar-link",children:[e.jsx("i",{className:"fa-solid fa-comments"})," ",a==="ko"?"게시판":"Board"]})]}),!c&&!f&&!d&&e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:a==="ko"?"커리큘럼 바로가기":"Jump to"}),s.curriculum.map(t=>e.jsxs("a",{href:`#day-${t.day}`,className:"course-sidebar-link sub",children:[e.jsx("i",{className:"fa-regular fa-calendar"})," ",t.badge," — ",t.theme.split(" — ")[0]]},t.day))]}),e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:a==="ko"?"다른 과정":"Other Programs"}),Q.filter(t=>t.id!==s.id).map(t=>e.jsxs(S,{to:`/courses/${t.id}`,className:"course-sidebar-link sub",children:[e.jsx("i",{className:`fa-solid ${t.icon}`})," ",a==="ko"?t.nameKo:t.nameEn]},t.id))]})]})}),e.jsx("div",{className:"course-content",children:d?e.jsxs("article",{className:"material-inline",children:[e.jsxs("button",{type:"button",className:"material-inline-back",onClick:g,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",a==="ko"?"커리큘럼으로":"Back to curriculum"]}),e.jsxs("div",{className:"material-inline-eyebrow",style:{color:s.color},children:[e.jsx("i",{className:"fa-solid fa-flask-vial"})," ",a==="ko"?s.nameKo:s.nameEn," · ",a==="ko"?"실습 워크북":"Practice Workbook"]}),e.jsx("h2",{className:"material-inline-title",children:a==="ko"?d.titleKo:d.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(E,{remarkPlugins:[C],rehypePlugins:[K],components:I,children:a==="ko"?d.contentKo:d.contentEn})})]}):f?e.jsxs("div",{className:"handson",children:[e.jsxs("button",{type:"button",className:"material-inline-back",onClick:g,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",a==="ko"?"커리큘럼으로":"Back to curriculum"]}),e.jsxs("div",{className:"handson-head",children:[e.jsxs("div",{className:"material-inline-eyebrow",style:{color:s.color},children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",a==="ko"?s.nameKo:s.nameEn," · ",a==="ko"?"실습 따라하기":"Hands-on"]}),e.jsx("h2",{className:"material-inline-title",children:a==="ko"?"실습 · 따라하기":"Hands-on Labs"}),e.jsx("p",{className:"handson-intro",children:a==="ko"?"전남대GPT를 켜고 아래 랩을 순서대로 따라 해보세요. 각 단계의 예시 프롬프트를 그대로 입력하면 됩니다.":"Open JNU GPT and follow each lab. Paste the example prompts as-is."})]}),v.map(t=>e.jsxs("article",{className:"lab-card",children:[e.jsxs("div",{className:"lab-card-head",style:{borderColor:s.color},children:[e.jsx("h3",{className:"lab-title",children:t.title}),e.jsxs("div",{className:"lab-meta",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-signal"})," ",t.level]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-clock"})," ",t.minutes]})]}),e.jsx("p",{className:"lab-scenario",children:t.scenario})]}),e.jsx("ol",{className:"lab-steps",children:t.steps.map((n,j)=>e.jsxs("li",{className:"lab-step",children:[e.jsx("span",{className:"lab-step-num",style:{background:s.color},children:j+1}),e.jsxs("div",{className:"lab-step-body",children:[e.jsx("div",{className:"lab-step-title",children:n.title}),e.jsx("p",{className:"lab-step-detail",children:n.detail}),n.prompt&&e.jsx(T,{text:n.prompt}),n.check&&e.jsxs("div",{className:"lab-step-check",children:[e.jsx("i",{className:"fa-solid fa-circle-check"})," ",n.check]})]})]},j))}),e.jsxs("div",{className:"lab-result",children:[e.jsx("i",{className:"fa-solid fa-flag-checkered"})," ",t.result]})]},t.id))]}):c?e.jsxs("article",{className:"material-inline",children:[e.jsxs("button",{type:"button",className:"material-inline-back",onClick:g,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",a==="ko"?"커리큘럼으로":"Back to curriculum"]}),e.jsxs("div",{className:"material-inline-eyebrow",style:{color:s.color},children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",a==="ko"?s.nameKo:s.nameEn," · ",a==="ko"?"학습자료":"Materials"]}),e.jsx("h2",{className:"material-inline-title",children:a==="ko"?c.nameKo:c.nameEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(E,{remarkPlugins:[C],rehypePlugins:[K],components:I,children:a==="ko"?c.contentKo:c.contentEn})})]}):e.jsxs(e.Fragment,{children:[s.curriculum.map(t=>e.jsxs("div",{id:`day-${t.day}`,className:"curriculum-day",children:[e.jsxs("div",{className:"curriculum-day-head",children:[e.jsx("span",{className:"curriculum-day-badge",style:{background:s.color},children:t.badge}),e.jsxs("div",{children:[e.jsx("h2",{className:"curriculum-day-title",children:t.theme}),e.jsxs("span",{className:"curriculum-day-sub",children:["8",a==="ko"?"시간 · 4과목":"h · 4 modules"]})]})]}),e.jsx("div",{className:"curriculum-sessions",children:t.sessions.map((n,j)=>e.jsxs("div",{className:"session-card",children:[e.jsxs("div",{className:"session-time",children:[e.jsx("span",{className:"session-period",style:{color:s.color},children:n.period}),e.jsx("span",{className:"session-clock",children:n.time})]}),e.jsxs("div",{className:"session-body",children:[e.jsx("h3",{className:"session-title",children:n.title}),e.jsxs("p",{className:"session-goal",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," ",n.goal]}),e.jsx("div",{className:"session-topics",children:n.topics.map(u=>e.jsx("span",{className:"session-topic",children:u},u))}),e.jsxs("div",{className:"session-practices",children:[e.jsxs("div",{className:"session-practices-head",children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",a==="ko"?"실습 사례":"Practice"]}),n.practices.map((u,P)=>e.jsxs("div",{className:"practice-item",children:[e.jsxs("div",{className:"practice-scenario",children:[e.jsx("span",{className:"practice-num",style:{background:s.color},children:P+1}),u.scenario]}),e.jsx(T,{text:u.prompt})]},P))]})]})]},j))})]},t.day)),e.jsxs("div",{className:"program-cta",children:[e.jsxs("button",{className:"btn btn-accent btn-lg",onClick:()=>l("/login"),children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"})," ",a==="ko"?"로그인하고 학습 시작":"Log in to start"]}),e.jsxs("button",{className:"btn btn-outline",onClick:()=>l("/courses"),children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",a==="ko"?"전체 과정 보기":"All Programs"]})]})]})})]})})]})}export{te as default};
