/* effects.js
   เอฟเฟกต์ที่ใช้ร่วมกันทุกหน้า:
   - ✨ Reveal animation ตอนเปิดหน้า (เติมคลาส .active ให้การ์ดหลัก)
   - 🌼 Bloom overlay ตอนเปิดหน้า (ดอกไม้บานคลุมจอก่อนเผยเนื้อหา)
   - 🎉 Confetti กระจายตามหัวข้อของหน้านั้น ๆ
   - ✦ Sparkle ตามเมาส์
   หน้าแต่ละหน้าแค่ต้อง set window.PAGE_ID = "<section-id>" ก่อนเรียกไฟล์นี้
*/

/* ===== อิโมจิ confetti ต่อหัวข้อ (ให้ตรงกับไฟล์เดิม) ===== */
const sectionEmojis = {
  'cover-slide': ['🎀', '💗', '⭐', '🌸', '✨'],
  'preface': ['💌', '🌸', '✨', '💗'],
  'profile': ['👩‍🎓', '💗', '⭐', '🌷'],
  'education': ['🎓', '📚', '✨', '⭐'],
  'study': ['🩺', '💉', '🧬', '❤️‍🩹', '⚕️'],
  'activities': ['🏆', '🎉', '🥇', '✨', '🎊']
};

function burstConfetti(sectionId) {
  const emojis = sectionEmojis[sectionId] || ['✨', '💗', '⭐'];
  const count = 6;
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const angle = Math.random() * Math.PI * 2;
    const dist = 40 + Math.random() * 60;
    piece.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    piece.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    piece.style.setProperty('--rot', (Math.random() * 360 - 180) + 'deg');
    piece.style.fontSize = (12 + Math.random() * 8) + 'px';
    piece.style.top = '46%';
    piece.style.left = '50%';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 450);
  }
}

/* ===== กลีบดอกไม้บาน (ใช้ตอนเปิดหน้าใหม่) ===== */
function buildBloomOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'bloom-overlay';
  overlay.id = 'bloomOverlay';
  const flower = document.createElement('div');
  flower.className = 'bloom-flower';
  flower.id = 'bloomFlower';

  const PETAL_COUNT = 12;
  for (let i = 0; i < PETAL_COUNT; i++) {
    const petal = document.createElement('div');
    petal.className = 'bloom-petal';
    petal.style.setProperty('--ang', (i * (360 / PETAL_COUNT)) + 'deg');
    flower.appendChild(petal);
  }
  const center = document.createElement('div');
  center.className = 'bloom-center';
  center.textContent = '🌼';
  flower.appendChild(center);

  overlay.appendChild(flower);
  document.body.appendChild(overlay);
  return overlay;
}

function playOpeningBloom(sectionId) {
  const overlay = buildBloomOverlay();
  overlay.style.opacity = 1;
  overlay.classList.add('blooming-in');
  setTimeout(() => {
    // เผยเนื้อหาของหน้า
    const inner = document.querySelector('.cover, .page-card');
    if (inner) inner.classList.add('active');
    burstConfetti(sectionId);

    overlay.classList.remove('blooming-in');
    overlay.classList.add('blooming-out');
    setTimeout(() => {
      overlay.remove();
    }, 220);
  }, 180);
}

/* ===== เริ่มทำงานเมื่อโหลดหน้าเสร็จ ===== */
document.addEventListener('DOMContentLoaded', () => {
  const sectionId = window.PAGE_ID || 'cover-slide';
  // หน่วงเล็กน้อยให้การ์ดเข้าที่ก่อนเล่นเอฟเฟกต์บาน
  setTimeout(() => playOpeningBloom(sectionId), 120);
});

/* ===== SPARKLE ตามเมาส์ ===== */
const sparkleChars = ['✦', '✨', '💗', '⭐'];
let lastSparkleTime = 0;
document.addEventListener('mousemove', (e) => {
  const now = Date.now();
  if (now - lastSparkleTime < 180) return;
  lastSparkleTime = now;
  const s = document.createElement('span');
  s.className = 'cursor-sparkle';
  s.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
  s.style.left = e.clientX + 'px';
  s.style.top = e.clientY + 'px';
  s.style.color = Math.random() > 0.5 ? '#ff8fc2' : '#5a9a45';
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 820);
});
