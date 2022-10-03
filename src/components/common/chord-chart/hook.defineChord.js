import { useDispatch } from "react-redux";

/* Util */
import extractChord from "../../../chordDB";

/* Actions */
import {
  setChordToShow,
  setChordPositions,
  togglePresentChords
} from "../../../store/chordChartSlice";

const Hook = () => {
  const dispatch = useDispatch();
  const handleClickChord = (chord) => {
    const { wantedPositions } = extractChord(chord, true);

    dispatch(setChordToShow(chord));
    dispatch(setChordPositions(wantedPositions));
    dispatch(togglePresentChords());
  };

  const closePresentChords = () => {
    dispatch(togglePresentChords());
  } 

  return {
    handleClickChord,
    closePresentChords
  };
};

export default Hook;
