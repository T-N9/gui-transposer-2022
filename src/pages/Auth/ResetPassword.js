import React from "react";
import { Link } from "react-router-dom";

/* Icons */
import { Logo, LoadingAni } from "../../assets";

/* Component */
import { TextField, Button } from "@mui/material";

/* Hook */
import Hook from "./hook.resetPassword";

/* Constants */
import { SIGN_IN } from '../../constants/routeNames';

const ResetPassword = () => {
  const {
    register,
    errors,
    isLoading,
    isNotFound,
    isMailSent,

    /* actions */
    handleSubmit,
    resetPassword,
  } = Hook();

  return (
    <section>
      <div className="min-h-screen w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(resetPassword)}
          className="w-[85%] lg:w-[25%] font-secondary gui-form"
        >
          <img className="w-[200px] mx-auto mb-5" src={Logo} alt="gui logo" />
          <h1 className="my-5 text-light-md text-xl font-bold">
            Reset Password.
          </h1>

          {isNotFound && (
            <div className="p-3 border-l-4 text-sm rounded border-danger mb-4 bg-white shadow-md border-2">
              <p>No user found with this mail.</p>
            </div>
          )}

          {isMailSent && (
            <div className="p-3 border-l-4 text-sm rounded border-success mb-4 bg-white shadow-md border-2">
              <p>Reset mail has been sent.</p>
            </div>
          )}

          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col relative">
                <TextField
                  className=""
                  sx={{
                    color: "custom.main",
                  }}
                  type="email"
                  name="userMail"
                  id="userMail"
                  {...register("userMail", { required: true })}
                  label="Your Mail"
                  variant="outlined"
                  size="small"
                />
                {errors.userMail && (
                  <span className="text-danger form-require">
                    This field is required
                  </span>
                )}
              </div>

              <Button
                type="submit"
                variant="contain"
                sx={{
                  height: 37,
                  backgroundColor: "custom.main",
                  color: "white",
                  boxShadow: 1,
                  mt: 1,
                }}
              >
                {isLoading ? (
                  <img className="w-7" src={LoadingAni} alt="loading" />
                ) : (
                  "Send Mail"
                )}
              </Button>
            </div>
            <p>
              <Link to={SIGN_IN} className="text-light-md font-bold">Sign In</Link> to your account.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
