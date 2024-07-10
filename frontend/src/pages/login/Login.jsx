import React from "react";

const login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div
        className="p-6 h-full w-full bg-blue-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-green-500"> Chat</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </a>

          <div>
            <button class="w-full h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
