import CSharp_Chords from "../../../data/guitar_chords/CSharp_Chords";

const CSharp_m7 = CSharp_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default CSharp_m7;
