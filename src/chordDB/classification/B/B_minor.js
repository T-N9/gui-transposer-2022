import B_Chords from "../../src/db/guitar/chords/B";

const B_minor = B_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default B_minor;
