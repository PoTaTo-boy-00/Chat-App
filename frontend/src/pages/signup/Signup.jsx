import React from "react";
import GenderCheck from "./GenderCheck.jsx";

const signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full p-6 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center">SignUp</h1>

        <form>
          <div>
            <label className="label p-2" />
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label p-2" />
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label p-2" />
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <label className="label p-2" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <GenderCheck />
          </div>
          <a className="text-sm hover:underline hover:text-blue-600 m-4 inline-block">
            Already have an account?
          </a>

          <div className="label p-2 justify-center">
            <button class="cursor-pointer font-semibold overflow-hidden relative z-100 border border-green-500 group px-8 py-2 rounded-md">
              <span class="relative z-10 text-green-500 group-hover:text-white text-xl duration-500">
                SignUp
              </span>
              <span class="absolute w-full h-full bg-green-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span class="absolute w-full h-full bg-green-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
