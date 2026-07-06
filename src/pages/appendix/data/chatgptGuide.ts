/** 부록 — AI 실전 사용법 (직원·조교 실습용, 핵심 큐레이션) */
export default {
  id: 'ai-practice',
  icon: 'fa-comment-dots',
  title: 'AI 실전 사용법',
  titleEn: 'AI Tools in Practice',
  sections: [
    {
      title: '실전 핵심 요약',
      titleEn: 'Practical Essentials',
      content: `### 1. 기본 원리 — 구체적으로 물을수록 실전 답이 나옵니다
모호하게 물으면 뻔한 답, 구체적으로 물으면 바로 쓸 수 있는 답이 나옵니다.
- ❌ "보고서 잘 써줘"
- ✅ "부서 상반기 실적 보고인데, 핵심 성과 3가지를 각 2줄로 표로 정리해줘"

### 2. 만능 공식 — [역할 + 상황 + 요청 + 형식]
> **[역할] + [상황·맥락] + [무엇을] + [어떤 형식으로]**

- "너는 대학 행정 담당자야. 신입 조교에게 보낼 업무 안내 메일을 정중한 톤으로 400자 이내로 써줘."
- "이 회의록에서 담당자와 기한이 있는 할 일만 뽑아 표로 정리해줘."

### 3. 잘 다듬는 법 — 한 번에 끝내지 말기
초안을 받은 뒤 **"더 간결하게 → 더 정중하게 → 표로 바꿔줘"** 처럼 대화로 다듬는 것이 가장 빠릅니다.

### 4. 피해야 할 패턴
- ❌ "좋은 거 알려줘" ❌ "그냥 만들어줘" → 평범한 답만 나옵니다.

### 5. 어디에 쓰나 (직원·조교)
공문·메일·회의록 정리 · 규정/자료 요약 · 표·체크리스트 만들기 · 어려운 자료의 이해와 학습.`,
      contentEn: `### 1. Be specific for practical answers
Vague input → generic answer; specific input → ready-to-use answer.
- ❌ "Write a good report"
- ✅ "For our H1 performance report, summarize the top 3 results in 2 lines each, as a table"

### 2. The formula — [Role + Situation + Request + Format]
> **[Role] + [Context] + [What] + [In what format]**

- "You're a university admin officer. Write a polite onboarding email for a new TA, under 400 chars."
- "From these minutes, extract only tasks with an owner and due date, as a table."

### 3. Refine, don't one-shot
Get a draft, then **"more concise → more polite → make it a table"** — refining by chat is fastest.

### 4. Avoid
- ❌ "Tell me something good" ❌ "Just make it" → only generic answers.

### 5. Where it helps (staff & TAs)
Documents/emails/minutes, summarizing rules & materials, tables & checklists, understanding difficult material.`,
    },
    {
      title: '자주 쓰는 핵심 키워드',
      titleEn: 'Essential Keywords',
      content: `> **형광펜 표시 = 실제로 잘 통하는 키워드**입니다. 이것만 익혀도 충분해요. 키워드는 AI의 공식 명령이 아니라 '이렇게 요청하는 습관'이라, 안 통하면 예시처럼 **뜻을 풀어서** 쓰면 됩니다. (전남대GPT·ChatGPT·클로드 모두 동일)

### 이해하기 쉽게
| 키워드 | 시키는 일 | 예시 (그대로 복사해 보세요) |
| --- | --- | --- |
| <mark>ELI5</mark> | 아주 쉽게 설명 | 전자결재가 뭐야? ELI5 |
| <mark>쉽게 풀어줘</mark> | 어려운 문서를 쉬운 말로 | 이 규정 조항 쉽게 풀어줘 |
| <mark>예시 들어줘</mark> | 예로 이해 돕기 | 이 개념, 예시 2개 들어서 설명해줘 |

### 요약·정리
| 키워드 | 시키는 일 | 예시 |
| --- | --- | --- |
| <mark>TL;DR</mark> | 핵심만 짧게 요약 | 이 회의록 TL;DR |
| <mark>표로 정리</mark> | 표 형식으로 | 이 3개 업체 견적을 표로 비교해줘 |
| <mark>단계별로</mark> | 순서대로 안내 | 신규 계정 발급 절차를 단계별로 알려줘 |
| <mark>체크리스트</mark> | 실행 목록으로 | 행사 준비를 체크리스트로 만들어줘 |

### 글쓰기·다듬기
| 키워드 | 시키는 일 | 예시 |
| --- | --- | --- |
| <mark>자연스럽게 다시 써줘</mark> | 어색한 문장 교정 | 이 안내문 더 자연스럽게 다시 써줘 |
| <mark>3가지 버전</mark> | 여러 안 받기 | 이 공지를 정중·간결·친근 3가지 버전으로 써줘 |
| <mark>정중하게 / 친근하게</mark> | 말투 조절 | 이 메일 더 정중한 톤으로 바꿔줘 |

### 분석·판단
| 키워드 | 시키는 일 | 예시 |
| --- | --- | --- |
| <mark>장단점</mark> | 찬반 정리 | 유연근무 확대의 장단점을 정리해줘 |
| <mark>비교표</mark> | 여러 안 비교 | A안·B안을 비용·기간·리스크 기준으로 비교해줘 |
| <mark>SWOT</mark> | 강점·약점·기회·위협 | 우리 부서 업무를 SWOT으로 정리해줘 |

### 확인·학습 (직원·조교)
| 키워드 | 시키는 일 | 예시 |
| --- | --- | --- |
| <mark>모르면 모른다고</mark> | 지어내기(환각) 줄이기 | 확실하지 않으면 '불확실'이라고 먼저 표시해줘 |
| <mark>스스로 검토해</mark> | 자가 점검 후 개선 | 작성 후 오류나 어색한 부분을 스스로 검토해서 고쳐줘 |
| <mark>퀴즈 만들어줘</mark> | 이해도 점검 | 이 규정으로 퀴즈 5문제 만들어줘 |

> 이 외에 SNS에 도는 키워드(SELFREFINE, X10THINK 등)도 많지만, 대부분 위 핵심과 겹치거나 불안정합니다. **형광펜부터** 익히시면 충분합니다.`,
      contentEn: `> **Highlighted = keywords that reliably work.** These are enough to start. They're not official commands but request habits; if one doesn't work, just spell out the meaning as in the example. (Same on 전남대GPT, ChatGPT, and Claude.)

### Make it easy to understand
| Keyword | What it does | Example (copy & paste) |
| --- | --- | --- |
| <mark>ELI5</mark> | Explain very simply | What is e-approval? ELI5 |
| <mark>put it simply</mark> | Plain-language rewrite | Explain this rule clause in simple terms |
| <mark>give examples</mark> | Aid with examples | Explain this with 2 examples |

### Summarize & organize
| Keyword | What it does | Example |
| --- | --- | --- |
| <mark>TL;DR</mark> | Short summary | TL;DR these minutes |
| <mark>as a table</mark> | Table format | Compare these 3 quotes as a table |
| <mark>step by step</mark> | Ordered guide | Explain the account-setup process step by step |
| <mark>checklist</mark> | Actionable list | Make an event-prep checklist |

### Write & polish
| Keyword | What it does | Example |
| --- | --- | --- |
| <mark>rewrite naturally</mark> | Fix awkward text | Rewrite this notice more naturally |
| <mark>3 versions</mark> | Get options | Write this notice in polite / concise / friendly versions |
| <mark>more polite / casual</mark> | Adjust tone | Make this email more polite |

### Analyze & decide
| Keyword | What it does | Example |
| --- | --- | --- |
| <mark>pros & cons</mark> | Both sides | List pros and cons of flexible work |
| <mark>compare</mark> | Compare options | Compare A vs B by cost, time, risk |
| <mark>SWOT</mark> | Strengths/weaknesses… | SWOT our team's work |

### Check & learn (staff & TAs)
| Keyword | What it does | Example |
| --- | --- | --- |
| <mark>say if unsure</mark> | Reduce hallucination | Flag anything you're not sure about |
| <mark>review yourself</mark> | Self-check | After writing, review and fix errors yourself |
| <mark>make a quiz</mark> | Check understanding | Make 5 quiz questions from this rule |

> Many other keywords circulate online (SELFREFINE, X10THINK…), but most overlap with the above or are unreliable. **Start with the highlighted ones.**`,
    },
  ],
};
