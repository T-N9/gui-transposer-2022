import D_Chords from "../../src/db/guitar/chords/D";

const D_7 = D_Chords.filter((chord) => {
  return chord.suffix === "7";
});

export default D_7;
