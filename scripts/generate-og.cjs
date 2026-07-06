/*
 * OG 이미지 생성기 — 전남대학교(JNU) 생성형 AI 교육
 * 실행: node scripts/generate-og.cjs
 * 출력: public/og-cnu.png (1200x630)
 */
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage, registerFont } = require('canvas');

// ── 한글 폰트 등록 (시스템 폰트) ──
const FONT_CANDIDATES = [
  { file: '/System/Library/Fonts/AppleSDGothicNeo.ttc', family: 'AppleSDGothicNeo' },
  { file: '/System/Library/Fonts/Supplemental/AppleGothic.ttf', family: 'AppleGothic' },
];
let FONT = 'sans-serif';
for (const c of FONT_CANDIDATES) {
  if (fs.existsSync(c.file)) {
    try { registerFont(c.file, { family: c.family }); FONT = c.family; break; } catch (e) {}
  }
}

const W = 1200, H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

// 전남대 그린 팔레트
const GREEN_DEEP = '#00352A';
const GREEN = '#00553F';
const GREEN_LIGHT = '#0A7A55';
const GOLD = '#E8B04B';

async function main() {
  // 배경 그라디언트 (좌상 → 우하)
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, GREEN_DEEP);
  g.addColorStop(0.55, GREEN);
  g.addColorStop(1, GREEN_LIGHT);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  // 우측 심볼 워터마크
  try {
    const sym = await loadImage(path.join(__dirname, '../public/symbol.png'));
    const sw = 520, sh = sw * (sym.height / sym.width);
    ctx.save();
    ctx.globalAlpha = 0.08;
    ctx.drawImage(sym, W - sw + 120, H - sh + 90, sw, sh);
    ctx.restore();
  } catch (e) { console.warn('symbol watermark skip:', e.message); }

  // 좌측 컨텐츠 여백
  const PAD = 80;
  let y = 96;

  // 상단 시그니처 로고 (다크 배경용 흰색 버전)
  try {
    const logo = await loadImage(path.join(__dirname, '../public/logo-jnu-dark.png'));
    const lh = 74, lw = lh * (logo.width / logo.height);
    ctx.drawImage(logo, PAD, y, lw, lh);
    y += lh;
  } catch (e) { console.warn('logo skip:', e.message); }

  // 영문 eyebrow
  y += 78;
  ctx.fillStyle = 'rgba(232,176,75,0.95)';
  ctx.font = `600 26px "${FONT}"`;
  ctx.textBaseline = 'alphabetic';
  drawTracked(ctx, 'CHONNAM NATIONAL UNIVERSITY', PAD, y, 4);

  // 메인 타이틀
  y += 92;
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `700 88px "${FONT}"`;
  ctx.fillText('생성형 AI 교육', PAD, y);

  // 골드 언더라인
  y += 26;
  ctx.fillStyle = GOLD;
  ctx.fillRect(PAD + 2, y, 132, 7);

  // 서브 타이틀
  y += 74;
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.font = `500 34px "${FONT}"`;
  ctx.fillText('전남대GPT 실습 중심 · 교수자·직원·조교 대상', PAD, y);

  y += 50;
  ctx.fillStyle = 'rgba(255,255,255,0.72)';
  ctx.font = `400 27px "${FONT}"`;
  ctx.fillText('기초·심화 / 데이터분석·논문 / 데이터분석·예산회계 / 연구·실험지원', PAD, y);

  // 하단 바
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.font = `600 26px "${FONT}"`;
  ctx.fillText('DreamIT Biz', PAD, H - 56);

  ctx.textAlign = 'right';
  ctx.fillStyle = 'rgba(255,255,255,0.78)';
  ctx.font = `500 26px "${FONT}"`;
  ctx.fillText('jnu.dreamitbiz.com', W - PAD, H - 56);
  ctx.textAlign = 'left';

  const out = path.join(__dirname, '../public/og-cnu.png');
  fs.writeFileSync(out, canvas.toBuffer('image/png'));
  console.log('✓ OG 이미지 생성 완료 (font:', FONT + '):', out);
}

// 자간 적용 텍스트 렌더
function drawTracked(ctx, text, x, y, tracking) {
  let cx = x;
  for (const ch of text) {
    ctx.fillText(ch, cx, y);
    cx += ctx.measureText(ch).width + tracking;
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
