const METRICS = {"p": [0.9778, 0.9837, 0.9827, 0.9827, 0.986, 0.9861, 0.9867, 0.9861, 0.9857, 0.9867, 0.9869, 0.9861, 0.9869, 0.9865, 0.9865, 0.9869, 0.9866, 0.9869, 0.9867, 0.9868, 0.9867, 0.9859, 0.9868, 0.9868, 0.9866, 0.9869, 0.9867, 0.9868, 0.9869, 0.9868, 0.9869, 0.987, 0.9868, 0.9867, 0.9868, 0.9869, 0.9871, 0.9868, 0.987, 0.9871, 0.987, 0.9872, 0.9868, 0.9868, 0.9869, 0.9869, 0.9868, 0.9874, 0.9869, 0.9871, 0.9869, 0.9875, 0.9875, 0.9878, 0.9871, 0.988, 0.9877, 0.988, 0.9877, 0.9877], "r": [0.9859, 0.9924, 0.9924, 0.9876, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924, 0.9924], "m50": [0.9819, 0.9827, 0.9818, 0.9924, 0.9864, 0.9805, 0.9836, 0.9797, 0.9843, 0.9821, 0.9814, 0.984, 0.9869, 0.9841, 0.9855, 0.983, 0.9861, 0.9888, 0.9828, 0.9885, 0.9837, 0.9851, 0.9845, 0.9839, 0.9861, 0.9836, 0.9824, 0.9858, 0.9835, 0.9864, 0.9855, 0.9844, 0.9871, 0.9862, 0.9893, 0.9865, 0.9871, 0.9853, 0.9866, 0.9848, 0.9847, 0.9831, 0.9852, 0.9832, 0.9852, 0.9871, 0.9863, 0.9899, 0.9886, 0.9872, 0.9883, 0.9877, 0.9868, 0.9883, 0.9887, 0.9883, 0.9875, 0.986, 0.9869, 0.9859], "m": [0.958, 0.9326, 0.9623, 0.9667, 0.9653, 0.9618, 0.9681, 0.9725, 0.9744, 0.973, 0.9768, 0.9794, 0.9831, 0.9758, 0.9782, 0.9749, 0.9795, 0.9845, 0.9804, 0.9885, 0.9804, 0.983, 0.9797, 0.98, 0.982, 0.9819, 0.975, 0.9816, 0.9801, 0.9801, 0.9855, 0.9825, 0.9862, 0.9826, 0.9861, 0.9842, 0.9835, 0.9826, 0.9839, 0.9812, 0.9823, 0.9815, 0.9829, 0.9795, 0.9808, 0.9863, 0.984, 0.9897, 0.9868, 0.986, 0.9849, 0.9865, 0.9857, 0.9862, 0.9862, 0.9877, 0.9846, 0.9853, 0.9861, 0.9852], "tl": [0.497, 0.4448, 0.4301, 0.4292, 0.4125, 0.3671, 0.3691, 0.3691, 0.3609, 0.3577, 0.3335, 0.3294, 0.318, 0.2982, 0.3131, 0.3062, 0.3052, 0.2917, 0.2991, 0.2889, 0.2809, 0.2742, 0.2765, 0.2816, 0.2721, 0.2731, 0.2681, 0.2671, 0.2646, 0.2528, 0.257, 0.2576, 0.2458, 0.2437, 0.2457, 0.2379, 0.2311, 0.2372, 0.2345, 0.2404, 0.2335, 0.2302, 0.2219, 0.2217, 0.2145, 0.211, 0.2155, 0.2067, 0.2031, 0.2002, 0.1475, 0.1426, 0.1438, 0.1377, 0.1385, 0.1346, 0.1341, 0.1334, 0.1275, 0.1236], "vl": [0.2741, 0.3186, 0.266, 0.2988, 0.2633, 0.2816, 0.2432, 0.2415, 0.2345, 0.2054, 0.2352, 0.1986, 0.1773, 0.22, 0.1966, 0.2093, 0.1851, 0.1663, 0.1937, 0.1785, 0.1623, 0.1681, 0.1825, 0.1868, 0.1753, 0.1548, 0.1541, 0.1521, 0.1573, 0.1626, 0.1482, 0.152, 0.1531, 0.1464, 0.1429, 0.1462, 0.1534, 0.133, 0.1484, 0.1607, 0.1438, 0.1397, 0.1553, 0.1341, 0.1277, 0.132, 0.144, 0.1247, 0.1214, 0.1167, 0.1262, 0.1262, 0.1328, 0.1222, 0.1293, 0.1237, 0.1197, 0.1112, 0.1157, 0.1158]};
/* YOLOv11-NCNN project site — interactions */
window.__site = true;
(() => {
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(pointer: fine)').matches;
const css = getComputedStyle(document.documentElement);
const C = n => css.getPropertyValue('--' + n).trim();

/* ---------- Nav ---------- */
const nav = $('#nav');
$('#navToggle').addEventListener('click', () => nav.classList.toggle('open'));
$$('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const links = $$('.nav-links a');
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
links.forEach(l => { const s = $(l.getAttribute('href')); if (s) spy.observe(s); });

/* ---------- Reveal ---------- */
const rev = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); rev.unobserve(e.target); }
}), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
$$('.reveal').forEach(el => rev.observe(el));

