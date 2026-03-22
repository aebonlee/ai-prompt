# AI Prompt - Supabase 인증 설정 가이드

## 개요
이 프로젝트는 Supabase를 사용하여 사용자 인증을 관리합니다.
환경 변수는 `VITE_SUPABASE_` 접두사를 사용합니다.

## 1. Supabase 프로젝트 생성
1. [Supabase](https://supabase.com) 접속 → New Project
2. 프로젝트 생성 후 Settings > API에서 확인:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGci...`

## 2. 환경 변수 설정

### 로컬 개발 (.env)
```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

### GitHub Actions (Secrets)
Repository Settings > Secrets and variables > Actions:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### 접두사 방식 코드
```javascript
// src/config/supabase.js
const PREFIX = 'VITE_SUPABASE_'
const supabaseUrl = import.meta.env[`${PREFIX}URL`]
const supabaseAnonKey = import.meta.env[`${PREFIX}ANON_KEY`]
```

## 3. 인증 제공자 설정

### 이메일/비밀번호
- 기본 활성화 상태
- Supabase Dashboard > Authentication > Providers > Email

### GitHub OAuth
1. GitHub > Settings > Developer settings > OAuth Apps > New
2. **Homepage URL**: `https://ai-prompt.dreamitbiz.com`
3. **Authorization callback URL**: `https://xxxxx.supabase.co/auth/v1/callback`
4. Client ID, Client Secret 복사
5. Supabase Dashboard > Authentication > Providers > GitHub 활성화
6. Client ID, Client Secret 입력

### Google OAuth
1. [Google Cloud Console](https://console.cloud.google.com) > API & Services > Credentials
2. Create OAuth 2.0 Client ID
3. **Authorized JavaScript origins**: `https://ai-prompt.dreamitbiz.com`
4. **Authorized redirect URIs**: `https://xxxxx.supabase.co/auth/v1/callback`
5. Client ID, Client Secret 복사
6. Supabase Dashboard > Authentication > Providers > Google 활성화
7. Client ID, Client Secret 입력

## 4. URL Configuration
Supabase Dashboard > Authentication > URL Configuration:
- **Site URL**: `https://ai-prompt.dreamitbiz.com`
- **Redirect URLs**:
  - `https://ai-prompt.dreamitbiz.com`
  - `https://ai-prompt.dreamitbiz.com/**`
  - `http://localhost:5173` (개발용)
  - `http://localhost:5173/**` (개발용)

## 5. 인증 플로우

### 회원가입 (이메일)
```
사용자 → Register.jsx → supabase.auth.signUp() → 이메일 확인 → 로그인
```

### 로그인 (이메일)
```
사용자 → Login.jsx → supabase.auth.signInWithPassword() → AuthContext 업데이트
```

### OAuth 로그인 (GitHub/Google)
```
사용자 → Login.jsx → supabase.auth.signInWithOAuth({ provider }) → 리다이렉트 → AuthContext 업데이트
```

### 로그아웃
```
사용자 → Navbar → supabase.auth.signOut() → 홈으로 이동
```

## 6. AuthContext 제공 기능
```javascript
const { user, loading, signUp, signIn, signInWithGithub, signInWithGoogle, signOut } = useAuth()
```

| 메서드 | 파라미터 | 설명 |
|--------|---------|------|
| signUp | email, password, displayName | 이메일 회원가입 |
| signIn | email, password | 이메일 로그인 |
| signInWithGithub | - | GitHub OAuth 로그인 |
| signInWithGoogle | - | Google OAuth 로그인 |
| signOut | - | 로그아웃 |

## 7. 보호된 라우트
```jsx
<Route element={<ProtectedRoute />}>
  <Route path="/profile" element={<Profile />} />
</Route>
```
- 미인증 시 `/login`으로 리다이렉트
- `loading` 중 로딩 스피너 표시
