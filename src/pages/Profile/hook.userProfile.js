import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

/* Firebase assets */
import { database } from "../../firebase-config";
import { getAuth, signOut } from "firebase/auth";
import { getDocs, collection, query, where } from "firebase/firestore";

import { setStartLoading, setStopLoading } from "../../store/generalSlice";

const Hook = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  // get info from localStorage
  const userInfo = JSON.parse(localStorage.getItem("gui-userInfo"));

  // collection and used query
  const userDataRef = collection(database, "gui-users");
  const userQuery = query(userDataRef, where("email", "==", userInfo.email));

  const [userDetail, setUserDetail] = useState(null);

  const userData = auth.currentUser;
  const userName = userDetail !== null && userDetail[0].name;
  const userMail = userDetail !== null && userDetail[0].email;
  const isVerified = userData?.emailVerified;

  useEffect(() => {
    getDocs(userQuery).then((res) => {
      {
        setUserDetail(res.docs.map((item) => item.data()));
        console.log(res.docs.map((item) => item.data()));
      }
    });
  }, []);

  let matches = userName && userName?.match(/\b(\w)/g); // ['J','S','O','N']
  let profileName = userName && matches.join("").slice(0, 2);

  const handleLogOut = () => {
    dispatch(setStartLoading());
    localStorage.removeItem("gui-userInfo");
    localStorage.removeItem("gui-verified");
    localStorage.removeItem("gui-userId");
    localStorage.removeItem("interactingAdmin");

    signOut(auth)
      .then(() => {
        dispatch(setStopLoading());
        navigate("/sign-up");
      })
      .catch((err) => {
        dispatch(setStopLoading());
        alert(err.message);
      });
  };

  return {
    userName,
    userMail,
    isVerified,
    userDetail,
    profileName,

    /* actions */
    handleLogOut,
  };
};

export default Hook;
