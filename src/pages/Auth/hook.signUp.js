import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";

/* Firebase utilities */
import { addDoc, getDocs } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { HOME, SIGN_IN } from '../../constants/routeNames';

/* Custom Hook */
import HookFirebaseAssets from "../../hook.firebaseAssets";

const Hook = () => {

  const { auth, userCollection, getSessionUserInfo } = HookFirebaseAssets();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [passMatch, setPassMatch] = useState(true);

  useEffect(() => {
    if (getSessionUserInfo !== null) {
      navigate(HOME);
    }
  }, []);

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    watch("userConfirmPassword") !== "" &&
      setTimeout(() => {
        watch("userConfirmPassword") !== watch("userPassword")
          ? setPassMatch(false)
          : setPassMatch(true);
      }, 1000);
  }, [watch("userConfirmPassword")]);

  const userSignUp = (data) => {
    if (passMatch) {
      setIsLoading(true);
      createUserWithEmailAndPassword(
        auth,
        watch("userMail"),
        watch("userPassword")
      )
        .then((resData) => {
          localStorage.setItem(
            "gui-userInfo",
            JSON.stringify({
              id: resData.user.uid,
              email: resData.user.email,
              accessToken: resData.user.accessToken,
            })
          );

          localStorage.setItem("gui-verified", resData.user.emailVerified);

          addDoc(userCollection, {
            name: data.userName,
            email: data.userMail,
          })
            .then(() => {
              // alert("Data Added");
            })
            .catch((err) => {
              alert(err.message);
            });

          sendEmailVerification(auth.currentUser)
            .then(() => {
              setIsEmailSent(true);
              setTimeout(() => {
                navigate(HOME);
              }, 3000);
            })
            .catch((err) => alert("fail email"));
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          alert(err.message);
        });
    }
  };

  const getUser = () => {
    getDocs(userCollection)
      .then((res) => {
        console.log(auth.currentUser);
        console.log(
          res.docs.map((item) => {
            return { data: item.data(), id: item.id };
          })
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return {
    errors,
    register,
    passMatch,
    isLoading,
    isEmailSent,
    getUser,

    /* actions */
    handleSubmit,
    userSignUp,
  };
};

export default Hook;
