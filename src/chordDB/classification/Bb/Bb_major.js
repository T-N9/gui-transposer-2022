import Bb_Chords from "../../src/db/guitar/chords/Bb";

const Bb_major = Bb_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default Bb_major;
