/* Data */
import { useEffect } from "react";
import { boardList } from "../../data/boardList";
import { useDispatch } from "react-redux";

import { resetSongInfo } from "../../store/currentSongInfoSlice";
import { setIsPersonalBoard, setIsPublicBoard } from "../../store/generalSlice";

const Hook = () => {
  const isAdmin = localStorage.getItem("interactingAdmin");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetSongInfo());
  }, [dispatch]);

  const handlePersonalBoard = () => {
    dispatch(setIsPersonalBoard())
  }

  const handlePublicBoard = () => {
    dispatch(setIsPublicBoard())
  }

  return {
    boardList,
    isAdmin,

    // action
    handlePersonalBoard,
    handlePublicBoard
  };
};

export default Hook;
