import G_Chords from "../../src/db/guitar/chords/G";

const G_minor = G_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default G_minor;
