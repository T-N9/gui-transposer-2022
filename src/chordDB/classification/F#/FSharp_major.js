import FSharp_Chords from "../../../data/guitar_chords/FSharp_Chords";

const FSharp_major = FSharp_Chords.filter((chord) => {
    return chord.suffix === "major";
  });

export default FSharp_major;
