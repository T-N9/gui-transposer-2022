import Ab_Chords from "../../../data/guitar_chords/Ab_Chords";

const Ab_7 = Ab_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default Ab_7;
