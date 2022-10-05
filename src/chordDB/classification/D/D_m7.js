import D_Chords from "../../../data/guitar_chords/D_Chords";

const D_m7 = D_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default D_m7;
