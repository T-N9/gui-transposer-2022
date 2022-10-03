import D_Chords from "../../../data/guitar_chords/D_Chords";

const D_7 = D_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default D_7;
