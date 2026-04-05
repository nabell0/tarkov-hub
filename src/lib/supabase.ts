import { createClient } from '@supabase/supabase-js'

// .env.local 금고에 숨겨둔 URL과 Key를 가져옵니다.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Supabase와 통신할 수 있는 '연결 다리(client)'를 생성해서 내보냅니다.
export const supabase = createClient(supabaseUrl, supabaseKey)