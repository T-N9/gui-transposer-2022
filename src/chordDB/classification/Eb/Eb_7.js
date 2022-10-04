import Eb_Chords from "../../../data/guitar_chords/Eb_Chords";

const Eb_7 = Eb_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default Eb_7;
