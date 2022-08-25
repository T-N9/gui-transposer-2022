import { Link } from "react-router-dom";

/* Icons */
import { Logo, LoadingAni } from "../../assets";

/* Components */
import { TextField, Button } from "@mui/material";

/* Constants */
import { RESET_PASSWORD, SIGN_UP } from '../../constants/routeNames';

import Hook from "./hook.signIn";

const SignIn = () => {
  const {
    errors,
    register,
    isInvalid,
    isLoading,

    /* actions */
    handleSubmit,
    userSignIn,
    resetPassword
  } = Hook();

  return (
    <section>
      <div className="min-h-screen w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(userSignIn)}
          className="w-[85%] lg:w-[25%] font-secondary gui-form"
        >
          <img className="w-[200px] mx-auto mb-5" src={Logo} alt="gui logo" />
          <h1 className="my-5 text-light-md text-xl font-bold">
            Sign In and rock.
          </h1>

          {isInvalid && (
            <div className="p-3 border-l-4 text-sm rounded border-danger mb-4 bg-white shadow-md border-2">
              <p>Inputted email or password is invalid.</p>
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

              <div className="flex flex-col relative">
                <TextField
                  className=""
                  sx={{
                    color: "custom.main",
                  }}
                  type="password"
                  name="userPassword"
                  id="userPassword"
                  {...register("userPassword", { required: true })}
                  label="Password"
                  variant="outlined"
                  size="small"
                />
                {errors.userPassword && (
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
                {
                  isLoading ? <img className="w-7" src={LoadingAni} alt="loading" /> : 'Confirm'
                }
                
              </Button>

              <p className="mt-3">
                Don't have an account?{" "}
                <Link to={SIGN_UP} className="text-light-md font-bold">
                  Register Here.
                </Link>
              </p>

              <p className="mt-1">
                <Link to={RESET_PASSWORD} className="text-light-md font-bold">
                  Forget your password?
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
