import B_Chords from "../../../data/guitar_chords/B_Chords";

const B_m7 = B_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default B_m7;
