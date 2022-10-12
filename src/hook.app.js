import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

/* Firebase utilities */
import { getDocs } from "firebase/firestore";

/* Custom Hook */
import HookFirebaseAssets from "./hook.firebaseAssets";

/* Constants */
import { SIGN_UP } from "./constants/routeNames";

/* Local */
import { GUI_ISADMIN, GUI_USERINFO } from "./constants/localAttributes";

const Hook = () => {
  const { auth, userCollection, getSessionUserInfo } = HookFirebaseAssets();

  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;

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
      // navigate(SIGN_UP);
    }
  }, []);

  return {
    location,
  };
};

export default Hook;
