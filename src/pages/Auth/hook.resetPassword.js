import { useState } from "react";
import { useForm } from "react-hook-form";

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Hook = () => {
  const auth = getAuth();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [ isNotFound, setIsNotFound ] = useState(false);

  const resetPassword = () => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, watch("userMail"))
      .then((res) => {
        setIsLoading(false);
        setIsNotFound(false);
      })
      .catch((err) => {
        setIsNotFound(true);
        setIsLoading(false);
      });
  };

  return {
    register,
    errors,
    isLoading,
    isNotFound,

    /* actions */
    handleSubmit,
    resetPassword
  };
};

export default Hook;
