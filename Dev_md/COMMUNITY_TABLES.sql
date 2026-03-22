-- ============================================
-- AI Prompt 커뮤니티 게시판 Supabase 테이블
-- ============================================

-- 1. posts 테이블
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(50) DEFAULT '자유',
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  author_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. comments 테이블
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  author_name VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. 인덱스
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);
CREATE INDEX IF NOT EXISTS idx_comments_post_id ON comments(post_id);

-- 4. updated_at 자동 갱신 트리거
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- 5. RLS (Row Level Security)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- posts: 누구나 읽기
CREATE POLICY "posts_select" ON posts
  FOR SELECT USING (true);

-- posts: 인증 사용자만 생성
CREATE POLICY "posts_insert" ON posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

-- posts: 본인 글만 수정
CREATE POLICY "posts_update" ON posts
  FOR UPDATE USING (auth.uid() = author_id);

-- posts: 본인 글만 삭제
CREATE POLICY "posts_delete" ON posts
  FOR DELETE USING (auth.uid() = author_id);

-- comments: 누구나 읽기
CREATE POLICY "comments_select" ON comments
  FOR SELECT USING (true);

-- comments: 인증 사용자만 생성
CREATE POLICY "comments_insert" ON comments
  FOR INSERT WITH CHECK (auth.uid() = author_id);

-- comments: 본인 댓글만 삭제
CREATE POLICY "comments_delete" ON comments
  FOR DELETE USING (auth.uid() = author_id);
