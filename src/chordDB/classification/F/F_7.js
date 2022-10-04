import F_Chords from "../../../data/guitar_chords/F_Chords";

const F_7 = F_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default F_7;
