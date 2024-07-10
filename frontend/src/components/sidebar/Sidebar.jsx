import React from "react";
import SearchInput from "./SearchInput.jsx";
import Converstaions from "./Converstaions.jsx";
import Logout from "./Logout.jsx";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3" />
      <Converstaions />
      <Logout />
    </div>
  );
};

export default Sidebar;
