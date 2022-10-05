import F_Chords from "../../../data/guitar_chords/F_Chords";

const F_m7 = F_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default F_m7;
