import E_Chords from "../../../data/guitar_chords/E_Chords";

const E_m7 = E_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default E_m7;
