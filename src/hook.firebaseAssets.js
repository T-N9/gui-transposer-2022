import { useSelector, useDispatch } from "react-redux";

/* Firebase utilities */
import { database } from "./firebase-config";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

/* Redux Actions */
import { setStartLoading, setStopLoading } from './store/generalSlice';
import { sendBoardList } from './store/boardListSlice';

const HookFirebaseAssets = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const { boardList } = useSelector((state) => state.boardList)

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
  }

  return {
    auth,
    userCollection,
    getSessionUserInfo,
    adminCollection,
    publicBoardsCollection,

    /* actions */
    fetchPublicBoardList
  };
};

export default HookFirebaseAssets;
