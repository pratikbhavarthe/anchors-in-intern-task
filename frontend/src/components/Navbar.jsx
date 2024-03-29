import React from "react";
import { HiSquares2X2 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-black text-white px-6 pt-5 pb-10 ">
      <div>
        <Link to="/">
          <div className="flex gap-2 items-center">
            <HiSquares2X2 className="text-4xl" />
            <div className="font-bold">ANONYMOUS</div>
          </div>
        </Link>
      </div>
      <div className="text-xl font-bold">Welcome, Name</div>
    </div>
  );
};

export default Navbar;
