import React from "react";
import Chord from "@tombatossals/react-chords/lib/Chord";

const MyChord = () => {
  const chord = {
    frets: [-1, 3, 2, 0, 1, 0],
    fingers: [0, 3, 2, 0, 1, 0],
    // barres: [0],
    capo: false,
  };
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: "Guitar",
    keys: [],
    tunings: {
      standard: ["E", "A", "D", "G", "B", "E"],
    },
  };
  const lite = false;
  return <div className="chord-item">
    <Chord chord={chord} instrument={instrument} lite={lite} />
  </div>;
};

export default MyChord;
