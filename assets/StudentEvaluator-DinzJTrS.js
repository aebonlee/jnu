import{n as S,v as y,r as g,j as e}from"./index-0M4frnZE.js";import{u as A,A as C,T as w}from"./AIProviderSelect-BiL87i_p.js";import{u as E,A as P}from"./useApiKeys-D68FkIKx.js";import{S as $}from"./SEOHead-B4vd-YJT.js";import"./index-y03sU2Ev.js";function F({studentSubmission:a,rubric:t,assignmentName:c,courseName:i,additionalNotes:l,language:u}){return[{role:"system",content:`You are a fair and thorough academic evaluator. You assess student work against rubric criteria, providing detailed scores and constructive feedback for each criterion. Be objective and evidence-based. Always respond in ${u==="ko"?"한국어":"English"}.`},{role:"user",content:`다음 학생 과제물을 루브릭 기준에 따라 평가해주세요.

## 과제 정보
- **교과목**: ${i||"미지정"}
- **과제명**: ${c||"미지정"}
${l?`- **참고사항**: ${l}`:""}

## 평가 루브릭
${t||"(루브릭이 제공되지 않은 경우, 일반적인 학술 과제 평가 기준을 적용해주세요: 내용의 정확성, 분석의 깊이, 논리적 구성, 표현력, 참고문헌 활용)"}

## 학생 제출물
${a||"(제출물이 비어있습니다)"}

## 평가 결과 형식

### 1. 평가 요약
| 평가 기준 | 점수 | 최대 점수 | 비고 |
각 기준별 점수와 간단한 코멘트

### 2. 기준별 상세 피드백
각 평가 기준에 대해:
- **점수 근거**: 왜 해당 점수를 부여했는지
- **잘한 점**: 기준을 충족한 부분
- **개선점**: 부족한 부분과 구체적 개선 방향

### 3. 총점 및 등급
- 총점: X / Y점
- 등급: A/B/C/D/F
- 총평: 전체적인 평가 코멘트

### 4. 개선을 위한 구체적 조언
- 다음 과제에서 개선할 수 있는 구체적 방법 3-5가지

마크다운 표와 서식을 활용하여 깔끔하게 작성해주세요.`}]}function B(){const{language:a,t}=S(),{output:c,isStreaming:i,error:l,usage:u,generate:p}=A(),{keys:x,getApiKey:f,hasApiKey:h}=E(),m=y(),[o,b]=g.useState("openai"),[r,j]=g.useState({courseName:"",assignmentName:"",rubric:"",studentSubmission:"",additionalNotes:""}),n=(s,d)=>j(k=>({...k,[s]:d}));async function N(){if(!r.studentSubmission.trim()){m.warning(a==="ko"?"학생 제출물을 입력해주세요.":"Please enter student submission.");return}if(!h(o)){m.warning(t("ai.noApiKey"));return}const s=F({...r,language:a});try{await p({provider:o,apiKey:f(o),model:P[o].defaultModel,messages:s})}catch(d){m.error(d.message)}}const v=e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-check-double"})," ",t("tools.evaluator")]}),e.jsx(C,{selected:o,onSelect:b,apiKeys:x}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-book"})})," ",a==="ko"?"교과목":"Course"]}),e.jsx("input",{className:"form-input",value:r.courseName,onChange:s=>n("courseName",s.target.value)})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})})," ",a==="ko"?"과제명":"Assignment"]}),e.jsx("input",{className:"form-input",value:r.assignmentName,onChange:s=>n("assignmentName",s.target.value)})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-chart-simple"})})," ",a==="ko"?"평가 루브릭":"Rubric"," ",e.jsxs("span",{className:"optional",children:["(",a==="ko"?"선택":"optional",")"]})]}),e.jsx("textarea",{className:"form-textarea",rows:4,value:r.rubric,onChange:s=>n("rubric",s.target.value),placeholder:a==="ko"?"루브릭 기준을 입력하세요. (없으면 일반 기준 적용)":"Enter rubric criteria. (General criteria applied if empty)"})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-file-lines"})})," ",a==="ko"?"학생 제출물":"Student Submission"," *"]}),e.jsx("textarea",{className:"form-textarea",rows:8,value:r.studentSubmission,onChange:s=>n("studentSubmission",s.target.value),placeholder:a==="ko"?"학생이 제출한 과제 내용을 붙여넣으세요.":"Paste the student submission here."})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-lightbulb"})})," ",a==="ko"?"참고사항":"Notes"," ",e.jsxs("span",{className:"optional",children:["(",a==="ko"?"선택":"optional",")"]})]}),e.jsx("textarea",{className:"form-textarea",rows:2,value:r.additionalNotes,onChange:s=>n("additionalNotes",s.target.value)})]}),e.jsx("button",{className:"ai-generate-btn",onClick:N,disabled:i,children:i?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"})," ",t("ai.generating")]}):e.jsx(e.Fragment,{children:t("ai.generate")})})]});return e.jsxs(e.Fragment,{children:[e.jsx($,{title:t("tools.evaluator"),path:"/tools/evaluator"}),e.jsx(w,{title:t("tools.evaluator"),description:a==="ko"?"학생 과제물을 루브릭 기반으로 평가합니다.":"Evaluate student submissions using rubric-based assessment.",inputPanel:v,output:c,isStreaming:i,error:l,usage:u,toolId:"evaluator"})]})}export{B as default};
