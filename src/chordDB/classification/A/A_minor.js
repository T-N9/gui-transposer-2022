import A_Chords from "../../../data/A_Chords";

const A_minor = A_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default A_minor;
