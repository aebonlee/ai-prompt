import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../config/supabase'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const noSupabaseError = { error: { message: 'Supabase가 설정되지 않았습니다. 관리자에게 문의하세요.' } }

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
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  }

  const signInWithGithub = async () => {
    if (!supabase) return noSupabaseError
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github'
    })
    return { data, error }
  }

  const signInWithGoogle = async () => {
    if (!supabase) return noSupabaseError
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
    return { data, error }
  }

  const signOut = async () => {
    if (!supabase) return noSupabaseError
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGithub,
    signInWithGoogle,
    signOut
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
