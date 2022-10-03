import A_Chords from "../../../data/guitar_chords/A_Chords";

const A_minor = A_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default A_minor;
