import D_Chords from "../../src/db/guitar/chords/D";

const D_major = D_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default D_major;
