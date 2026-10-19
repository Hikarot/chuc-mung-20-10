/* ============================================================
   HIỆU ỨNG CÁNH HOA ĐÀO RƠI LÃNG MẠN TRÊN CANVAS
   ============================================================ */

(function initPetalsAnimation() {
  const canvas = document.getElementById('petal-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let petals = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const PETAL_COUNT = 28;
  for (let i = 0; i < PETAL_COUNT; i++) {
    petals.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 6 + 5,
      speedY: Math.random() * 0.9 + 0.4,
      speedX: Math.random() * 0.6 - 0.3,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.02
    });
  }

  function drawPetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach((p) => {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.angle) * 0.3;
      p.angle += p.spin;

      if (p.y > canvas.height + 20) {
        p.y = -15;
        p.x = Math.random() * canvas.width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = 'rgba(255, 165, 200, 0.55)';
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(drawPetals);
  }

  drawPetals();
})();
