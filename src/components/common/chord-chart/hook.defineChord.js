import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

/* Util */
import extractChord_beta from "../../../chordDB";

/* Actions */
import {
  setChordToShow,
  setChordPositions,
  togglePresentChords
} from "../../../store/chordChartSlice";
import { sendToggleChordBoard } from "../../../store/mainGenSlice";

const Hook = () => {

  const { showChordBoard } = useSelector((state)=> state.mainGen);

  const [ isHorizontal, setIsHorizontal ] = useState(true);

  const dispatch = useDispatch();
  const handleClickChord = (chord) => {
    const { wantedPositions } = extractChord_beta(chord, true);

    dispatch(setChordToShow(chord));
    dispatch(setChordPositions(wantedPositions));
    dispatch(togglePresentChords());
  };

  const closePresentChords = () => {
    dispatch(togglePresentChords());
  } 

  const handleToggleChordBoard = () => {
    dispatch(sendToggleChordBoard())
  }

  return {
    showChordBoard,
    isHorizontal,

    /* actions */
    handleClickChord,
    closePresentChords,
    handleToggleChordBoard,
    setIsHorizontal
  };
};

export default Hook;
