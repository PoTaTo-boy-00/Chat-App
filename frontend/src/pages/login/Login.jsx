import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import toast from "react-hot-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      toast.error(error.message);
    }
  };
  console.log({ username, password });

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div
        className="p-6 h-full w-full bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
"
      >
        <h1 className="text-3xl font-semibold text-center text-green-400">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" />

            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered w-full max-w-xs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label p-2" />

            <input
              type="text"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm  text-black hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </Link>

          <div className="label p-2 justify-center">
            <button
              className=" relative px-8 py-2 rounded-md bg-slate-200 text-slate-600 isolation-auto z-10 border-2 border-lime-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-lime-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
