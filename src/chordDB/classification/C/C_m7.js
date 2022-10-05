import C_Chords from "../../../data/guitar_chords/C_Chords";

const C_m7 = C_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default C_m7;
