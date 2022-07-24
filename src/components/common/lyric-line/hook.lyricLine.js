import React, { useState, useEffect } from "react";
import { last } from "lodash";

/* Constants */
import { ChordRegexOp } from "../../../constants/constants";

const Hook = (
  line,
  lyricBoard,
  transposeLvl,
  detectedChords,
  transposedChords,
) => {
  const spacedLine = line + " ";
  const [matchesPos, setMatchesPos] = useState([]);
  const [locateChord, setLocateChord] = useState("");

  useEffect(() => {
    if (line.trim().length !== 0) {
      let matches;
      let matchesPosArr = [];
      while ((matches = ChordRegexOp.exec(spacedLine)) !== null) {
        if (matches.index === ChordRegexOp.lastIndex) {
          ChordRegexOp.lastIndex++;
        }

        matches.forEach((match, groupIndex) => {
          matchesPosArr.push({
            matchChord: match,
            startPos: matches.index,
            endPos: ChordRegexOp.lastIndex,
          });
        });
      }
      setMatchesPos(matchesPosArr);
    }
  }, [lyricBoard]);

  useEffect(() => {
    if (matchesPos.length > 0) {
      let mergingLine = [];
      let mappedChords = matchesPos.map((item, index) => {
        if (transposeLvl === 0) {
          if (index === 0) {
            mergingLine.push(
              spacedLine.replace(
                item.matchChord,
                `<span class="chord">${item.matchChord.trim()}</span>`
              )
            );
            return spacedLine.replace(
              item.matchChord,
              `<span class="chord">${item.matchChord.trim()}</span>`
            );
          } else {
            // console.log({mergedLINE :mergingLine[index-1]});
            mergingLine.push(
              mergingLine[index - 1].replace(
                item.matchChord,
                `<span class="chord">${item.matchChord.trim()}</span>`
              )
            );
            return mergingLine[index - 1].replace(
              item.matchChord,
              `<span class="chord">${item.matchChord.trim()}</span>`
            );
          }
        } else {
          let chordInLine = item.matchChord.trim();
          let transposedChordInLine =
            transposedChords[detectedChords.indexOf(chordInLine)];
          if (index === 0) {
            mergingLine.push(
              spacedLine.replace(
                item.matchChord,
                `<span class="chord">${transposedChordInLine}</span>`
              )
            );
            return spacedLine.replace(
              item.matchChord,
              `<span class="chord">${transposedChordInLine}</span>`
            );
          } else {
            mergingLine.push(
              mergingLine[index - 1].replace(
                item.matchChord,
                `<span class="chord">${transposedChordInLine}</span>`
              )
            );
            return mergingLine[index - 1].replace(
              item.matchChord,
              `<span class="chord">${transposedChordInLine}</span>`
            );
          }
        }
      });

      setLocateChord(last(mappedChords));
    }
  }, [matchesPos, transposeLvl, transposedChords]);

  return {
    locateChord,
    matchesPos
  };
};

export default Hook;
