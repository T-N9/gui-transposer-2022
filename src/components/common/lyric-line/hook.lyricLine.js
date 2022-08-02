import { useState, useEffect } from "react";
import { last } from "lodash";

/* Constants */
import { ChordRegexOp } from "../../../constants/constants";

/* Util */
import { changeChordType, sharpToFlat, spacedSharpToFlat } from "../../../util/changeChordType";

const Hook = (
  line,
  lyricBoard,
  transposeLvl,
  detectedChords,
  transposedChords,
  isFlat
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
        let spacedSharpChord = spacedSharpToFlat(item.matchChord);
        let changedChordType = changeChordType(item.matchChord.trim(), isFlat);
        if (transposeLvl === 0) {
          if (index === 0) {
            mergingLine.push(
              spacedLine.replace(
                item.matchChord,
                `<span class="highlight-chord">${changedChordType}</span>`
              )
            );
            return spacedLine.replace(
              item.matchChord,
              `<span class="highlight-chord">${changedChordType}</span>`
            );
          } else {
            mergingLine.push(
              mergingLine[index - 1].replace(
                item.matchChord,
                `<span class="highlight-chord">${changedChordType}</span>`
              )
            );
            return mergingLine[index - 1].replace(
              item.matchChord,
              `<span class="highlight-chord">${changedChordType}</span>`
            );
          }
        } else {
          let chordInLine = item.matchChord.trim();
          let sharpedChord = sharpToFlat(chordInLine)
          let transposedChordInLine =
            transposedChords[detectedChords.indexOf(sharpedChord)] !==
              undefined &&
            transposedChords[detectedChords.indexOf(sharpedChord)];

          let changedChordType = changeChordType(transposedChordInLine , isFlat);
          
          if (index === 0) {
            mergingLine.push(
              spacedLine.replace(
                item.matchChord,
                `<span class="highlight-chord">${changedChordType}</span>`
              )
            );
            return spacedLine.replace(
              item.matchChord,
              `<span class="highlight-chord">${changedChordType}</span>`
            );
          } else {
            mergingLine.push(
              mergingLine[index - 1].replace(
                item.matchChord,
                `<span class="highlight-chord">${changedChordType}</span>`
              )
            );
            return mergingLine[index - 1].replace(
              item.matchChord,
              `<span class="highlight-chord">${changedChordType}</span>`
            );
          }
        }
      });

      setLocateChord(last(mappedChords));
    }

    if (matchParts.length > 0) {
      let mappedPart = matchParts.map((item) => {
        return `<span class="highlight-part cursor-pointer">${item.matchChord.trim()}</span>`;
      });

      setLocatePart(mappedPart[0]);
    }
  }, [matchesPos, matchParts, transposeLvl, transposedChords, detectedChords, spacedLine, isFlat]);

  return {
    locateChord,
    matchesPos,
    locatePart,
    matchParts,
  };
};

export default Hook;
