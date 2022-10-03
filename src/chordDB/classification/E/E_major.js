import E_Chords from "../../../data/guitar_chords/E_Chords";

const E_major = E_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default E_major;