/* ---------- Count-up ---------- */
const cnt = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, end = parseFloat(el.dataset.count), dec = +el.dataset.dec || 0;
  if (reduce) { el.textContent = end.toFixed(dec); return; }
  const t0 = performance.now() + 900;
  const tick = t => { const p = clamp((t - t0) / 1500); el.textContent = (end * (1 - Math.pow(1 - p, 4))).toFixed(dec); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick); cnt.unobserve(el);
}), { threshold: .5 });
$$('[data-count]').forEach(el => cnt.observe(el));

/* ---------- Boot ---------- */
const boot = $('#boot');
const endBoot = () => { document.documentElement.classList.remove('booting'); boot.classList.add('done'); };
setTimeout(endBoot, reduce ? 0 : 1250);

/* ---------- HUD live readouts + tilt ---------- */
const hudFps = $('#hudFps'), hudFps2 = $('#hudFps2'), hudLat = $('#hudLat');
setInterval(() => { const f = 15.9 + Math.random() * .8; hudFps.textContent = hudFps2.textContent = f.toFixed(1); hudLat.textContent = Math.round(1000 / f) + ' ms'; }, 700);
const stage = $('#carStage'), hv = $('.hero-visual');
if (finePointer && !reduce) {
  hv.addEventListener('mousemove', e => { const r = hv.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    stage.style.setProperty('--ry', (x * 14).toFixed(2) + 'deg'); stage.style.setProperty('--rx', (-y * 10).toFixed(2) + 'deg'); });
  hv.addEventListener('mouseleave', () => { stage.style.removeProperty('--ry'); stage.style.removeProperty('--rx'); });
}
const eyesVid = $('#eyesVid');
new IntersectionObserver(es => es[0].isIntersecting ? eyesVid.play().catch(() => {}) : eyesVid.pause()).observe(eyesVid);

/* ---------- Detection cursor ---------- */
if (finePointer && !reduce) {
  document.documentElement.classList.add('has-cursor');
  const cur = $('#cursor'), lab = $('#cursorLabel');
  let mx = -100, my = -100, cx = -100, cy = -100, cw = 28, ch = 28, tw = 28, th = 28, lock = null;
  addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; cur.classList.add('show'); }, { passive: true });
  document.addEventListener('pointerleave', () => cur.classList.remove('show'));
  const targets = 'a, button, figure, [data-detect], .feature, .ring, video, summary, .tab';
  document.addEventListener('pointerover', e => {
    const t = e.target.closest(targets); lock = t;
    if (t) { const name = t.dataset.detect || (t.matches('a,button,summary,.tab') ? 'button' : t.matches('video') ? 'video_feed' : t.matches('figure') ? 'figure' : 'object');
      lab.textContent = name + ' ' + (0.9 + Math.random() * .09).toFixed(2); cur.classList.add('lock'); }
    else cur.classList.remove('lock');
  });
  (function loop() {
    if (lock && document.contains(lock)) { const r = lock.getBoundingClientRect(); const pad = 6; tw = r.width + pad * 2; th = r.height + pad * 2;
      const tx = r.left - pad, ty = r.top - pad; cx = lerp(cx, tx, .25); cy = lerp(cy, ty, .25); }
    else { tw = 28; th = 28; cx = lerp(cx, mx - 14, .35); cy = lerp(cy, my - 14, .35); }
    cw = lerp(cw, tw, .25); ch = lerp(ch, th, .25);
    cur.style.transform = `translate(${cx.toFixed(1)}px, ${cy.toFixed(1)}px)`; cur.style.width = cw.toFixed(1) + 'px'; cur.style.height = ch.toFixed(1) + 'px';
    requestAnimationFrame(loop);
  })();
}

