import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full w-full mt-2"
      />
      <button type="submit" className="btn btn-circle bg-blue-400 mt-2">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
