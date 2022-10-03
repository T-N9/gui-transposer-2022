import React from "react";
import { useSelector } from "react-redux";

/* components */
import ChordChart from "./ChordChart";

/* Hook */
import Hook from "./hook.defineChord";

const PresentChord = () => {
  const { chordToShow, chordPositions, presentChords } = useSelector(
    (state) => state.chordChart
  );

  const { closePresentChords } = Hook();

  return (
    <div
      className={`h-screen fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center transition-all ${
        presentChords ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        onClick={closePresentChords}
        className="presentChord absolute top-0 bottom-0 left-0 right-0 bg-dark bg-opacity-75 z-30 flex justify-center  items-center"
      ></div>
      <div className="flex gap-3 relative z-50">
        {chordPositions.length !== 0 &&
          chordPositions.map((position, index) => {
            return (
              <div key={index} className="bg-white px-3 py-5 rounded-md">
                <ChordChart position={position} id={index} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PresentChord;
