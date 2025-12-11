// Basic MIDI-like sound effects using Web Audio API

let audioContext: AudioContext | null = null;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioContext;
};

export const useSoundEffects = () => {
  const playTone = (frequency: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.3) => {
    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = type;
      
      gainNode.gain.setValueAtTime(volume, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
      
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    } catch (e) {
      console.log('Audio not available');
    }
  };

  const playCorrect = () => {
    // Happy ascending arpeggio
    playTone(523.25, 0.15, 'sine', 0.4); // C5
    setTimeout(() => playTone(659.25, 0.15, 'sine', 0.4), 100); // E5
    setTimeout(() => playTone(783.99, 0.3, 'sine', 0.4), 200); // G5
  };

  const playWrong = () => {
    // Sad descending tone
    playTone(311.13, 0.3, 'square', 0.2); // Eb4
    setTimeout(() => playTone(233.08, 0.4, 'square', 0.2), 200); // Bb3
  };

  const playClick = () => {
    playTone(800, 0.05, 'sine', 0.2);
  };

  const playStart = () => {
    // Bicycle bell sound simulation
    playTone(1200, 0.1, 'sine', 0.3);
    setTimeout(() => playTone(1400, 0.15, 'sine', 0.3), 80);
  };

  const playComplete = () => {
    // Victory fanfare
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.2, 'sine', 0.3), i * 150);
    });
  };

  const playMessage = () => {
    playTone(600, 0.08, 'sine', 0.15);
  };

  return {
    playCorrect,
    playWrong,
    playClick,
    playStart,
    playComplete,
    playMessage
  };
};
