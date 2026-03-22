-- ============================================
-- AI Prompt 강의안 게시판 테이블
-- Supabase SQL Editor에서 실행
-- ============================================

-- lectures 테이블
create table if not exists public.lectures (
  id uuid primary key default gen_random_uuid(),
  week_number integer not null,
  title text not null,
  content text default '',
  file_url text default '',
  is_published boolean default true,
  views integer default 0,
  author_id uuid references auth.users(id) on delete set null,
  author_name text default '',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 인덱스
create index if not exists idx_lectures_week on public.lectures(week_number);
create index if not exists idx_lectures_created on public.lectures(created_at desc);

-- RLS 활성화
alter table public.lectures enable row level security;

-- 누구나 공개된 강의안 읽기
create policy "Anyone can read published lectures"
  on public.lectures for select
  using (is_published = true);

-- 인증 사용자 강의안 생성
create policy "Auth users can create lectures"
  on public.lectures for insert
  with check (auth.uid() = author_id);

-- 본인 강의안 수정
create policy "Authors can update own lectures"
  on public.lectures for update
  using (auth.uid() = author_id);

-- 본인 강의안 삭제
create policy "Authors can delete own lectures"
  on public.lectures for delete
  using (auth.uid() = author_id);

-- updated_at 자동 갱신 트리거
create or replace function update_lectures_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_lectures_updated_at
  before update on public.lectures
  for each row execute function update_lectures_updated_at();
