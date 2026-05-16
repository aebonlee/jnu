import{n as k,v as S,r as x,j as e}from"./index-Bo5E9Bb2.js";import{u as A,A as C,T as $}from"./AIProviderSelect-C50VcwVu.js";import{u as w,A as P}from"./useApiKeys-B90p8pwv.js";import{S as T}from"./SEOHead-aEEuLmtw.js";import"./index-hMOW_U8e.js";function I({subject:a,topic:n,assignmentType:o,difficulty:t,groupSize:u,duration:d,objectives:m,language:p}){const g=p==="ko"?"한국어":"English",j={individual:"개인 과제",group:"그룹 과제",research:"연구 과제",presentation:"발표 과제",project:"프로젝트"},r={basic:"기초",intermediate:"중급",advanced:"고급"};return[{role:"system",content:`You are an expert instructional designer who creates engaging, well-structured assignments for higher education. You focus on active learning and constructive alignment. Always respond in ${g}.`},{role:"user",content:`다음 정보를 바탕으로 과제를 설계해주세요.

## 과제 정보
- **교과목**: ${a}
- **주제**: ${n||"미지정"}
- **과제 유형**: ${j[o||""]||o||"개인 과제"}
- **난이도**: ${r[t||""]||t||"중급"}
${u?`- **그룹 규모**: ${u}명`:""}
${d?`- **소요 기간**: ${d}`:""}
${m?`- **학습 목표**: ${m}`:""}

## 작성 요구사항

### 1. 과제 개요
- 과제 제목
- 과제 설명 (3-5문장)
- 학습 목표와의 연계

### 2. 과제 지시사항
- 구체적인 수행 단계 (Step by Step)
- 제출물 요구사항
- 형식 및 분량 지정

### 3. 평가 기준
- 간단한 평가 항목과 배점

### 4. 참고자료
- 추천 자료/웹사이트

### 5. 일정
- 마일스톤 또는 중간 점검 일정
${o==="group"?`
### 6. 그룹 활동 가이드
- 역할 분담 방법
- 협업 도구 추천
- 동료 평가 방법`:""}

마크다운 형식으로 깔끔하게 작성해주세요.`}]}function M(){const{language:a,t:n}=k(),{output:o,isStreaming:t,error:u,usage:d,generate:m}=A(),{keys:p,getApiKey:g,hasApiKey:j}=w(),r=S(),[c,f]=x.useState("openai"),[i,v]=x.useState({subject:"",topic:"",assignmentType:"individual",difficulty:"intermediate",groupSize:"",duration:"",objectives:""}),l=(s,h)=>v(y=>({...y,[s]:h}));async function b(){if(!i.subject.trim()){r.warning(a==="ko"?"교과목을 입력해주세요.":"Please enter a subject.");return}if(!j(c)){r.warning(n("ai.noApiKey"));return}const s=I({...i,language:a});try{await m({provider:c,apiKey:g(c),model:P[c].defaultModel,messages:s})}catch(h){r.error(h.message)}}const N=e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-file-pen"})," ",n("tools.assignment")]}),e.jsx(C,{selected:c,onSelect:f,apiKeys:p}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-book"})})," ",a==="ko"?"교과목":"Subject"," *"]}),e.jsx("input",{className:"form-input",value:i.subject,onChange:s=>l("subject",s.target.value),placeholder:a==="ko"?"예: 데이터사이언스":"e.g., Data Science"})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-lightbulb"})})," ",a==="ko"?"주제":"Topic"]}),e.jsx("input",{className:"form-input",value:i.topic,onChange:s=>l("topic",s.target.value),placeholder:a==="ko"?"예: 머신러닝 알고리즘 비교":"e.g., Comparing ML algorithms"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a==="ko"?"과제 유형":"Type"}),e.jsxs("select",{className:"form-select",value:i.assignmentType,onChange:s=>l("assignmentType",s.target.value),children:[e.jsx("option",{value:"individual",children:a==="ko"?"개인 과제":"Individual"}),e.jsx("option",{value:"group",children:a==="ko"?"그룹 과제":"Group"}),e.jsx("option",{value:"research",children:a==="ko"?"연구 과제":"Research"}),e.jsx("option",{value:"presentation",children:a==="ko"?"발표 과제":"Presentation"}),e.jsx("option",{value:"project",children:a==="ko"?"프로젝트":"Project"})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a==="ko"?"난이도":"Difficulty"}),e.jsxs("select",{className:"form-select",value:i.difficulty,onChange:s=>l("difficulty",s.target.value),children:[e.jsx("option",{value:"basic",children:a==="ko"?"기초":"Basic"}),e.jsx("option",{value:"intermediate",children:a==="ko"?"중급":"Intermediate"}),e.jsx("option",{value:"advanced",children:a==="ko"?"고급":"Advanced"})]})]})]}),i.assignmentType==="group"&&e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:a==="ko"?"그룹 규모":"Group Size"}),e.jsx("input",{className:"form-input",type:"number",min:"2",max:"10",value:i.groupSize,onChange:s=>l("groupSize",s.target.value),placeholder:"3-5"})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-clock"})})," ",a==="ko"?"소요 기간":"Duration"]}),e.jsx("input",{className:"form-input",value:i.duration,onChange:s=>l("duration",s.target.value),placeholder:a==="ko"?"예: 2주":"e.g., 2 weeks"})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-bullseye"})})," ",a==="ko"?"학습 목표":"Objectives"," ",e.jsxs("span",{className:"optional",children:["(",a==="ko"?"선택":"optional",")"]})]}),e.jsx("textarea",{className:"form-textarea",rows:3,value:i.objectives,onChange:s=>l("objectives",s.target.value)})]}),e.jsx("button",{className:"ai-generate-btn",onClick:b,disabled:t,children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"})," ",n("ai.generating")]}):e.jsx(e.Fragment,{children:n("ai.generate")})})]});return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:n("tools.assignment"),path:"/tools/assignment"}),e.jsx($,{title:n("tools.assignment"),description:a==="ko"?"난이도별 개인/그룹/연구/발표 과제를 생성합니다.":"Create assignments by difficulty level and type.",inputPanel:N,output:o,isStreaming:t,error:u,usage:d,toolId:"assignment"})]})}export{M as default};
