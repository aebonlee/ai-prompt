# AI Prompt - 개발일지

## 2026-03-23 (Day 1) - 프로젝트 초기 구축 & 전체 점검

### 완료 작업
1. **프로젝트 초기화**
   - React 19 + Vite 7 프로젝트 생성
   - 의존성 설치: react-router-dom 7, @supabase/supabase-js 2.49.4
   - ESM 기반 vite.config.js 구성 (SPA fallback 플러그인 포함)

2. **디자인 시스템 구축**
   - D:\db-study 참고하여 CSS 변수 기반 테마 시스템 구현
   - Primary Color: Purple (#7C3AED)
   - 글래스모피즘 네비게이션 바
   - 다크/라이트/자동 모드 + 5가지 색상 테마 (Purple, Blue, Green, Rose, Orange)
   - CSS 9개 파일 분리: base, navbar, hero, footer, animations, site, auth, dark-mode, responsive

3. **인증 시스템**
   - Supabase Auth 연동 (이메일, GitHub, Google OAuth)
   - `VITE_SUPABASE_` 접두사 방식 환경 변수 설정
   - AuthContext로 전역 인증 상태 관리
   - ProtectedRoute 컴포넌트 (프로필 페이지 보호)

4. **커리큘럼 페이지 (11개)**
   - PE 개론: 프롬프트란?, AI 모델 이해
   - 학습: 프롬프트 구조, Few-shot, Chain-of-Thought, 역할 부여
   - 실전: 글쓰기, 코딩, 데이터 분석, 번역, 비즈니스

5. **핵심 기능**
   - 인터랙티브 프롬프트 플레이그라운드 (5개 템플릿 + 분석 기능)
   - 코드 블록 원클릭 복사 (useCodeCopy 훅)
   - SEOHead 동적 메타 태그 관리
   - OG 태그 (카카오 공유 지원)

6. **배포**
   - GitHub Actions CI/CD → gh-pages 브랜치 방식 배포
   - peaceiris/actions-gh-pages@v4 사용
   - 커스텀 도메인: ai-prompt.dreamitbiz.com
   - public/CNAME 파일 추가

7. **전체 페이지 점검 & 버그 수정**
   - OG URL 수정: `aebonlee.github.io` → `ai-prompt.dreamitbiz.com`
   - Home.jsx 커리큘럼 STEP 11 비즈니스 항목 추가
   - Supabase 미설정 시 빈 페이지 크래시 수정 (supabase null 안전 처리)
   - AuthContext 모든 함수에 supabase null guard 추가
   - 라우팅 17개, 네비게이션 링크 체인, CSS 변수/클래스 전수 검사 완료

8. **프로젝트 문서 작성**
   - Dev_md 폴더에 8개 문서 생성

### 이슈 & 해결
| 이슈 | 원인 | 해결 |
|------|------|------|
| 빌드 시 `Dynamic require of "fs"` 에러 | vite.config.js에서 CommonJS `require('fs')` 사용 | ESM `import fs from 'node:fs'`로 변경 |
| git push rejected | 원격에 기존 CNAME, README 커밋 존재 | `git fetch` + `git rebase origin/main` 후 push |
| 배포 후 빈 페이지 | supabase 환경 변수 미설정 시 `createClient(undefined, undefined)` 크래시 | supabase null guard 추가, AuthContext 안전 처리 |
| OG 태그 URL 불일치 | 초기 설정 시 `aebonlee.github.io` 사용 | 커스텀 도메인 `ai-prompt.dreamitbiz.com`으로 통일 |
| 커리큘럼 항목 누락 | Home.jsx에 비즈니스 STEP 미포함 | STEP 11 비즈니스 추가 |

### 커밋 이력
- `da75a5c` feat: AI 프롬프트 엔지니어링 학습 사이트 초기 구축 (48 files)
- `2adb437` chore: add CNAME to public for custom domain preservation
- `99bf092` fix: Supabase 미설정 시 빈 페이지 크래시 수정 + 프로젝트 문서 추가
- `24e01e4` chore: GitHub Pages 배포를 gh-pages 브랜치 방식으로 변경
- `f883536` fix: 전체 페이지 점검 - OG URL, 커리큘럼 누락, Auth 크래시 수정
