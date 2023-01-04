import getDurations from "./durationsArray.js";
import getRandom from "./getRandom.js";
import makeCopiesOfArr from "./makeCopiesOfArr.js";
import getNotesArray from "./notesArray.js";
import setVolume from "./setVolume.js";

function startProgram() {
  let durations = getDurations(150, 1);
  let melodyNotes = getNotesArray("f3", 8, "major");

  const [savedMelodyNotes, savedDurations] = makeCopiesOfArr(
    melodyNotes,
    durations
  );

  const context = new AudioContext();
  const gainMelodyNode = setVolume(context, 0.3);

  var myFunction = function () {

    let randomForNote = getRandom(0, melodyNotes.length - 1);
    let randomForDuration = getRandom(0, durations.length - 1);

    const oscillator = context.createOscillator();
    oscillator.type = "sin";
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
// updateArrays()
    melodyNotes.length > 1
      ? melodyNotes.splice(randomForNote, 1)
      : (melodyNotes = [...savedMelodyNotes]);
    durations.length > 1
      ? durations.splice(randomForDuration, 1)
      : (durations = [...savedDurations]);

    setTimeout(() => {
      myFunction();
    }, durations[randomForDuration]);
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
