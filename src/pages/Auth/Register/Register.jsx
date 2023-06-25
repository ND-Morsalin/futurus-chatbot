import { useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../provider/Auth/AuthProvider";
import validator from "../../../utility/validator";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { register, error, loading } = useAuth();
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState(error);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validator(email, password)) {
      setInputError(validator(email, password));
      return;
    }

    // console.log(name, photoUrl, email, password);
    try {
      const currentUser = await register(email, password, name, photoUrl);

      // redirect to previous page
      if (error || !currentUser) {
        console.log("location error", {
          location,
          error,
          inputError,
          loading,
          currentUser,
        });

        return;
      }

      navigate(location?.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      console.log("location catch", location, error, error.message, inputError);
      console.error(error);
      console.log(error.message);
    }
  };
  console.log({ error, inputError });

  return (
    <div className="container px-8 mx-auto">
      <>
        <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative p-10 bg-slate-900 shadow-lg sm:rounded-3xl">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Create an account</h1>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="divide-y divide-gray-200"
                >
                  <div className="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        className="peer placeholder-transparent rounded-lg px-4 py-2 w-full text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter your name"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 -top-6 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-300 peer-focus:text-sm"
                      >
                        Enter your name{" "}
                        <span className="ms-2 text-info">Optional</span>
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="photoUrl"
                        name="photoUrl"
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        type="text"
                        className="peer placeholder-transparent rounded-lg px-4 py-2 w-full text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Enter your photoUrl"
                      />
                      <label
                        htmlFor="photoUrl"
                        className="absolute left-4 -top-6 text-gray-300 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-300 peer-focus:text-sm"
                      >
                        Enter your photoUrl{" "}
                        <span className="ms-2 text-info">Optional</span>
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setInputError("");
                        }}
                        type="text"
                        className="peer placeholder-transparent rounded-lg px-4 py-2 w-full text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                        required
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
                    <p className="">
                      <span className="text-red-500">
                        {inputError || error}
                      </span>
                    </p>

                    <div className="relative">
                      <button
                        // onClick={handleSubmit}
                        type="submit"
                        className={`${
                          email === "" || password === "" || inputError
                            ? "bg-blue-800"
                            : "bg-blue-500"
                        } text-white rounded-md px-2 py-1 `}
                      >
                        Submit
                      </button>
                    </div>
                    <p className="">
                      Already have an account? go to{" "}
                      <Link className="text-emerald-400" to="/auth/login">
                        Login
                      </Link>{" "}
                      page
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

export default Register;
