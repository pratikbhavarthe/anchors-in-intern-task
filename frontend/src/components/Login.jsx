import React from "react";
import { FaRocket } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-5 rounded-lg bg-[#191919] p-12 mt-12">
        <FaRocket className="text-2xl" />
        <div className="font-bold text-2xl p-5">Login Your Account</div>
        <form className="flex flex-col justify-center items-center gap-3 p-2">
          <input
            className=" border rounded-full px-4 py-2 bg-inherit"
            type="email"
            name="email"
            placeholder="Email ID"
          />
          <input
            className=" border rounded-full px-4 py-2 bg-inherit"
            type="password"
            name="password"
            placeholder="Password"
          />
        </form>

        <Link
          to="/post"
          className="border-none rounded-full bg-[#404040] flex items-center justify-center gap-2 px-16 py-2"
        >
          Continue
          <FaArrowRight />
        </Link>
      <div className="text-center">Forgot password? <Link to="/reset" className="underline">Reset</Link></div>

      </div>
    </div>
  );
};

export default Login;
