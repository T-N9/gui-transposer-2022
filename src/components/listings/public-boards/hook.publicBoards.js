import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/* Firebase assets */
import HookFirebaseAssets from "../../../hook.firebaseAssets";

const Hook = () => {
  const { boardList } = useSelector((state) => state.boardList);

  const { fetchPublicBoardList } = HookFirebaseAssets();

  useEffect(() => {
    fetchPublicBoardList();
  }, []);

  return {
    boardList,
  };
};

export default Hook;
