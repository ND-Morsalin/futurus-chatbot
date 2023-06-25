import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../provider/Auth/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import validator from "../../../utility/validator";
// import toast from "react-hot-toast";

const Login = () => {
  const {
    login,
    loginWithGoogle,
    loginWithGithub,
    setLoading,
    error,
    setError,
    forgetPassword,
  } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState(error);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validator(email, password)) {
      setInputError(validator(email, password));
      return;
    }
    try {
      await login(email, password);
      // redirect to previous page
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setError(error.message);
      setInputError(error.message);
    }
  };

  // login with google
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      // redirect to previous page
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setError(error.message);
      setInputError(error.message);
    }
  };

  // login with github
  const handleGithubLogin = async () => {
    try {
      await loginWithGithub();
      // redirect to previous page
      navigate(location?.state?.from?.pathname || "/");
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setError(error.message);
      setInputError(error.message);
    }
  };

  const handleForgetPassword = async () => {
    if (!email) {
      setInputError("Please enter your email for password reset        ");
      return;
    }
    try {
      await forgetPassword(email);
      /* toast("Don't worry if the email goes to the spam folder", {
        icon: "👏",
      }); */
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setError(error.message);
      setInputError(error.message);
    }
  };
  return (
    <div className="container px-8 mx-auto">
      <>
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative p-10 bg-slate-900 shadow-lg sm:rounded-3xl ">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">
                    Login Form with Floating Labels
                  </h1>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="divide-y divide-gray-200"
                >
                  <div className="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="email"
                        name="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setInputError("");
                        }}
                        type="text"
                        className="peer placeholder-transparent rounded-lg px-4 py-2 w-full text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 -top-6 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-300 peer-focus:text-sm"
                      >
                        Email Address{" "}
                        <span className="ms-2 text-warning">required</span>
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setInputError("");
                        }}
                        className="peer placeholder-transparent rounded-lg px-4 py-2 w-full text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-4 -top-6 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-300 peer-focus:text-sm"
                      >
                        Password{" "}
                        <span className="ms-2 text-warning">required</span>
                      </label>
                    </div>
                    <div className="relative">
                      <button
                        // onClick={handleSubmit}
                        type="submit"
                        className="bg-blue-500 text-white rounded-md px-2 py-1"
                      >
                        Submit
                      </button>
                    </div>
                    <p className="text-red-500">{inputError || error}</p>
                    <h5 className="text-green-400">
                      {" "}
                      Forget password{" "}
                      <span
                        onClick={handleForgetPassword}
                        className="font-bold cursor-pointer"
                      >
                        send an email
                      </span>
                    </h5>

                    <div className="space-y-4">
                      <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 text-white items-center gap-4 w-full"
                      >
                        Login with google <FaGoogle />
                      </button>
                      <button
                        type="button"
                        onClick={handleGithubLogin}
                        className="btn bg-gradient-to-r from-blue-800  to-purple-900 text-white items-center gap-4 w-full"
                      >
                        Login with GitHub <FaGithub />
                      </button>
                    </div>
                    <p className="">
                      Don&apos;t have any account please{" "}
                      <Link className="text-emerald-500" to="/auth/register">
                        create
                      </Link>{" "}
                      an Account
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Login;
