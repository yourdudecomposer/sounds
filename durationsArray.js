export default function getDurations(maxLength, amount) {
  let durations = new Array(amount);
  for (let i = 0; i < amount; i++) {
    durations[i] = maxLength / (i + 1);
  }
  return durations;
}
