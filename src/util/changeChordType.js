export const changeSharpToFlat = (chord) => {
  if(chord.slice(chord.length-1, chord.length === " ")){
    switch (chord.slice(0, 1)) {
      case "A":
        return `Bb${chord.slice(2, chord.length)} `;
      case "C":
        return `Db${chord.slice(2, chord.length)} `;
      case "D":
        return `Eb${chord.slice(2, chord.length)} `;
      case "F":
        return `Gb${chord.slice(2, chord.length)} `;
      case "G":
        return `Ab${chord.slice(2, chord.length)} `;
      default:
        return chord;
    }
  }else if (chord.slice(1, 2) === "#") {
    switch (chord.slice(0, 1)) {
      case "A":
        return `Bb${chord.slice(2, chord.length)}`;
      case "C":
        return `Db${chord.slice(2, chord.length)}`;
      case "D":
        return `Eb${chord.slice(2, chord.length)}`;
      case "F":
        return `Gb${chord.slice(2, chord.length)}`;
      case "G":
        return `Ab${chord.slice(2, chord.length)}`;
      default:
        return chord;
    }
  } else if(chord.slice(2, 3) === "#") {
    switch (chord.slice(1, 2)) {
      case "A":
        return ` Bb${chord.slice(3, chord.length)}`;
      case "C":
        return ` Db${chord.slice(3, chord.length)}`;
      case "D":
        return ` Eb${chord.slice(3, chord.length)}`;
      case "F":
        return ` Gb${chord.slice(3, chord.length)}`;
      case "G":
        return ` Ab${chord.slice(3, chord.length)}`;
      default:
        return chord;
    }
  } else {
    return chord;
  }
}

export const changeFlatToSharp = (chord) => {
  if (chord.slice(1, 2) === "b") {
    switch (chord.slice(0, 1)) {
      case "B":
        return `A#${chord.slice(2, chord.length)}`;
      case "D":
        return `C#${chord.slice(2, chord.length)}`;
      case "E":
        return `D#${chord.slice(2, chord.length)}`;
      case "G":
        return `F#${chord.slice(2, chord.length)}`;
      case "A":
        return `G#${chord.slice(2, chord.length)}`;
      default:
        return chord;
    }
  }else {
    return chord;
  }
}

export const changeChordType = (chord, chooseFlat) => {
  if(chooseFlat){
    return changeSharpToFlat(chord);
  } else {
    return changeFlatToSharp(chord);
  }
};
