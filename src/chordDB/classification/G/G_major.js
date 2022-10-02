import G_Chords from "../../src/db/guitar/chords/G";

const G_major = G_Chords.filter((chord) => {
  return chord.suffix === "major";
});

export default G_major;
