import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import { app, database } from "./firebase-config";

import { getAuth } from "firebase/auth";

/* Firebase utilities */
import { collection, getDocs } from "firebase/firestore";

const Hook = () => {
  let auth = getAuth();
  const location = useLocation();
  const navigate = useNavigate();

  //   User Collection
  const userCollection = collection(database, "gui-users");
  const getSessionUserInfo = JSON.parse(localStorage.getItem("gui-userInfo"));

  useEffect(() => {
    if (getSessionUserInfo !== null) {
      // navigate("/");
      getDocs(userCollection)
        .then((res) => {
          if (auth.currentUser) {
            auth.currentUser.emailVerified === true &&
              localStorage.setItem("gui-verified", true);
            // navigate("/");
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      navigate("/sign-up");
    }
  }, []);
  return {
    location,
  };
};

export default Hook;
