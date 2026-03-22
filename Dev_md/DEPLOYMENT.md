# AI Prompt - 배포 가이드

## 개발 서버 실행

```bash
npm run dev
# http://localhost:5173 에서 실행
```

## 프로덕션 빌드

```bash
npm run build
# dist/ 폴더에 빌드 결과 생성
# SPA 라우팅을 위해 dist/404.html 자동 생성
```

## 빌드 미리보기

```bash
npm run preview
```

## GitHub Pages 배포 (gh-pages 브랜치 방식)

### 자동 배포 (GitHub Actions)

`main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동 실행됩니다.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 수동 배포

```bash
npm run build
npm run deploy
# gh-pages 패키지가 dist 폴더를 gh-pages 브랜치에 푸시
```

### GitHub Pages 설정

1. Repository > Settings > Pages
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **/ (root)**
4. Save

## 커스텀 도메인

- 도메인: `ai-prompt.dreamitbiz.com`
- CNAME 파일: `public/CNAME` (빌드 시 dist에 자동 복사)
- GitHub Pages Settings > Custom domain에서 설정 확인

## GitHub Secrets 설정

Repository > Settings > Secrets and variables > Actions:

- `VITE_SUPABASE_URL`: Supabase 프로젝트 URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anon key

> Secrets 미설정 시에도 사이트는 정상 표시됩니다 (인증 기능만 비활성화).

## Supabase 설정

1. Supabase Dashboard > Authentication > URL Configuration
2. Site URL: `https://ai-prompt.dreamitbiz.com`
3. Redirect URLs:
   - `https://ai-prompt.dreamitbiz.com`
   - `https://ai-prompt.dreamitbiz.com/**`
   - `http://localhost:5173` (개발용)
4. OAuth 제공자 (GitHub, Google) 설정 시 callback URL 추가

## OG 이미지

- `public/og-image.png`: 1200x630px 권장
- Kakao 디버거에서 확인: <https://developers.kakao.com/tool/debugger/sharing>

## 환경 변수

| 변수                  | 설명                  |
|----------------------|----------------------|
| VITE_SUPABASE_URL    | Supabase 프로젝트 URL |
| VITE_SUPABASE_ANON_KEY | Supabase 공개 키    |

모든 환경 변수는 `VITE_SUPABASE_` 접두사를 사용합니다.
