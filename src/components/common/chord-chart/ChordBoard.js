import React from "react";
import Draggable from "react-draggable";

/* components */
import DefineChord from "./DefineChord";

const ChordBoard = ({
  detectedChords,
  transposeLvl,
  transposedChords,
  isFlat,
}) => {
  return (
    <Draggable>
      <div className="chordBoard flex gap-3 fixed top-0 left-[30%] translate-x-[-50%] cursor-move p-5 shadow flex-wrap">
        {transposeLvl !== 0
          ? transposedChords.map((chord, index) => {
              return <DefineChord key={index} chord={chord} isFlat={isFlat} />;
            })
          : detectedChords.map((chord, index) => {
              return <DefineChord key={index} chord={chord} isFlat={isFlat} />;
            })}
      </div>
    </Draggable>
  );
};

export default ChordBoard;
