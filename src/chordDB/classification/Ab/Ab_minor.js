import Ab_Chords from "../../../data/guitar_chords/Ab_Chords";

const Ab_minor = Ab_Chords.filter((chord) => {
    return chord.suffix === "minor";
  });

export default Ab_minor;
