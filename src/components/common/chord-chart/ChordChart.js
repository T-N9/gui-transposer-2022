import React from "react";
import Chord from "@tombatossals/react-chords/lib/Chord";

import {  processPosition } from '../../../chordDB/src/tools';

const ChordChart = ({position, id}) => {
  let tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];

  let processedPos = processPosition(position,tuning , id);

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
    <Chord chord={processedPos} instrument={instrument} lite={lite} />
  </div>;
};

export default ChordChart;
