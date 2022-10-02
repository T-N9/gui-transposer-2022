import E_Chords from "../../src/db/guitar/chords/E";

const E_minor = E_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default E_minor;
