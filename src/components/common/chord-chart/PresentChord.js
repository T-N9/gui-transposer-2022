import React from "react";
import { useSelector } from "react-redux";

/* components */
import ChordChart from "./ChordChart";

const PresentChord = () => {
  const { chordToShow, chordPositions } = useSelector(
    (state) => state.chordChart
  );

  return (
    <div className="presentChord fixed top-0 bottom-0 left-0 right-0 bg-dark bg-opacity-75 z-30 flex justify-center items-center">
      <div className="flex gap-3">
        {chordPositions.length !== 0 &&
          chordPositions.map((position, index) => {
            console.log({ position });
            return (
              <div className="bg-white px-3 py-5 rounded-md">
                <ChordChart key={index} position={position} id={index} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PresentChord;
