import { useState, useEffect } from "react";
import { last } from "lodash";

/* Constants */
import { ChordRegexOp } from "../../../constants/constants";

const Hook = (
  line,
  lyricBoard,
  transposeLvl,
  detectedChords,
  transposedChords
) => {
  const spacedLine = line + " ";
  const [matchesPos, setMatchesPos] = useState([]);
  const [matchParts, setMatchParts] = useState([]);
  const [locateChord, setLocateChord] = useState("");
  const [locatePart, setLocatePart] = useState("");

  useEffect(() => {
    if (line.trim().length !== 0) {
      let matches;
      let matchesPosArr = [];
      let matchPartsArr = [];
      while ((matches = ChordRegexOp.exec(spacedLine)) !== null) {
        if (matches.index === ChordRegexOp.lastIndex) {
          ChordRegexOp.lastIndex++;
        }

        matches.forEach((match, groupIndex) => {
          if (match.length < 5) {
            matchesPosArr.push({
              matchChord: match,
              startPos: matches.index,
              endPos: ChordRegexOp.lastIndex,
            });
          } else {
            matchPartsArr.push({
              matchChord: match,
              startPos: matches.index,
              endPos: ChordRegexOp.lastIndex,
            });
          }
        });
      }
      setMatchesPos(matchesPosArr);
      setMatchParts(matchPartsArr);
    }
  }, [lyricBoard, line, spacedLine]);

  useEffect(() => {
    if (matchesPos.length > 0) {
      let mergingLine = [];
      let mappedChords = matchesPos.map((item, index) => {
        if (transposeLvl === 0) {
          if (index === 0) {
            mergingLine.push(
              spacedLine.replace(
                item.matchChord,
                `<span class="highlight-chord">${item.matchChord.trim()}</span>`
              )
            );
            return spacedLine.replace(
              item.matchChord,
              `<span class="highlight-chord">${item.matchChord.trim()}</span>`
            );
          } else {
            mergingLine.push(
              mergingLine[index - 1].replace(
                item.matchChord,
                `<span class="highlight-chord">${item.matchChord.trim()}</span>`
              )
            );
            return mergingLine[index - 1].replace(
              item.matchChord,
              `<span class="highlight-chord">${item.matchChord.trim()}</span>`
            );
          }
        } else {
          let chordInLine = item.matchChord.trim();
          let transposedChordInLine =
            transposedChords[detectedChords.indexOf(chordInLine)] !==
              undefined &&
            transposedChords[detectedChords.indexOf(chordInLine)];
          if (index === 0) {
            mergingLine.push(
              spacedLine.replace(
                item.matchChord,
                `<span class="highlight-chord">${transposedChordInLine}</span>`
              )
            );
            return spacedLine.replace(
              item.matchChord,
              `<span class="highlight-chord">${transposedChordInLine}</span>`
            );
          } else {
            mergingLine.push(
              mergingLine[index - 1].replace(
                item.matchChord,
                `<span class="highlight-chord">${transposedChordInLine}</span>`
              )
            );
            return mergingLine[index - 1].replace(
              item.matchChord,
              `<span class="highlight-chord">${transposedChordInLine}</span>`
            );
          }
        }
      });

      setLocateChord(last(mappedChords));
    }

    if (matchParts.length > 0) {
      let mappedPart = matchParts.map((item) => {
        return `<span class="highlight-part">${item.matchChord.trim()}</span>`;
      });

      setLocatePart(mappedPart[0]);
    }
  }, [matchesPos, matchParts, transposeLvl, transposedChords, detectedChords, spacedLine]);
  matchParts.length > 0 && console.log({ matchParts, locatePart });
  return {
    locateChord,
    matchesPos,
    locatePart,
    matchParts,
  };
};

export default Hook;