/* ---------- Heading scramble ---------- */
const GLYPHS = '01<>/[]{}#*+=-_ABCDEFXYZ';
function scramble(el) {
  const text = el.dataset.text || el.textContent; el.dataset.text = text; el.setAttribute('aria-label', text);
  if (reduce) return;
  const t0 = performance.now(), dur = 900;
  (function step(t) {
    const p = clamp((t - t0) / dur), n = Math.floor(p * text.length);
    let out = '';
    for (let i = 0; i < text.length; i++) { const ch = text[i];
      out += i < n || ch === ' ' ? ch.replace(/&/g, '&amp;').replace(/</g, '&lt;') : `<span class="sc">${GLYPHS[(Math.random() * GLYPHS.length) | 0].replace('<', '&lt;')}</span>`; }
    el.innerHTML = out;
    if (p < 1) requestAnimationFrame(step); else el.textContent = text;
  })(t0);
}
const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { scramble(e.target); so.unobserve(e.target); } }), { threshold: .6 });
$$('.scramble').forEach(el => so.observe(el));

/* ---------- Magnetic buttons + card glow ---------- */
if (finePointer && !reduce) {
  $$('.magnetic').forEach(b => {
    b.addEventListener('mousemove', e => { const r = b.getBoundingClientRect();
      b.style.setProperty('--mx', ((e.clientX - r.left - r.width / 2) * .22).toFixed(1) + 'px');
      b.style.setProperty('--my', ((e.clientY - r.top - r.height / 2) * .3).toFixed(1) + 'px'); });
    b.addEventListener('mouseleave', () => { b.style.setProperty('--mx', '0px'); b.style.setProperty('--my', '0px'); });
  });
  $$('.glow, .hw').forEach(c => c.addEventListener('mousemove', e => { const r = c.getBoundingClientRect();
    c.style.setProperty('--gx', (e.clientX - r.left) + 'px'); c.style.setProperty('--gy', (e.clientY - r.top) + 'px'); }));
}

/* ---------- Statement word fill ---------- */
const st = $('#statement');
const KEY = new Set(['see,', 'decide', 'drive', 'real', 'time.', 'credit-card-sized']);
st.innerHTML = st.textContent.trim().split(/\s+/).map(w => `<span class="w${KEY.has(w) ? ' k' : ''}">${w}</span>`).join(' ');
const words = $$('.w', st);

/* ---------- Canvas helpers ---------- */
function fitCanvas(cv) { const d = Math.min(devicePixelRatio || 1, 2); const r = cv.getBoundingClientRect();
  cv.width = Math.round(r.width * d); cv.height = Math.round(r.height * d); const ctx = cv.getContext('2d'); ctx.setTransform(d, 0, 0, d, 0, 0); return { ctx, w: r.width, h: r.height }; }
function visibleLoop(el, draw) {
  let on = false, raf;
  const loop = t => { draw(t); if (on) raf = requestAnimationFrame(loop); };
  new IntersectionObserver(es => { on = es[0].isIntersecting && !reduce; if (on) raf = requestAnimationFrame(loop); else cancelAnimationFrame(raf); }).observe(el);
  draw(0);
}

