import F_Chords from "../../../data/guitar_chords/F_Chords";

const F_minor = F_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default F_minor;
