import E_Chords from "../../../data/guitar_chords/E_Chords";

const E_7 = E_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

export default E_7;
