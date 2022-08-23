import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

/* Firebase utilities */
import { getDocs } from "firebase/firestore";

/* Custom Hook */
import HookFirebaseAssets from "./hook.firebaseAssets";

const Hook = () => {
  const { auth, userCollection, getSessionUserInfo } = HookFirebaseAssets();

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
          // console.log(getSessionUserInfo.email, userInfoSha)
          localStorage.setItem("gui-userId", userInfoSha[0]?.id);
          // console.log(
          //   res.docs.map((item) => {
          //     return { data: item.data(), id: item.id };
          //   })
          // );
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
