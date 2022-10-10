import React from "react";
import { useSelector } from "react-redux";
import Chord from "@tombatossals/react-chords/lib/Chord";

import { processPosition } from "../../../chordDB/src/tools";

/* Constants */
import { tuning_object } from "../../../constants/constants";

const ChordChart = ({ position, id }) => {
  // let tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'];

  const { tuning } = useSelector((state) => state.currentSongInfo);

  let temp_Tune;
  if (tuning) {
    let get_Tuning = tuning_object.filter((tune) => {
      return tuning === tune.name;
    });
    temp_Tune = get_Tuning[0].tuning;
  } else {
    temp_Tune = ["E", "A", "D", "G", "B", "E"];
  }
  // let processedPos = processPosition(position,tuning , id);

  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: "Guitar",
    keys: [],
    tunings: {
      standard: temp_Tune,
    },
  };

  const lite = false;
  return (
    <div className="chord-item">
      <Chord chord={position} instrument={instrument} lite={lite} />
    </div>
  );
};

export default ChordChart;
