import C_Chords from "../../../data/guitar_chords/C_Chords";

export const C_major = C_Chords.filter((chord) => {
  return chord.suffix === "major";
});

export default C_major;
