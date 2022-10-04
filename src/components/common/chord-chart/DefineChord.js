import React from "react";

/* Components */
import ChordChart from "./ChordChart";

/* Hook */
import Hook from "./hook.defineChord";

/* Util */
import extractChord from "../../../chordDB";

const DefineChord = ({ chord }) => {
  const { wantedChord } = extractChord(chord);

  const { handleClickChord } = Hook();

  return (
    <>
      <div
        onClick={() => handleClickChord(chord)}
        onTouchEnd={() => handleClickChord(chord)}
        className="flex flex-col cursor-pointer justify-center shadow-md items-center bg-white rounded-md"
      >
        <ChordChart position={wantedChord} />

        <p className="font-bold text-light-md">{chord}</p>
      </div>
    </>
  );
};

export default DefineChord;