/* ---------- Hero canvas: aurora light + rising data particles ---------- */
(() => {
  const cv = $('#heroCanvas'); let g = fitCanvas(cv);
  addEventListener('resize', () => { g = fitCanvas(cv); });
  const blobs = [
    { c: [91, 140, 255], r: .55, x: .78, y: .22, ax: .08, ay: .06, s: .00011 },
    { c: [244, 194, 91], r: .42, x: .62, y: .62, ax: .1, ay: .05, s: .00009 },
    { c: [62, 120, 255], r: .38, x: .12, y: .18, ax: .06, ay: .08, s: .00013 },
    { c: [255, 154, 74], r: .26, x: .3, y: .85, ax: .07, ay: .04, s: .00015 }
  ];
  const P = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), v: .00004 + Math.random() * .00012, r: Math.random() * 1.4 + .4, tw: Math.random() * 6.28, gold: Math.random() < .35 }));
  visibleLoop(cv, t => {
    const { ctx, w, h } = g; ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    blobs.forEach((b, i) => {
      const x = (b.x + Math.sin(t * b.s + i) * b.ax) * w, y = (b.y + Math.cos(t * b.s * 1.3 + i * 2) * b.ay) * h, R = b.r * Math.max(w, h);
      const gr = ctx.createRadialGradient(x, y, 0, x, y, R);
      gr.addColorStop(0, `rgba(${b.c},.16)`); gr.addColorStop(.5, `rgba(${b.c},.05)`); gr.addColorStop(1, `rgba(${b.c},0)`);
      ctx.fillStyle = gr; ctx.fillRect(0, 0, w, h);
    });
    P.forEach(p => {
      p.y -= p.v * 16; if (p.y < -.02) { p.y = 1.02; p.x = Math.random(); }
      const a = .25 + .45 * (Math.sin(t * .002 + p.tw) * .5 + .5);
      ctx.fillStyle = p.gold ? `rgba(244,194,91,${a})` : `rgba(160,190,255,${a * .8})`;
      ctx.beginPath(); ctx.arc(p.x * w, p.y * h, p.r, 0, 6.283); ctx.fill();
    });
    // slow scanning beam
    const sy = ((t * .00006) % 1.2 - .1) * h;
    const sg = ctx.createLinearGradient(0, sy - 80, 0, sy + 2);
    sg.addColorStop(0, 'rgba(244,194,91,0)'); sg.addColorStop(1, 'rgba(244,194,91,.035)');
    ctx.fillStyle = sg; ctx.fillRect(0, sy - 80, w, 82);
    ctx.globalCompositeOperation = 'source-over';
  });
})();

/* ---------- CTA canvas: node network ---------- */
(() => {
  const cv = $('#ctaCanvas'); let g = fitCanvas(cv);
  addEventListener('resize', () => { g = fitCanvas(cv); });
  const N = 56, P = Array.from({ length: N }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .0006, vy: (Math.random() - .5) * .0006 }));
  visibleLoop(cv, () => {
    const { ctx, w, h } = g; ctx.clearRect(0, 0, w, h);
    P.forEach(p => { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > 1) p.vx *= -1; if (p.y < 0 || p.y > 1) p.vy *= -1; });
    for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
      const dx = (P[i].x - P[j].x) * w, dy = (P[i].y - P[j].y) * h, d = Math.hypot(dx, dy);
      if (d < 140) { ctx.strokeStyle = `rgba(244,194,91,${(1 - d / 140) * .22})`; ctx.beginPath(); ctx.moveTo(P[i].x * w, P[i].y * h); ctx.lineTo(P[j].x * w, P[j].y * h); ctx.stroke(); }
    }
    ctx.fillStyle = 'rgba(62,230,160,.7)'; P.forEach(p => { ctx.beginPath(); ctx.arc(p.x * w, p.y * h, 1.6, 0, 7); ctx.fill(); });
  });
})();

