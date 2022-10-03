import D_Chords from "../../../data/guitar_chords/D_Chords";

const D_major = D_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default D_major;
