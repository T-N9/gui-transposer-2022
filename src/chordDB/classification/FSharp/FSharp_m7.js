import FSharp_Chords from "../../../data/guitar_chords/FSharp_Chords";

const FSharp_m7 = FSharp_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default FSharp_m7;
