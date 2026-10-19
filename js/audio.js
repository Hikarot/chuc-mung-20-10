/* ============================================================
   TRÌNH PHÁT NHẠC NỀN & NÚT ĐIỀU KHIỂN (AUDIO CONTROLLER)
   ============================================================ */

let audioCtx = null;
let isAudioPlaying = false;
let melodyTimer = null;
let customAudio = (typeof CONFIG !== 'undefined' && CONFIG.customMp3Url) ? new Audio(CONFIG.customMp3Url) : null;
if (customAudio) customAudio.loop = true;

const musicBtn = document.getElementById('music-btn');

function playRomanticMelody() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const notes = [523.25, 659.25, 783.99, 1046.5, 783.99, 659.25, 587.33, 698.46, 880.0, 698.46];
  let step = 0;

  if (melodyTimer) clearInterval(melodyTimer);

  melodyTimer = setInterval(() => {
    if (!isAudioPlaying) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(notes[step % notes.length], audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.45);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.48);
      step++;
    } catch (e) {
      console.warn("Audio Context playback error:", e);
    }
  }, 420);
}

function startBackgroundMusic() {
  isAudioPlaying = true;
  if (musicBtn) musicBtn.classList.add('playing');

  if (customAudio) {
    customAudio.play().catch(() => {});
  } else {
    playRomanticMelody();
  }
}

if (musicBtn) {
  musicBtn.addEventListener('click', () => {
    isAudioPlaying = !isAudioPlaying;
    musicBtn.classList.toggle('playing', isAudioPlaying);

    if (customAudio) {
      isAudioPlaying ? customAudio.play() : customAudio.pause();
    } else {
      if (isAudioPlaying) {
        playRomanticMelody();
      }
    }
  });
}
