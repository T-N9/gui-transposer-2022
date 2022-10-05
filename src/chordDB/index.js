import { A_major, A_minor, A_7, A_m7 } from "./classification/A";
import { Ab_major, Ab_minor, Ab_7, Ab_m7 } from "./classification/Ab";
import { B_major, B_minor, B_7, B_m7 } from "./classification/B";
import { Bb_major, Bb_minor, Bb_7, Bb_m7 } from "./classification/Bb";
import { C_major, C_minor, C_7, C_m7 } from "./classification/C";
import {
  CSharp_major,
  CSharp_minor,
  CSharp_7,
  CSharp_m7,
} from "./classification/CSharp";
import { D_major, D_minor, D_7, D_m7 } from "./classification/D";
import { E_major, E_minor, E_7, E_m7 } from "./classification/E";
import { Eb_major, Eb_minor, Eb_7, Eb_m7 } from "./classification/Eb";
import { F_major, F_minor, F_7, F_m7 } from "./classification/F";
import {
  FSharp_major,
  FSharp_minor,
  FSharp_7,
  FSharp_m7,
} from "./classification/FSharp";
import { G_major, G_minor, G_7, G_m7 } from "./classification/G";

//#region - individual chord extracted
const extract_A_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return A_major[0].positions[0];
      case "m":
        return A_minor[0].positions[0];
      case "7":
        return A_7[0].positions[0];
      case "m7":
        return A_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return A_major[0].positions;
      case "m":
        return A_minor[0].positions;
      case "7":
        return A_7[0].positions;
      case "m7":
        return A_m7[0].positions;
      default:
        break;
    }
  }
};

const extract_Ab_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return Ab_major[0].positions[0];
      case "m":
        return Ab_minor[0].positions[0];
      case "7":
        return Ab_7[0].positions[0];
      case "m7":
        return Ab_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return Ab_major[0].positions;
      case "m":
        return Ab_minor[0].positions;
      case "7":
        return Ab_7[0].positions;
      case "m7":
        return Ab_m7[0].positions;
      default:
        break;
    }
  }
};

const extract_B_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return B_major[0].positions[0];
      case "m":
        return B_minor[0].positions[0];
      case "7":
        return B_7[0].positions[0];
      case "m7":
        return B_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return B_major[0].positions;
      case "m":
        return B_minor[0].positions;
      case "7":
        return B_7[0].positions[0];
      case "m7":
        return B_m7[0].positions[0];
      default:
        break;
    }
  }
};

const extract_Bb_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return Bb_major[0].positions[0];
      case "m":
        return Bb_minor[0].positions[0];
      case "7":
        return Bb_7[0].positions[0];
      case "m7":
        return Bb_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return Bb_major[0].positions;
      case "m":
        return Bb_minor[0].positions;
      case "7":
        return Bb_7[0].positions;
      case "m7":
        return Bb_m7[0].positions;
      default:
        break;
    }
  }
};

const extract_C_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return C_major[0].positions[0];
      case "m":
        return C_minor[0].positions[0];
      case "7":
        return C_7[0].positions[0];
      case "m7":
        return C_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return C_major[0].positions;
      case "m":
        return C_minor[0].positions;
      case "7":
        return C_7[0].positions;
      case "m7":
        return C_m7[0].positions[0];
      default:
        break;
    }
  }
};

const extract_CSharp_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return CSharp_major[0].positions[0];
      case "m":
        return CSharp_minor[0].positions[0];
      case "7":
        return CSharp_7[0].positions[0];
      case "m7":
        return CSharp_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return CSharp_major[0].positions;
      case "m":
        return CSharp_minor[0].positions;
      case "7":
        return CSharp_7[0].positions;
      case "m7":
        return CSharp_m7[0].positions;
      default:
        break;
    }
  }
};

const extract_D_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return D_major[0].positions[0];
      case "m":
        return D_minor[0].positions[0];
      case "7":
        return D_7[0].positions[0];
      case "m7":
        return D_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return D_major[0].positions;
      case "m":
        return D_minor[0].positions;
      case "7":
        return D_7[0].positions;
      case "m7":
        return D_m7[0].positions;
      default:
        break;
    }
  }
};

const extract_E_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return E_major[0].positions[0];
      case "m":
        return E_minor[0].positions[0];
      case "7":
        return E_7[0].positions[0];
      case "m7":
        return E_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return E_major[0].positions;
      case "m":
        return E_minor[0].positions;
      case "7":
        return E_7[0].positions;
      case "m7":
        return E_m7[0].positions;
      default:
        break;
    }
  }
};

const extract_Eb_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return Eb_major[0].positions[0];
      case "m":
        return Eb_minor[0].positions[0];
      case "7":
        return Eb_7[0].positions[0];
      case "m7":
        return Eb_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return Eb_major[0].positions;
      case "m":
        return Eb_minor[0].positions;
      case "7":
        return Eb_7[0].positions;
      case "m7":
        return Eb_m7[0].positions;
      default:
        break;
    }
  }
};

