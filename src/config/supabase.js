import { createClient } from '@supabase/supabase-js'

const PREFIX = 'VITE_SUPABASE_'

const supabaseUrl = import.meta.env[`${PREFIX}URL`]
const supabaseAnonKey = import.meta.env[`${PREFIX}ANON_KEY`]

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Supabase 환경 변수가 설정되지 않았습니다.\n' +
    `.env 파일에 ${PREFIX}URL 과 ${PREFIX}ANON_KEY 를 설정하세요.`
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
