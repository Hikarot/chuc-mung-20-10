/* ============================================================
   TƯƠNG TÁC MÀN HÌNH BẤT NGỜ (INTRO & UNLOCK LOGIC)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const btnNo = document.getElementById('btn-no');
  const btnYes = document.getElementById('btn-yes');
  const stagePrank = document.getElementById('stage-prank');
  const stageBloom = document.getElementById('stage-bloom');
  const roseTrigger = document.getElementById('rose-trigger');
  const loveBar = document.getElementById('love-bar');
  const lovePercent = document.getElementById('love-percent');
  const surpriseOverlay = document.getElementById('surprise-overlay');

  if (!btnNo || !btnYes || !stagePrank || !stageBloom) return;

  // Danh sách các câu trêu đùa khi nút "Từ chối" chạy trốn
  const funnyNoTexts = [
    "Ủa bấm nhầm nút rồi kìa 😆",
    "Ai lại từ chối quà 20/10 bao giờ!",
    "Nút này biết chạy trốn đó nha 🤣",
    "Bấm nút màu hồng ở trên kìa 🌸",
    "Xinh đẹp thế này là phải nhận quà!"
  ];
  let noCount = 0;

  function moveRunawayButton() {
    const x = (Math.random() - 0.5) * 160;
    const y = (Math.random() - 0.5) * 90;
    btnNo.style.transform = `translate(${x}px, ${y}px)`;
    btnNo.innerText = funnyNoTexts[noCount % funnyNoTexts.length];
    noCount++;
  }

  btnNo.addEventListener('mouseover', moveRunawayButton);
  btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveRunawayButton();
  });
  btnNo.addEventListener('click', moveRunawayButton);

  // Nhấn nhận quà -> chuyển sang Màn 2 (Chạm nở hoa)
  btnYes.addEventListener('click', () => {
    stagePrank.style.display = 'none';
    stageBloom.style.display = 'block';
    if (typeof confetti === 'function') {
      confetti({ particleCount: 40, spread: 70, origin: { y: 0.6 } });
    }
  });

  // Màn 2: Chạm hoa hồng tích lũy năng lượng hạnh phúc
  let loveEnergy = 0;
  if (roseTrigger && loveBar && lovePercent && surpriseOverlay) {
    roseTrigger.addEventListener('click', () => {
      if (loveEnergy >= 100) return;
      loveEnergy = Math.min(100, loveEnergy + 25);
      loveBar.style.width = loveEnergy + '%';
      lovePercent.innerText = `Năng lượng hạnh phúc: ${loveEnergy}%`;

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 22,
          spread: 55,
          origin: { y: 0.55 },
          colors: ['#ff4d8d', '#ffd166', '#ff9ebb']
        });
      }

      // Đạt 100% -> Mở khóa toàn bộ thiệp
      if (loveEnergy >= 100) {
        lovePercent.innerText = "💖 Đã mở khóa thiệp chúc mừng 20/10! 💖";
        if (typeof startBackgroundMusic === 'function') {
          startBackgroundMusic();
        }

        setTimeout(() => {
          surpriseOverlay.classList.add('hidden');
          if (typeof launchGrandFireworks === 'function') {
            launchGrandFireworks();
          }
          if (typeof startTypewriter === 'function') {
            startTypewriter();
          }
        }, 550);
      }
    });
  }
});
