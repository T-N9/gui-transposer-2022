import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/* Firebase utilities */
import { database } from "./firebase-config";
import { getAuth } from "firebase/auth";
import { collection, getDocs, where, query } from "firebase/firestore";

/* Redux Actions */
import { setStartLoading, setStopLoading } from "./store/generalSlice";
import { sendBoardList, sendPersonalBoardList } from "./store/boardListSlice";
import { setUserData } from "./store/userDataSlice";

/* Local */
import { GUI_USERINFO } from "./constants/localAttributes";
const userId = localStorage.getItem("gui-userId");

const HookFirebaseAssets = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const { boardList, personalBoardList } = useSelector(
    (state) => state.boardList
  );

  //   User Collection
  const userCollection = collection(database, "gui-users");
  const getSessionUserInfo = JSON.parse(localStorage.getItem("gui-userInfo"));
  const adminCollection = collection(database, "gui-admins");
  const publicBoardsCollection = collection(database, "public-boards");

  const personalBoardsCollection = collection(
    database,
    `gui-users/${userId}/boards`
  );

  const fetchPublicBoardList = (isReq) => {
    if (boardList.length === 0 || isReq) {
      dispatch(setStartLoading());
      getDocs(publicBoardsCollection)
        .then((res) => {
          let boardDataRef = [];
          res.docs.map((item) => {
            boardDataRef.push({ data: item.data(), id: item.id });
          });

          dispatch(sendBoardList(boardDataRef));
          dispatch(setStopLoading());
        })
        .catch((err) => {
          console.log(err.message);
          dispatch(setStopLoading());
        });
    }
  };

  const fetchPersonalBoardList = (isReq) => {
    if (personalBoardList.length === 0 || isReq) {
      dispatch(setStartLoading());
      getDocs(personalBoardsCollection)
        .then((res) => {
          let boardDataRef = [];
          res.docs.map((item) => {
            boardDataRef.push({ data: item.data(), id: item.id });
          });
          
          dispatch(sendPersonalBoardList(boardDataRef));
          dispatch(setStopLoading());
        })
        .catch((err) => {
          console.log(err.message);
          dispatch(setStopLoading());
        });
    }
  };

  const fetchUserData = () => {
    const userQuery = query(
      userCollection,
      where("email", "==", getSessionUserInfo?.email)
    );

    getDocs(userQuery).then((res) => {
      {
        dispatch(setUserData(res.docs.map((item) => item.data())));
        // console.log(res.docs.map((item) => item.data()));
      }
    });
  };
  // collection and used query

  useEffect(() => {
    getSessionUserInfo && fetchUserData();
  }, []);

  return {
    auth,
    userCollection,
    getSessionUserInfo,
    adminCollection,
    publicBoardsCollection,
    personalBoardsCollection,

    /* actions */
    fetchPublicBoardList,
    fetchPersonalBoardList,
  };
};

export default HookFirebaseAssets;
