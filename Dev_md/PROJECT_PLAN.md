# AI Prompt - 프롬프트 엔지니어링 학습 사이트 프로젝트 계획

## 프로젝트 개요
- **프로젝트명**: AI Prompt
- **목적**: 프롬프트 엔지니어링 입문부터 실전까지 체계적인 학습 플랫폼 제공
- **대상**: AI 활용에 관심 있는 모든 학습자
- **참고**: D:\db-study 프로젝트 디자인 기반

## 기술 스택
| 구분 | 기술 |
|------|------|
| Frontend | React 19 + Vite 7 |
| Routing | React Router DOM 7 |
| Auth | Supabase (이메일/GitHub/Google) |
| Styling | Custom CSS (Glassmorphism, Dark Mode) |
| Deploy | GitHub Pages |
| Repository | https://github.com/aebonlee/ai-prompt |

## 커리큘럼 구성

### 1단계: PE 개론
- 프롬프트 엔지니어링이란?
- AI 모델 이해하기 (ChatGPT, Claude, Gemini)

### 2단계: 학습하기
- 효과적인 프롬프트 구조와 패턴
- Few-shot Learning 기법
- Chain-of-Thought 프롬프팅
- 역할 부여와 시스템 프롬프트 설계

### 3단계: 실전 활용
- 글쓰기 (블로그, 이메일, 보고서)
- 코딩 (코드 생성, 디버깅, 리팩토링)
- 데이터 분석 (해석, 시각화, 인사이트)
- 번역 (자연스러운 번역, 현지화)
- 비즈니스 (회의록, 제안서, 전략)

### 4단계: 실습
- 프롬프트 작성 & 분석 플레이그라운드

## 주요 기능
1. **인증 시스템**: Supabase 기반 로그인/회원가입 (이메일, GitHub, Google)
2. **테마 시스템**: 다크/라이트/자동 모드 + 5가지 색상 테마
3. **프롬프트 실습장**: 프롬프트 작성, 분석, 템플릿 제공
4. **코드 복사**: 코드 블록 원클릭 복사
5. **반응형 디자인**: 모바일/태블릿/데스크톱 대응
6. **OG 태그**: 소셜 미디어 공유 미리보기 지원

## 디자인 시스템
- **Primary Color**: Purple (#7C3AED)
- **Font**: Noto Sans KR
- **Glassmorphism**: Navbar backdrop blur
- **Animations**: AOS fade-up transitions
- **Color Themes**: Purple, Blue, Green, Rose, Orange

## 환경 변수
```
VITE_SUPABASE_URL=<supabase-url>
VITE_SUPABASE_ANON_KEY=<supabase-anon-key>
```
접두사 `VITE_SUPABASE_`를 사용하여 Supabase 설정
