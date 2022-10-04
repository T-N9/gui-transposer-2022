import Bb_Chords from "../../../data/guitar_chords/Bb_Chords";

const Bb_minor = Bb_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default Bb_minor;
