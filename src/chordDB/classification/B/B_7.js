import B_Chords from "../../../data/guitar_chords/B_Chords";

const B_7 = B_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default B_7;
