import { Link } from "react-router-dom";

/* Icons */
import { Logo, LoadingAni } from "../../assets";

/* Components */
import { TextField, Button } from "@mui/material";

/* Hook */
import Hook from "./hook.signUp";

const SignUp = () => {
  const {
    errors,
    register,
    passMatch,
    isLoading,
    isEmailSent,
    getUser,

    /* actions */
    handleSubmit,
    userSignUp,
  } = Hook();

  return (
    <section>
      <div className="min-h-screen w-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(userSignUp)}
          className="w-[85%] lg:w-[25%] font-secondary gui-form"
        >
          <img className="w-[200px] mx-auto mb-5" src={Logo} alt="gui logo" />

          <h1 className="my-5 text-light-md text-xl font-bold">
            Create an account.
          </h1>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-3">
              <div className="flex flex-col relative">
                <TextField
                  className=""
                  sx={{
                    color: "custom.main",
                  }}
                  type="text"
                  name="userName"
                  id="userName"
                  {...register("userName", { required: true })}
                  label="Your Name"
                  variant="outlined"
                  size="small"
                />
                {errors.userName && (
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

              <div className="flex flex-col relative">
                <TextField
                  className=""
                  sx={{
                    color: "custom.main",
                  }}
                  type="password"
                  name="userConfirmPassword"
                  id="userConfirmPassword"
                  {...register("userConfirmPassword", { required: true })}
                  label="Re-type Password"
                  variant="outlined"
                  size="small"
                />
                {errors.userConfirmPassword && (
                  <span className="text-danger form-require">
                    This field is required
                  </span>
                )}
                {!passMatch && (
                  <span className="text-danger form-require">
                    Passwords are not matched.
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
                  "Confirm"
                )}
              </Button>

              {isEmailSent && (
                <div className="p-3 border-l-4 text-sm rounded border-success mb-4 bg-white shadow-md border-2">
                  <p>Verification email has sent.</p>
                  <p>Reload page after verification.</p>
                </div>
              )}

              <p className="mt-3">
                Already have an account?{" "}
                <Link to="/sign-in" className="text-light-md font-bold">
                  Sign in.
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
