import React, { useEffect, useState } from 'react';
import { uniq } from "lodash";

/* Constants */
import { ChordRegexOp, chords_Arr_i, chords_Arr_ii } from '../../constants/constants';

const Hook = () => {

    const [inputLyric, setInputLyric] = useState("");
    const [lyricBoard, setLyricBoard] = useState([]);
    const [detectedChords, setDetectedChords] = useState([]);
    const [transposedChords, setTransposedChords] = useState([]);
    const [transposeLvl, setTransposeLvl] = useState(0);
    const [matchesPos, setMatchesPos] = useState([]);
    const [editMode , setEditMode] = useState(true);
  
    useEffect(() => {
      let matches;
      let detectedChordsArr = [];
      let matchesPosArr = [];
      while ((matches = ChordRegexOp.exec(lyricBoard)) !== null) {
  
        if (matches.index === ChordRegexOp.lastIndex) {
          ChordRegexOp.lastIndex++;
        }
  
        matches.forEach((match, groupIndex) => {
          detectedChordsArr.push(match.trim());
          matchesPosArr.push({
            matchChord: match,
            startPos: matches.index,
            endPos: ChordRegexOp.lastIndex,
          });
        });
      }
      setMatchesPos(matchesPosArr);
      setDetectedChords(uniq(detectedChordsArr));
    }, [lyricBoard]);
  
    console.log({ matchesPos, detectedChords, transposedChords });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const linedLyric = inputLyric.split(/\r?\n/);
      setLyricBoard(linedLyric);
      setEditMode(false);
    };
  
    const handleDownStrictLvl = (chordIndex, actionLvl) => {
  
      if (chordIndex + actionLvl >= 0) {
        return chordIndex + actionLvl;
      } else {
        return 12 + (chordIndex + actionLvl);
      }
    };
  
    const handleUpStrictLvl = (chordIndex, actionLvl) => {
      if (chordIndex + actionLvl <= 11) {
        return chordIndex + actionLvl;
      } else {
        return -(12 - (chordIndex + actionLvl));
      }
    };
  
    useEffect(() => {
      let transposedChordArr = [];
      if (transposeLvl <= -1) {
        detectedChords.map((chord) => {
          if (
            12 + (chords_Arr_i.indexOf(chord) + transposeLvl) ===
            chords_Arr_i.indexOf(chord)
          ) {
            setTransposeLvl(0);
          }
          if (chords_Arr_i.indexOf(chord) !== -1) {
            let indexDown = handleDownStrictLvl(
              chords_Arr_i.indexOf(chord),
              transposeLvl
            );
  
            transposedChordArr.push(chords_Arr_i[indexDown]);
          }
  
          if (chords_Arr_ii.indexOf(chord) !== -1) {
            let indexDown = handleDownStrictLvl(
              chords_Arr_ii.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_ii[indexDown]);
          }
        });
      } else {
        detectedChords.map((chord) => {
          if (
            -(12 - (chords_Arr_i.indexOf(chord) + transposeLvl)) ===
            chords_Arr_i.indexOf(chord)
          ) {
            setTransposeLvl(0);
          }
          if (chords_Arr_i.indexOf(chord) !== -1) {
            let indexUp = handleUpStrictLvl(
              chords_Arr_i.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_i[indexUp]);
          }
  
          if (chords_Arr_ii.indexOf(chord) !== -1) {
            let indexUp = handleUpStrictLvl(
              chords_Arr_ii.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_ii[indexUp]);
          }
        });
      }
      setTransposedChords(transposedChordArr);
    }, [transposeLvl]);
  
    const handleTransposeUp = () => {
      setTransposeLvl((prev) => prev + 1);
    };
  
    const handleTransposeDown = () => {
      setTransposeLvl((prev) => prev - 1);
    };
  
    return {
        inputLyric,
        transposedChords,
        transposeLvl,
        detectedChords,
        lyricBoard,
        editMode,
        /* actions */
        setInputLyric,
        handleSubmit,
        setTransposeLvl,
        handleTransposeDown,
        handleTransposeUp,
        setEditMode
    }
}

export default Hook;
