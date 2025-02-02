import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import evoke from "../../../public/Evoke.png";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleUsername = (event) => setUsername(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const handleSignup = async (event) => {
    event.preventDefault();

    const requestBody = { username, email, password };

    try {
      const response = await axios.post(`${API_URL}/auth/signup`, requestBody);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.response.data.errorMessage);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <img src={evoke} width={150} className="mx-auto" />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Create an account
            </h3>
            <p className="">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <form onSubmit={handleSignup}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                required
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={handleUsername}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="email">Email:</label>
              <input
                required
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password">Password:</label>
              <input
                required
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full mt-8 px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Create account
            </button>
            {/* Submit */}
            <motion.button
              whileHover={{
                scale: 1.01,
              }}
              whileTap={{
                scale: 0.99,
              }}
              type="button"
              className={
                "w-full mt-4 px-4 py-2 text-white font-medium bg-violet-600 hover:bg-violet-500 active:bg-indigo-600 rounded-lg duration-150"
              }
            >
              <Link to="/">Home</Link>
            </motion.button>
          </form>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </div>
    </main>
  );
}
export default Signup;
