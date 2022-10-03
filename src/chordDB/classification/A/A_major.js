import A_Chords from "../../../data/A_Chords";

const A_major = A_Chords.filter((chord) => {
    return chord.suffix === "major";
  });
  console.log({A_major})
export default A_major;
