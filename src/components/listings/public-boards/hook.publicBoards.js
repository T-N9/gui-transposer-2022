import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/* Firebase assets */
import HookFirebaseAssets from "../../../hook.firebaseAssets";

import { setIsPublicBoard } from "../../../store/generalSlice";

/* LocalStorage attributes */
import { GUI_USERINFO } from "../../../constants/localAttributes";

const Hook = () => {
  const dispatch = useDispatch();
  const { boardList } = useSelector((state) => state.boardList);

  const { fetchPublicBoardList } = HookFirebaseAssets();

  useEffect(() => {
    fetchPublicBoardList();
  }, []);

  const handleBoardType = () => {
    dispatch(setIsPublicBoard());
  };

  return {
    boardList,
    handleBoardType,
  };
};

export default Hook;
