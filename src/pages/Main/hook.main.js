import { useEffect, useState, useRef } from "react";
import { uniq } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

/* Actions */
import {
  setStartLoading,
  setStopLoading,
  sendDetectedChords,
  sendTransposedChords,
  sendFlatType,
  sendSharpType,
} from "../../store/mainGenSlice";
import { sendSongInputLyric } from "../../store/currentSongInfoSlice";

/* Data */
import { boardList as boardListData } from "../../data/boardList";

/* Constants */
import {
  ChordRegexOp,
  chords_Arr_i,
  chords_Arr_ii,
  chords_Arr_iii,
  chords_Arr_iv,
  chords_Arr_i_sh,
  chords_Arr_ii_sh,
  chords_Arr_iii_sh,
  chords_Arr_iv_sh,
  chords_Arr_v,
  chords_Arr_v_sh
} from "../../constants/constants";

/* Util */
import { changeSharpToFlat } from "../../util/changeChordType";

const speedOfScroll = [
  { id: 1, name: "100", speed: 50000 },
  { id: 2, name: "200", speed: 100000 },
  { id: 3, name: "300", speed: 150000 },
  { id: 4, name: "400", speed: 200000 },
  { id: 5, name: "500", speed: 250000 },
  { id: 6, name: "600", speed: 300000 },
  { id: 7, name: "700", speed: 350000 },
  { id: 8, name: "800", speed: 400000 },
];

