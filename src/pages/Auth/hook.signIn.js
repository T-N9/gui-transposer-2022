import { useState } from "react";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";

import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const Hook = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userSignIn = (data) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, data.userMail, data.userPassword)
      .then((res) => {
        setIsInvalid(false);
        console.log(res.user);
        setIsLoading(false);
        localStorage.setItem(
          "gui-userInfo",
          JSON.stringify({
            id: res.user.uid,
            email: res.user.email,
            accessToken: res.user.accessToken,
          })
        );

        localStorage.setItem("gui-verified", res.user.emailVerified);
        navigate("/");
      })
      .catch((err) => {
        setIsInvalid(true);
        setIsLoading(false);
      });
  };

  return {
    errors,
    register,
    isInvalid,
    isLoading,

    /* actions */
    handleSubmit,
    userSignIn,
  };
};

export default Hook;
