import { useState, useEffect } from "react";
import { last } from "lodash";

/* Constants */
import { ChordRegexOp, PartRegexOp } from "../../../constants/constants";

/* Util */
import {
  changeChordType,
  changeSharpToFlat,
} from "../../../util/changeChordType";

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
      let parts;
      let matchesPosArr = [];
      let matchPartsArr = [];

      while ((matches = ChordRegexOp.exec(spacedLine)) !== null) {
        if (matches.index === ChordRegexOp.lastIndex) {
          ChordRegexOp.lastIndex++;
        }

        matches.forEach((match, groupIndex) => {
          // if (match.trim().length <=5) {
          //   console.log({match})
          matchesPosArr.push({
            matchChord: match,
            startPos: matches.index,
            endPos: ChordRegexOp.lastIndex,
          });
          // } else {
          // matchPartsArr.push({
          //   matchChord: match,
          //   startPos: matches.index,
          //   endPos: ChordRegexOp.lastIndex,
          // });
          // }
        });
      }

      while ((parts = PartRegexOp.exec(spacedLine)) !== null) {
        if (parts.index === PartRegexOp.lastIndex) {
          PartRegexOp.lastIndex++;
        }

        parts.forEach((match, groupIndex) => {
          matchPartsArr.push({
            matchPart: match,
            startPos: parts.index,
            endPos: PartRegexOp.lastIndex,
          });
        });
      }
      setMatchesPos(matchesPosArr);
      setMatchParts(matchPartsArr);
    }
  }, [lyricBoard, line, spacedLine]);

  console.log({matchParts})

  useEffect(() => {
    if (matchesPos.length > 0) {
      let mergingLine = [];
      let mappedChords = matchesPos.map((item, index) => {
        let spacedSharpChord = changeSharpToFlat(item.matchChord);
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
          let sharpedChord = changeSharpToFlat(chordInLine);
          let transposedChordInLine =
            transposedChords[detectedChords.indexOf(sharpedChord)] !==
              undefined &&
            transposedChords[detectedChords.indexOf(sharpedChord)];

          let changedChordType = changeChordType(transposedChordInLine, isFlat);

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
        return `<span class="highlight-part cursor-pointer">${item.matchPart.trim()}</span>`;
      });

      setLocatePart(mappedPart[0]);
    }
  }, [
    matchesPos,
    matchParts,
    transposeLvl,
    transposedChords,
    detectedChords,
    spacedLine,
    isFlat,
  ]);

  // const isChordLine = matchesPos.length > 0 && line.replace(/\s+/g, '').length < 10;
  const isChordLine = matchesPos.length > 0 && line.trim().split("")[0] !== "[";
  console.log({ line: line.trim().split("")[0] });

  return {
    locateChord,
    matchesPos,
    locatePart,
    matchParts,
    isChordLine,
  };
};

export default Hook;
