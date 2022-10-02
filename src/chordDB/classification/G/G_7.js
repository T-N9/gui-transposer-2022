import G_Chords from "../../src/db/guitar/chords/G";

const G_7 = G_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default G_7;