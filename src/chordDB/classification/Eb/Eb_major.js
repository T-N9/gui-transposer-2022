import Eb_Chords from "../../../data/guitar_chords/Eb_Chords";

export const Eb_major = Eb_Chords.filter((chord) => {
  return chord.suffix === "major";
});

export default Eb_major;
