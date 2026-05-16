-- ============================================================
-- CNU 사이트: 구독/요금제 스키마
-- Supabase SQL Editor에서 실행하세요
-- ============================================================

-- 1. cnu_plans — 요금제 정의
CREATE TABLE IF NOT EXISTS cnu_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name_ko TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_ko TEXT,
  description_en TEXT,
  price INTEGER NOT NULL DEFAULT 0,
  duration_days INTEGER,
  monthly_token_limit INTEGER,
  daily_request_limit INTEGER,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. cnu_subscriptions — 사용자 구독
CREATE TABLE IF NOT EXISTS cnu_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES cnu_plans(id),
  status TEXT NOT NULL DEFAULT 'active',
  started_at TIMESTAMPTZ DEFAULT now(),
  expires_at TIMESTAMPTZ,
  order_number TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_cnu_subs_user ON cnu_subscriptions(user_id, status);

-- 3. cnu_shared_keys — 관리자 공유 API 키
CREATE TABLE IF NOT EXISTS cnu_shared_keys (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  provider TEXT NOT NULL UNIQUE,
  api_key TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  label TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. cnu_usage_log — 사용량 추적
CREATE TABLE IF NOT EXISTS cnu_usage_log (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL,
  provider TEXT NOT NULL,
  model TEXT NOT NULL,
  tool_id TEXT,
  input_tokens INTEGER DEFAULT 0,
  output_tokens INTEGER DEFAULT 0,
  estimated_cost NUMERIC(10,6) DEFAULT 0,
  key_source TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_cnu_usage_month ON cnu_usage_log(user_id, created_at);

-- ============================================================
-- RLS 정책
-- ============================================================

ALTER TABLE cnu_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE cnu_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE cnu_shared_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE cnu_usage_log ENABLE ROW LEVEL SECURITY;

-- cnu_plans: 모든 사용자 읽기 가능
CREATE POLICY "Plans are viewable by everyone"
  ON cnu_plans FOR SELECT
  USING (true);

-- cnu_subscriptions: 본인만 조회
CREATE POLICY "Users can view own subscriptions"
  ON cnu_subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- cnu_subscriptions: 서비스 역할로 생성 (클라이언트 insert 허용)
CREATE POLICY "Users can insert own subscriptions"
  ON cnu_subscriptions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- cnu_subscriptions: 본인 구독 업데이트
CREATE POLICY "Users can update own subscriptions"
  ON cnu_subscriptions FOR UPDATE
  USING (auth.uid() = user_id);

-- cnu_shared_keys: 활성 구독자만 읽기 가능 (핵심 보안)
CREATE POLICY "Active subscribers can view shared keys"
  ON cnu_shared_keys FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM cnu_subscriptions
      WHERE user_id = auth.uid()
        AND status = 'active'
        AND (expires_at IS NULL OR expires_at > now())
    )
    OR
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE email IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr', 'radical8566@gmail.com')
    )
  );

-- cnu_shared_keys: 관리자만 수정 가능
CREATE POLICY "Admins can manage shared keys"
  ON cnu_shared_keys FOR ALL
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE email IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr', 'radical8566@gmail.com')
    )
  );

-- cnu_usage_log: 본인 읽기
CREATE POLICY "Users can view own usage"
  ON cnu_usage_log FOR SELECT
  USING (auth.uid() = user_id);

-- cnu_usage_log: 본인 기록
CREATE POLICY "Users can insert own usage"
  ON cnu_usage_log FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- cnu_usage_log: 관리자 전체 읽기
CREATE POLICY "Admins can view all usage"
  ON cnu_usage_log FOR SELECT
  USING (
    auth.uid() IN (
      SELECT id FROM auth.users
      WHERE email IN ('aebon@kakao.com', 'aebon@kyonggi.ac.kr', 'radical8566@gmail.com')
    )
  );

-- ============================================================
-- 초기 데이터
-- ============================================================

INSERT INTO cnu_plans (slug, name_ko, name_en, description_ko, description_en, price, duration_days, monthly_token_limit, daily_request_limit, sort_order)
VALUES
  ('free', '무료', 'Free', '개인 API 키로 AI 도구 사용', 'Use AI tools with your own API keys', 0, NULL, NULL, NULL, 0),
  ('basic', 'Basic', 'Basic', '공유 API 키 + 월 50,000 토큰', 'Shared API keys + 50K tokens/month', 30000, 30, 50000, 50, 1),
  ('premium', 'Premium', 'Premium', '공유 API 키 + 무제한 사용', 'Shared API keys + unlimited usage', 50000, 30, NULL, NULL, 2)
ON CONFLICT (slug) DO NOTHING;
