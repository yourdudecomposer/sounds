import equalTemperateNotes from "./database/arrEqualTemperateNotes.js";
import {
  majorScale,
  minorScale,
  chromaticScale,
  hextatonicScale,
  octatonicScale,
} from "./database/scales.js";

export default function getNotesArray(
  lowerNote,
  amount,
  temperate = "chromatic"
) {
  let usingScale;

  switch (temperate) {
    case "chromatic":
      usingScale = chromaticScale;
      break;
    case "major":
      usingScale = majorScale;
      break;
    case "minor":
      usingScale = minorScale;
      break;
    case "hextatonic":
      usingScale = hextatonicScale;
      break;
    case "octatonic":
      usingScale = octatonicScale;
      break;
    default:
      break;
  }

  let melodyNotes = new Array(amount);
  let indexOfLowerNote = equalTemperateNotes.findIndex(
    (el) => el.indexOf(lowerNote) !== -1
  );

  let tempIndex = indexOfLowerNote;
  let j = 0;

  for (let i = 0; i < amount; i++) {
    melodyNotes[i] = equalTemperateNotes[tempIndex][1];
    if (j === usingScale.length) {
      j = 0;
    }
    tempIndex += usingScale[j];
    j++;
  }

  return melodyNotes;
}
