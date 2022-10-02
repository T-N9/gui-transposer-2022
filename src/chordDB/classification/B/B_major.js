import B_Chords from "../../src/db/guitar/chords/B";

const B_major = B_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default B_major;
