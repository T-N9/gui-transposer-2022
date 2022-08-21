import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";

import { database } from "../../firebase-config";

/* Firebase utilities */
import { collection, addDoc, getDocs } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const Hook = () => {
  let auth = getAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [passMatch, setPassMatch] = useState(true);

  //   User Collection
  const userCollection = collection(database, "gui-users");

  // useEffect(() => {
  //   if (getSessionUserInfo !== null) {
  //     navigate("/");
  //     getDocs(userCollection)
  //       .then((res) => {
  //         if (auth.currentUser) {
  //           auth.currentUser.emailVerified === true &&
  //             localStorage.setItem("gui-verified", true);
  //           navigate("/");
  //         }
  //       })
  //       .catch((err) => {
  //         alert(err.message);
  //       });
  //   } else {
  //     navigate("sign-up");
  //   }
  // }, []);

  // useEffect(() => {

  // getDocs(userCollection)
  //   .then((res) => {
  //     if (auth.currentUser) {
  //       auth.currentUser.emailVerified === true &&
  //         localStorage.setItem("gui-verified", true);
  //       navigate("/");
  //     }
  //   })
  //   .catch((err) => {
  //     alert(err.message);
  //   });
  // console.log({ current: auth.currentUser });

  // }, [auth]);

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
        .then((res) => {
          localStorage.setItem(
            "gui-userInfo",
            JSON.stringify({
              id: res.user.uid,
              email: res.user.email,
              accessToken: res.user.accessToken,
            })
          );

          localStorage.setItem("gui-verified", res.user.emailVerified);

          addDoc(userCollection, {
            name: data.userName,
            email: data.userMail,
          })
            .then(() => {
              alert("Data Added");
            })
            .catch((err) => {
              alert(err.message);
            });

          sendEmailVerification(auth.currentUser)
            .then(() => {
              setIsEmailSent(true);
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
