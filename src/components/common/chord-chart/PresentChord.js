import React from "react";
import { useSelector } from "react-redux";

/* components */
import ChordChart from "./ChordChart";

const PresentChord = () => {
  const { chordToShow, chordPositions } = useSelector(
    (state) => state.chordChart
  );

  return (
    <div className="presentChord fixed top-0 bottom-0 left-0 right-0 bg-dark bg-opacity-75 z-30">
      {chordPositions.length !== 0 &&
        chordPositions.map((position, index) => {
          console.log({ position });
          return <ChordChart key={index} position={position} id={index} />;
        })}
    </div>
  );
};

export default PresentChord;
