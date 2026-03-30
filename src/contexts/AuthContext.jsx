import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../config/supabase'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [accountBlock, setAccountBlock] = useState(null)

  const clearAccountBlock = () => setAccountBlock(null)

  async function loadProfile(userId) {
    try {
      const { data: profileData } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single()
      if (profileData) {
        setProfile(profileData)

        // signup_domain / visited_sites 자동 처리
        const currentDomain = window.location.hostname
        const updates = {}
        if (!profileData.signup_domain) updates.signup_domain = currentDomain
        const sites = Array.isArray(profileData.visited_sites) ? profileData.visited_sites : []
        if (!sites.includes(currentDomain)) {
          updates.visited_sites = [...sites, currentDomain]
        }
        if (Object.keys(updates).length > 0) {
          supabase.from('user_profiles').update(updates).eq('id', userId).then(() => {})
        }

        // 계정 상태 체크
        try {
          const { data: statusData } = await supabase.rpc('check_user_status', {
            target_user_id: userId,
            current_domain: currentDomain,
          })
          if (statusData && statusData.status && statusData.status !== 'active') {
            setAccountBlock({
              status: statusData.status,
              reason: statusData.reason || '',
              suspended_until: statusData.suspended_until || null,
            })
            await supabase.auth.signOut()
            setUser(null)
            setProfile(null)
            return
          }
        } catch {
          // check_user_status 함수 미존재 시 무시
        }
      }
    } catch {
      setProfile(null)
    }
  }

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const u = session?.user ?? null
      setUser(u)
      if (u) {
        loadProfile(u.id)
        if (event === 'SIGNED_IN') {
          supabase.from('user_profiles')
            .update({ last_sign_in_at: new Date().toISOString() })
            .eq('id', u.id)
            .then(() => {})
        }
      } else {
        setProfile(null)
      }
      if (event === 'INITIAL_SESSION') {
        setLoading(false)
      }
    })

    // 안전장치: 5초 내 INITIAL_SESSION 없으면 강제 해제
    const fallback = setTimeout(() => {
      setLoading(prev => {
        if (prev) console.warn('Auth: INITIAL_SESSION timeout')
        return false
      })
    }, 5000)

    return () => {
      clearTimeout(fallback)
      subscription.unsubscribe()
    }
  }, [])

  const noSupabaseError = { error: { message: 'Supabase가 설정되지 않았습니다.' } }

  const signUp = async (email, password, displayName) => {
    if (!supabase) return noSupabaseError
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: displayName }
      }
    })
    return { data, error }
  }

  const signIn = async (email, password) => {
    if (!supabase) return noSupabaseError
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    return { data, error }
  }

  const signInWithGoogle = async () => {
    if (!supabase) return noSupabaseError
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + window.location.pathname }
    })
    return { data, error }
  }

  const signInWithKakao = async () => {
    if (!supabase) return noSupabaseError
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: window.location.origin + window.location.pathname,
        scopes: 'profile_nickname profile_image account_email',
      }
    })
    return { data, error }
  }

  const resetPassword = async (email) => {
    if (!supabase) return noSupabaseError
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/login',
    })
    return { data, error }
  }

  const signOut = async () => {
    if (!supabase) return noSupabaseError
    const { error } = await supabase.auth.signOut({ scope: 'local' })
    return { error }
  }

  const value = {
    user,
    profile,
    loading,
    accountBlock,
    clearAccountBlock,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithKakao,
    resetPassword,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
