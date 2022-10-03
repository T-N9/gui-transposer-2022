import C_Chords from "../../../data/guitar_chords/C_Chords";

const C_minor = C_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default C_minor;
