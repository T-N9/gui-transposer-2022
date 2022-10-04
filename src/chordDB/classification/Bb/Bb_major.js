import Bb_Chords from "../../../data/guitar_chords/Bb_Chords";

const Bb_major = Bb_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default Bb_major;
