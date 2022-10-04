import CSharp_Chords from "../../../data/guitar_chords/CSharp_Chords";

export const CSharp_major = CSharp_Chords.filter((chord) => {
  return chord.suffix === "major";
});

export default CSharp_major;
