import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

/* Firebase assets */
import { database } from "../../firebase-config";
import { getAuth, signOut } from "firebase/auth";
import { getDocs, collection, query, where } from "firebase/firestore";

import { setStartLoading, setStopLoading } from "../../store/generalSlice";

/* Constants */
import { SIGN_UP } from '../../constants/routeNames';

const Hook = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();
  // get info from localStorage
  const userInfo = JSON.parse(localStorage.getItem("gui-userInfo"));
  const { profile } = useSelector((state) => state.userData);
  const userProfile = profile[0];

  // collection and used query
  const userDataRef = collection(database, "gui-users");
  const userQuery = query(userDataRef, where("email", "==", userInfo.email));

  const userData = auth.currentUser;
  const userName = userProfile !== null && userProfile?.name;
  const userMail = userProfile !== null && userProfile?.email;
  const isVerified = userData?.emailVerified;

  let matches = userName && userName?.match(/\b(\w)/g); 
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
        navigate(SIGN_UP);
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
    userProfile,
    profileName,

    /* actions */
    handleLogOut,
  };
};

export default Hook;
