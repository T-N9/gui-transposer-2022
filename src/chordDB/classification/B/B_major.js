import B_Chords from "../../../data/guitar_chords/B_Chords";

const B_major = B_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default B_major;
