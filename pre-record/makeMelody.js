import { equalTemperateNotes } from "../database/objEqualTemperateNotes.js";
import getDurations from "../durationsArray.js";
import getRandom from "../getRandom.js";
import getNotesArray from "../notesArray.js";

export default function makeMelody(sec) {
    let melodyNotes = getNotesArray("f3", 8, "major");

  let melodyArr = [];
  let bassArr = [];
  while (melodyArr.reduce((acc, item) => (acc += item[0]), 0) < sec * 1000) {
    // let durations = getDurations(150, 1);
   let rand = getRandom(0,7)
   melodyArr = melodyArr.concat([[200,melodyNotes[rand]]]);
  }
  melodyArr.splice(Math.floor(melodyArr.length /16)*16-1)
  melodyArr.forEach((el,ind)=>{
if (ind%4===0) {
  
  bassArr.push([800,melodyNotes[getRandom(0,7)]/2])
  console.log(ind)
}
  })
  bassArr[0] = [800,equalTemperateNotes.f2]
  bassArr[bassArr.length-1] = [800,equalTemperateNotes.f1]
  console.log(bassArr,melodyArr)

return [melodyArr,bassArr]
}
