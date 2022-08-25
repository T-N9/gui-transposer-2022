import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

/* Firebase utilities */
import { getDocs } from "firebase/firestore";

/* Custom Hook */
import HookFirebaseAssets from "./hook.firebaseAssets";

/* Constants */
import { SIGN_UP } from './constants/routeNames';

const Hook = () => {
  const { auth, userCollection, getSessionUserInfo, adminCollection } =
    HookFirebaseAssets();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (getSessionUserInfo !== null) {
      getDocs(userCollection)
        .then((res) => {
          if (auth.currentUser) {
            auth.currentUser.emailVerified === true &&
              localStorage.setItem("gui-verified", true);
          }

          let userInfoSha = res?.docs.filter((info) => {
            return info.data().email === getSessionUserInfo.email;
          });
          localStorage.setItem("gui-userId", userInfoSha[0]?.id);
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      navigate(SIGN_UP);
    }
  }, []);

  return {
    location,
  };
};

export default Hook;
