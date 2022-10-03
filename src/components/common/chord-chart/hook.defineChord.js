import { useDispatch } from "react-redux";

/* Util */
import extractChord from "../../../chordDB";

/* Actions */
import {
  setChordToShow,
  setChordPositions,
} from "../../../store/chordChartSlice";

const Hook = () => {
  const dispatch = useDispatch();
  const handleClickChord = (chord) => {
    const { wantedPositions } = extractChord(chord, true);

    console.log({ wantedPositions })

    dispatch(setChordToShow(chord));
    dispatch(setChordPositions(wantedPositions));
  };

  return {
    handleClickChord,
  };
};

export default Hook;
