import React, { useEffect, useState } from 'react';
import parse from "html-react-parser";

/* Hook */
import Hook from './hook.lyricLine';

const LyricLine = ({
    line,
    lyricBoard,
    transposeLvl,
    detectedChords,
    transposedChords,
  }) => {

    const {
      locateChord,
      matchesPos
    } = Hook(
      line,
      lyricBoard,
      transposeLvl,
      detectedChords,
      transposedChords,
    )
    
    return (
      <>
        {line.trim().length !== 0 && (
          <div className={`lyric-line ${matchesPos.length > 0 && "chord-line"}`}>
            {matchesPos.length > 0 ? parse(locateChord) : line}
          </div>
        )}
      </>
    );
  };

export default LyricLine;
