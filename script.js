import getDurations from "./durationsArray.js";
import getNotesArray from "./notesArray.js";

function startProgram() {
  let durations = getDurations(80, 1);
  console.log(durations);
  let melodyNotes = getNotesArray("d3", 10, "major");
  console.log(melodyNotes);

  const context = new AudioContext();

  const gainMelodyNode = context.createGain();
  gainMelodyNode.gain.setValueAtTime(0.1, context.currentTime);
  gainMelodyNode.connect(context.destination);

  const savedMelodyNotes = [...melodyNotes];
  const savedDurations = [...durations];

  var myFunction = function () {
    let randomForNote = Math.floor(Math.random() * melodyNotes.length - 1) + 1;
    let randomForDuration =
      Math.floor(Math.random() * durations.length - 1) + 1;

    const oscillator = context.createOscillator();
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(
      melodyNotes[randomForNote],
      context.currentTime
    );
    oscillator.connect(gainMelodyNode);
    oscillator.start();

    oscillator.stop(
      context.currentTime +
        durations[randomForDuration] / 1000 -
        durations[randomForDuration] / 10000
    );

    setTimeout(() => {
      myFunction();
    }, durations[randomForDuration]);

    melodyNotes.length > 1
      ? melodyNotes.splice(randomForNote, 1)
      : (melodyNotes = [...savedMelodyNotes]);
    durations.length > 1
      ? durations.splice(randomForDuration, 1)
      : (durations = [...savedDurations]);
  };

  setTimeout(() => {
    myFunction();
  }, 0);
}

let isPlaying = false;
document.body.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    !isPlaying ? startProgram() : window.location.reload();
    isPlaying = true;
  }
});