/* ---------- Drive: scroll-driven robot ---------- */
const NS = 'http://www.w3.org/2000/svg';
const road = $('#roadPath'), L = road.getTotalLength(), trail = $('#trail'), car = $('#car');
trail.style.strokeDasharray = L; trail.style.strokeDashoffset = L;
const SIGNS = [
  { t: .25, k: 'ped',   label: 'pedestrian crossing sign', conf: .94, act: 'SLOW DOWN',  cls: 'act-slow', speed: 40, col: '#ffffff', side: 1 },
  { t: .47, k: 'right', label: 'turn right sign',          conf: .94, act: 'TURN RIGHT', cls: 'act-turn', speed: 75, col: C('cyan'), side: -1 },
  { t: .70, k: 'u',     label: 'U turn sign',              conf: .93, act: 'TURN LEFT',  cls: 'act-turn', speed: 70, col: C('blue'), side: 1 },
  { t: .955, k: 'stop', label: 'no entry sign',            conf: .92, act: 'STOP',       cls: 'act-stop', speed: 0,  col: C('red'),  side: 1 }
];
const pt = t => road.getPointAtLength(clamp(t) * L);
const signArt = {
  ped: `<rect x="-17" y="-17" width="34" height="34" rx="3" transform="rotate(45)" fill="#f2c230" stroke="#111" stroke-width="2.5"/><circle cx="1" cy="-9" r="3" fill="#111"/><path d="M0-5-3 3l4 3 1 7M-3 3l-3 8M0-4l5 4h3M-1-4-5 0h-3" fill="none" stroke="#111" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  right: `<rect x="-17" y="-17" width="34" height="34" rx="3" transform="rotate(45)" fill="#f2c230" stroke="#111" stroke-width="2.5"/><path d="M-5 10V0a3 3 0 0 1 3-3h9M3-8l5 5-5 5" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
  u: `<circle r="21" fill="#1f4fd1" stroke="#fff" stroke-width="3"/><path d="M-7 11V-2a7 7 0 0 1 14 0v9M2 3l5 5 5-5" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
  stop: `<circle r="21" fill="#d82c3c" stroke="#fff" stroke-width="3"/><rect x="-13" y="-4" width="26" height="8" rx="1.5" fill="#fff"/>`
};
const gSigns = $('#signs'), gBoxes = $('#boxes');
SIGNS.forEach(s => {
  const a = pt(s.t), b = pt(s.t + .005), ang = Math.atan2(b.y - a.y, b.x - a.x);
  const nx = -Math.sin(ang) * s.side, ny = Math.cos(ang) * s.side, off = 74;
  s.x = clamp(a.x + nx * off, 30, 970); s.y = clamp(a.y + ny * off, 34, 526);
  const g = document.createElementNS(NS, 'g');
  g.innerHTML = `<line x1="${s.x}" y1="${s.y}" x2="${a.x + nx * 40}" y2="${a.y + ny * 40}" stroke="#3a4766" stroke-width="3"/><g transform="translate(${s.x} ${s.y})">${signArt[s.k]}</g>`;
  gSigns.appendChild(g);
  const bx = document.createElementNS(NS, 'g'); bx.setAttribute('class', 'det-box'); bx.style.opacity = 0;
  const lw = s.label.length * 7.9 + 44;
  const lx = clamp(s.x - 30, 4, 996 - lw);
  bx.innerHTML = `<rect class="bx" x="${s.x - 30}" y="${s.y - 30}" width="60" height="60" stroke="${s.col}"/><rect x="${lx}" y="${s.y - 52}" width="${lw}" height="20" fill="${s.col}"/><text x="${lx + 6}" y="${s.y - 37}" fill="#060912">${s.label} ${s.conf}</text>`;
  gBoxes.appendChild(bx); s.box = bx;
});
// scroll progress -> distance along the road (slow near pedestrian, stop before no entry)
const KF = [[0, 0], [.1, .12], [.18, .19], [.34, .28], [.5, .45], [.66, .64], [.8, .82], [.9, .9], [1, .9]];
const mapT = p => { for (let i = 1; i < KF.length; i++) if (p <= KF[i][0]) { const [p0, t0] = KF[i - 1], [p1, t1] = KF[i]; return lerp(t0, t1, (p - p0) / (p1 - p0)); } return .9; };
const cDet = $('#cDet'), cConf = $('#cConf'), cAct = $('#cAct'), cSpeed = $('#cSpeed'), cSpeedTxt = $('#cSpeedTxt'), logItems = $$('#cLog li');
let lastKey = '';
function updateDrive(p) {
  const t = mapT(p), a = pt(t), b = pt(t + .004), ang = Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
  car.setAttribute('transform', `translate(${a.x.toFixed(1)} ${a.y.toFixed(1)}) rotate(${ang.toFixed(1)})`);
  trail.style.strokeDashoffset = (L * (1 - t)).toFixed(1);
  let active = null;
  SIGNS.forEach((s, i) => {
    const near = t > s.t - .12 && t < s.t + .03;
    s.box.style.opacity = near ? 1 : 0;
    if (near) active = s;
    logItems[i].classList.toggle('done', t >= s.t - .05);
    logItems[i].classList.toggle('now', near);
  });
  let speed = 100;
  if (active) speed = active.k === 'stop' ? Math.round(lerp(100, 0, clamp((t - .84) / .06))) : active.speed;
  const key = active ? active.k : 'none';
  if (key !== lastKey) {
    lastKey = key;
    if (active) { cDet.textContent = active.label; cConf.textContent = active.conf.toFixed(2); cAct.textContent = active.act; cAct.className = 'act ' + active.cls; }
    else { cDet.textContent = 'No sign in view'; cConf.textContent = '—'; cAct.textContent = 'KEEP MOVING'; cAct.className = 'act act-go'; }
  }
  cSpeed.style.width = speed + '%';
  cSpeed.style.background = speed === 0 ? C('red') : speed < 60 ? C('amber') : '';
  cSpeedTxt.textContent = speed + '%';
  car.classList.toggle('braking', !!active && (active.k === 'stop' || active.k === 'ped'));
}

/* ---------- Tour / eyes / band / horizontal ---------- */
const tour = $('#robot'), tourZoom = $('#tourZoom'), tourView = $('#tourView'), tsteps = $$('.tstep'), tdots = $$('#tourDots i'), tpins = $$('.tpin'), reticle = $('#reticle'), reticleTxt = $('#reticleTxt');
// zoom targets in % of the image box (x, y, scale) — one per step
const TZ = [[50, 50, 1], [17.5, 24.6, 2.3], [23.2, 73.9, 2.3], [18.7, 86, 2.4], [66, 26, 1.9], [63.6, 73.9, 1.9]];
const TL = ['scanning', 'pi_camera 0.98', 'ultrasonic 0.97', 'grayscale_module 0.96', 'robot_hat + pi5 0.97', 'wheel_drive 0.98'];
const eyes = $('#eyes'), eyesFrame = $('#eyesFrame'), etags = $$('.etag');
const band = $('#band'), brows = $$('.brow'), bandCar = $('#bandCar');
const hs = $('#demos'), hsTrack = $('#hsTrack'), hsBar = $('#hsBar'), hcards = $$('.hcard');
const easeIO = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const sm = { tour: 0, eyes: 0, band: 0, hs: 0 }, tg = { ...sm };
let lastStep = -1;
function secProg(el) { const r = el.getBoundingClientRect(); return clamp(-r.top / (r.height - innerHeight)); }
function sizeHs() { const extra = Math.max(0, hsTrack.scrollWidth - innerWidth); hs.style.height = (innerHeight + extra * 1.15) + 'px'; }
addEventListener('resize', sizeHs); addEventListener('load', sizeHs); sizeHs();
function renderSmooth() {
  // tour
  const pt = sm.tour * (TZ.length - 1) * 1.08, i = Math.min(TZ.length - 1, Math.floor(pt)), f = easeIO(clamp(pt - i));
  const A = TZ[i], B = TZ[Math.min(TZ.length - 1, i + 1)];
  const x = lerp(A[0], B[0], f), y = lerp(A[1], B[1], f), sc = lerp(A[2], B[2], f);
  const zw = tourZoom.offsetWidth, zh = tourZoom.offsetHeight;
  tourZoom.style.transform = `translate(${((50 - x) / 100 * zw * sc).toFixed(1)}px, ${((50 - y) / 100 * zh * sc).toFixed(1)}px) scale(${sc.toFixed(3)})`;
  const step = Math.min(TZ.length - 1, Math.round(pt));
  if (step !== lastStep) { lastStep = step; tsteps.forEach((t, k) => t.classList.toggle('on', k === step)); tdots.forEach((d, k) => d.classList.toggle('on', k === step));
    reticleTxt.textContent = TL[step]; reticle.classList.toggle('off', step === 0); tpins.forEach(p => p.style.opacity = step === 0 ? 1 : 0); }
  // eyes
  const e = easeIO(clamp(sm.eyes / .55));
  eyesFrame.style.setProperty('--s', lerp(.62, 1, e).toFixed(4));
  etags.forEach(t => t.classList.toggle('on', sm.eyes > +t.style.getPropertyValue('--t')));
  // band
  brows.forEach((r, k) => r.style.transform = `translateX(${(+r.dataset.dir * (sm.band - .5) * 40 - 12).toFixed(2)}%)`);
  bandCar.style.transform = `translateY(${lerp(140, -30, sm.band).toFixed(1)}px) scale(${lerp(.78, 1, clamp(sm.band * 1.4)).toFixed(3)}) rotate(${lerp(-4, 2, sm.band).toFixed(2)}deg)`;
  // horizontal
  const extra = Math.max(0, hsTrack.scrollWidth - innerWidth);
  hsTrack.style.transform = `translateX(${(-extra * sm.hs).toFixed(1)}px)`;
  hsBar.style.transform = `scaleX(${sm.hs.toFixed(4)})`;
  hcards.forEach((c, k) => c.style.setProperty('--tilt', clamp((sm.hs - tg.hs) * 10 * (k % 2 ? 1 : -1), -1.5, 1.5).toFixed(2) + 'deg'));
}
let smRunning = false;
function smoothLoop() {
  let moving = false;
  for (const k in sm) { const d = tg[k] - sm[k]; if (Math.abs(d) > .0004) { sm[k] += d * (reduce ? 1 : .12); moving = true; } else sm[k] = tg[k]; }
  renderSmooth();
  if (moving) requestAnimationFrame(smoothLoop); else smRunning = false;
}
function kickSmooth() { tg.tour = secProg(tour); tg.eyes = secProg(eyes); const br = band.getBoundingClientRect(); tg.band = clamp((innerHeight - br.top) / (innerHeight + br.height)); tg.hs = secProg(hs);
  if (!smRunning) { smRunning = true; requestAnimationFrame(smoothLoop); } }

/* ---------- Scroll-driven pieces ---------- */
const prog = $('#progress'), drive = $('#drive'), pipeline = $('#pipeline'), pipeLine = $('#pipeLine'), psteps = $$('.pstep'), race = $('.race'), lanes = $$('.lane-r');
let ticking = false;
function onScroll() {
  ticking = false;
  const vh = innerHeight, sy = scrollY, H = document.documentElement.scrollHeight - vh;
  prog.style.transform = `scaleX(${clamp(sy / H).toFixed(4)})`;
  nav.classList.toggle('scrolled', sy > 20);

  // statement
  const sr = st.getBoundingClientRect();
  const sp = clamp((vh * .85 - sr.top) / (sr.height + vh * .3));
  const on = Math.round(sp * words.length);
  words.forEach((w, i) => w.classList.toggle('on', i < on));

  kickSmooth();
  // drive
  const dr = drive.getBoundingClientRect();
  updateDrive(clamp(-dr.top / (dr.height - vh)));

  // pipeline
  const pr = pipeline.getBoundingClientRect();
  const pp = clamp((vh * .8 - pr.top) / (vh * .55));
  pipeLine.style.strokeDashoffset = (100 * (1 - pp)).toFixed(1);
  psteps.forEach((s, i) => s.classList.toggle('lit', pp >= i / (psteps.length - 1) - .02));

  // race
  const rr = race.getBoundingClientRect();
  const rp = clamp((vh * .9 - rr.top) / (vh * .6));
  const ease = 1 - Math.pow(1 - rp, 3);
  lanes.forEach(l => { const f = +l.dataset.fps; l.querySelector('i').style.width = (f / 20 * 100 * ease).toFixed(2) + '%'; l.querySelector('.fpsnum').textContent = (f * ease).toFixed(1); });
}
const req = () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } };
addEventListener('scroll', req, { passive: true });
addEventListener('resize', req);
onScroll();

/* ---------- Rings ---------- */
(() => {
  const i = METRICS.m.indexOf(Math.max(...METRICS.m));
  const vals = { P: METRICS.p[i], R: METRICS.r[i], M50: METRICS.m50[i], M: METRICS.m[i] };
  Object.entries(vals).forEach(([k, v]) => { $('#t' + k).textContent = v.toFixed(3); $('#r' + k).dataset.v = v; });
  const CIRC = 2 * Math.PI * 52;
  const ro = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return;
    const c = e.target.querySelector('.r-fg'); setTimeout(() => c.style.strokeDashoffset = (CIRC * (1 - c.dataset.v)).toFixed(1), 150); ro.unobserve(e.target); }), { threshold: .4 });
  $$('.ring').forEach(r => ro.observe(r));
})();

/* ---------- Training chart ---------- */
const SERIES = {
  acc: { dec: 2, lines: [
    { k: 'p', name: 'Precision', c: C('cyan') }, { k: 'r', name: 'Recall', c: C('green') },
    { k: 'm50', name: 'mAP@0.5', c: C('amber') }, { k: 'm', name: 'mAP@0.5:0.95', c: C('blue') } ] },
  loss: { dec: 1, lines: [ { k: 'tl', name: 'Train box loss', c: C('cyan') }, { k: 'vl', name: 'Val box loss', c: C('red') } ] }
};
const chartEl = $('#chart'), legendEl = $('#legend');
function drawChart(type) {
  const cfg = SERIES[type], W = chartEl.clientWidth, H = chartEl.clientHeight, n = METRICS.p.length;
  const all = cfg.lines.flatMap(l => METRICS[l.k]);
  const lo = type === 'acc' ? Math.floor(Math.min(...all) * 20) / 20 : 0;
  const hi = type === 'acc' ? 1 : Math.ceil(Math.max(...all) * 10) / 10;
  const pad = { l: 46, r: 12, t: 10, b: 28 };
  const x = i => pad.l + i / (n - 1) * (W - pad.l - pad.r), y = v => pad.t + (1 - (v - lo) / (hi - lo)) * (H - pad.t - pad.b);
  let s = `<svg viewBox="0 0 ${W} ${H}"><defs>${cfg.lines.map((l, j) => `<linearGradient id="ga${j}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${l.c}" stop-opacity=".18"/><stop offset="1" stop-color="${l.c}" stop-opacity="0"/></linearGradient>`).join('')}</defs>`;
  for (let k = 0; k <= 4; k++) { const v = lo + (hi - lo) * k / 4; s += `<line class="gl" x1="${pad.l}" x2="${W - pad.r}" y1="${y(v)}" y2="${y(v)}"/><text x="${pad.l - 8}" y="${y(v) + 4}" text-anchor="end">${v.toFixed(cfg.dec + (type === 'acc' ? 1 : 0))}</text>`; }
  [1, 10, 20, 30, 40, 50, 60].forEach(e => s += `<text x="${x(e - 1)}" y="${H - 6}" text-anchor="middle">${e}</text>`);
  cfg.lines.forEach((l, j) => {
    const d = METRICS[l.k].map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
    if (j === 0 || type === 'loss') s += `<path d="${d}L${x(n - 1)},${y(lo)}L${x(0)},${y(lo)}Z" fill="url(#ga${j})" class="area"/>`;
    s += `<path d="${d}" fill="none" stroke="${l.c}" stroke-width="2.2" stroke-linejoin="round" class="ln"/>`;
    const lv = METRICS[l.k][n - 1]; s += `<circle cx="${x(n - 1)}" cy="${y(lv)}" r="3.5" fill="${l.c}"/>`;
  });
  s += `<line id="hov" y1="${pad.t}" y2="${H - pad.b}" stroke="${C('muted')}" stroke-dasharray="3 3" opacity="0"/></svg><div class="tip"></div>`;
  chartEl.innerHTML = s;
  if (!reduce) chartEl.querySelectorAll('.ln').forEach(p => { const Lp = p.getTotalLength(); p.style.strokeDasharray = Lp; p.style.strokeDashoffset = Lp; p.getBoundingClientRect(); p.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(.2,.8,.2,1)'; p.style.strokeDashoffset = 0; });
  legendEl.innerHTML = cfg.lines.map(l => `<span><i style="background:${l.c}"></i>${l.name}</span>`).join('');
  const tip = chartEl.querySelector('.tip'), hov = chartEl.querySelector('#hov');
  chartEl.onpointermove = ev => {
    const r = chartEl.getBoundingClientRect(), i = clamp(Math.round((ev.clientX - r.left - pad.l) / (W - pad.l - pad.r) * (n - 1)), 0, n - 1);
    hov.setAttribute('x1', x(i)); hov.setAttribute('x2', x(i)); hov.setAttribute('opacity', 1);
    tip.innerHTML = `<b>Epoch ${i + 1}</b><br>` + cfg.lines.map(l => `<span style="color:${l.c}">■</span> ${l.name}: ${METRICS[l.k][i].toFixed(3)}`).join('<br>');
    tip.style.opacity = 1; tip.style.top = '8px'; tip.style.left = (x(i) > W * .6 ? x(i) - tip.offsetWidth - 12 : x(i) + 12) + 'px';
  };
  chartEl.onpointerleave = () => { tip.style.opacity = 0; hov.setAttribute('opacity', 0); };
}
let cur = 'acc';
$$('.tab').forEach(t => t.addEventListener('click', () => { $$('.tab').forEach(b => b.classList.toggle('active', b === t)); cur = t.dataset.chart; drawChart(cur); }));
const chObs = new IntersectionObserver(es => { if (es[0].isIntersecting) { drawChart(cur); chObs.disconnect(); } }, { threshold: .3 });
chObs.observe(chartEl);
let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => chartEl.innerHTML && drawChart(cur), 150); });

/* ---------- Lightbox ---------- */
const lb = $('#lightbox'), lbImg = $('img', lb);
$$('.gallery figure').forEach(f => f.addEventListener('click', () => { lbImg.src = f.dataset.full; lbImg.alt = $('img', f).alt; lb.classList.add('open'); }));
lb.addEventListener('click', e => { if (e.target !== lbImg) lb.classList.remove('open'); });
addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
})();
