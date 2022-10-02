import React, { useState } from "react";

import { A_major, A_minor } from "./classification/A";
import { Ab_major, Ab_minor } from "./classification/Ab";
import { B_major, B_minor } from "./classification/B";
import { C_major, C_minor } from "./classification/C";
import { D_major, D_minor } from "./classification/D";
import { F_major, F_minor } from "./classification/F";
import { G_major, G_minor, G_major7 } from "./classification/G";

const extractChord = (inputChord, isFamily = false) => {
  let wantedChord, wantedFamily;

  if (!isFamily) {
    switch (inputChord) {
      //#region - major
      case "Ab" || "G#":
        wantedChord = Ab_major[0].positions[0];
        break;
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
      case "G":
        wantedChord = G_major[0].positions[0];
        break;
      //#endregion

      //#region - minor
      case "Abm" || "G#m":
        wantedChord = Ab_minor[0].positions[0];
        break;
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
      case "Gm":
        wantedChord = G_minor[0].positions[0];
        break;
      //#endregion

      //#region - major7
      case "G7":
        wantedChord = G_major7[0].positions[0];
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
