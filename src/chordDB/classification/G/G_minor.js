import G_Chords from "../../../data/guitar_chords/G_Chords";

const G_minor = G_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default G_minor;
