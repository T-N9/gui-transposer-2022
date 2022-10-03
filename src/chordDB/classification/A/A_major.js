import A_Chords from "../../../data/guitar_chords/A_Chords";

const A_major = A_Chords.filter((chord) => {
  return chord.suffix === "major";
});

export default A_major;
