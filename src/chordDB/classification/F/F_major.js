import F_Chords from "../../src/db/guitar/chords/F";

const F_major = F_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default F_major;
