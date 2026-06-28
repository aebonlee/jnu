# CNU 사이트 개편 (2026-06)

전남대학교 생성형 AI 교육 사이트를 **전남대GPT(타임리GPT 기반) 실습 중심 교육 플랫폼**으로 개편.

## 1. 콘텐츠 — 4개 과정 × 2일 16시간

기존 3분류(교수자/직원/조교)를 폐기하고 4개 전문 과정으로 재구성. 각 과정은 Day1/Day2 × 4교시(8시간) = 16시간 차시별 커리큘럼을 가진다.

| # | 과정 | id | Day1 | Day2 |
|---|------|----|------|------|
| 1 | 생성형 AI 기초·심화 | `foundation` | 전남대GPT·프롬프트 기초 | 파일활용·맞춤GPT·자동화 |
| 2 | 데이터분석 & 논문작성 | `research-writing` | 데이터 정리·통계·시각화 | 문헌검토·IMRaD·영문교정·투고 |
| 3 | 데이터분석 & 예산회계 | `data-budget` | 엑셀·집계·시각화·검산 | 예산편성·정산·재무보고·규정Q&A |
| 4 | 연구 & 실험지원 | `research-lab` | 연구설계·계획서·IRB | 프로토콜·데이터기록·분석코드 |

- 모든 교시에 **실습 사례**(시나리오 + 전남대GPT에 바로 입력하는 예시 프롬프트) 포함 → 실습 위주 수업.
- 데이터 모델: `src/data/courses.ts`의 `PROGRAMS`(`Program`/`CurriculumDay`/`CurriculumSession`/`PracticeCase`).
- `COURSE_CATEGORIES`는 `PROGRAMS` 별칭으로 유지(하위호환).

## 2. 디자인 — 네이비 + 골드 아카데믹

- 기본 컬러셋 `academic`: 네이비 `#1A2B4A` + 골드 `#C8A04A` + 아이보리 `#FBF9F4`, serif 제목(Noto Serif KR).
- 후보 컬러셋(상단 컬러 스위처에서 선택): `research`(딥네이비+틸), `cnu`(전남대 그린), `vibe`(모던 바이올렛).
- 토큰: `src/styles/base.css`(:root + data-color), `dark-mode.css`, `site.css`. `--accent` 계열 추가.
- `ColorTheme` 타입과 `ThemeContext`, `site.colors` 동기화.

## 3. 페이지

- `Home.tsx` — 히어로/통계(4과정·16h·32교시·65+실습), 과정 카드(태그·소요시간) 보강.
- `courses/CourseCatalog.tsx` — 4개 프로그램 카드(대상·소요시간·하이라이트).
- `courses/CourseCategory.tsx` — 과정 상세: 플랫폼 안내 + Day별 커리큘럼 타임라인 + 교시별 실습 프롬프트 코드블록.
- 스타일: `src/styles/programs.css` 신설.

## 4. 유지

결제·요금제·AI도구·커뮤니티·프롬프트실습·다국어(ko/en)·다크모드 등 기존 기능은 모두 유지.

## 배포

`npm run build` 통과. 배포는 수동 `npm run deploy`(gh-pages) — 커스텀 도메인 `cnu.dreamitbiz.com`.
