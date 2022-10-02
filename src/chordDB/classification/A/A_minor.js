import A_Chords from "../../src/db/guitar/chords/F";

const A_minor = A_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default A_minor;
