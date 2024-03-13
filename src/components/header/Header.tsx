// Header.js
import React from "react";

const Header = () => {
  return (
    <div className="bg-zinc-800 w-full md:w-auto flex items-center justify-center text-center h-12 md:h-auto md:flex-col 
    border-b border-violet-500 px-4 md:px-10 py-2 md:py-10">
      <h1 className="text-white font-bold text-xl">Simple crud</h1>
    </div>
  );
};

export default Header;
