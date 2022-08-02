const sharpRegex = /[A-G]#/g;
const flatRegex = /[ABDEG]b/g;

export const changeChordType = (chord, chooseFlat) => {
  let isSharp = sharpRegex.test(chord);
  let isFlat = flatRegex.test(chord);

  if (chooseFlat) {
    switch (chord) {
      case "C#":
        return "Db";
      case "D#":
        return "Eb";
      case "F#":
        return "Gb";
      case "G#":
        return "Ab";
      case "A#":
        return "Bb";
      default:
        return chord;
    }
  } else {
    switch (chord) {
      case "Db":
        return "C#";
      case "Eb":
        return "D#";
      case "Gb":
        return "F#";
      case "Ab":
        return "G#";
      case "Bb":
        return "A#";
      default:
        return chord;
    }
  }
};

export const sharpToFlat = (chord) => {
  switch (chord) {
    case "C#":
      return "Db";
    case "D#":
      return "Eb";
    case "F#":
      return "Gb";
    case "G#":
      return "Ab";
    case "A#":
      return "Bb";
    default:
      return chord;
  }
};

export const spacedSharpToFlat = (spacedChord) => {
  switch (spacedChord) {
    case " C#":
      return " Db";
    case " D#":
      return " Eb";
    case " F#":
      return " Gb";
    case " G#":
      return " Ab";
    case " A#":
      return " Bb";
    case "C# ":
      return " Db ";
    case "D# ":
      return " Eb ";
    case "F# ":
      return " Gb ";
    case "G# ":
      return " Ab ";
    case "A# ":
      return " Bb ";
    default:
      return spacedChord;
  }
};
