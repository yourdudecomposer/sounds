import setVolume from "../setVolume.js";

// const context = new AudioContext();
// const gainMelodyNode = setVolume(context, 0.3);

export default function play(

  arr = [
    [200, 220],
    [200, 330],
    [400, 220],
  ],
  context = new AudioContext(),
  gain = context.destination
) {
    if (arr.length === 0) return
  const note = arr.shift();
  const oscillator = context.createOscillator();
  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(note[1], context.currentTime);
  oscillator.connect(gain);
  oscillator.start();
  oscillator.stop(context.currentTime + note[0] / 1000 - note[0] / 10000);
  setTimeout(() => {
    play(arr, context,gain);
  }, note[0]);
}

//[[t,f],[t,f],[t,f],[t,f]]
