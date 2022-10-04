import C_Chords from "../../../data/guitar_chords/C_Chords";

const C_7 = C_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default C_7;
