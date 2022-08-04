import React from "react";
import parse from "html-react-parser";

/* Hook */
import Hook from "./hook.lyricLine";

const LyricLine = ({
  line,
  lyricBoard,
  transposeLvl,
  detectedChords,
  transposedChords,
  isFlat,
}) => {
  const { locateChord, matchesPos, locatePart, matchParts, isChordLine } = Hook(
    line,
    lyricBoard,
    transposeLvl,
    detectedChords,
    transposedChords,
    isFlat
  );

  // matchParts.length > 0 && console.log({ locatePart, matchParts });
  // console.log({locateChord})

  // matchesPos.length > 0 && console.log(line.replace(/\s+/g, '').length, line.replace(/\s+/g, ''))

  return (
    <>
      {matchParts.length > 0 && (
        <div className="bg-info text-white text-sm mt-7 p-1 rounded font-bold inline-block">
          {parse(locatePart)}
        </div>
      )}
      {matchParts.length === 0 && line.trim().length !== 0 && (
        <div className={`lyric-line ${isChordLine && "bg-gray-50"}`}>
          {isChordLine
            ? parse(locateChord)
            : line}
        </div>
      )}
    </>
  );
};

export default LyricLine;
