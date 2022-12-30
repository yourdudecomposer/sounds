import equalTemperateNotes from "./database/arrEqualTemperateNotes.js";
import {
  majorScale,
  minorScale,
  chromaticScale,
  hextatonicScale,
  octatonicScale,
} from "./database/scales.js";

// function makeArrayOfCromaticNotes(lowerNote, amount) {
//   let melodyNotes = new Array(amount);
//   let indexOfLowerNote = equalTemperateNotes.findIndex(
//     (el) => el.indexOf(lowerNote) !== -1
//   );
//   for (let i = 0; i < amount; i++) {
//     melodyNotes[i] = equalTemperateNotes[indexOfLowerNote + i][1];
//   }
//   return melodyNotes;
// }

// function makeArrayOfMajorScale(lowerNote, amount) {
//   //need check for 'c-1'
//   //another words - for minus sign

//   let melodyNotes = new Array(amount);
//   let indexOfLowerNote = equalTemperateNotes.findIndex(
//     (el) => el.indexOf(lowerNote) !== -1
//   );

//   let tempIndex = indexOfLowerNote;
//   let j = 0;

//   for (let i = 0; i < amount; i++) {
//     melodyNotes[i] = equalTemperateNotes[tempIndex][1];
//     if (j === majorScale.length) {
//       j = 0;
//     }
//     tempIndex += majorScale[j];
//     j++;
//   }
//   return melodyNotes;
// }

// function makeArrayOfMinorScale(lowerNote, amount) {
//   //need check for 'c-1'
//   //another words - for minus sign

//   let melodyNotes = new Array(amount);
//   let indexOfLowerNote = equalTemperateNotes.findIndex(
//     (el) => el.indexOf(lowerNote) !== -1
//   );

//   let tempIndex = indexOfLowerNote;
//   let j = 0;

//   for (let i = 0; i < amount; i++) {
//     melodyNotes[i] = equalTemperateNotes[tempIndex][1];
//     if (j === minorScale.length) {
//       j = 0;
//     }
//     tempIndex += minorScale[j];
//     j++;
//   }
//   return melodyNotes;
// }

// export default function getNotesArray(
//   lowerNote,
//   amount,
//   temperate = "chromatic"
// ) {
//   switch (temperate) {
//     case "chromatic":
//       return makeArrayOfCromaticNotes(lowerNote, amount);
//     case "major":
//       return makeArrayOfMajorScale(lowerNote, amount);
//     case "minor":
//       return makeArrayOfMinorScale(lowerNote, amount);

//     default:
//       break;
//   }

// }

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
