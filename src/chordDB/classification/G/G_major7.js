import G_Chords from "../../src/db/guitar/chords/G";

const G_major7 = G_Chords.filter((chord) => {
  return chord.suffix === "maj7";
});

export default G_major7;