import E_Chords from "../../src/db/guitar/chords/E";

const E_7 = E_Chords.filter((chord) => {
    return chord.suffix === "7";
  });

export default E_7;
