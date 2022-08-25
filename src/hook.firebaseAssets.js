import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

/* Firebase utilities */
import { database } from "./firebase-config";
import { getAuth } from "firebase/auth";
import { collection, getDocs, where, query } from "firebase/firestore";

/* Redux Actions */
import { setStartLoading, setStopLoading } from "./store/generalSlice";
import { sendBoardList } from "./store/boardListSlice";
import { setUserData } from "./store/userDataSlice";

const HookFirebaseAssets = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const { boardList } = useSelector((state) => state.boardList);

  //   User Collection
  const userCollection = collection(database, "gui-users");
  const getSessionUserInfo = JSON.parse(localStorage.getItem("gui-userInfo"));
  const adminCollection = collection(database, "gui-admins");
  const publicBoardsCollection = collection(database, "public-boards");

  const fetchPublicBoardList = (isReq) => {
    // alert('fetching...')
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

    /* actions */
    fetchPublicBoardList,
  };
};

export default HookFirebaseAssets;
