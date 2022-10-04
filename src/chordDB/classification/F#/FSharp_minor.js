import FSharp_Chords from "../../../data/guitar_chords/FSharp_Chords";

const FSharp_minor = FSharp_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default FSharp_minor;
