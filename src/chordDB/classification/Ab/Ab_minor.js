import Ab_Chords from "../../src/db/guitar/chords/Ab";

const Ab_minor = Ab_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default Ab_minor;
