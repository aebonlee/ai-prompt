# AI Prompt - 개발일지

## 2026-03-23 (Day 1) - 프로젝트 초기 구축 & 기능 확장

### 완료 작업

1. **프로젝트 초기화** - React 19 + Vite 7, react-router-dom 7, @supabase/supabase-js 2.49.4, ESM vite.config.js

2. **디자인 시스템** - D:\db-study 참고, CSS 변수, Purple (#7C3AED), 글래스모피즘, 다크/라이트/자동 + 5색상 테마, CSS 9개 파일

3. **인증 시스템** - Supabase Auth (이메일, GitHub, Google OAuth), `VITE_SUPABASE_` 접두사, AuthContext, ProtectedRoute

4. **커리큘럼 페이지 (11개)** - PE 개론 2, 학습 4, 실전 5

5. **핵심 기능** - 프롬프트 플레이그라운드, 코드 복사 훅, SEOHead, OG 태그

6. **배포** - GitHub Actions CI/CD, gh-pages 브랜치 방식, peaceiris/actions-gh-pages@v4, 도메인 ai-prompt.dreamitbiz.com

7. **전체 점검 & 버그 수정** - OG URL, STEP 11, supabase null guard, 전수 검사

8. **프로젝트 문서** - Dev_md 폴더 8개 문서

9. **OG 이미지 & Favicon** - Pillow로 1200x630 OG 이미지 생성, favicon.ico 생성, index.html 반영

10. **AOS 페이드인 효과 수정 → 제거** - data-aos 속성 153곳 제거, animations.css AOS 스타일 삭제, useAos.js 훅 삭제

11. **AI활용 Tip! 메뉴 추가** - koreatech 프로젝트에서 9개 페이지 복사 적용 (ChatGPT, Claude, Gemini, Copilot, 프롬프트, 코딩, 문서, 학습), 라우트 9개 + 네비바 드롭다운 메뉴 추가

12. **레슨 페이지 상단 여백 수정** - intro/learn/practice 11개 페이지에 `.section` 클래스 추가, AI Tips 페이지와 동일한 상단 여백(4rem) 적용

13. **플레이그라운드 입력 박스 확대** - `.playground-input` min-height 200px → 360px

### 이슈 & 해결

| 이슈 | 원인 | 해결 |
| --- | --- | --- |
| Dynamic require of fs 에러 | vite.config.js CommonJS require | ESM import 변경 |
| git push rejected | 원격에 기존 커밋 존재 | git fetch + rebase 후 push |
| 배포 후 빈 페이지 | supabase createClient 크래시 | supabase null guard 추가 |
| OG 태그 URL 불일치 | github.io 도메인 사용 | 커스텀 도메인 통일 |
| 커리큘럼 항목 누락 | STEP 11 미포함 | 비즈니스 항목 추가 |
| og-image.png 404 | 이미지 파일 미생성 | Pillow로 OG 이미지 생성 |
| 페이지 콘텐츠 안보임 | data-aos opacity:0 + JS 미동작 | AOS 완전 제거 |
| Dev_md markdownlint 39개 | MD 포맷팅 규칙 위반 | 빈 줄/테이블 포맷 수정 |
| 레슨 페이지 상단 여백 없음 | `.section` 클래스 누락 | 11개 페이지에 `section` 클래스 추가 |

14. **강의안/실습워크북/참고문서/커뮤니티 4개 메뉴 추가** - site.js menuItems 추가, App.jsx 라우트 등록, 각 페이지 컴포넌트 생성

15. **강의안 동적 게시판 변환** - Supabase CRUD 기반 게시판 (koreatech 패턴), LecturesHome/LectureWrite/LectureDetail, lectureService.js

16. **Supabase 테이블 ap_ 접두사 통일** - ap_lectures, ap_workbooks, ap_community 등 모든 테이블에 `ap_` 접두사 적용

17. **실습워크북 동적 게시판 변환** - 강의안과 동일한 패턴으로 워크북 CRUD 게시판 구현

18. **로그인 Google/Kakao OAuth 적용** - Supabase OAuth Provider 추가, 플레이그라운드 입력박스 자동확장(textarea auto-resize)

19. **PE 개론 ChatGPT/Claude/Gemini 상세 페이지 추가** - 3개 AI 모델별 전용 페이지, site.js 메뉴 추가, App.jsx 라우트 등록

20. **커뮤니티 글쓰기 버튼 글자색 수정** - 다크모드에서 버튼 텍스트 안보이는 문제 해결

21. **즐겨찾기 페이지 추가** - GenAI 추천 사이트 모음, 9개 카테고리 ~60개 사이트, References.jsx 패턴 동일

22. **메인 페이지 Font Awesome 아이콘 교체** - 이모지를 Font Awesome 6.5.1 아이콘으로 교체, 주컬러 적용

23. **블루 테마 적용** - 초기 컬러셋 purple → blue 변경, 컬러 피커 팔레트 아이콘, 파비콘 블루 SVG, OG 이미지 블루 재생성

24. **테마 전환 시스템모드 제거** - auto/system 모드 삭제, light/dark 토글만 유지

25. **하위 메뉴 겹침 문제 수정** - dropdown-menu z-index 추가, hover 트리거 제거, 외부 클릭 시 닫기

26. **og:title 변경** - 'AI Prompt - 프롬프트 엔지니어링 학습' → 'AI Prompt 프롬프트 엔지니어링 학습' (하이픈 제거)

### 커밋 이력

- `da75a5c` feat: AI 프롬프트 엔지니어링 학습 사이트 초기 구축 (48 files)
- `2adb437` chore: add CNAME to public for custom domain preservation
- `99bf092` fix: Supabase 미설정 시 빈 페이지 크래시 수정 + 프로젝트 문서 추가
- `24e01e4` chore: GitHub Pages 배포를 gh-pages 브랜치 방식으로 변경
- `f883536` fix: 전체 페이지 점검 - OG URL, 커리큘럼 누락, Auth 크래시 수정
- `5253d37` fix: Dev_md 마크다운 lint 오류 39개 수정
- `4232099` fix: AOS 스크롤 애니메이션 미작동으로 콘텐츠 숨김 수정
- `be9fc65` feat: AI활용 Tip! 메뉴 추가 + 페이드인 효과 제거
- `6d84537` fix: 레슨 페이지 상단 여백 수정 + Dev_md 문서 업데이트
- `2512fc0` fix: 플레이그라운드 입력 박스 세로 영역 확대 + 문서 업데이트
- `c41caf8` feat: 강의안/실습워크북/참고문서/커뮤니티 4개 신규 메뉴 추가
- `81bafb0` feat: 강의안을 동적 게시판 형태로 변환 (koreatech 패턴 적용)
- `31429c3` docs: 강의안 게시판 변환 구현 문서 추가
- `4e1f081` refactor: Supabase 테이블에 ap_ 접두사 적용 및 네이밍 통일
- `b5995c3` feat: 실습워크북을 동적 게시판으로 변환 + 사이트 평가 보고서 추가
- `bdacc17` feat: 로그인 Google/Kakao OAuth 적용 + Playground 입력박스 자동확장
- `6f7e830` feat: PE 개론에 ChatGPT/Claude/Gemini 상세 페이지 추가
- `1c86f19` fix: 커뮤니티 글쓰기 버튼 글자색이 안보이는 문제 수정
- `6224a17` feat: 즐겨찾기 페이지 추가 - GenAI 추천 사이트 모음 (9개 카테고리 60개 사이트)
- `2424253` feat: 메인 페이지 이모지를 Font Awesome 아이콘으로 교체 + 블루 테마 적용
- `1af9d99` docs: DEVLOG/CHANGELOG 업데이트 + 블루 테마 마이그레이션 문서 추가
- `3518ab5` fix: 하위 메뉴 겹침 문제 수정 (z-index, hover 제거, 외부 클릭 닫기)
- `b5068b4` fix: og:title을 'AI Prompt 프롬프트 엔지니어링 학습'으로 변경
