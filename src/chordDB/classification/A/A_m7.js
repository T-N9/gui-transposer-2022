import A_Chords from "../../../data/guitar_chords/A_Chords";

const A_m7 = A_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default A_m7;
