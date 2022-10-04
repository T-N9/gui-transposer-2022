import CSharp_Chords from "../../../data/guitar_chords/CSharp_Chords";

export const CSharp_minor = CSharp_Chords.filter((chord) => {
  return chord.suffix === "minor";
});

export default CSharp_minor;
