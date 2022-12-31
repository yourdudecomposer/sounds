export default function setVolume(context, amount) {
  const gainMelodyNode = context.createGain();
  gainMelodyNode.gain.setValueAtTime(amount, context.currentTime);
  gainMelodyNode.connect(context.destination);
  return gainMelodyNode;
}
