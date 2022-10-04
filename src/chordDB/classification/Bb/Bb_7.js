import Bb_Chords from "../../../data/guitar_chords/Bb_Chords";

const Bb_7 = Bb_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default Bb_7;
