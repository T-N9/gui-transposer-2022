import B_Chords from "../../../data/guitar_chords/B_Chords";

const B_minor = B_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default B_minor;
