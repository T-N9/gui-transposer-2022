import { useDispatch } from "react-redux";

/* Util */
import extractChord from "../../../chordDB";

/* Actions */
import { setChordToShow } from "../../../store/chordChartSlice";

const Hook = () => {
  const dispatch = useDispatch();
  const handleClickChord = (chord) => {
    extractChord(chord, true);

    dispatch(setChordToShow(chord));
  };

  return {
    handleClickChord,
  };
};

export default Hook;
