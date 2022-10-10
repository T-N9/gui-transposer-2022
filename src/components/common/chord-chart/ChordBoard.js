import React from "react";
import Draggable from "react-draggable";

/* components */
import DefineChord from "./DefineChord";

/* Icons */
import {
  BsArrowsMove,
  BsFillXCircleFill,
  BsGripHorizontal,
  BsGripVertical,
} from "react-icons/bs";

/* Hook */
import Hook from "./hook.defineChord";

const ChordBoard = ({
  detectedChords,
  transposeLvl,
  transposedChords,
  isFlat,
}) => {
  const {
    showChordBoard,
    isHorizontal,
    handleToggleChordBoard,
    setIsHorizontal,
  } = Hook();
  return (
    <>
      {showChordBoard && (
        <Draggable handle="span">
          <div
            className={`chordBoard flex gap-3 fixed top-0 left-[30%] translate-x-[-50%] p-5 shadow flex-wrap ${isHorizontal && 'flex-col max-h-[80vh]'}`}
          >
            {/* adjust btns */}
            <div className="absolute left-[-40px] top-5 flex flex-col gap-3">
              <span className="w-8 h-8 text-white flex justify-center items-center cursor-move bg-info  rounded-full">
                <BsArrowsMove />
              </span>

              <button
                onClick={handleToggleChordBoard}
                className="w-8 h-8 text-white flex justify-center items-center cursor-pointer bg-danger  rounded-full"
              >
                <BsFillXCircleFill />
              </button>

              <button
                onClick={() => {
                  setIsHorizontal((prev) => !prev);
                }}
                className="p-2 rounded flex justify-center items-center text-light-md shadow"
              >
                {isHorizontal ? <BsGripHorizontal /> : <BsGripVertical />}
              </button>
            </div>
            {transposeLvl !== 0
              ? transposedChords.map((chord, index) => {
                  return (
                    <DefineChord key={index} chord={chord} isFlat={isFlat} />
                  );
                })
              : detectedChords.map((chord, index) => {
                  return (
                    <DefineChord key={index} chord={chord} isFlat={isFlat} />
                  );
                })}
          </div>
        </Draggable>
      )}
    </>
  );
};

export default ChordBoard;
