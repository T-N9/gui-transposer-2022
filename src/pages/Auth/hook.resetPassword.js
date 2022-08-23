import { useState } from "react";
import { useForm } from "react-hook-form";

import { sendPasswordResetEmail } from "firebase/auth";

import HookFirebaseAssets from "../../hook.firebaseAssets";

const Hook = () => {
  const { auth } = HookFirebaseAssets();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [ isLoading, setIsLoading] = useState(false);
  const [ isNotFound, setIsNotFound ] = useState(false);
  const [ isMailSent, setIsMailSent ] = useState (false);

  const resetPassword = () => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, watch("userMail"))
      .then((res) => {
        setIsMailSent(true);
        setIsLoading(false);
        setIsNotFound(false);
      })
      .catch((err) => {
        setIsMailSent(false);
        setIsNotFound(true);
        setIsLoading(false);
      });
  };

  return {
    register,
    errors,
    isLoading,
    isNotFound,
    isMailSent,

    /* actions */
    handleSubmit,
    resetPassword
  };
};

export default Hook;