const Hook = () => {
  //#region - Declarations
  /* Primary States */
  const [inputLyric, setInputLyric] = useState("");
  const [lyricBoard, setLyricBoard] = useState([]);
  const [detectedChords, setDetectedChords] = useState([]);
  const [transposedChords, setTransposedChords] = useState([]);
  const [transposeLvl, setTransposeLvl] = useState(0);
  const [matchesPos, setMatchesPos] = useState([]);
  const [editMode, setEditMode] = useState(true);
  const [formMessage, setFormMessage] = useState("");
  const [currentBoard, setCurrentBoard] = useState(null);
  const printRef = useRef();
  const [isPrinting, setIsPrinting] = useState(false);
  const [isSetting, setIsSetting] = useState(true);
  const [isFlat, setIsFlat] = useState(true);
  const [selection, setSelection] = useState(); /* Key combination  */
  const [selected, setSelected] = useState(speedOfScroll[0].name);

  /* Redux */
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.mainGen);
  const { boardId } = useParams();

  const showLyricBoard = !loading && lyricBoard.length > 0 && !editMode;
  const textArea = useRef();

  //#endregion

  /**
   *  useEffect functions
   */
  //#region
  useEffect(() => {
    // console.log({boardId})
    let currentBoard = boardListData.filter((item) => {
      return item.id === parseInt(boardId);
    });
    currentBoard.length > 0 && setCurrentBoard(currentBoard[0]);
  }, [boardId, dispatch]);

  useEffect(() => {
    isFlat ? dispatch(sendFlatType()) : dispatch(sendSharpType());
  }, [isFlat, dispatch]);

  useEffect(() => {
    let matches;
    let detectedChordsArr = [];
    let matchesPosArr = []; /* Temp array to store match positions */
    while ((matches = ChordRegexOp.exec(lyricBoard)) !== null) {
      if (matches.index === ChordRegexOp.lastIndex) {
        ChordRegexOp.lastIndex++;
      }

      matches.forEach((match, groupIndex) => {
        // if (match.trim().length <=5) {
          let trimmedMatch = match.trim();
          let sharpedChord = changeSharpToFlat(trimmedMatch);
          detectedChordsArr.push(sharpedChord);

          matchesPosArr.push({
            matchChord: match,
            startPos: matches.index,
            endPos: ChordRegexOp.lastIndex,
          });
        // }
      });
    }

    setMatchesPos(matchesPosArr);
    setDetectedChords(uniq(detectedChordsArr));
    dispatch(sendDetectedChords(uniq(detectedChordsArr)));
  }, [lyricBoard, isFlat, dispatch]);

  useEffect(() => {
    /* Key combinations and cursor focus */
    if (!selection) return; // prevent running on start
    const { start, end } = selection;
    textArea.current.focus();
    textArea.current.setSelectionRange(start, end);
  }, [selection]);

  //#region calculating transposed chords
  useEffect(() => {
    let transposedChordArr = []; /* temporary array for transposed chords */

    if (isFlat) {
      /* For flat chords */
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

          if (chords_Arr_iii.indexOf(chord) !== -1) {
            let indexDown = handleDownStrictLvl(
              chords_Arr_iii.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_iii[indexDown]);
          }

          if (chords_Arr_iv.indexOf(chord) !== -1) {
            let indexDown = handleDownStrictLvl(
              chords_Arr_iv.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_iv[indexDown]);
          }

          if (chords_Arr_v.indexOf(chord) !== -1) {
            let indexDown = handleDownStrictLvl(
              chords_Arr_v.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_v[indexDown]);
          }

          return true;
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

          if (chords_Arr_iii.indexOf(chord) !== -1) {
            let indexUp = handleUpStrictLvl(
              chords_Arr_iii.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_iii[indexUp]);
          }

          if (chords_Arr_iv.indexOf(chord) !== -1) {
            let indexUp = handleUpStrictLvl(
              chords_Arr_iv.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_iv[indexUp]);
          }

          if (chords_Arr_v.indexOf(chord) !== -1) {
            let indexUp = handleUpStrictLvl(
              chords_Arr_v.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_v[indexUp]);
          }
          
          return true;
        });
      }
    } else {
      /* For sharp chords */
      if (transposeLvl <= -1) {
        detectedChords.map((chord) => {
          if (
            12 + (chords_Arr_i_sh.indexOf(chord) + transposeLvl) ===
            chords_Arr_i_sh.indexOf(chord)
          ) {
            setTransposeLvl(0);
          }

          if (chords_Arr_i_sh.indexOf(chord) !== -1) {
            let indexDown = handleDownStrictLvl(
              chords_Arr_i_sh.indexOf(chord),
              transposeLvl
            );

            transposedChordArr.push(chords_Arr_i_sh[indexDown]);
          }

          if (chords_Arr_ii_sh.indexOf(chord) !== -1) {
            let indexDown = handleDownStrictLvl(
              chords_Arr_ii_sh.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_ii_sh[indexDown]);
          }

          if (chords_Arr_iii_sh.indexOf(chord) !== -1) {
            let indexDown = handleDownStrictLvl(
              chords_Arr_iii_sh.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_iii_sh[indexDown]);
          }

          if (chords_Arr_iv_sh.indexOf(chord) !== -1) {
            let indexDown = handleDownStrictLvl(
              chords_Arr_iv_sh.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_iv_sh[indexDown]);
          }

          if (chords_Arr_v_sh.indexOf(chord) !== -1) {
            let indexDown = handleDownStrictLvl(
              chords_Arr_v_sh.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_v_sh[indexDown]);
          }

          return true;
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

          if (chords_Arr_iii.indexOf(chord) !== -1) {
            let indexUp = handleUpStrictLvl(
              chords_Arr_iii.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_iii[indexUp]);
          }

          if (chords_Arr_iv.indexOf(chord) !== -1) {
            let indexUp = handleUpStrictLvl(
              chords_Arr_iv.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_iv[indexUp]);
          }

          if (chords_Arr_v.indexOf(chord) !== -1) {
            let indexUp = handleUpStrictLvl(
              chords_Arr_v.indexOf(chord),
              transposeLvl
            );
            transposedChordArr.push(chords_Arr_v[indexUp]);
          }
          return true;
        });
      }
    }

    setTransposedChords(transposedChordArr);
    dispatch(sendTransposedChords(transposedChordArr));
  }, [transposeLvl, detectedChords, dispatch, isFlat]);

  //#endregion

  //#endregion

  /**
   *  Associate functions
   */
  //#region
  const handleCombineKey = (e) => {
    /* Ctrl + SPACE = Tab */
    if (e.ctrlKey && e.which === 32) {
      const start = textArea.current.selectionStart;
      const end = textArea.current.selectionEnd;

      let spacedIndex =
        inputLyric.slice(0, e.target.selectionStart) +
        "    " +
        inputLyric.slice(e.target.selectionStart);
      setSelection({
        start: start + 4,
        end: end + 4,
      });
      setInputLyric(spacedIndex);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputLyric.trim().length !== 0) {
      setFormMessage("");
      dispatch(setStartLoading());
      const linedLyric = inputLyric.split(/\r?\n/);

      const linedSpacedLyric = linedLyric.map((line) => {
        return line + " ";
      });

      setLyricBoard(linedSpacedLyric);
      dispatch(sendSongInputLyric(linedSpacedLyric));
      // console.log({ linedSpacedLyric });

      setEditMode(false);

      setTimeout(() => {
        dispatch(setStopLoading());
      }, 1000);
    } else {
      setFormMessage("*Please drop a fancy chord.");
    }
  };

  //#region calculating up,down array index of transposed chords from chord arrays i,ii
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
  //#endregion

  const handleTransposeUp = () => {
    setTransposeLvl((prev) => prev + 1);
  };

  const handleTransposeDown = () => {
    setTransposeLvl((prev) => prev - 1);
  };

  //#endregion

  return {
    inputLyric,
    transposedChords,
    transposeLvl,
    detectedChords,
    lyricBoard,
    editMode,
    textArea,
    matchesPos,
    loading,
    formMessage,
    printRef,
    isFlat,
    isPrinting,
    isSetting,
    showLyricBoard,
    currentBoard,
    selected,
    speedOfScroll,
    boardId,

    /* actions */
    setInputLyric,
    handleSubmit,
    setTransposeLvl,
    handleTransposeDown,
    handleTransposeUp,
    setEditMode,
    handleCombineKey,
    setFormMessage,
    setIsFlat,
    setIsPrinting,
    setIsSetting,
    setCurrentBoard,
    setSelected
  };
};

export default Hook;
