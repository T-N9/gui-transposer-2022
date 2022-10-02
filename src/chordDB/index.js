import React, { useState } from "react";

import { A_major, A_minor } from "./classification/A";
import { Ab_major, Ab_minor } from "./classification/Ab";
import { B_major, B_minor } from "./classification/B";
import { C_major, C_minor } from "./classification/C";
import { D_major, D_minor, D_7 } from "./classification/D";
import { F_major, F_minor } from "./classification/F";
import { E_major, E_minor, E_7 } from "./classification/E";
import { G_major, G_minor, G_7 } from "./classification/G";

const extractChord = (inputChord, isFamily = false) => {

  /* 
    wantedChord === the first (main) position of positions array
    wantedPosition is all positions of a chord
  */
  let wantedChord, wantedPositions;

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
      case "E":
        wantedChord = E_major[0].positions[0];
        break;
      //#endregion

      //#region - minor
      case "Abm" || "G#m":
        wantedChord = Ab_minor[0].positions[0];
        break;
      case "Em":
        wantedChord = E_minor[0].positions[0];
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
        wantedChord = G_7[0].positions[0];
        break;
      case "D7":
        wantedChord = D_7[0].positions[0];
        break;
      case "E7":
        wantedChord = E_7[0].positions[0];
        break;
      //#endregion
      default:
        break;
    }
  } else {
    switch (inputChord) {
      //#region - major
      case "Ab" || "G#":
        wantedPositions = Ab_major[0].positions;
        break;
      case "C":
        wantedPositions = C_major[0].positions;
        break;
      case "D":
        wantedPositions = D_major[0].positions;
        break;
      case "F":
        wantedPositions = F_major[0].positions;
        break;
      case "A":
        wantedPositions = A_major[0].positions;
        break;
      case "B":
        wantedPositions = B_major[0].positions;
        break;
      case "G":
        wantedPositions = G_major[0].positions;
        break;
      case "E":
        wantedPositions = E_major[0].positions;
        break;
      //#endregion

      //#region - minor
      case "Abm" || "G#m":
        wantedPositions = Ab_minor[0].positions;
        break;
      case "Em":
        wantedPositions = E_minor[0].positions;
        break;
      case "Cm":
        wantedPositions = C_minor[0].positions;
        break;
      case "Dm":
        wantedPositions = D_minor[0].positions;
        break;
      case "Fm":
        wantedPositions = F_minor[0].positions;
        break;
      case "Am":
        wantedPositions = A_minor[0].positions;
        break;
      case "Bm":
        wantedPositions = B_minor[0].positions;
        break;
      case "Gm":
        wantedPositions = G_minor[0].positions;
        break;
      //#endregion

      //#region - major7
      case "G7":
        wantedPositions = G_7[0].positions;
        break;
      case "D7":
        wantedPositions = D_7[0].positions;
        break;
      case "E7":
        wantedPositions = E_7[0].positions;
        break;
      //#endregion
      default:
        break;
    }
    console.log({wantedPositions})
  }

  return {
    wantedChord,

    wantedPositions,
  };
};

export default extractChord;
