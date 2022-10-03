import F_Chords from "../../../data/guitar_chords/F_Chords";

const F_major = F_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default F_major;
