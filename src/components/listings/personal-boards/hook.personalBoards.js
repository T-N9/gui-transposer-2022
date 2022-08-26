import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/* Firebase assets */
import HookFirebaseAssets from "../../../hook.firebaseAssets";

import { setIsPersonalBoard } from "../../../store/generalSlice";

const Hook = () => {
  const dispatch = useDispatch();
  const { personalBoardList } = useSelector((state) => state.boardList);

  const { fetchPersonalBoardList } = HookFirebaseAssets();

  useEffect(() => {
    fetchPersonalBoardList();
  }, []);

  const handleBoardType = () => {
    dispatch(setIsPersonalBoard())
  }

  return {
    personalBoardList,
    handleBoardType
  };
}

export default Hook;
