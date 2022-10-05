import Ab_Chords from "../../../data/guitar_chords/Ab_Chords";

const Ab_m7 = Ab_Chords.filter((chord) => {
  return chord.suffix === "m7";
});

export default Ab_m7;
