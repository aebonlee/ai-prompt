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

## GitHub Pages 배포

### 수동 배포
```bash
npm run build
# dist 폴더를 gh-pages 브랜치로 배포
```

### GitHub Actions 자동 배포
`.github/workflows/deploy.yml` 파일로 자동 배포 설정:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
          VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

## GitHub Secrets 설정
Repository Settings > Secrets and variables > Actions에서:
- `VITE_SUPABASE_URL`: Supabase 프로젝트 URL
- `VITE_SUPABASE_ANON_KEY`: Supabase anon key

## Supabase 설정
1. Supabase Dashboard > Authentication > URL Configuration
2. Site URL: `https://aebonlee.github.io/ai-prompt`
3. Redirect URLs: `https://aebonlee.github.io/ai-prompt/**`
4. OAuth 제공자 (GitHub, Google) 설정 시 callback URL 추가

## OG 이미지
- `public/og-image.png`: 1200x630px 권장
- Kakao 디버거에서 확인: https://developers.kakao.com/tool/debugger/sharing

## 환경 변수
| 변수 | 설명 |
|------|------|
| VITE_SUPABASE_URL | Supabase 프로젝트 URL |
| VITE_SUPABASE_ANON_KEY | Supabase 공개 키 |

모든 환경 변수는 `VITE_SUPABASE_` 접두사를 사용합니다.
