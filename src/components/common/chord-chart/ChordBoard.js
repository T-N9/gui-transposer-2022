import React from "react";
import Draggable from 'react-draggable';

/* components */
import DefineChord from "./DefineChord";

const ChordBoard = ({ detectedChords }) => {
  return (
    <Draggable>
      <div className="chordBoard flex gap-3 fixed top-0 left-[30%] translate-x-[-50%] cursor-move p-5 shadow flex-wrap">
        {detectedChords.map((chord, index) => {
          return <DefineChord key={index} chord={chord} />;
        })}
      </div>
    </Draggable>
  );
};

export default ChordBoard;
