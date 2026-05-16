-- ============================================================
-- CNU 사이트: 토큰 충전식 요금제 스키마
-- Supabase SQL Editor에서 실행하세요
-- ============================================================

-- 1. cnu_plans — 토큰 패키지 정의
DROP TABLE IF EXISTS cnu_plans CASCADE;
CREATE TABLE IF NOT EXISTS cnu_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name_ko TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_ko TEXT,
  description_en TEXT,
  price INTEGER NOT NULL DEFAULT 0,
  token_amount INTEGER NOT NULL DEFAULT 0,
  bonus_label_ko TEXT,
  bonus_label_en TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. cnu_subscriptions — 토큰 구매 기록 (충전 내역)
DROP TABLE IF EXISTS cnu_subscriptions CASCADE;
CREATE TABLE IF NOT EXISTS cnu_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id UUID NOT NULL REFERENCES cnu_plans(id),
  token_amount INTEGER NOT NULL DEFAULT 0,
  order_number TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_cnu_subs_user ON cnu_subscriptions(user_id);

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
CREATE INDEX IF NOT EXISTS idx_cnu_usage_user ON cnu_usage_log(user_id, created_at);

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
CREATE POLICY "Users can view own purchases"
  ON cnu_subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- cnu_subscriptions: 본인 생성
CREATE POLICY "Users can insert own purchases"
  ON cnu_subscriptions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- cnu_shared_keys: 토큰 잔액이 있는 사용자만 읽기 가능
CREATE POLICY "Users with token balance can view shared keys"
  ON cnu_shared_keys FOR SELECT
  USING (
    (
      -- 구매 토큰 합계 > 사용(shared) 토큰 합계
      COALESCE((SELECT SUM(token_amount) FROM cnu_subscriptions WHERE user_id = auth.uid()), 0)
      >
      COALESCE((SELECT SUM(input_tokens + output_tokens) FROM cnu_usage_log WHERE user_id = auth.uid() AND key_source = 'shared'), 0)
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
-- 초기 데이터: 토큰 패키지 3종
-- ============================================================

INSERT INTO cnu_plans (slug, name_ko, name_en, description_ko, description_en, price, token_amount, bonus_label_ko, bonus_label_en, sort_order)
VALUES
  ('starter', '스타터', 'Starter', '가볍게 시작하는 토큰 패키지', 'Lightweight token package to get started', 3000, 100000, NULL, NULL, 0),
  ('standard', '스탠다드', 'Standard', '가장 인기 있는 토큰 패키지', 'Most popular token package', 5000, 180000, '인기', 'Popular', 1),
  ('pro', '프로', 'Pro', '대량 사용을 위한 프리미엄 패키지', 'Premium package for heavy usage', 10000, 400000, '최고 혜택', 'Best Value', 2)
ON CONFLICT (slug) DO UPDATE SET
  name_ko = EXCLUDED.name_ko,
  name_en = EXCLUDED.name_en,
  description_ko = EXCLUDED.description_ko,
  description_en = EXCLUDED.description_en,
  price = EXCLUDED.price,
  token_amount = EXCLUDED.token_amount,
  bonus_label_ko = EXCLUDED.bonus_label_ko,
  bonus_label_en = EXCLUDED.bonus_label_en,
  sort_order = EXCLUDED.sort_order;
