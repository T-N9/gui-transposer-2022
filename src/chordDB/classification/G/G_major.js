import G_Chords from "../../../data/guitar_chords/G_Chords";

const G_major = G_Chords.filter((chord) => {
  return chord.suffix === "major";
});

export default G_major;
