-- ============================================
-- AI Prompt 커뮤니티 게시판 Supabase 테이블
-- 접두사: ap_ (ai-prompt)
-- Supabase SQL Editor에서 실행
-- ============================================

-- 1. ap_posts 테이블
CREATE TABLE IF NOT EXISTS public.ap_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(50) DEFAULT '자유',
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  author_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. ap_comments 테이블
CREATE TABLE IF NOT EXISTS public.ap_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES public.ap_posts(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  author_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. 인덱스
CREATE INDEX IF NOT EXISTS idx_ap_posts_created_at ON public.ap_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ap_posts_category ON public.ap_posts(category);
CREATE INDEX IF NOT EXISTS idx_ap_comments_post_id ON public.ap_comments(post_id);

-- 4. updated_at 자동 갱신 트리거
CREATE OR REPLACE FUNCTION public.ap_posts_update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_ap_posts_updated_at
  BEFORE UPDATE ON public.ap_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.ap_posts_update_timestamp();

-- 5. RLS (Row Level Security)
ALTER TABLE public.ap_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ap_comments ENABLE ROW LEVEL SECURITY;

-- ap_posts 정책
CREATE POLICY "ap_posts_select" ON public.ap_posts
  FOR SELECT USING (true);

CREATE POLICY "ap_posts_insert" ON public.ap_posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "ap_posts_update" ON public.ap_posts
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "ap_posts_delete" ON public.ap_posts
  FOR DELETE USING (auth.uid() = author_id);

-- ap_comments 정책
CREATE POLICY "ap_comments_select" ON public.ap_comments
  FOR SELECT USING (true);

CREATE POLICY "ap_comments_insert" ON public.ap_comments
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "ap_comments_delete" ON public.ap_comments
  FOR DELETE USING (auth.uid() = author_id);
