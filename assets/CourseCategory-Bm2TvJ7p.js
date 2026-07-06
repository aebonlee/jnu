import{C as S,r as p,l as e,F as $,E as O,L as w}from"./index-CoLp6sD3.js";import{S as W}from"./SEOHead-Dau23Hkp.js";import{m as B}from"./markdownComponents-BTe97lRO.js";import{g as Q,P as L}from"./courses-D6Ru7kQm.js";import{M as z}from"./materials-CQHC2qJl.js";import{M as P,r as I}from"./TipBox-BvSBYsrC.js";import{r as K}from"./index-HaUwQNcv.js";function R({text:o}){const{language:s}=S(),[r,l]=p.useState(!1),h=()=>{const i=document.createElement("textarea");i.value=o,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select();try{document.execCommand("copy")}catch{}document.body.removeChild(i)},m=()=>{try{const i=navigator.clipboard?.writeText(o);i&&typeof i.catch=="function"?i.catch(()=>h()):h()}catch{h()}l(!0),window.setTimeout(()=>l(!1),1500)};return e.jsxs("div",{className:"prompt-block",children:[e.jsxs("div",{className:"prompt-block-header",children:[e.jsxs("span",{className:"prompt-block-lang",children:[e.jsx("i",{className:"fa-solid fa-terminal"})," ",s==="ko"?"프롬프트":"PROMPT"]}),e.jsxs("button",{type:"button",className:`prompt-copy-btn${r?" copied":""}`,onClick:m,"aria-label":s==="ko"?"프롬프트 복사":"Copy prompt",children:[e.jsx("i",{className:`fa-solid ${r?"fa-check":"fa-copy"}`}),r?s==="ko"?"복사됨":"Copied!":s==="ko"?"복사":"Copy"]})]}),e.jsx("pre",{className:"practice-prompt",children:e.jsx("code",{children:o})})]})}const H={foundation:[{id:"f-lab1",title:"랩 1 · 첫 대화부터 학과 안내문까지",scenario:"전남대GPT에 처음 로그인해 기본 사용법을 익히고, 실제 학과 행사 안내문을 완성합니다.",level:"입문",minutes:"약 20분",steps:[{title:"로그인하고 첫 인사",detail:"교내 계정으로 전남대GPT에 로그인한 뒤, 아래 프롬프트로 AI가 무엇을 할 수 있는지 직접 물어봅니다.",prompt:`너는 전남대학교 교직원을 돕는 AI 비서야.

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
[흐름] 도입-방법-결과-결론`,check:"8장 구성이 나오면 이번 랩 완료!"}],result:"코드 작성 → 디버깅 → 결과 정리 → 발표 구성까지 연구 마무리 흐름을 경험했습니다."}]};function q(o){return H[o]||[]}const N=`> **오늘 이렇게 진행합니다 (8시간, 자기주도 실습).** 위에서부터 순서대로 따라 하되, 내 상황에 맞는 트랙을 고르세요.
> - **[공통]** 은 모두 함께 — 데이터·AI 툴 다루는 기본기.
> - **[트랙 A]** 는 과정 주제(논문/예산/연구)를 더 깊게 원하는 분.
> - **[트랙 B]** 는 주제와 관련이 덜하고 **내 업무에 바로 쓰고 싶은** 분(다수).
>
> **처음이신가요?** 괜찮습니다. 각 과제의 회색 상자(프롬프트)를 **복사 버튼으로 복사 → 전남대GPT에 붙여넣기 → 내 상황에 맞게 [ ] 부분만 바꾸기**, 이 3가지만 하면 됩니다. 막히면 "더 쉽게 설명해줘"라고 다시 물어보세요.`,U={foundation:[{id:"fd-guide",titleKo:"① 오늘의 실습 안내",titleEn:"① How Today Works",contentKo:`${N}

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

> **시니어 팁**: 한 번에 완벽하게 하려 하지 마세요. 초안을 받고 "더 정중하게", "표로", "3줄로"처럼 **말로 고쳐가는 것**이 가장 빠릅니다.`,contentEn:`> **Self-guided 8-hour day.** Follow top-down; pick your track.
> - **[Common]** everyone — data/AI basics. **[Track A]** deeper on the topic. **[Track B]** apply to your own work.
>
> **New to this?** Copy a prompt box → paste into 전남대GPT → change the [ ] parts. If stuck, ask "explain more simply".

### Flow
| Time | Content | Track |
| --- | --- | --- |
| 1 (2h) | Prompt basics | Common |
| 2 (2h) | Apply to your docs | Common |
| 3 (2h) | Advanced techniques | Track A |
| 4 (2h) | Automate your work | Track B |`},{id:"fd-common1",titleKo:"② [공통] 프롬프트 기본기",titleEn:"② [Common] Prompt Basics",contentKo:`> **기반 자료**: 「역할 기반 프롬프트」·「RCF 프레임워크」·「단계적 프롬프트」 · **약 2시간**
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
> **🙋 막히면**: "방금 답을 더 정중하게 다시 써줘" / "표로 바꿔줘"로 이어서 다듬으세요.`,contentEn:'> **Based on**: Role/RCF/CoT materials · **~2h**. Ask one task ("workshop notice") at each level and compare.\n\n### T1 — bare vs role\n```\nWrite a workshop notice.\n```\n```\nYou are a 15-year admin officer. Write a workshop notice.\n```\n### T2 — RCF\n```\n[Role] admin [Context] next Fri PM, [20 staff] [Format] polite, 개조식, when/where/prep/RSVP, <400 chars.\n```\n### T3 — CoT\n```\nFirst list 3 factors to raise attendance, then rewrite reflecting them.\n```\n> ✅ Compare T1→T3.  🙋 Stuck? follow up: "more polite" / "as a table".'},{id:"fd-common2",titleKo:"③ [공통] 내 문서에 적용",titleEn:"③ [Common] Your Documents",contentKo:`> **기반 자료**: 「각 툴 활용법」·「AI 서비스 비교」 · **약 2시간**
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

> **✅ 확인**: 내 업무 맥락을 넣으니 결과가 얼마나 좋아졌나요? 규정·수치는 반드시 **원문 재확인**.`,contentEn:"> **Based on**: tool guides / comparison · **~2h**. Apply techniques to your real documents.\n\n### T1 — 3 tones\n```\nRewrite this in polite/concise/friendly; add a one-line fit for each.\n```\n### T2 — answer only from a file\n```\nAnswer only from the attachment; mark missing info + cite clauses. [Q] ...\n```\n### T3 — 3-depth summary\n```\nSummarize as (1) one line (2) 3 key lines (3) action items. [paste]\n```"},{id:"fd-trackA",titleKo:"④ [트랙 A] 심화 프롬프트 기법",titleEn:"④ [Track A] Advanced",contentKo:'> **대상**: 프롬프트를 더 깊게 다루고 싶은 분 · **약 2시간**\n\n### 과제 1 — 다중 관점으로 검토\n```\n[내 기획/제안]을 전략가·현장직원·고객·상급자 4가지 입장에서 각각 평가해줘.\n```\n\n### 과제 2 — 약점 미리 발견 (레드팀)\n```\n이 아이디어에 가장 비판적인 사람 입장에서 약점만 날카롭게 지적해줘. 그다음 보완책도.\n```\n\n### 과제 3 — 구조화 출력 (표/JSON)\n```\n[목록 자료]를 "이름 | 담당 | 기한 | 상태" 표로 정리하고, 같은 내용을 시스템에 넣을 수 있게 JSON으로도 줘.\n```\n\n> **✅ 확인**: 관점을 바꾸면 안 보이던 문제가 드러납니다. 발표·제안 전 사전 점검에 유용.',contentEn:"> **For**: those wanting deeper prompting · **~2h**\n\n### T1 — multi-perspective\n```\nEvaluate [my plan] from strategist/staff/customer/manager viewpoints.\n```\n### T2 — red-team\n```\nAttack this idea as its harshest critic; then give fixes.\n```\n### T3 — structured output\n```\nTurn [list] into a table Name|Owner|Due|Status, and also JSON.\n```"},{id:"fd-trackB",titleKo:"⑤ [트랙 B] 내 업무 자동화·템플릿",titleEn:"⑤ [Track B] Automate Your Work",contentKo:`> **대상**: 배운 걸 **바로 내 업무에** 쓰고 싶은 분(다수) · **약 2시간**
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

> **✅ 확인**: 오늘 만든 지침·템플릿을 저장해 두면 내일부터 바로 씁니다. 이게 진짜 실력입니다.`,contentEn:"> **For**: apply now to your work (majority) · **~2h**\n\n### T1 — save custom instructions\n```\n[Role] dept helper [Rules] polite, 개조식, cite clauses, mask sensitive data. Refine for saving.\n```\n### T2 — self-check loop\n```\nDraft [my task], self-review, then give the improved final in one go.\n```\n### T3 — reusable template\n```\nMake a reusable prompt template for [recurring task]; mark variables with [ ].\n```"}],"research-writing":[{id:"rw-guide",titleKo:"① 오늘의 실습 안내",titleEn:"① How Today Works",contentKo:`${N}

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
3. 모델: 표 분석은 Auto/상위, 긴 문서 요약은 상위 모델.`,contentEn:`> **Self-guided 8h.** [Common] data/AI basics · [Track A] literature/research/paper · [Track B] your work data.
> This course centers on **data analysis**; paper-goal learners pick Track A, others pick Track B.

### Flow
| Time | Content | Track |
| --- | --- | --- |
| 1 (2h) | Handle data (clean/stats) | Common |
| 2 (2h) | Insights & charts | Common |
| 3 (2h) | Choose A (papers) or B (work data) | A/B |
| 4 (2h) | Deepen + templates | A/B |`},{id:"rw-common1",titleKo:"② [공통] 데이터 다루기 기본",titleEn:"② [Common] Handle Data",contentKo:`> **기반 자료**: 「연구 데이터 분석 가이드」 · **약 2시간**
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
> **🎓 포인트**: 결측·이상치 처리는 결과를 바꿉니다. AI 제안은 초안, **결정·기록은 사람**(재현성).`,contentEn:'> **Based on**: "Research Data Analysis Guide" · **~2h**. Clean a real table yourself.\n\n### T1 — inspect\n```\nFind suspect missing/outlier/duplicate rows; propose delete/impute/keep with reasons. [paste table]\n```\n### T2 — codebook\n```\nBuild a codebook: variable | item | type | value labels | missing code.\n```\n### T3 — descriptives\n```\nDescriptives as a table + 3 features explained simply with figures.\n```\n> 🎓 Cleaning changes results — researcher decides & documents.'},{id:"rw-common2",titleKo:"③ [공통] 인사이트 & 시각화",titleEn:"③ [Common] Insights & Charts",contentKo:`> **기반 자료**: 「데이터 시각화 & 결과 해석 가이드」 · **약 2시간**
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
> **🎓 포인트**: "오해를 유발하는 그래프"와 "정직한 그래프"를 각각 만들어 축·비율 차이를 관찰해 보세요.`,contentEn:'> **Based on**: "Visualization Guide" · **~2h**.\n\n### T1 — patterns\n```\nCompare satisfaction by group; find 3 patterns + outliers with figures.\n```\n### T2 — choose then draw\n```\nRecommend 2-3 charts for "group differences" with pros/cons; steps to draw the chosen one.\n```\n### T3 — one-paragraph interpretation\n```\nWrite a results paragraph for a report; no overstatement, one line of limitation.\n```'},{id:"rw-trackA",titleKo:"④ [트랙 A · 논문/연구] 문헌 → 연구질문 → 논문 구조",titleEn:"④ [Track A] Literature → RQ → Paper",contentKo:`> **대상**: 논문작성·연구가 목표인 분 · **약 3~4시간(4교시 포함)**
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

> **🎓 포인트**: AI 문헌 요약은 **원문 확인 전 초안**(존재하지 않는 논문을 지어낼 수 있음—환각). 인용·수치·주장은 원문 대조. 논문에 **AI 사용 방식**을 학회 지침대로 밝히세요.`,contentEn:'> **For**: paper/research goal · **~3-4h**. Based on "AI Paper Guide" + Day-1 ConnectedPapers.\n\n### T1 — literature map\n```\nSuggest 3 seed papers for "[my topic]" and why each matters.\n``` → paste into ConnectedPapers.\n### T2 — matrix + gap\n```\nCompare papers (Author(Year)|RQ|Method|Sample|Findings|Limits) and point out the gap.\n```\n### T3 — RQ → IMRaD\n```\nDerive 3 FINER RQs from the gap + my data; outline one in IMRaD with per-section guides.\n```\n### T4 — intro → critique → revise\n```\nWrite an academic intro; then critique as a harsh reviewer and rewrite.\n```\n> 🎓 Verify AI summaries against originals; disclose AI use per guidelines.'},{id:"rw-trackB",titleKo:"⑤ [트랙 B · 업무 활용] 내 데이터로 보고·자동화",titleEn:"⑤ [Track B] Work Data & Reports",contentKo:`> **대상**: 논문과 관련이 덜하고 **내 업무 데이터**에 바로 쓰고 싶은 분(다수) · **약 3~4시간**
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
> **🎓 포인트**: 자동 결과도 **작은 샘플로 검산**(합계·건수), 개인정보는 가려서 다루기.`,contentEn:"> **For**: apply to your own work data (majority) · **~3-4h**.\n\n### T1 — summarize your data\n```\nAggregate [my table] into Item|Value|Share|Note and give 3 quick features.\n```\n### T2 — report interpretation\n```\nMake it report-ready: 3 key lines + table + one-line comment; plain.\n```\n### T3 — automate weekly\n```\nAutomate this weekly in Google Sheets (formula or Apps Script), step by step.\n```\n### T4 — template\n```\nMake a reusable template for clean→summarize→report; mark [ ].\n```"}],"data-budget":[{id:"db-guide",titleKo:"① 오늘의 실습 안내",titleEn:"① How Today Works",contentKo:`${N}

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
2. **내 업무 표 1개**(지출 내역, 부서 통계 등). 없으면 "예시 표 만들어줘".`,contentEn:`> **Self-guided 8h.** [Common] Excel/data basics · [Track A] budget/accounting · [Track B] general admin automation.

### Flow
| Time | Content | Track |
| --- | --- | --- |
| 1 (2h) | Excel/data basics | Common |
| 2 (2h) | Aggregate/analyze admin data | Common |
| 3 (2h) | A: budget/accounting or B: admin automation | A/B |
| 4 (2h) | Deepen + templates | A/B |`},{id:"db-common1",titleKo:"② [공통] 엑셀·데이터 기본",titleEn:"② [Common] Excel & Data",contentKo:`> **기반 자료**: 「Excel 수식 자동화」·「데이터 분석 기초」 · **약 2시간**
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

> **🎓 포인트**: 자동 생성 수식도 **작은 샘플로 검산**하는 습관이 데이터 무결성을 지킵니다.`,contentEn:"> **Based on**: Excel/Data Basics · **~2h**.\n\n### T1 — aggregate\n```\n[A=dept, B=spend] give dept-total formula + meaning + how it works.\n```\n### T2 — conditional\n```\nSUMIFS (dept & month) and XLOOKUP (unit price) with examples.\n```\n### T3 — fix\n```\nThis throws #N/A/#REF! — cause and fix (beginner-friendly).\n```"},{id:"db-common2",titleKo:"③ [공통] 행정 데이터 집계·분석",titleEn:"③ [Common] Analyze Admin Data",contentKo:"> **기반 자료**: 「데이터 분석 기초」 · **약 2시간**\n> **목표**: 행정 데이터를 집계하고 특징을 읽는다.\n\n### 과제 1 — 집계·비교\n```\n[지출 내역 표 붙여넣기]를 부서별·항목별로 집계하고, 지출이 큰 항목 3개와 특이점을 정리해줘.\n```\n\n### 과제 2 — 추세·비중\n```\n월별 추세와 항목별 비중을 표로 내고, 어떤 그래프로 보여주면 좋을지 추천해줘.\n```\n\n### 과제 3 — 한 문단 해석\n```\n위 결과를 보고용 한 문단으로 담백하게 정리하고, 주의해서 볼 점 한 줄을 덧붙여줘.\n```\n\n> **🎓 포인트**: 합계·건수는 원본과 대조해 검산. 이상한 값은 원인을 찾은 뒤 처리.",contentEn:"> **Based on**: Data Basics · **~2h**.\n\n### T1 — aggregate/compare\n```\nAggregate [spend table] by dept/item; find top-3 spend items and anomalies.\n```\n### T2 — trend/share\n```\nMonthly trend and item share as a table; recommend a chart.\n```\n### T3 — one-paragraph\n```\nSummarize for a report; add one caution line.\n```"},{id:"db-trackA",titleKo:"④ [트랙 A · 예산·회계] 편성·정산·보고",titleEn:"④ [Track A] Budget & Reporting",contentKo:'> **대상**: 예산·회계 담당 · **약 3~4시간**\n> **기반 자료**: 「예산·회계 실무 가이드」\n\n### 과제 1 — 예산 편성 표\n```\n[행사/사업]의 예산안을 "항목|산출근거|단가|수량|금액|비고" 표로, 합계 행과 예비비 5% 포함해 만들어줘.\n```\n\n### 과제 2 — 예산 대비 실적 분석\n```\n[예산 대비 집행 실적 표]에서 증감 큰 항목 3개와 이유(추정), 차년도 시사점을 정리해줘.\n```\n\n### 과제 3 — 경영진용 코멘트\n```\n이 실적 표 각 항목에 "1분에 파악할" 해석 코멘트를 담백하게 달아줘.\n```\n\n### 과제 4 — 규정 확인(근거 포함)\n```\n첨부 회계 규정에서 [정산/집행] 관련 핵심만 쉽게 요약하되 근거 조항 번호를 함께, 없으면 "없음"으로.\n```\n\n> **🎓 포인트**: 회계 숫자는 AI 답을 초안으로만. **규정·산출근거·합계는 원자료로 검증**하고 근거 없는 수치는 넣지 않습니다.',contentEn:'> **For**: budget/accounting · **~3-4h**. Based on "Budget & Accounting Guide".\n\n### T1 — budget table\n```\nItem|Basis|Unit|Qty|Amount|Note; total + 5% contingency.\n```\n### T2 — vs actuals\n```\nTop-3 variances with reasons and next-year implications.\n```\n### T3 — exec comments\n```\nOne-line interpretation per item.\n```\n### T4 — rules\n```\nSummarize settlement/execution rules with clause numbers.\n```'},{id:"db-trackB",titleKo:"⑤ [트랙 B · 업무 활용] 행정 업무 자동화",titleEn:"⑤ [Track B] Admin Automation",contentKo:"> **대상**: 예산 외 일반 행정 업무 다수 · **약 3~4시간**\n> **목표**: 반복 행정 업무를 문서화·자동화한다.\n\n### 과제 1 — 규정·지침 쉬운 요약 → 체크리스트\n```\n[규정/지침 붙여넣기]에서 실무 핵심만 쉽게 요약(근거 조항 표시)하고, 담당자용 체크리스트로 만들어줘. 빠뜨리기 쉬운 항목엔 (주의).\n```\n\n### 과제 2 — 공문·안내문 빠르게\n```\n[상황]에 맞는 공문을 격식 있는 공문체(개조식·하십시오체)로, 번역투 없이, 공백 500자 이내로.\n```\n\n### 과제 3 — 반복 집계 자동화\n```\n매주 부서별 [항목] 시트를 자동 취합·정리하고 싶어. 구글 스프레드시트 방법(수식 또는 Apps Script)을 단계별로.\n```\n\n### 과제 4 — 나만의 업무 템플릿\n```\n[자주 하는 행정 업무]를 빠르게 처리하는 재사용 프롬프트 템플릿으로 만들어줘. 바꿀 부분 [ ] 표시.\n```\n\n> **🎓 포인트**: 규정 해석의 **최종 판단은 사람**. 자동화는 소규모 시험 후 확대, 개인정보는 교내 정책 준수.",contentEn:"> **For**: general admin (majority) · **~3-4h**.\n\n### T1 — rules → checklist\n```\nSummarize rules (cite clauses) → checklist; mark easily-missed (caution).\n```\n### T2 — official doc fast\n```\nOfficial doc in 개조식·하십시오체, no translationese, <500 chars.\n```\n### T3 — automate\n```\nAutomate weekly dept sheet in Google Sheets (formula/Apps Script), step by step.\n```\n### T4 — template\n```\nReusable template for [recurring admin task]; mark [ ].\n```"}],"research-lab":[{id:"rl-guide",titleKo:"① 오늘의 실습 안내",titleEn:"① How Today Works",contentKo:`${N}

### 오늘의 흐름 (8시간)
| 시간 | 내용 | 트랙 |
| --- | --- | --- |
| 1교시 (2h) | 연구질문·설계 다루기 | 공통 |
| 2교시 (2h) | 데이터·프로토콜·기록 | 공통 |
| 3교시 (2h) | **트랙 선택** — A: 분석·연구윤리 심화 / B: 연구행정·업무 활용 | A 또는 B |
| 4교시 (2h) | 트랙 심화 + 나만의 템플릿 | A 또는 B |

> **연구 실습이 중심입니다.** 직접 연구하는 분은 **트랙 A**, 연구 지원·행정 다수이면 **트랙 B**를 고르세요.

### 시작 전 준비
1. 전남대GPT 로그인.  2. **내 관심 주제 또는 지원 업무 1개**.`,contentEn:`> **Self-guided 8h.** [Common] question/design · [Track A] analysis/ethics · [Track B] research admin.

### Flow
| Time | Content | Track |
| --- | --- | --- |
| 1 (2h) | Question & design | Common |
| 2 (2h) | Data/protocol/records | Common |
| 3 (2h) | A: analysis/ethics or B: research admin | A/B |
| 4 (2h) | Deepen + templates | A/B |`},{id:"rl-common1",titleKo:"② [공통] 연구질문·설계",titleEn:"② [Common] Question & Design",contentKo:'> **기반 자료**: 「연구 설계 가이드」 · **약 2시간**\n> **목표**: 관심 주제를 검증 가능한 질문·설계로 구체화한다.\n\n### 과제 1 — 질문 정련(FINER)\n```\n"[내 관심 주제 또는 지원 과제]"를 검증 가능한 연구질문으로 좁혀줘. FINER 기준 3개, 변수와 대상도.\n```\n\n### 과제 2 — 설계 유형 선택\n```\n위 질문 검증에 실험/준실험/설문/사례연구 중 무엇이 적절한지 장단점과 함께 추천하고, 표본 수 추정 방법도.\n```\n\n### 과제 3 — 변수·측정 정의\n```\n독립·종속·통제 변수를 정의하고 각 변수의 측정 방법(척도·도구)을 표로 정리해줘.\n```\n\n> **🎓 포인트**: 설계의 질은 **교란변수 통제·재현 가능성**에서 갈립니다. 타당성 판단은 연구자·지도교수의 몫.',contentEn:'> **Based on**: "Research Design Guide" · **~2h**.\n\n### T1 — refine (FINER)\n```\nNarrow "[my topic]" into 3 testable RQs (FINER), with variables/subjects.\n```\n### T2 — design\n```\nExperiment/quasi/survey/case — which fits + sample size method.\n```\n### T3 — variables\n```\nDefine IV/DV/control variables and measurement as a table.\n```'},{id:"rl-common2",titleKo:"③ [공통] 프로토콜·데이터 기록",titleEn:"③ [Common] Protocol & Records",contentKo:"> **기반 자료**: 「실험 프로토콜 & 데이터 관리 가이드」 · **약 2시간**\n> **목표**: 설계를 실행 가능한 프로토콜·기록 체계로 만든다.\n\n### 과제 1 — 프로토콜 초안\n```\n위 설계로 실험/조사 프로토콜 초안을 만들어줘. [포함] 목적·대상·절차(단계)·측정 시점·중단 기준·필요 자원.\n```\n\n### 과제 2 — 데이터 기록 양식\n```\n원자료 기록 표를 설계해줘. [열] 대상ID|조건|측정시점|변수들|비고. 입력 규칙(단위·결측 표기)도.\n```\n\n### 과제 3 — 데이터 관리 계획(DMP)\n```\n연구 데이터 관리 계획 체크리스트: 저장·백업·익명화·보관기간·공유 범위.\n```\n\n> **🎓 포인트**: **원자료 보존·버전관리·익명화**는 연구 무결성의 기본. 민감정보는 최소 수집·가명, IRB/교내 규정 준수.",contentEn:'> **Based on**: "Protocol & Data Guide" · **~2h**.\n\n### T1 — protocol\n```\nDraft a protocol: purpose, subjects, procedure, timing, stop criteria, resources.\n```\n### T2 — recording sheet\n```\nRaw-data table: ID|Condition|Timepoint|variables|note; entry rules.\n```\n### T3 — DMP\n```\nDMP checklist: storage, backup, anonymization, retention, sharing.\n```'},{id:"rl-trackA",titleKo:"④ [트랙 A · 연구] 분석·연구윤리",titleEn:"④ [Track A] Analysis & Ethics",contentKo:"> **대상**: 직접 연구·분석하는 분 · **약 3~4시간**\n> **기반 자료**: 「분석 코드 & 연구윤리 가이드」\n\n### 과제 1 — 분석 계획(가정 포함)\n```\n[내 데이터 형태, 예: 두 집단 사전/사후 점수]를 분석하려면 어떤 통계가 적절한지 가정과 함께 추천하고 검정 순서를.\n```\n\n### 과제 2 — 분석 코드\n```\n위 분석을 파이썬(또는 R) 코드로 주석과 함께 만들어줘. 각 단계가 무엇을 검증하는지 설명도.\n```\n\n### 과제 3 — 결과 해석·시각화\n```\n분석 결과(예시 수치)를 논문/보고용 한 문단으로 해석하고, 적절한 그래프를 추천해줘. 과장 없이 한계 포함.\n```\n\n### 과제 4 — 연구윤리 점검\n```\n이 연구의 윤리 체크리스트: IRB 필요 여부·동의서·개인정보·표절/이해상충·생성형 AI 사용 명시 방법.\n```\n\n> **🎓 포인트**: 통계의 **가정 위배**(정규성·등분산)를 확인하지 않으면 결과 왜곡. 논문에 **AI 사용 방식**을 지침대로 밝히세요.",contentEn:'> **For**: research/analysis · **~3-4h**. Based on "Analysis & Ethics Guide".\n\n### T1 — analysis plan\n```\nFor [my data], recommend statistics with assumptions and a test order.\n```\n### T2 — code\n```\nPython/R with comments; explain what each step tests.\n```\n### T3 — interpret/visualize\n```\nInterpret results in a paragraph; recommend a chart; include a limitation.\n```\n### T4 — ethics\n```\nEthics checklist: IRB, consent, privacy, plagiarism/COI, GenAI disclosure.\n```'},{id:"rl-trackB",titleKo:"⑤ [트랙 B · 업무 활용] 연구행정·지원 업무",titleEn:"⑤ [Track B] Research Admin",contentKo:"> **대상**: 연구 지원·행정 업무 다수 · **약 3~4시간**\n> **목표**: 연구 관련 행정·문서 업무를 AI로 빠르게 처리한다.\n\n### 과제 1 — 연구계획서/보고서 초안\n```\n[사업/과제 개요]로 연구(지원)계획서 목차와 각 절 초안을 잡아줘. 표 형식이 필요한 부분은 표로.\n```\n\n### 과제 2 — 규정·공고 요약\n```\n[연구비/과제 공고 또는 규정]에서 신청자가 꼭 알아야 할 핵심과 일정을 표로 정리하고, 준비물 체크리스트를 만들어줘.\n```\n\n### 과제 3 — 데이터·문서 정리 자동화\n```\n[반복하는 연구행정 업무: 예-과제별 진행현황 취합]을 매주 자동 정리하는 방법을 단계별로 설계해줘.\n```\n\n### 과제 4 — 나만의 업무 템플릿\n```\n[자주 하는 연구행정 업무]를 빠르게 처리하는 재사용 프롬프트 템플릿을 만들어줘. 바꿀 부분 [ ] 표시.\n```\n\n> **🎓 포인트**: 공고·규정 요약은 근거를 함께 확인하고, 최종 판단은 사람. 개인정보·미공개 연구정보는 신중히.",contentEn:"> **For**: research admin/support (majority) · **~3-4h**.\n\n### T1 — plan/report draft\n```\nFrom [project outline], outline a research(-support) plan with per-section drafts; tables where needed.\n```\n### T2 — call/rule summary\n```\nSummarize a grant call/rules: essentials + schedule as a table; prep checklist.\n```\n### T3 — automate\n```\nDesign weekly auto-collation for [recurring research-admin task], step by step.\n```\n### T4 — template\n```\nReusable template for [recurring task]; mark [ ].\n```"}]};function V(o){return U[o]||[]}function ae(){const{category:o}=$(),{language:s}=S(),r=O(),[l,h]=p.useState(!0),[m,i]=p.useState(!0),[y,k]=p.useState(null),[v,b]=p.useState(null),[f,x]=p.useState(!1),a=Q(o||"");if(!a)return e.jsxs("div",{className:"container",style:{padding:"120px 40px",textAlign:"center"},children:[e.jsx("h2",{children:s==="ko"?"과정을 찾을 수 없습니다.":"Program not found."}),e.jsx("button",{className:"btn btn-primary",onClick:()=>r("/courses"),children:s==="ko"?"교육과정으로 돌아가기":"Back to Courses"})]});const F=a.curriculum.reduce((t,n)=>t+n.sessions.length,0),C=z.filter(t=>t.categoryId===a.id),T=q(a.id),A=V(a.id),c=y?C.find(t=>t.id===y):null,d=v?A.find(t=>t.id===v):null,D=t=>{k(t),x(!1),b(null),window.scrollTo({top:0,behavior:"smooth"})},G=()=>{x(!0),k(null),b(null),window.scrollTo({top:0,behavior:"smooth"})},M=t=>{b(t),x(!1),k(null),window.scrollTo({top:0,behavior:"smooth"})},g=()=>{k(null),x(!1),b(null),window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx(W,{title:s==="ko"?a.nameKo:a.nameEn,path:`/courses/${o}`}),e.jsx("section",{className:"program-hero",style:{borderBottom:`3px solid ${a.color}`},children:e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"program-hero-inner",children:[e.jsxs("div",{className:"program-hero-id",children:[e.jsx("div",{className:"program-hero-icon",style:{background:a.color},children:e.jsx("i",{className:`fa-solid ${a.icon}`})}),e.jsxs("div",{className:"program-hero-head",children:[e.jsxs("div",{className:"eyebrow",children:["Program ",String(a.order).padStart(2,"0")," · ",a.duration]}),e.jsx("h1",{children:s==="ko"?a.nameKo:a.nameEn}),e.jsx("p",{className:"program-hero-tagline",children:a.tagline}),e.jsx("p",{className:"program-hero-desc",children:s==="ko"?a.descKo:a.descEn})]})]}),e.jsxs("div",{className:"program-hero-aside",children:[a.instructors&&a.instructors.some(t=>t.padlet)&&e.jsx("div",{className:"program-hero-padlets",children:a.instructors.filter(t=>t.padlet).map((t,n)=>e.jsxs("a",{href:t.padlet,target:"_blank",rel:"noopener noreferrer",className:"padlet-btn",style:{background:a.color},children:[e.jsx("i",{className:"fa-solid fa-clipboard-list"}),s==="ko"?t.cohort?`패들렛 ${t.cohort}`:"패들렛 실습보드":t.cohort?`Padlet ${t.cohort}`:"Padlet Board",e.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square padlet-btn-ext"})]},n))}),e.jsxs("div",{className:"program-hero-meta",children:[e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-user-check"})," ",a.audience]}),e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-layer-group"})," ",F,s==="ko"?"개 실습 교시":" sessions"]}),e.jsxs("span",{className:"meta-chip",children:[e.jsx("i",{className:"fa-solid fa-signal"})," ",a.level]})]})]})]}),e.jsxs("div",{className:"program-platform-note",children:[e.jsx("i",{className:"fa-solid fa-shield-halved"}),e.jsx("span",{children:s==="ko"?"본 과정은 교내 전용 플랫폼 전남대GPT(타임리GPT 기반)에서 진행되며, 모든 실습은 예시 프롬프트로 직접 따라 할 수 있습니다.":"This program runs on the campus platform JNU GPT (TimelyGPT-based); every practice includes a ready-to-use prompt."})]})]})}),e.jsx("section",{className:"section",children:e.jsxs("div",{className:"container course-layout",children:[e.jsx("aside",{className:"course-sidebar",children:e.jsxs("div",{className:"course-sidebar-inner",children:[e.jsxs("div",{className:"course-sidebar-title",style:{borderColor:a.color},children:[e.jsx("i",{className:`fa-solid ${a.icon}`,style:{color:a.color}}),e.jsx("span",{children:s==="ko"?a.nameKo:a.nameEn})]}),a.instructors&&a.instructors.length>0&&e.jsxs("div",{className:"course-instructor",children:[e.jsxs("span",{className:"course-instructor-label",children:[e.jsx("i",{className:"fa-solid fa-chalkboard-user"})," ",s==="ko"?"담당교수":"Instructor"]}),a.instructors.map((t,n)=>e.jsxs("div",{className:"course-instructor-row",children:[e.jsxs("span",{className:"ci-name",children:[t.cohort&&e.jsx("em",{className:"ci-cohort",children:t.cohort}),t.name]}),e.jsx("span",{className:"ci-sessions",children:s==="ko"?`1차시 ${t.session1} · 2차시 ${t.session2}`:`S1 ${t.session1} · S2 ${t.session2}`})]},n))]}),e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:s==="ko"?"과정 메뉴":"Course Menu"}),e.jsxs("button",{type:"button",className:`course-sidebar-link${!c&&!f&&!d?" active":""}`,onClick:g,children:[e.jsx("i",{className:"fa-solid fa-list-check"})," ",s==="ko"?"커리큘럼":"Curriculum"]}),(A.length>0||T.length>0)&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",className:`course-sidebar-link course-sidebar-toggle${m?" open":""}`,onClick:()=>i(!m),"aria-expanded":m,children:[e.jsx("i",{className:"fa-solid fa-flask-vial"})," ",s==="ko"?"실습 워크북":"Practice Workbook",e.jsx("i",{className:"fa-solid fa-chevron-down course-sidebar-chevron"})]}),m&&e.jsxs("div",{className:"course-sidebar-sublist",children:[T.length>0&&e.jsxs("button",{type:"button",className:`course-sidebar-link sub${f?" active":""}`,onClick:G,children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",s==="ko"?"실습 · 따라하기":"Hands-on Labs"]}),A.map(t=>e.jsxs("button",{type:"button",className:`course-sidebar-link sub${v===t.id?" active":""}`,onClick:()=>M(t.id),children:[e.jsx("i",{className:"fa-regular fa-square-check"})," ",s==="ko"?t.titleKo:t.titleEn]},t.id))]})]}),e.jsxs("button",{type:"button",className:`course-sidebar-link course-sidebar-toggle${l?" open":""}`,onClick:()=>h(!l),"aria-expanded":l,children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",s==="ko"?"학습자료":"Materials",e.jsx("i",{className:"fa-solid fa-chevron-down course-sidebar-chevron"})]}),l&&e.jsxs("div",{className:"course-sidebar-sublist",children:[C.map(t=>e.jsxs("button",{type:"button",className:`course-sidebar-link sub${y===t.id?" active":""}`,onClick:()=>D(t.id),children:[e.jsx("i",{className:"fa-regular fa-file-lines"})," ",s==="ko"?t.nameKo:t.nameEn]},t.id)),e.jsxs(w,{to:`/materials/${a.id}`,className:"course-sidebar-link sub more",children:[e.jsx("i",{className:"fa-solid fa-arrow-right"})," ",s==="ko"?"학습자료 전체보기":"View all materials"]})]}),e.jsxs(w,{to:`/community/${a.id}`,className:"course-sidebar-link",children:[e.jsx("i",{className:"fa-solid fa-comments"})," ",s==="ko"?"게시판":"Board"]})]}),!c&&!f&&!d&&e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:s==="ko"?"커리큘럼 바로가기":"Jump to"}),a.curriculum.map(t=>e.jsxs("a",{href:`#day-${t.day}`,className:"course-sidebar-link sub",children:[e.jsx("i",{className:"fa-regular fa-calendar"})," ",t.badge," — ",t.theme.split(" — ")[0]]},t.day))]}),e.jsxs("nav",{className:"course-sidebar-nav",children:[e.jsx("span",{className:"course-sidebar-label",children:s==="ko"?"다른 과정":"Other Programs"}),L.filter(t=>t.id!==a.id).map(t=>e.jsxs(w,{to:`/courses/${t.id}`,className:"course-sidebar-link sub",children:[e.jsx("i",{className:`fa-solid ${t.icon}`})," ",s==="ko"?t.nameKo:t.nameEn]},t.id))]})]})}),e.jsx("div",{className:"course-content",children:d?e.jsxs("article",{className:"material-inline",children:[e.jsxs("button",{type:"button",className:"material-inline-back",onClick:g,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",s==="ko"?"커리큘럼으로":"Back to curriculum"]}),e.jsxs("div",{className:"material-inline-eyebrow",style:{color:a.color},children:[e.jsx("i",{className:"fa-solid fa-flask-vial"})," ",s==="ko"?a.nameKo:a.nameEn," · ",s==="ko"?"실습 워크북":"Practice Workbook"]}),e.jsx("h2",{className:"material-inline-title",children:s==="ko"?d.titleKo:d.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(P,{remarkPlugins:[I],rehypePlugins:[K],components:B,children:s==="ko"?d.contentKo:d.contentEn})})]}):f?e.jsxs("div",{className:"handson",children:[e.jsxs("button",{type:"button",className:"material-inline-back",onClick:g,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",s==="ko"?"커리큘럼으로":"Back to curriculum"]}),e.jsxs("div",{className:"handson-head",children:[e.jsxs("div",{className:"material-inline-eyebrow",style:{color:a.color},children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",s==="ko"?a.nameKo:a.nameEn," · ",s==="ko"?"실습 따라하기":"Hands-on"]}),e.jsx("h2",{className:"material-inline-title",children:s==="ko"?"실습 · 따라하기":"Hands-on Labs"}),e.jsx("p",{className:"handson-intro",children:s==="ko"?"전남대GPT를 켜고 아래 랩을 순서대로 따라 해보세요. 각 단계의 예시 프롬프트를 그대로 입력하면 됩니다.":"Open JNU GPT and follow each lab. Paste the example prompts as-is."})]}),T.map(t=>e.jsxs("article",{className:"lab-card",children:[e.jsxs("div",{className:"lab-card-head",style:{borderColor:a.color},children:[e.jsx("h3",{className:"lab-title",children:t.title}),e.jsxs("div",{className:"lab-meta",children:[e.jsxs("span",{children:[e.jsx("i",{className:"fa-solid fa-signal"})," ",t.level]}),e.jsxs("span",{children:[e.jsx("i",{className:"fa-regular fa-clock"})," ",t.minutes]})]}),e.jsx("p",{className:"lab-scenario",children:t.scenario})]}),e.jsx("ol",{className:"lab-steps",children:t.steps.map((n,j)=>e.jsxs("li",{className:"lab-step",children:[e.jsx("span",{className:"lab-step-num",style:{background:a.color},children:j+1}),e.jsxs("div",{className:"lab-step-body",children:[e.jsx("div",{className:"lab-step-title",children:n.title}),e.jsx("p",{className:"lab-step-detail",children:n.detail}),n.prompt&&e.jsx(R,{text:n.prompt}),n.check&&e.jsxs("div",{className:"lab-step-check",children:[e.jsx("i",{className:"fa-solid fa-circle-check"})," ",n.check]})]})]},j))}),e.jsxs("div",{className:"lab-result",children:[e.jsx("i",{className:"fa-solid fa-flag-checkered"})," ",t.result]})]},t.id))]}):c?e.jsxs("article",{className:"material-inline",children:[e.jsxs("button",{type:"button",className:"material-inline-back",onClick:g,children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",s==="ko"?"커리큘럼으로":"Back to curriculum"]}),e.jsxs("div",{className:"material-inline-eyebrow",style:{color:a.color},children:[e.jsx("i",{className:"fa-solid fa-folder-open"})," ",s==="ko"?a.nameKo:a.nameEn," · ",s==="ko"?"학습자료":"Materials"]}),e.jsx("h2",{className:"material-inline-title",children:s==="ko"?c.nameKo:c.nameEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(P,{remarkPlugins:[I],rehypePlugins:[K],components:B,children:s==="ko"?c.contentKo:c.contentEn})})]}):e.jsxs(e.Fragment,{children:[a.curriculum.map(t=>e.jsxs("div",{id:`day-${t.day}`,className:"curriculum-day",children:[e.jsxs("div",{className:"curriculum-day-head",children:[e.jsx("span",{className:"curriculum-day-badge",style:{background:a.color},children:t.badge}),e.jsxs("div",{children:[e.jsx("h2",{className:"curriculum-day-title",children:t.theme}),e.jsxs("span",{className:"curriculum-day-sub",children:["8",s==="ko"?"시간 · 4과목":"h · 4 modules"]})]})]}),e.jsx("div",{className:"curriculum-sessions",children:t.sessions.map((n,j)=>e.jsxs("div",{className:"session-card",children:[e.jsxs("div",{className:"session-time",children:[e.jsx("span",{className:"session-period",style:{color:a.color},children:n.period}),e.jsx("span",{className:"session-clock",children:n.time})]}),e.jsxs("div",{className:"session-body",children:[e.jsx("h3",{className:"session-title",children:n.title}),e.jsxs("p",{className:"session-goal",children:[e.jsx("i",{className:"fa-solid fa-bullseye"})," ",n.goal]}),e.jsx("div",{className:"session-topics",children:n.topics.map(u=>e.jsx("span",{className:"session-topic",children:u},u))}),e.jsxs("div",{className:"session-practices",children:[e.jsxs("div",{className:"session-practices-head",children:[e.jsx("i",{className:"fa-solid fa-laptop-code"})," ",s==="ko"?"실습 사례":"Practice"]}),n.practices.map((u,E)=>e.jsxs("div",{className:"practice-item",children:[e.jsxs("div",{className:"practice-scenario",children:[e.jsx("span",{className:"practice-num",style:{background:a.color},children:E+1}),u.scenario]}),e.jsx(R,{text:u.prompt})]},E))]})]})]},j))})]},t.day)),e.jsxs("div",{className:"program-cta",children:[e.jsxs("button",{className:"btn btn-accent btn-lg",onClick:()=>r("/login"),children:[e.jsx("i",{className:"fa-solid fa-right-to-bracket"})," ",s==="ko"?"로그인하고 학습 시작":"Log in to start"]}),e.jsxs("button",{className:"btn btn-outline",onClick:()=>r("/courses"),children:[e.jsx("i",{className:"fa-solid fa-arrow-left"})," ",s==="ko"?"전체 과정 보기":"All Programs"]})]})]})})]})})]})}export{ae as default};
