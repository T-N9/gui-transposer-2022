import Ab_Chords from "../../src/db/guitar/chords/Ab";

const Ab_major = Ab_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default Ab_major;
