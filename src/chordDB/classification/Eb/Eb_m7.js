import Eb_Chords from "../../../data/guitar_chords/Eb_Chords";

const Eb_m7 = Eb_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default Eb_m7;
