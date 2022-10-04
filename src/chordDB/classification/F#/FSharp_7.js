import FSharp_Chords from "../../../data/guitar_chords/FSharp_Chords";

const FSharp_7 = FSharp_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default FSharp_7;
