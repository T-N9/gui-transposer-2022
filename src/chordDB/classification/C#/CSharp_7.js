import CSharp_Chords from "../../../data/guitar_chords/CSharp_Chords";

const CSharp_7 = CSharp_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default CSharp_7;
