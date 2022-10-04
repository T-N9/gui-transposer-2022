import A_Chords from "../../../data/guitar_chords/A_Chords";

const A_7 = A_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default A_7;
