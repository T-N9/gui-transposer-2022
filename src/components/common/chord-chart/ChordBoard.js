import React from "react";
import Draggable from "react-draggable";

/* components */
import DefineChord from "./DefineChord";

/* Icons */
import { BsArrowsMove, BsFillXCircleFill } from "react-icons/bs";

const ChordBoard = ({
  detectedChords,
  transposeLvl,
  transposedChords,
  isFlat,
}) => {
  return (
    <Draggable handle="span">
      <div className="chordBoard flex gap-3 fixed top-0 left-[30%] translate-x-[-50%] p-5 shadow flex-wrap">
        <div className="absolute left-[-40px] top-5 flex flex-col gap-3">
          <span className="w-8 h-8 text-white flex justify-center items-center cursor-move bg-info  rounded-full">
            <BsArrowsMove />
          </span>

          <div className="w-8 h-8 text-white flex justify-center items-center cursor-move bg-danger  rounded-full">
            <BsFillXCircleFill />
          </div>
        </div>
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