const extract_F_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return F_major[0].positions[0];
      case "m":
        return F_minor[0].positions[0];
      case "7":
        return F_7[0].positions[0];
      case "m7":
        return F_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return F_major[0].positions;
      case "m":
        return F_minor[0].positions;
      case "7":
        return F_7[0].positions;
      case "m7":
        return F_m7[0].positions;
      default:
        break;
    }
  }
};

const extract_FSharp_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return FSharp_major[0].positions[0];
      case "m":
        return FSharp_minor[0].positions[0];
      case "7":
        return FSharp_7[0].positions[0];
      case "m7":
        return FSharp_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return FSharp_major[0].positions;
      case "m":
        return FSharp_minor[0].positions;
      case "7":
        return FSharp_7[0].positions;
      case "m7":
        return FSharp_m7[0].positions;
      default:
        break;
    }
  }
};

const extract_G_chord = (suffix, isFamily) => {
  if (!isFamily) {
    switch (suffix) {
      case "":
        return G_major[0].positions[0];
      case "m":
        return G_minor[0].positions[0];
      case "7":
        return G_7[0].positions[0];
      case "m7":
        return G_m7[0].positions[0];
      default:
        break;
    }
  } else {
    switch (suffix) {
      case "":
        return G_major[0].positions;
      case "m":
        return G_minor[0].positions;
      case "7":
        return G_7[0].positions;
      case "m7":
        return G_m7[0].positions;
      default:
        break;
    }
  }
};
//#endregion

const drawOut_Major_Suffix = (inputChord) => {
  let chordLength = inputChord.length;
  let major, suffix;
  if (chordLength === 1) {
    major = inputChord;
    suffix = "";
  } else if (chordLength === 2) {
    major = inputChord.charAt(1) === "b" ? inputChord : inputChord.charAt(0);
    suffix =
      inputChord.charAt(1) === "b" ? "" : inputChord.slice(1, chordLength);
  } else if (chordLength >= 3) {
    if (inputChord.charAt(1) === "b") {
      major = inputChord.slice(0, 2);
      suffix = inputChord.slice(2, chordLength);
    } else {
      major = inputChord.slice(0, 1);
      suffix = inputChord.slice(1, chordLength);
    }
  }

  console.log({ inputChord, major, suffix });
  return { major, suffix };
};

export const extractChord_beta = (inputChord, isFamily = false) => {
  let splittedChord = drawOut_Major_Suffix(inputChord);

  let wantedChord, wantedPositions;

  if (!isFamily) {
    switch (splittedChord.major) {
      case "A":
        wantedChord = extract_A_chord(splittedChord.suffix, false);
        break;
      case "Ab":
        wantedChord = extract_Ab_chord(splittedChord.suffix, false);
        break;
      case "B":
        wantedChord = extract_B_chord(splittedChord.suffix, false);
        break;
      case "Bb":
        wantedChord = extract_Bb_chord(splittedChord.suffix, false);
        break;
      case "C":
        wantedChord = extract_C_chord(splittedChord.suffix, false);
        break;
      case "Db":
        wantedChord = extract_CSharp_chord(splittedChord.suffix, false);
        break;
      case "D":
        wantedChord = extract_D_chord(splittedChord.suffix, false);
        break;
      case "E":
        wantedChord = extract_E_chord(splittedChord.suffix, false);
        break;
      case "Eb":
        wantedChord = extract_Eb_chord(splittedChord.suffix, false);
        break;
      case "F":
        wantedChord = extract_F_chord(splittedChord.suffix, false);
        break;
      case "Gb":
        wantedChord = extract_FSharp_chord(splittedChord.suffix, false);
        break;
      case "G":
        wantedChord = extract_G_chord(splittedChord.suffix, false);
        break;
      default:
        break;
    }
  } else {
    switch (splittedChord.major) {
      case "A":
        wantedPositions = extract_A_chord(splittedChord.suffix, true);
        break;
      case "Ab":
        wantedPositions = extract_Ab_chord(splittedChord.suffix, true);
        break;
      case "B":
        wantedPositions = extract_B_chord(splittedChord.suffix, true);
        break;
      case "Bb":
        wantedPositions = extract_Bb_chord(splittedChord.suffix, true);
        break;
      case "C":
        wantedPositions = extract_C_chord(splittedChord.suffix, true);
        break;
      case "Db":
        wantedPositions = extract_CSharp_chord(splittedChord.suffix, true);
        break;
      case "D":
        wantedPositions = extract_D_chord(splittedChord.suffix, true);
        break;
      case "E":
        wantedPositions = extract_E_chord(splittedChord.suffix, true);
        break;
      case "Eb":
        wantedPositions = extract_Eb_chord(splittedChord.suffix, true);
        break;
      case "F":
        wantedPositions = extract_F_chord(splittedChord.suffix, true);
        break;
      case "Gb":
        wantedPositions = extract_FSharp_chord(splittedChord.suffix, true);
        break;
      case "G":
        wantedPositions = extract_G_chord(splittedChord.suffix, true);
        break;
      default:
        break;
    }
  }

  return { wantedChord, wantedPositions };
};

