import React, { useState } from "react";

import C_Chords from "./src/db/guitar/chords/C";
import D_Chords from "./src/db/guitar/chords/D";
import F_Chords from "./src/db/guitar/chords/F";

const extractChord = (inputChord, isFamily = false) => {
  let wantedChord, wantedFamily;

  let C_major = C_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

  let D_major = D_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

  let F_major = F_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

  if (!isFamily) {
    switch (inputChord) {
      case "C":
        wantedChord = C_major[0].positions[0];
        break;
      case "D":
        wantedChord = D_major[0].positions[0];
        break;
      case "F":
        wantedChord = F_major[0].positions[0];
        break;

      default:
        break;
    }
  }

  return {
    wantedChord,

    wantedFamily
  };
};

export default extractChord;
