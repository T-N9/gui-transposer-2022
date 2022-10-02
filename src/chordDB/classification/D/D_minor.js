import D_Chords from "../../src/db/guitar/chords/D";

const D_minor = D_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default D_minor;
