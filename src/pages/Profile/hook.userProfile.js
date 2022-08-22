import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { database } from "../../firebase-config";
import { getAuth } from "firebase/auth";
import { getDocs, collection, query, where } from "firebase/firestore";

const Hook = () => {
    const navigate = useNavigate();
  const auth = getAuth();
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
  let profileName = userName && matches.join("").slice(0,2);

  const handleLogOut = () => {
    localStorage.removeItem("gui-userInfo");
    localStorage.removeItem("gui-verified");
    navigate("/sign-up");
  }

  return {
    userName,
    userMail,
    isVerified,
    userDetail,
    profileName,

    /* actions */
    handleLogOut
  };
};

export default Hook;
