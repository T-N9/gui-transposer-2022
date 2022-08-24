/* Data */
import { useEffect } from "react";
import { boardList } from "../../data/boardList";
import { useDispatch } from "react-redux";

import { resetSongInfo } from "../../store/currentSongInfoSlice";

const Hook = () => {
  const isAdmin = localStorage.getItem("interactingAdmin");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetSongInfo());
  }, [dispatch]);

  return {
    boardList,
    isAdmin
  };
};

export default Hook;
