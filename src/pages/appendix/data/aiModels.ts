/** 부록 — 전남대GPT 지원 AI 모델 안내 */
export default {
  id: 'ai-models',
  icon: 'fa-microchip',
  title: 'AI 모델 고르기',
  titleEn: 'Choosing a Model',
  sections: [
    {
      title: '한눈에 고르는 법',
      titleEn: 'Quick Guide',
      content: `> 전남대GPT는 여러 회사의 AI 모델을 골라 쓸 수 있습니다. **잘 모르겠으면 \`Auto(자동)\`** — 작업에 맞는 모델을 알아서 골라줍니다. 표시 뜻: **(고비용)** = 요금이 많이 드니 꼭 필요할 때만 · **(New)** = 최신 모델.

### 기본 프리셋 — 회사별 대표 모델(빠른 선택)
전남대GPT는 각 회사의 대표 모델을 먼저 보여줍니다. 아래가 그 기본 선택지이고, 더 많은 모델은 아래 '제공사별 모델'에서 펼쳐 고르면 됩니다.

| 빠른 선택 | 회사 | 툴에 적힌 쓰임 |
| --- | --- | --- |
| <mark>Auto</mark> | — | 알맞은 AI 모델을 자동으로 선택 |
| Solar Open2 | Upstage | 국가대표 독자 파운데이션 2차 모델 |
| GPT-5.4 Mini | OpenAI | 다양한 작업을 하나의 모델에서 해결 |
| Gemini 3.1 Flash Lite | Google | 최신 정보 기반 콘텐츠 생성·요약 |
| Claude Haiku 4.5 | Anthropic | 긴 글 요약, 코딩, 문맥 중요한 업무 |
| Llama 4 Scout 17B | Meta | 가볍고 빠른 응답 |
| Mistral Small | Mistral | 짧은 대화, 기본 질의응답 |
| Qwen QWQ 32B | Qwen | 중국어 기반 문서, 다국어 업무 |
| Grok 4.20 Fast Reasoning | xAI | 복잡한 텍스트에서 핵심 찾기 |

### 등급 3가지만 기억하세요
| 등급 | 이름에 보이는 단어 | 언제 쓰나 |
| --- | --- | --- |
| <mark>빠름·가벼움</mark> | Mini · Nano · Lite · Flash · Small · Haiku | 간단한 질문, 빠른 요약, 초안 |
| <mark>균형·범용</mark> | 숫자만 붙은 표준 모델 | 대부분의 문서·메일·정리 |
| <mark>고성능·정교</mark> | Pro · Large · Opus · o3 · Deep Research | 긴 문서, 복잡한 분석 (대개 고비용) |

### 목적별 빠른 추천
| 이런 작업 | 이런 모델 |
| --- | --- |
| 간단한 질문·빠른 요약 | Claude Haiku 4.5 · GPT-5 mini · Gemini Flash · Solar Mini |
| 일반 문서·메일·정리 | GPT-5.4 · Claude Sonnet 5 · Gemini 2.5 Flash |
| 긴 문서·정교한 분석 | Claude Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro (고비용) |
| 코딩·자동화 | GPT-5.3 Codex · Codestral · Grok Code Fast |
| 복잡한 추론·논리 | o3 · Magistral · Grok Reasoning · Qwen QWQ |
| 한국어·교내 자료 | Upstage Solar (국산 모델) |
| 최신 정보 검색·요약 | Gemini (검색 연동 강점) |
| 자료 심층 리서치 | O3 Deep Research (고비용) |

> **팁**: 비싼 모델이 항상 정답은 아닙니다. 간단한 일은 **가벼운 모델이 더 빠르고 충분**해요. 결과가 아쉬울 때만 상위 모델로 올리세요.`,
      contentEn: `> 전남대GPT lets you pick models from several companies. **Not sure? Use \`Auto\`** — it picks a fitting model for you. Tags: **(고비용)** = expensive, use only when needed · **(New)** = newest.

### Remember just 3 tiers
| Tier | Words in the name | When |
| --- | --- | --- |
| <mark>fast·light</mark> | Mini · Nano · Lite · Flash · Small · Haiku | simple questions, quick summaries, drafts |
| <mark>balanced</mark> | plain numbered models | most documents, emails, organizing |
| <mark>top·precise</mark> | Pro · Large · Opus · o3 · Deep Research | long docs, complex analysis (usually costly) |

### Quick picks by task
| Task | Models |
| --- | --- |
| simple Q / quick summary | Claude Haiku 4.5 · GPT-5 mini · Gemini Flash · Solar Mini |
| general docs / email | GPT-5.4 · Claude Sonnet 5 · Gemini 2.5 Flash |
| long docs / deep analysis | Claude Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro (costly) |
| coding / automation | GPT-5.3 Codex · Codestral · Grok Code Fast |
| complex reasoning | o3 · Magistral · Grok Reasoning · Qwen QWQ |
| Korean / campus material | Upstage Solar (Korean model) |
| latest-info search | Gemini (search-connected) |
| deep research | O3 Deep Research (costly) |

> **Tip**: pricier isn't always better. For simple tasks a light model is faster and enough — move up only if the result falls short.`,
    },
    {
      title: '모델 선택 기준 (전문 관점)',
      titleEn: 'Selection Criteria (Pro)',
      content: `> 전문적으로 고를 땐 마케팅 문구가 아니라 **아키텍처 특성 6축**으로 판단합니다. 작업 성격을 축에 대입하면 후보가 좁혀집니다.

### 판단하는 6가지 축
| 축 | 무엇을 보나 | 이럴 때 |
| --- | --- | --- |
| <mark>문맥 길이</mark> (context) | 긴 문서·코드를 통째로 넣나 | 규정집·논문·대량 로그 → 장문 강한 계열 |
| <mark>추론 깊이</mark> | 다단계 논리·수학·계획이 핵심인가 | 복잡한 의사결정·증명 → 추론형 |
| <mark>멀티모달</mark> | 이미지·표·PDF·음성을 다루나 | 스캔 문서·도표 해석 → 멀티모달 |
| <mark>지연·비용</mark> | 실시간·대량 처리인가 | 챗봇·배치 요약 → 경량(증류) |
| <mark>에이전트·코딩</mark> | 파일 편집·툴 호출·자동화인가 | 스크립트·시스템 연동 → 코딩/에이전트형 |
| <mark>언어</mark> | 한국어/다국어 정확도 | 교내 한글 문서 → 한국어 특화 |

### 유형별 정리 (이름만 봐도 성격 파악)
| 유형 | 해당 모델 | 기술적 성격 |
| --- | --- | --- |
| 프런티어 | Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro · Mistral Large | 성능 상한이 가장 높음. 복잡·장문·에이전트에 강하나 비용·지연 큼 |
| 균형·범용 | Sonnet 5 · GPT-5.4 · Gemini 2.5 Flash · Solar Pro | 품질/비용 균형점. 대부분 업무의 기본값 |
| 경량(증류) | Haiku · GPT-5 mini/nano · Flash Lite · Small | 지식증류로 소형화 → 저지연·저비용·고처리량, 복잡도 상한은 낮음 |
| 추론형 | o3 · o4-mini · Magistral · Qwen QWQ · Grok Reasoning | 추론에 연산(test-time compute)을 더 씀 → 논리·수학·다단계 계획에 강함 |
| 코딩·에이전트 | GPT-5.x Codex · Codestral · Devstral · Grok Code | 코드 생성·리팩터링·파일 편집·툴 호출(에이전트형 개발) |
| 심층 리서치 | O3 Deep Research | 다단계 웹 탐색 + 출처 종합. 장시간·고비용 |
| 한국어·국산 | Upstage Solar (Pro/Mini/Open2) | 한국어 토크나이즈·문맥에 최적화, 교내 한글 문서 강점 |

> **선택 요령**: '추론형'은 빠른 요약엔 과합니다(느리고 비쌈). 반대로 규정 충돌·복잡한 의사결정엔 범용보다 추론형이 낫습니다. **작업 난이도와 지연·비용을 함께** 저울질하세요. 또한 'Chat' 접미사는 대화·지시 튜닝, 숫자만 붙으면 표준 버전입니다.

> **보안 관점**: 전남대GPT는 교내 전용 플랫폼이라 외부 일반 서비스보다 데이터 취급이 안전한 편이지만, **주민번호·미공개 연구데이터 등 민감정보 최소화** 원칙은 동일하게 적용하세요.`,
      contentEn: `> Professionals choose by **6 architectural axes**, not marketing. Map your task to the axes to narrow candidates.

### The 6 axes
| Axis | What to check | When |
| --- | --- | --- |
| <mark>context length</mark> | Whole long doc/code at once? | rulebooks, papers, big logs → long-context models |
| <mark>reasoning depth</mark> | Multi-step logic/math/planning? | complex decisions, proofs → reasoning models |
| <mark>multimodal</mark> | Images, tables, PDFs, audio? | scanned docs, charts → multimodal |
| <mark>latency·cost</mark> | Real-time or high volume? | chatbots, batch summaries → light (distilled) |
| <mark>agent·coding</mark> | File edits, tool calls, automation? | scripts, integrations → code/agent models |
| <mark>language</mark> | Korean/multilingual accuracy | campus Korean docs → Korean-specialized |

### By type (the name tells the character)
| Type | Models | Technical character |
| --- | --- | --- |
| Frontier | Opus 4.8 · GPT-5.5 · Gemini 3.1 Pro · Mistral Large | Highest ceiling; complex/long/agentic; costly & slower |
| Balanced | Sonnet 5 · GPT-5.4 · Gemini 2.5 Flash · Solar Pro | Quality/cost sweet spot; default for most work |
| Light (distilled) | Haiku · GPT-5 mini/nano · Flash Lite · Small | Distilled → low latency/cost, high throughput; lower ceiling |
| Reasoning | o3 · o4-mini · Magistral · Qwen QWQ · Grok Reasoning | Extra test-time compute → logic, math, planning |
| Coding·agent | GPT-5.x Codex · Codestral · Devstral · Grok Code | Code gen/refactor, file edits, tool calls |
| Deep research | O3 Deep Research | Multi-step web search + synthesis; long, costly |
| Korean | Upstage Solar (Pro/Mini/Open2) | Korean-optimized tokenizer/context; campus docs |

> **Rule of thumb**: reasoning models are overkill for quick summaries (slow, costly) but win on complex decisions. Weigh **task difficulty vs latency/cost**. "Chat" = chat-tuned; plain numbers = standard.

> **Security**: 전남대GPT is campus-only, safer than public services — but still minimize sensitive data (IDs, unpublished research).`,
    },
    {
      title: '제공사별 모델',
      titleEn: 'Models by Provider',
      content: `> 같은 회사도 세대·크기별로 여러 모델이 있습니다. 아래는 **큰 특징 위주** 안내이며, 실제 성능은 작업마다 다를 수 있습니다.

### Upstage · Solar — 국산 파운데이션, 한국어 강점
| 모델 | 특징 |
| --- | --- |
| Solar Pro3 | Solar 최상위, 복잡한 한국어 업무 |
| Solar Pro2 | 상위 성능·균형 |
| Solar Mini | 경량·빠름, 간단한 작업 |
| Solar Open2 | 국가대표 독자 파운데이션 2차 모델(공개형) |

### OpenAI · ChatGPT — 범용 최강 라인업
| 모델 | 특징 |
| --- | --- |
| GPT-5.5 (고비용) | 최상위 성능 |
| GPT-5.4 · 5.4 Mini · 5.4 Nano | 범용 · 경량 · 초경량 |
| GPT-5.3 Chat · 5.2 · 5.2 Chat · 5.1 · 5.1 Chat · 5 | 세대별 범용 (Chat=대화 최적) |
| GPT-5 mini · 5 nano | 빠르고 저렴 |
| GPT-4.1 · 4.1 mini · 4o · 4o mini | 이전 세대 범용·경량 |
| o3 (고비용) · o4-mini | 추론 특화(단계적 사고) |
| GPT-5.3/5.2/5.1 Codex · 5.1 Codex Mini · 5 Codex | 코딩 특화 |
| O3 Deep Research (고비용) | 자료 심층 조사·리서치 |

### Google · Gemini — 검색 연동·멀티모달
| 모델 | 특징 |
| --- | --- |
| Gemini 3.1 Pro | 최상위, 정교한 작업 |
| Gemini 3 Flash · 3.1 Flash Lite | 빠름·경량 |
| Gemini 2.5 Pro · 2.5 Flash · 2.5 Flash Lite | 이전 세대 고성능·경량 |

### Anthropic · Claude — 긴 문맥·학술·문서 강점
| 모델 | 특징 |
| --- | --- |
| Claude Opus 4.8 · 4.7 · 4.6 (고비용) | 최고 성능, 긴 문서·복잡한 분석·코딩 |
| Claude Sonnet 5 (New) · 4.6 · 4.5 | 균형·범용 강자, 일상 업무 |
| Claude Haiku 4.5 | 빠르고 경제적, 요약·간단 작업 |
| Claude Fable 5 (New·고비용) | 최신 고성능 특화 모델 |

### Meta · Llama
| 모델 | 특징 |
| --- | --- |
| Llama 4 Scout 17B | 가볍고 빠른 오픈 모델 |

### Mistral — 유럽, 코딩·추론 라인업
| 모델 | 특징 |
| --- | --- |
| Mistral Large | 고성능 범용 |
| Mistral Medium · Small | 균형 · 경량 |
| Magistral Medium · Small | 추론 특화 |
| Devstral Medium · Codestral | 코딩 특화 |

### Qwen — 다국어·중국어 강점
| 모델 | 특징 |
| --- | --- |
| Qwen QWQ 32B | 추론·다국어(중국어 문서) |

### Grok · xAI
| 모델 | 특징 |
| --- | --- |
| Grok 4.3 | 상위 성능 |
| Grok 4.20 Fast Reasoning · Non Reasoning | 빠른 추론 / 일반 |
| Grok Code Fast | 코딩 특화 |`,
      contentEn: `> Each company has several models by generation and size. Below is a **broad-strokes** guide; real performance varies by task.

### Upstage · Solar — Korean-built foundation, strong Korean
| Model | Notes |
| --- | --- |
| Solar Pro3 | Solar's top tier, complex Korean work |
| Solar Pro2 | High performance, balanced |
| Solar Mini | Light·fast, simple tasks |
| Solar Open2 | Korea's flagship open foundation (2nd gen) |

### OpenAI · ChatGPT — strongest general lineup
| Model | Notes |
| --- | --- |
| GPT-5.5 (costly) | Top performance |
| GPT-5.4 · 5.4 Mini · 5.4 Nano | general · light · ultra-light |
| GPT-5.3 Chat · 5.2 · 5.1 · 5 | generational general models (Chat=chat-tuned) |
| GPT-5 mini · 5 nano | fast and cheap |
| GPT-4.1 · 4o (+ mini) | previous-gen general·light |
| o3 (costly) · o4-mini | reasoning-tuned (step-by-step) |
| GPT-5.x Codex | coding-specialized |
| O3 Deep Research (costly) | deep research |

### Google · Gemini — search-connected, multimodal
| Model | Notes |
| --- | --- |
| Gemini 3.1 Pro | top tier, precise work |
| Gemini 3 Flash · 3.1 Flash Lite | fast·light |
| Gemini 2.5 Pro · Flash · Flash Lite | previous gen |

### Anthropic · Claude — long context, academic & docs
| Model | Notes |
| --- | --- |
| Claude Opus 4.8 · 4.7 · 4.6 (costly) | top performance, long docs, analysis, coding |
| Claude Sonnet 5 (New) · 4.6 · 4.5 | balanced all-rounder, daily work |
| Claude Haiku 4.5 | fast·economical, summaries, simple tasks |
| Claude Fable 5 (New·costly) | newest high-capability model |

### Meta · Llama
| Model | Notes |
| --- | --- |
| Llama 4 Scout 17B | light, fast open model |

### Mistral — Europe, coding·reasoning
| Model | Notes |
| --- | --- |
| Mistral Large | high-performance general |
| Mistral Medium · Small | balanced · light |
| Magistral Medium · Small | reasoning-tuned |
| Devstral · Codestral | coding-specialized |

### Qwen — multilingual, strong Chinese
| Model | Notes |
| --- | --- |
| Qwen QWQ 32B | reasoning, multilingual (Chinese docs) |

### Grok · xAI
| Model | Notes |
| --- | --- |
| Grok 4.3 | upper tier |
| Grok 4.20 Fast Reasoning · Non Reasoning | fast reasoning / general |
| Grok Code Fast | coding-specialized |`,
    },
  ],
};
