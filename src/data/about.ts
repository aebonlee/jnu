/** About — 만든 취지 + 강사 2인(각각 한 페이지, hufs 카드 포맷) */
export default {
  id: 'about',
  icon: 'fa-circle-info',
  title: 'About',
  titleEn: 'About',
  sections: [
    {
      title: '만든 취지',
      titleEn: 'Purpose',
      content: `**전남대학교 생성형 AI 교육**은 교수자·직원·조교가 생성형 AI를 **실제 업무와 연구·교육에 바로 적용**할 수 있도록 돕기 위해 만든 실습 중심 교육 사이트입니다.

AI 도구는 많지만 정작 어려운 것은 *"내 업무에 어떻게 쓰지?"* 입니다. 그래서 **강의는 최소, 실습은 최대**로 두고, 교내 전용 플랫폼 **전남대GPT(타임리GPT 기반)** 위에서 보안 걱정 없이 실무 데이터로 연습하도록 설계했습니다.

### 이렇게 설계했습니다

| 원칙 | 내용 |
|------|------|
| **직무 맞춤** | 기초·심화 / 데이터분석·논문작성 / 데이터분석·예산회계 / 연구·실험지원 — 4개 직무 과정 |
| **바로 실습** | 모든 교시에 전남대GPT에 그대로 입력하는 **복사용 예시 프롬프트** 제공 |
| **자기주도** | 둘째날 8시간을 혼자서도 채울 수 있는 **실습 워크북**(대상별 이원 트랙) |
| **결과 평가** | 만든 산출물을 AI로 평가·개선하는 '평가하기'로 학습을 완성 |

### 이렇게 활용하세요

- **교육과정 (4개)** — 직무별 커리큘럼 + 실습 따라하기 + **실습 워크북**(기본→응용→심화, 대상별 트랙)
- **프롬프트 학습** — 프롬프트를 직접 만들고 AI로 평가받는 연습
- **부록** — AI 실전 사용법·모델 고르기·클로드 활용 100가지 등 자율 실습 자료
- **추천사이트** — 이어서 공부할 외부 자료

> 논문 작성이 목표인 분부터 데이터·AI를 업무에 쓰려는 다수까지, **각자 필요에 맞게** 실습할 수 있도록 구성했습니다. 처음이시면 각 실습의 회색 상자(프롬프트)를 **복사 → 전남대GPT에 붙여넣기 → [ ] 부분만 내 상황으로 바꾸기**, 이 3가지면 됩니다.`,
      contentEn: `**JNU Generative AI Education** is a practice-oriented site built to help faculty, staff, and teaching assistants **apply generative AI directly to their real work, research, and teaching.**

There are many AI tools, but the hard part is *"how do I use this for my job?"* So we keep **lecture minimal, practice maximal**, running everything on the secure campus platform **JNU GPT (TimelyGPT-based)**.

### How it's designed

| Principle | Detail |
|-----------|--------|
| **Role-specific** | Four programs: Foundations, Data & Writing, Data & Budget, Research Support |
| **Practice now** | Every session ships ready-to-paste example prompts for JNU GPT |
| **Self-guided** | A Practice Workbook that fills Day-2's 8 hours, with tracks per audience |
| **Evaluate results** | Close the loop by evaluating and improving your outputs with AI |

### How to use

- **Programs (4)** — curriculum + hands-on labs + **Practice Workbook**
- **Prompt Practice** — write prompts and get them evaluated by AI
- **Appendix** — AI-in-practice, model picker, 100 Claude uses, and more
- **Recommended** — external resources to continue learning`,
    },
    {
      title: '이애본 강사',
      titleEn: 'Instructor: Aebon Lee',
      content: `<div class="instructor-hero">
<div class="instructor-hero-label">이애본 박사 프로필</div>
<img src="/images/aebon.jpg" alt="이애본 박사 프로필" class="instructor-hero-photo" />
<div class="instructor-hero-name">이애본</div>
<div class="instructor-hero-title">드림아이티비즈(DreamIT Biz) 대표 · 정보관리박사(Ph.D)</div>
<div class="instructor-hero-quote">생성형 AI 교육과 에듀테크 플랫폼 개발을 전문으로 하는 강사입니다. 122개 교육 사이트를 직접 설계·개발·운영하며, 대학교(경기대·한신대·한국기술교육대·전남대·서울대·서울시립대·한국외대·한라대·조선대 등)와 기업(KDN·KOMIPO 등)에서 AI 활용 교육을 진행하고 있습니다.</div>
<div class="instructor-hero-stats">
<div class="instructor-stat"><div class="instructor-stat-number">20<span style="font-size:16px">년+</span></div><div class="instructor-stat-label">교육 경력</div></div>
<div class="instructor-stat"><div class="instructor-stat-number">122</div><div class="instructor-stat-label">교육 사이트</div></div>
<div class="instructor-stat"><div class="instructor-stat-number">20<span style="font-size:16px">+</span></div><div class="instructor-stat-label">전문 자격</div></div>
</div>
</div>

### 전문 분야

<div class="ins-grid"><div class="ins-card"><i class="fa-solid fa-robot"></i><span class="ins-card-title">생성형 AI 교육</span><span class="ins-card-desc">ChatGPT·Gemini·Claude·Copilot 등 AI 도구 활용</span></div><div class="ins-card"><i class="fa-solid fa-wand-magic-sparkles"></i><span class="ins-card-title">프롬프트 엔지니어링</span><span class="ins-card-desc">SCORE 프레임워크·Chain-of-Thought·Few-shot</span></div><div class="ins-card"><i class="fa-solid fa-laptop-code"></i><span class="ins-card-title">에듀테크 플랫폼</span><span class="ins-card-desc">React+Supabase 기반 사이트 설계·개발·운영</span></div><div class="ins-card"><i class="fa-solid fa-chart-line"></i><span class="ins-card-title">IT·디지털 전환</span><span class="ins-card-desc">기업 DX 컨설팅·웹 시스템 구축·데이터 분석</span></div></div>

### 주요 경력

<div class="ins-career"><div class="ins-career-row"><span class="ins-period">현재</span><div><span class="ins-role">드림아이티비즈(DreamIT Biz) 대표</span><span class="ins-role-desc">에듀테크 전문 기업 경영 · 122개 교육 사이트 운영</span></div></div><div class="ins-career-row"><span class="ins-period">현재</span><div><span class="ins-role">한신대학교 AI·SW대학 겸임교수</span><span class="ins-role-desc">AI·SW개론, 웹·자바프로그래밍 등</span></div></div><div class="ins-career-row"><span class="ins-period">현재</span><div><span class="ins-role">한국기술교육대학교 외래교수</span><span class="ins-role-desc">컴퓨팅 사고</span></div></div><div class="ins-career-row"><span class="ins-period">2018~2023</span><div><span class="ins-role">경기대학교 겸임교수</span><span class="ins-role-desc">SW 기초·파이썬</span></div></div><div class="ins-career-row"><span class="ins-period">2001~</span><div><span class="ins-role">기업 AI 교육 전문 강사</span><span class="ins-role-desc">고용노동부 직업능력개발훈련교사</span></div></div></div>

### 학력 및 자격

- **학위**: 정보관리박사(Ph.D) · 경기대학교 직업학과 박사수료 · 한국방송통신대학교 컴퓨터과학 석사·학사
- **국가기술자격**: 정보처리기사 · 사무자동화산업기사 · 컴퓨터활용능력 1급
- **직업능력개발훈련교사(고용노동부)**: 정보기술개발·응용SW·데이터베이스·빅데이터분석·**AI엔지니어링**·UI/UX디자인·기업교육 등 다수
- **교육 관련**: 평생교육사 · 직업상담사 · CS Leaders(관리사)

<div class="ins-philosophy"><div class="ins-philosophy-eyebrow">TEACHING PHILOSOPHY</div><div class="ins-philosophy-quote">"AI는 도구이고, 진짜 혁신은 사람이 만듭니다."</div><div class="ins-philosophy-body">교육의 핵심은 기술을 '아는 것'이 아니라 '할 수 있는 것'으로 만드는 데 있습니다. 이론 30% · 실습 70% 구성으로 현장에서 바로 적용할 실무 역량을 키우고, 교육 이후에도 스스로 학습·성장할 수 있는 플랫폼을 함께 제공합니다.</div></div>

<p class="ins-contact"><strong>연락처</strong> — aebon@dreamitbiz.com · <a href="https://www.dreamitbiz.com" target="_blank" rel="noopener noreferrer">www.dreamitbiz.com</a></p>`,
      contentEn: `<div class="instructor-hero">
<div class="instructor-hero-label">Dr. Aebon Lee Profile</div>
<img src="/images/aebon.jpg" alt="Dr. Aebon Lee Profile" class="instructor-hero-photo" />
<div class="instructor-hero-name">Aebon Lee</div>
<div class="instructor-hero-title">CEO, DreamIT Biz · Ph.D in Information Management</div>
<div class="instructor-hero-quote">A specialist in generative AI education and edtech platform development. Designs, develops and operates 122 education sites, delivering AI training for universities (Kyonggi, Hanshin, KOREATECH, JNU, SNU, UOS, HUFS, Halla, Chosun, etc.) and firms (KDN, KOMIPO, etc.).</div>
<div class="instructor-hero-stats">
<div class="instructor-stat"><div class="instructor-stat-number">20<span style="font-size:16px">yr+</span></div><div class="instructor-stat-label">Experience</div></div>
<div class="instructor-stat"><div class="instructor-stat-number">122</div><div class="instructor-stat-label">Edu Sites</div></div>
<div class="instructor-stat"><div class="instructor-stat-number">20<span style="font-size:16px">+</span></div><div class="instructor-stat-label">Certifications</div></div>
</div>
</div>

### Areas of Expertise

<div class="ins-grid"><div class="ins-card"><i class="fa-solid fa-robot"></i><span class="ins-card-title">Generative AI Education</span><span class="ins-card-desc">ChatGPT, Gemini, Claude, Copilot and more</span></div><div class="ins-card"><i class="fa-solid fa-wand-magic-sparkles"></i><span class="ins-card-title">Prompt Engineering</span><span class="ins-card-desc">SCORE framework, Chain-of-Thought, Few-shot</span></div><div class="ins-card"><i class="fa-solid fa-laptop-code"></i><span class="ins-card-title">Edtech Platforms</span><span class="ins-card-desc">React + Supabase education sites</span></div><div class="ins-card"><i class="fa-solid fa-chart-line"></i><span class="ins-card-title">IT / Digital Transformation</span><span class="ins-card-desc">DX consulting, web systems, data analysis</span></div></div>

### Career

<div class="ins-career"><div class="ins-career-row"><span class="ins-period">Present</span><div><span class="ins-role">CEO, DreamIT Biz</span><span class="ins-role-desc">Runs an edtech company · operates 122 education sites</span></div></div><div class="ins-career-row"><span class="ins-period">Present</span><div><span class="ins-role">Adjunct Professor, Hanshin Univ. AI·SW College</span><span class="ins-role-desc">Intro to AI·SW, Web/Java programming</span></div></div><div class="ins-career-row"><span class="ins-period">Present</span><div><span class="ins-role">Adjunct Professor, KOREATECH</span><span class="ins-role-desc">Computational Thinking</span></div></div><div class="ins-career-row"><span class="ins-period">2018–2023</span><div><span class="ins-role">Adjunct Professor, Kyonggi University</span><span class="ins-role-desc">SW Basics, Python</span></div></div><div class="ins-career-row"><span class="ins-period">2001–</span><div><span class="ins-role">Corporate AI Instructor</span><span class="ins-role-desc">Certified Vocational Training Instructor</span></div></div></div>

### Education & Certifications

- **Degrees**: Ph.D in Information Management · Ph.D coursework in Vocational Studies (Kyonggi) · M.S./B.S. Computer Science (KNOU)
- **National Qualifications**: Information Processing Engineer · Office Automation · Computer Utilization Lv.1
- **Vocational Training Instructor**: IT Development, Application SW, Database, Big Data, **AI Engineering**, UI/UX, Corporate Training, etc.

<div class="ins-philosophy"><div class="ins-philosophy-eyebrow">TEACHING PHILOSOPHY</div><div class="ins-philosophy-quote">"AI is a tool; real innovation is made by people."</div><div class="ins-philosophy-body">Education is about turning knowledge into ability. With 30% theory · 70% practice, learners build skills they can apply immediately, supported by a platform for continued self-learning.</div></div>

<p class="ins-contact"><strong>Contact</strong> — aebon@dreamitbiz.com · <a href="https://www.dreamitbiz.com" target="_blank" rel="noopener noreferrer">www.dreamitbiz.com</a></p>`,
    },
    {
      title: '정동엽 강사',
      titleEn: 'Instructor: Dongyeop Jeong',
      content: `<div class="instructor-hero">
<div class="instructor-hero-label">정동엽 박사 프로필</div>
<img src="/images/jdy.jpg" alt="정동엽 박사 프로필" class="instructor-hero-photo" />
<div class="instructor-hero-name">정동엽</div>
<div class="instructor-hero-title">직업학박사 · 직업미래연구소 소장</div>
<div class="instructor-hero-quote">미래사회와 직업세계를 연구하며, 청년·성인·베이비부머 퇴직자까지 모든 세대의 커리어 경력설계와 전직지원을 돕고 있습니다. IT 분야 20년 경력을 바탕으로 교육정보화와 커리어 컨설팅을 융합한 실전형 전문가입니다.</div>
<div class="instructor-hero-stats">
<div class="instructor-stat"><div class="instructor-stat-number">20<span style="font-size:16px">년+</span></div><div class="instructor-stat-label">IT 경력</div></div>
<div class="instructor-stat"><div class="instructor-stat-number">5</div><div class="instructor-stat-label">학위 보유</div></div>
<div class="instructor-stat"><div class="instructor-stat-number">10<span style="font-size:16px">+</span></div><div class="instructor-stat-label">전문 자격</div></div>
</div>
</div>

### 핵심 역량

<div class="ins-grid"><div class="ins-card"><i class="fa-solid fa-magnifying-glass-chart"></i><span class="ins-card-title">미래직업 연구</span><span class="ins-card-desc">4차 산업혁명 시대의 직업 변화 예측·분석</span></div><div class="ins-card"><i class="fa-solid fa-robot"></i><span class="ins-card-title">AI 교육 설계</span><span class="ins-card-desc">생성형 AI 활용 교육과정 기획·운영</span></div><div class="ins-card"><i class="fa-solid fa-user-tie"></i><span class="ins-card-title">직업상담</span><span class="ins-card-desc">경력 설계·직업심리 검사·진로 컨설팅</span></div><div class="ins-card"><i class="fa-solid fa-file-lines"></i><span class="ins-card-title">교육 콘텐츠</span><span class="ins-card-desc">디지털 교육 자료·온라인 교육 설계</span></div></div>

### 주요 경력

<div class="ins-career"><div class="ins-career-row"><span class="ins-period">2026~현재</span><div><span class="ins-role">동아방송예술대학교 겸임교수</span></div></div><div class="ins-career-row"><span class="ins-period">현재</span><div><span class="ins-role">직업미래연구소 소장</span></div></div><div class="ins-career-row"><span class="ins-period">현재</span><div><span class="ins-role">아시아미래인재연구소 실장</span></div></div><div class="ins-career-row"><span class="ins-period">—</span><div><span class="ins-role">한국뉴욕주립대학교 Futures Master</span></div></div></div>

### 학력 및 자격

- **학력**: 경기대학교 직업학과 박사수료(2024) · 가천대학교 석사 · 국제문화대학원대학교 교육학 석사 · 부산외국어대학교 공학 학사
- **자격**: 한국어교원 2급 · 사회복지사 2급 · 평생교육사 2급 · 직업훈련교사 3급 · 워크넷 직업심리전문가 · 한국뉴욕주립대학교 Futures Master

<div class="ins-philosophy"><div class="ins-philosophy-eyebrow">PUBLICATION · 저서</div><div class="ins-philosophy-quote">『생각의 미래』 (지식노마드, 2016)</div><div class="ins-philosophy-body">미래 사회의 변화와 직업의 진화를 예측하며, 새로운 시대에 필요한 사고력과 역량을 제시하는 책입니다.</div></div>`,
      contentEn: `<div class="instructor-hero">
<div class="instructor-hero-label">Dr. Dongyeop Jeong Profile</div>
<img src="/images/jdy.jpg" alt="Dr. Dongyeop Jeong Profile" class="instructor-hero-photo" />
<div class="instructor-hero-name">Dongyeop Jeong</div>
<div class="instructor-hero-title">Ph.D in Vocational Studies · Director, Vocational Futures Research Institute</div>
<div class="instructor-hero-quote">Researching future society and the world of work, helping all generations with career design and job transition. A hands-on expert combining 20 years of IT experience with educational informatics and career consulting.</div>
<div class="instructor-hero-stats">
<div class="instructor-stat"><div class="instructor-stat-number">20<span style="font-size:16px">yr+</span></div><div class="instructor-stat-label">IT Experience</div></div>
<div class="instructor-stat"><div class="instructor-stat-number">5</div><div class="instructor-stat-label">Degrees</div></div>
<div class="instructor-stat"><div class="instructor-stat-number">10<span style="font-size:16px">+</span></div><div class="instructor-stat-label">Certifications</div></div>
</div>
</div>

### Core Competencies

<div class="ins-grid"><div class="ins-card"><i class="fa-solid fa-magnifying-glass-chart"></i><span class="ins-card-title">Future Careers Research</span><span class="ins-card-desc">Analyzing job changes in the 4th Industrial Revolution</span></div><div class="ins-card"><i class="fa-solid fa-robot"></i><span class="ins-card-title">AI Education Design</span><span class="ins-card-desc">Planning and operating generative AI programs</span></div><div class="ins-card"><i class="fa-solid fa-user-tie"></i><span class="ins-card-title">Career Counseling</span><span class="ins-card-desc">Career design, vocational psychology testing</span></div><div class="ins-card"><i class="fa-solid fa-file-lines"></i><span class="ins-card-title">Education Content</span><span class="ins-card-desc">Digital learning material and online course design</span></div></div>

### Career

<div class="ins-career"><div class="ins-career-row"><span class="ins-period">2026–Present</span><div><span class="ins-role">Adjunct Professor, Dong-ah Institute of Media and Arts</span></div></div><div class="ins-career-row"><span class="ins-period">Present</span><div><span class="ins-role">Director, Vocational Futures Research Institute</span></div></div><div class="ins-career-row"><span class="ins-period">Present</span><div><span class="ins-role">Senior Manager, Asia Future Talent Research Institute</span></div></div><div class="ins-career-row"><span class="ins-period">—</span><div><span class="ins-role">Futures Master, SUNY Korea</span></div></div></div>

### Education & Certifications

- **Education**: Ph.D coursework, Vocational Studies (Kyonggi, 2024) · M.A. (Gachon) · M.A. Education · B.E. (Busan Univ. of Foreign Studies)
- **Certifications**: Korean Language Instructor Lv.2 · Social Worker Lv.2 · Lifelong Education Instructor Lv.2 · Vocational Training Instructor Lv.3 · Work-Net Vocational Psychology Expert · SUNY Korea Futures Master

<div class="ins-philosophy"><div class="ins-philosophy-eyebrow">PUBLICATION</div><div class="ins-philosophy-quote">"The Future of Thinking" (Knowledge Nomad, 2016)</div><div class="ins-philosophy-body">Predicts changes in future society and the evolution of careers, presenting the thinking skills and competencies needed for the new era.</div></div>`,
    },
  ],
};
