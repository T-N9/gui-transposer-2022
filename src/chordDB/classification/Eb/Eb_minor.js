import Eb_Chords from "../../../data/guitar_chords/Eb_Chords";

export const Eb_minor = Eb_Chords.filter((chord) => {
  return chord.suffix === "minor";
});

export default Eb_minor;
