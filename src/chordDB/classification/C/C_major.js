import C_Chords from "../../src/db/guitar/chords/C";

export const C_major = C_Chords.filter((chord) => {
  return chord.suffix === "major";
});

export default C_major;
