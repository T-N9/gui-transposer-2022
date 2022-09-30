import React, { useState } from "react";

import C_Chords from "./src/db/guitar/chords/C";
import D_Chords from "./src/db/guitar/chords/D";
import F_Chords from "./src/db/guitar/chords/F";
import A_Chords from "./src/db/guitar/chords/A";
import B_Chords from "./src/db/guitar/chords/B";

import Ab_Chords from "./src/db/guitar/chords/Ab";

//#region - major chords
let C_major = C_Chords.filter((chord) => {
  return chord.suffix === "major";
});

let D_major = D_Chords.filter((chord) => {
  return chord.suffix === "major";
});

let F_major = F_Chords.filter((chord) => {
  return chord.suffix === "major";
});

let A_major = A_Chords.filter((chord) => {
  return chord.suffix === "major";
});

let B_major = B_Chords.filter((chord) => {
  return chord.suffix === "major";
});

let Ab_major = Ab_Chords.filter((chord) => {
  return chord.suffix === "major";
});

console.log({ Ab_Chords });

//#endregion

//#region - major chords
let C_minor = C_Chords.filter((chord) => {
  return chord.suffix === "minor";
});

let D_minor = D_Chords.filter((chord) => {
  return chord.suffix === "minor";
});

let F_minor = F_Chords.filter((chord) => {
  return chord.suffix === "minor";
});

let A_minor = A_Chords.filter((chord) => {
  return chord.suffix === "minor";
});

let B_minor = B_Chords.filter((chord) => {
  return chord.suffix === "minor";
});

let Ab_minor = Ab_Chords.filter((chord) => {
  return chord.suffix === "minor";
});

//#endregion

const extractChord = (inputChord, isFamily = false) => {
  let wantedChord, wantedFamily;

  if (!isFamily) {
    switch (inputChord) {
      //#region - major
      case "C":
        wantedChord = C_major[0].positions[0];
        break;
      case "D":
        wantedChord = D_major[0].positions[0];
        break;
      case "F":
        wantedChord = F_major[0].positions[0];
        break;
      case "A":
        wantedChord = A_major[0].positions[0];
        break;
      case "B":
        wantedChord = B_major[0].positions[0];
        break;
      case "Ab" || "G#":
        wantedChord = Ab_major[0].positions[0];
        break;
      //#endregion

      //#region - minor
      case "Cm":
        wantedChord = C_minor[0].positions[0];
        break;
      case "Dm":
        wantedChord = D_minor[0].positions[0];
        break;
      case "Fm":
        wantedChord = F_minor[0].positions[0];
        break;
      case "Am":
        wantedChord = A_minor[0].positions[0];
        break;
      case "Bm":
        wantedChord = B_minor[0].positions[0];
        break;
      case "Abm" || "G#m":
        wantedChord = Ab_minor[0].positions[0];
        break;
      //#endregion

      default:
        break;
    }
  }

  return {
    wantedChord,

    wantedFamily,
  };
};

export default extractChord;
