import G_Chords from "../../../data/guitar_chords/G_Chords";

const G_7 = G_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default G_7;