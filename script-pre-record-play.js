import getDurations from "./durationsArray.js";
import getRandom from "./getRandom.js";
import makeCopiesOfArr from "./makeCopiesOfArr.js";
import getNotesArray from "./notesArray.js";
import  makeMelody  from "./pre-record/makeMelody.js";
import play from "./pre-record/play.js";
import setVolume from "./setVolume.js";

btn.addEventListener('click',()=>{
    startProgram(input.value)
})

function startProgram(sec) {
  const [melody,bass] = makeMelody(sec);
  const context = new AudioContext();
  const gain = setVolume(context, 0.1);
  play(melody);
  play(bass);

}

let isPlaying = false;
document.body.addEventListener("keypress", (e) => {
  if (e.code === "Space") {
    !isPlaying ? startProgram() : window.location.reload();
    isPlaying = true;
  }
});

