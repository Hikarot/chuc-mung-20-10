/* ============================================================
   CHỨC NĂNG CHÍNH - RENDER DỮ LIỆU, GÕ CHỮ & PHÁO HOA
   ============================================================ */

/* 1. KHỞI TẠO DANH SÁCH THẺ XIN VÍA */
function initVouchers() {
  const voucherContainer = document.getElementById('voucher-container');
  if (!voucherContainer || !CONFIG || !CONFIG.vouchers) return;

  CONFIG.vouchers.forEach((v) => {
    const card = document.createElement('div');
    card.className = 'voucher-card';
    card.innerHTML = `
      <div class="voucher-icon">${v.icon}</div>
      <div class="voucher-title">${v.title}</div>
      <div class="voucher-desc">${v.desc}</div>
      <span class="voucher-status">Chạm để xin vía ✨</span>
    `;

    card.addEventListener('click', () => {
      card.classList.toggle('claimed');
      const statusEl = card.querySelector('.voucher-status');
      if (card.classList.contains('claimed')) {
        statusEl.innerText = "Đã nhận vía thành công ✅";
        if (typeof confetti === 'function') {
          confetti({ particleCount: 35, spread: 60, origin: { y: 0.75 } });
        }
      } else {
        statusEl.innerText = "Chạm để xin vía ✨";
      }
    });

    voucherContainer.appendChild(card);
  });
}

/* 2. KHỞI TẠO BỘ SƯU TẬP ẢNH TÔN VINH (POLAROID) */
function initGallery() {
  const galleryContainer = document.getElementById('gallery-container');
  if (!galleryContainer || !CONFIG || !CONFIG.cards) return;

  CONFIG.cards.forEach((c) => {
    const item = document.createElement('div');
    item.className = 'polaroid';
    item.innerHTML = `
      <img src="${c.url}" alt="20/10 Card" loading="lazy">
      <div class="polaroid-caption">${c.caption}</div>
    `;
    galleryContainer.appendChild(item);
  });
}

/* 3. HIỆU ỨNG GÕ CHỮ TỰ ĐỘNG CHO BỨC THƯ (TYPEWRITER) */
let typedStarted = false;
function startTypewriter() {
  if (typedStarted) return;
  typedStarted = true;
  const target = document.getElementById('typewriter-text');
  if (!target || !CONFIG || !CONFIG.letterContent) return;

  const text = CONFIG.letterContent;
  let idx = 0;

  function typeNext() {
    if (idx <= text.length) {
      target.innerText = text.slice(0, idx);
      idx++;
      setTimeout(typeNext, 24);
    }
  }
  typeNext();
}

/* 4. HIỆU ỨNG BẮN PHÁO HOA CHÚC MỪNG 20/10 */
function launchGrandFireworks() {
  if (typeof confetti !== 'function') return;
  const end = Date.now() + 2600;
  const colors = ['#ff4d8d', '#ffd166', '#ff9ebb', '#ffffff'];

  (function frame() {
    confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors });
    confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

/* 5. ĐỒNG BỘ ACTIVE TRÊN THANH MENU KHI CUỘN */
function initNavigationScroll() {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.top-nav a');

  window.addEventListener('scroll', () => {
    let currentId = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// Khởi chạy khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  initVouchers();
  initGallery();
  initNavigationScroll();

  const btnFireworks = document.getElementById('btn-fireworks');
  if (btnFireworks) {
    btnFireworks.addEventListener('click', launchGrandFireworks);
  }
});
