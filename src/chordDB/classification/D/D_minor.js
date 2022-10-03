import D_Chords from "../../../data/guitar_chords/D_Chords";

const D_minor = D_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default D_minor;
