# AI Prompt - 아키텍처 문서

## 디렉토리 구조
```
ai-prompt/
├── index.html              # HTML 엔트리 (OG 태그 포함)
├── package.json            # 프로젝트 의존성
├── vite.config.js          # Vite 빌드 설정
├── .env                    # 환경 변수 (Supabase)
├── .gitignore
├── Dev_md/                 # 프로젝트 문서
│   ├── PROJECT_PLAN.md
│   ├── ARCHITECTURE.md
│   └── DEPLOYMENT.md
├── public/                 # 정적 파일
│   ├── CNAME               # 커스텀 도메인
│   ├── og-image.png         # OG 이미지 (1200x630)
│   └── favicon.ico          # 파비콘
└── src/
    ├── main.jsx            # React 엔트리 포인트
    ├── App.jsx             # 라우팅 (React Router)
    ├── index.css            # CSS 임포트 허브
    ├── config/
    │   ├── site.js          # 사이트 메타 & 메뉴 설정
    │   └── supabase.js      # Supabase 클라이언트 (접두사 방식)
    ├── contexts/
    │   ├── ThemeContext.jsx  # 다크모드 + 컬러 테마
    │   └── AuthContext.jsx   # Supabase 인증 상태
    ├── hooks/
    │   └── useCodeCopy.js   # 코드블록 복사 버튼
    ├── components/
    │   ├── Navbar.jsx        # 글라스모피즘 네비게이션
    │   ├── Footer.jsx        # 풋터
    │   ├── PublicLayout.jsx  # 레이아웃 (Navbar + Outlet + Footer)
    │   ├── SEOHead.jsx       # OG/메타 태그 동적 설정
    │   └── ProtectedRoute.jsx # 인증 필요 라우트 가드
    ├── pages/
    │   ├── Home.jsx          # 메인 홈페이지
    │   ├── Login.jsx         # 로그인
    │   ├── Register.jsx      # 회원가입
    │   ├── Profile.jsx       # 프로필 (인증 필요)
    │   ├── Playground.jsx    # 프롬프트 실습장
    │   ├── NotFound.jsx      # 404 페이지
    │   ├── intro/
    │   │   ├── WhatIsPrompt.jsx  # 프롬프트란?
    │   │   └── AiModels.jsx      # AI 모델 이해
    │   ├── learn/
    │   │   ├── PromptStructure.jsx  # 구조와 패턴
    │   │   ├── FewShot.jsx          # Few-shot 기법
    │   │   ├── ChainOfThought.jsx   # Chain-of-Thought
    │   │   └── RoleSystem.jsx       # 역할 부여
    │   ├── practice/
    │   │   ├── Writing.jsx      # 글쓰기 실전
    │   │   ├── Coding.jsx       # 코딩 실전
    │   │   ├── Analysis.jsx     # 데이터 분석 실전
    │   │   ├── Translation.jsx  # 번역 실전
    │   │   └── Business.jsx     # 비즈니스 실전
    │   └── ai-tips/
    │       ├── AiTipsHome.jsx     # AI활용 Tip! 허브
    │       ├── AiTipsChatGPT.jsx  # ChatGPT 활용법
    │       ├── AiTipsClaude.jsx   # Claude 활용법
    │       ├── AiTipsGemini.jsx   # Gemini 활용법
    │       ├── AiTipsCopilot.jsx  # Copilot 활용법
    │       ├── AiTipsPrompt.jsx   # 프롬프트 작성법
    │       ├── AiTipsCoding.jsx   # AI 코딩 활용
    │       ├── AiTipsWriting.jsx  # AI 문서 작성
    │       └── AiTipsLearning.jsx # AI 학습 활용
    └── styles/
        ├── base.css         # CSS 변수, 리셋, 버튼
        ├── navbar.css       # 네비게이션 바
        ├── hero.css         # 히어로 섹션
        ├── footer.css       # 풋터
        ├── animations.css   # 애니메이션 (AOS 제거됨)
        ├── site.css         # 페이지별 스타일
        ├── auth.css         # 인증 페이지
        ├── dark-mode.css    # 다크 모드
        └── responsive.css   # 반응형
```

## 컴포넌트 계층 구조
```
App.jsx
└── ThemeProvider
    └── AuthProvider
        └── BrowserRouter
            └── PublicLayout
                ├── Navbar (fixed, glassmorphism)
                ├── Suspense (lazy loading)
                │   └── Page Components
                └── Footer
```

## 라우팅 맵
| 경로 | 컴포넌트 | 인증 |
|------|---------|------|
| / | Home | X |
| /login | Login | X |
| /register | Register | X |
| /profile | Profile | O |
| /intro/what-is-prompt | WhatIsPrompt | X |
| /intro/ai-models | AiModels | X |
| /learn/structure | PromptStructure | X |
| /learn/few-shot | FewShot | X |
| /learn/chain-of-thought | ChainOfThought | X |
| /learn/role-system | RoleSystem | X |
| /practice/writing | Writing | X |
| /practice/coding | Coding | X |
| /practice/analysis | Analysis | X |
| /practice/translation | Translation | X |
| /practice/business | Business | X |
| /ai-tips | AiTipsHome | X |
| /ai-tips/chatgpt | AiTipsChatGPT | X |
| /ai-tips/claude | AiTipsClaude | X |
| /ai-tips/gemini | AiTipsGemini | X |
| /ai-tips/copilot | AiTipsCopilot | X |
| /ai-tips/prompt | AiTipsPrompt | X |
| /ai-tips/coding | AiTipsCoding | X |
| /ai-tips/writing | AiTipsWriting | X |
| /ai-tips/learning | AiTipsLearning | X |
| /playground | Playground | X |
| * | NotFound | X |

## Supabase 설정
- 접두사: `VITE_SUPABASE_`
- `VITE_SUPABASE_URL`: Supabase 프로젝트 URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anon public key
- 인증 제공자: Email, GitHub, Google

## 테마 시스템
- **모드**: auto / light / dark (자동은 6시~18시 기준)
- **색상**: purple(기본), blue, green, rose, orange
- **저장**: localStorage (`theme-mode`, `color-theme`)
- **적용**: `data-theme` + `data-color` HTML 속성

## SEO & OG 태그
- `SEOHead` 컴포넌트가 각 페이지 title, description 동적 설정
- `index.html`에 기본 OG 메타 태그 정의
- Kakao 디버거 호환: og:url, og:title, og:description, og:type, og:image, og:site_name
