import F_Chords from "../../src/db/guitar/chords/F";

const F_minor = F_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default F_minor;
