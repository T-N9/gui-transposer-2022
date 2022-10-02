import C_Chords from "../../src/db/guitar/chords/C";

const C_minor = C_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default C_minor;
