import{n as y,v as A,r as h,j as e}from"./index-GAJVN3A6.js";import{u as S,A as C,T as $}from"./AIProviderSelect-BvpgwYLC.js";import{u as F,A as w}from"./useApiKeys-CQoVvURs.js";import{S as I}from"./SEOHead-gBLr-4bS.js";import"./index-BmCYTVh1.js";function E({studentName:s,courseName:r,assignmentName:d,grade:t,strengths:i,improvements:c,tone:m,language:u}){const g=u==="ko"?"한국어":"English",p={encouraging:"격려하는",constructive:"건설적인",formal:"공식적인",friendly:"친근한"};return[{role:"system",content:`You are an experienced educator who provides thoughtful, personalized feedback to students. Your feedback should be specific, actionable, and motivating. Always respond in ${g}.`},{role:"user",content:`다음 정보를 바탕으로 학생 개인화 피드백을 작성해주세요.

## 학생/과제 정보
- **학생 이름**: ${s||"학생"}
- **교과목**: ${r||"미지정"}
- **과제명**: ${d||"미지정"}
${t?`- **점수/등급**: ${t}`:""}
${i?`- **잘한 점**: ${i}`:""}
${c?`- **개선할 점**: ${c}`:""}
- **피드백 톤**: ${p[m||""]||m||"건설적인"}

## 피드백 구성

### 1. 긍정적 피드백 (Strengths)
- 구체적으로 잘한 부분 언급
- 노력과 성장을 인정

### 2. 개선 피드백 (Areas for Improvement)
- 구체적인 개선 방향 제시
- 실행 가능한 제안 포함

### 3. 구체적 조언 (Specific Suggestions)
- 다음 단계에서 시도할 수 있는 구체적인 방법
- 참고 자료나 학습 전략 제안

### 4. 격려 메시지 (Encouragement)
- 학생의 잠재력 인정
- 앞으로의 성장에 대한 기대

마크다운 형식으로 작성해주세요. 학생이 읽었을 때 동기부여가 되도록 작성해주세요.`}]}function z(){const{language:s,t:r}=y(),{output:d,isStreaming:t,error:i,usage:c,generate:m}=S(),{keys:u,getApiKey:g,hasApiKey:p}=F(),f=A(),[l,j]=h.useState("openai"),[n,N]=h.useState({studentName:"",courseName:"",assignmentName:"",grade:"",strengths:"",improvements:"",tone:"constructive"}),o=(a,x)=>N(k=>({...k,[a]:x}));async function v(){if(!n.courseName.trim()&&!n.assignmentName.trim()){f.warning(s==="ko"?"교과목 또는 과제명을 입력해주세요.":"Please enter a course or assignment name.");return}if(!p(l)){f.warning(r("ai.noApiKey"));return}const a=E({...n,language:s});try{await m({provider:l,apiKey:g(l),model:w[l].defaultModel,messages:a})}catch(x){f.error(x.message)}}const b=e.jsxs(e.Fragment,{children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-comments"})," ",r("tools.feedback")]}),e.jsx(C,{selected:l,onSelect:j,apiKeys:u}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-user"})})," ",s==="ko"?"학생 이름":"Student Name"]}),e.jsx("input",{className:"form-input",value:n.studentName,onChange:a=>o("studentName",a.target.value)})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-chart-simple"})})," ",s==="ko"?"점수/등급":"Grade"]}),e.jsx("input",{className:"form-input",value:n.grade,onChange:a=>o("grade",a.target.value),placeholder:"A+ / 95"})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-book"})})," ",s==="ko"?"교과목":"Course"]}),e.jsx("input",{className:"form-input",value:n.courseName,onChange:a=>o("courseName",a.target.value)})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-pen-to-square"})})," ",s==="ko"?"과제명":"Assignment"]}),e.jsx("input",{className:"form-input",value:n.assignmentName,onChange:a=>o("assignmentName",a.target.value)})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsx("label",{className:"ai-form-label",children:s==="ko"?"피드백 톤":"Feedback Tone"}),e.jsxs("select",{className:"form-select",value:n.tone,onChange:a=>o("tone",a.target.value),children:[e.jsx("option",{value:"encouraging",children:s==="ko"?"격려하는":"Encouraging"}),e.jsx("option",{value:"constructive",children:s==="ko"?"건설적인":"Constructive"}),e.jsx("option",{value:"formal",children:s==="ko"?"공식적인":"Formal"}),e.jsx("option",{value:"friendly",children:s==="ko"?"친근한":"Friendly"})]})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-circle-check"})})," ",s==="ko"?"잘한 점":"Strengths"]}),e.jsx("textarea",{className:"form-textarea",rows:2,value:n.strengths,onChange:a=>o("strengths",a.target.value)})]}),e.jsxs("div",{className:"ai-form-group",children:[e.jsxs("label",{className:"ai-form-label",children:[e.jsx("span",{className:"label-icon",children:e.jsx("i",{className:"fa-solid fa-thumbtack"})})," ",s==="ko"?"개선할 점":"Areas to Improve"]}),e.jsx("textarea",{className:"form-textarea",rows:2,value:n.improvements,onChange:a=>o("improvements",a.target.value)})]}),e.jsx("button",{className:"ai-generate-btn",onClick:v,disabled:t,children:t?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"})," ",r("ai.generating")]}):e.jsx(e.Fragment,{children:r("ai.generate")})})]});return e.jsxs(e.Fragment,{children:[e.jsx(I,{title:r("tools.feedback"),path:"/tools/feedback"}),e.jsx($,{title:r("tools.feedback"),description:s==="ko"?"학생별 개인화된 피드백을 AI로 작성합니다.":"Generate personalized student feedback with AI.",inputPanel:b,output:d,isStreaming:t,error:i,usage:c,toolId:"feedback"})]})}export{z as default};
