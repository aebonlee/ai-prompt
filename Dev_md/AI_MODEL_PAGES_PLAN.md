# PE 개론 - AI 모델 상세 페이지 추가

## 개요
PE 개론 메뉴에 ChatGPT, Claude, Gemini 3개 AI 모델의 상세 페이지를 추가하였습니다.

## 추가된 파일 (3개)
| 파일 | 설명 |
|------|------|
| `src/pages/intro/ChatGPT.jsx` | ChatGPT (OpenAI) 상세 페이지 |
| `src/pages/intro/Claude.jsx` | Claude (Anthropic) 상세 페이지 |
| `src/pages/intro/Gemini.jsx` | Gemini (Google) 상세 페이지 |

## 수정된 파일 (3개)
| 파일 | 변경 내용 |
|------|-----------|
| `src/App.jsx` | 3개 lazy import + 3개 Route 추가 |
| `src/config/site.js` | PE 개론 메뉴에 3개 하위 메뉴 추가 |
| `src/pages/intro/AiModels.jsx` | 네비게이션 링크 업데이트 (다음 → ChatGPT) |

## 라우트
```
/intro/chatgpt   → ChatGPT (OpenAI) 상세
/intro/claude    → Claude (Anthropic) 상세
/intro/gemini    → Gemini (Google) 상세
```

## 페이지 내비게이션 흐름
```
프롬프트 엔지니어링이란? → AI 모델 이해하기 → ChatGPT → Claude → Gemini → 프롬프트 구조와 패턴
```

## 각 페이지 콘텐츠 구조

### ChatGPT (OpenAI)
- OpenAI 회사 소개 및 ChatGPT 역사
- GPT 모델 변천사 (GPT-1 ~ o1)
- 현재 모델: GPT-4o, GPT-4o mini, o1
- 요금제: Free / Plus / Pro / Team / Enterprise
- 핵심 기능: Custom Instructions, GPTs, 고급 데이터 분석, DALL-E, 웹 브라우징
- 최적화된 프롬프트 기법: 시스템 프롬프트, 단계적 지시, 출력 형식 지정
- API 호출 예시 (Python)
- 장점과 한계

### Claude (Anthropic)
- Anthropic 회사 소개 및 Constitutional AI 설명
- Claude 모델 변천사 (1.0 ~ 4.5 Sonnet)
- 현재 모델: Claude 4.5 Sonnet, 3.5 Haiku, 3 Opus
- 요금제: Free / Pro / Team / Enterprise
- 핵심 기능: Projects, Artifacts, 200K 컨텍스트, Claude Code, Vision
- 최적화된 프롬프트 기법: XML 태그, 체계적 분석, Extended Thinking
- API 호출 예시 (Python - Messages API)
- 장점과 한계

### Gemini (Google)
- Google DeepMind 소개 및 Bard→Gemini 변천
- Gemini 모델 변천사 (Bard ~ 2.5 Pro)
- 현재 모델: Gemini 2.5 Pro, 2.0 Flash, 1.5 Pro
- 요금제: Free / Advanced / Business / Enterprise
- 핵심 기능: 멀티모달 네이티브, Google 생태계 통합, 1M+ 컨텍스트, Deep Research, Gems
- 최적화된 프롬프트 기법: 멀티모달 프롬프트, 실시간 정보, 영상 분석, Workspace 활용
- API 호출 예시 (Python - google.generativeai)
- 세 모델 비교표 (작업별 추천)
- 장점과 한계

## 완료일
2024-03-23