// console.log({ Em : extractChord_beta('Em', true)})

const extractChord = (inputChord, isFamily = false) => {
  /* 
    wantedChord === the first (main) position of positions array
    wantedPosition is all positions of a chord
  */
  let wantedChord, wantedPositions;

  if (!isFamily) {
    switch (inputChord) {
      //#region - major
      case "Ab":
        wantedChord = Ab_major[0].positions[0];
        break;
      case "Bb":
        wantedChord = Bb_major[0].positions[0];
        break;
      case "Db":
        wantedChord = CSharp_major[0].positions[0];
        break;
      case "Eb":
        wantedChord = Eb_major[0].positions[0];
        break;
      case "Gb":
        wantedChord = FSharp_major[0].positions[0];
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
      case "Abm":
        wantedChord = Ab_minor[0].positions[0];
        break;
      case "Bbm":
        wantedChord = Bb_minor[0].positions[0];
        break;
      case "Dbm":
        wantedChord = CSharp_minor[0].positions[0];
        break;
      case "Ebm":
        wantedChord = Eb_minor[0].positions[0];
        break;
      case "Gbm":
        wantedChord = FSharp_minor[0].positions[0];
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

      //#region - 7
      case "A7":
        wantedChord = A_7[0].positions[0];
        break;
      case "Ab7":
        wantedChord = Ab_7[0].positions[0];
        break;
      case "B7":
        wantedChord = B_7[0].positions[0];
        break;
      case "Bb7":
        wantedChord = Bb_7[0].positions[0];
        break;
      case "C7":
        wantedChord = C_7[0].positions[0];
        break;
      case "Db7":
        wantedChord = CSharp_7[0].positions[0];
        break;
      case "D7":
        wantedChord = D_7[0].positions[0];
        break;
      case "E7":
        wantedChord = E_7[0].positions[0];
        break;
      case "Eb7":
        wantedChord = Eb_7[0].positions[0];
        break;
      case "F7":
        wantedChord = F_7[0].positions[0];
        break;
      case "Gb7":
        wantedChord = FSharp_7[0].positions[0];
        break;
      case "G7":
        wantedChord = G_7[0].positions[0];
        break;

      //#endregion
      default:
        break;
    }
  } else {
    switch (inputChord) {
      //#region - major
      case "Ab":
        wantedPositions = Ab_major[0].positions;
        break;
      case "Bb":
        wantedPositions = Bb_major[0].positions;
        break;
      case "Db":
        wantedPositions = CSharp_major[0].positions;
        break;
      case "Eb":
        wantedPositions = Eb_major[0].positions;
        break;
      case "Gb":
        // case "Gb" || "Gb":
        wantedPositions = FSharp_major[0].positions;
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
      case "Abm":
        wantedPositions = Ab_minor[0].positions;
        break;
      case "Bbm":
        wantedPositions = Bb_minor[0].positions;
        break;
      case "Dbm":
        wantedPositions = CSharp_minor[0].positions;
        break;
      case "Ebm":
        wantedPositions = Eb_minor[0].positions;
        break;
      case "Gbm":
        wantedPositions = FSharp_minor[0].positions;
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

      //#region - 7
      case "A7":
        wantedPositions = A_7[0].positions;
        break;
      case "Ab7":
        wantedPositions = Ab_7[0].positions;
        break;
      case "B7":
        wantedPositions = B_7[0].positions;
        break;
      case "Bb7":
        wantedPositions = Bb_7[0].positions;
        break;
      case "C7":
        wantedPositions = C_7[0].positions;
        break;
      case "Db7":
        wantedPositions = CSharp_7[0].positions;
        break;
      case "D7":
        wantedPositions = D_7[0].positions;
        break;
      case "E7":
        wantedPositions = E_7[0].positions;
        break;
      case "Eb7":
        wantedPositions = Eb_7[0].positions;
        break;
      case "F7":
        wantedPositions = F_7[0].positions;
        break;
      case "Gb7":
        wantedPositions = FSharp_7[0].positions;
        break;
      case "G7":
        wantedPositions = G_7[0].positions;
        break;
      //#endregion
      default:
        break;
    }
    // console.log({wantedPositions})
  }

  return {
    wantedChord,

    wantedPositions,
  };
};

export default extractChord_beta;
