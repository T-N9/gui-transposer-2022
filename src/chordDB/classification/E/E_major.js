import E_Chords from "../../src/db/guitar/chords/E";

const E_major = E_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default E_major;
