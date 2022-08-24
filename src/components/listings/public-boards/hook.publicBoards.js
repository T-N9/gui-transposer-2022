import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/* Firebase assets */
import HookFirebaseAssets from "../../../hook.firebaseAssets";
import { getDocs } from "firebase/firestore";

/* Redux action */
import { sendBoardList } from "../../../store/boardListSlice";

const Hook = () => {
  const { boardList } = useSelector((state) => state.boardList);
  const dispatch = useDispatch();

  const { publicBoardsCollection } = HookFirebaseAssets();

  useEffect(() => {
    boardList.length === 0 &&
    getDocs(publicBoardsCollection)
      .then((res) => {
        let boardDataRef = [];
        res.docs.map((item) => {
          boardDataRef.push({ data: item.data(), id: item.id });
        });

        dispatch(sendBoardList(boardDataRef));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return {
    boardList
  };
};

export default Hook;
