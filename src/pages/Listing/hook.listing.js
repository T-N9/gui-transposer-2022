/* Data */
import { useEffect } from "react";
import { boardList } from "../../data/boardList";
import { useDispatch } from "react-redux";

import { resetSongInfo } from "../../store/currentSongInfoSlice";

const Hook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetSongInfo());
  }, [dispatch]);

  return {
    boardList,
  };
};

export default Hook;
