import G_Chords from "../../../data/guitar_chords/G_Chords";

const G_m7 = G_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default G_m7;
