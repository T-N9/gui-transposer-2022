import Bb_Chords from "../../src/db/guitar/chords/Bb";

const Bb_minor = Bb_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default Bb_minor;
