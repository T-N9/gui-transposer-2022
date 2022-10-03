import E_Chords from "../../../data/guitar_chords/E_Chords";

const E_minor = E_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default E_minor;
