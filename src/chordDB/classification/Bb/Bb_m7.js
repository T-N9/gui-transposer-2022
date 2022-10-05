import Bb_Chords from "../../../data/guitar_chords/Bb_Chords";

const Bb_m7 = Bb_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default Bb_m7;
