import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

/* Hook */
import Hook from "./hook.lyricLine";

const LyricLine = ({
  line,
  lyricBoard,
  transposeLvl,
  detectedChords,
  transposedChords,
}) => {
  const { locateChord, matchesPos, locatePart, matchParts } = Hook(
    line,
    lyricBoard,
    transposeLvl,
    detectedChords,
    transposedChords
  );

  matchParts.length > 0 && console.log({ locatePart, matchParts });
  console.log({locateChord})

  return (
    <>
      {matchParts.length > 0 && <div className="bg-blue-300 text-white mt-7 p-1 rounded font-bold inline-block">{parse(locatePart)}</div>}
      {matchParts.length === 0 && line.trim().length !== 0 && (
        <div className={`lyric-line ${matchesPos.length > 0 && "bg-gray-50"}`}>
          {matchesPos.length > 0 ? parse(locateChord) : line}
        </div>
      )}
    </>
  );
};

export default LyricLine;
