import React from "react";

/* Components */
import ChordChart from "./ChordChart";

/* Hook */
import Hook from "./hook.defineChord";

/* Util */
import extractChord_beta from "../../../chordDB";
import { changeChordType } from "../../../util/changeChordType";

const DefineChord = ({ chord, isFlat }) => {
  const { wantedChord } = extractChord_beta(chord);

  const { handleClickChord } = Hook();

  return (
    <>
      <div
        onClick={() => handleClickChord(chord)}
        // onTouchEnd={() => handleClickChord(chord)}
        className="flex flex-col cursor-pointer justify-center shadow-md items-center bg-white rounded-md"
      >
        <ChordChart position={wantedChord} />

        <p className="font-bold text-light-md">{changeChordType(chord, isFlat)}</p>
      </div>
    </>
  );
};

export default DefineChord;
