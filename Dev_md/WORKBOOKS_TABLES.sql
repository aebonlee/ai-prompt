-- ============================================
-- AI Prompt 실습워크북 게시판 Supabase 테이블
-- 접두사: ap_ (ai-prompt)
-- Supabase SQL Editor에서 실행
-- ============================================

-- 1. ap_workbooks 테이블
CREATE TABLE IF NOT EXISTS public.ap_workbooks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  week_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  content TEXT DEFAULT '',
  file_url TEXT DEFAULT '',
  is_published BOOLEAN DEFAULT true,
  views INTEGER DEFAULT 0,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. 인덱스
CREATE INDEX IF NOT EXISTS idx_ap_workbooks_week ON public.ap_workbooks(week_number);
CREATE INDEX IF NOT EXISTS idx_ap_workbooks_created_at ON public.ap_workbooks(created_at DESC);

-- 3. updated_at 자동 갱신 트리거
CREATE OR REPLACE FUNCTION public.ap_workbooks_update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_ap_workbooks_updated_at
  BEFORE UPDATE ON public.ap_workbooks
  FOR EACH ROW
  EXECUTE FUNCTION public.ap_workbooks_update_timestamp();

-- 4. 조회수 증가 RPC 함수
CREATE OR REPLACE FUNCTION public.ap_increment_workbook_views(workbook_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE public.ap_workbooks
  SET views = views + 1
  WHERE id = workbook_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. RLS (Row Level Security)
ALTER TABLE public.ap_workbooks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "ap_workbooks_select" ON public.ap_workbooks
  FOR SELECT USING (is_published = true);

CREATE POLICY "ap_workbooks_insert" ON public.ap_workbooks
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "ap_workbooks_update" ON public.ap_workbooks
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "ap_workbooks_delete" ON public.ap_workbooks
  FOR DELETE USING (auth.uid() = author_id);
