import React from "react";
import { Link } from "react-router-dom";
import { TbCirclePlus } from "react-icons/tb";

const Createpost = () => {
  return (
    <div className="flex flex-row justify-center h-screen bg-[#000000] text-white">
      {/* Left Screen */}
      <div className="w-[25%] flex flex-row text-xl gap-10 items-start">
      <div>
        <div className="flex flex-col text-[#868686] gap-4 pb-10">
          <Link
            to="/posts"
            className="border-none rounded-lg bg-[#0d0d0d] px-8    py-3 "
          >
            All Post
          </Link>
          <Link
            to="/commented-post"
            className=" border-none rounded-lg bg-[#0d0d0d] pl-8 pr-20 py-3"
          >
            Your Commented Post
          </Link>
          <Link
            to="/replied-post"
            className="  rounded-lg bg-[#0d0d0d] px-8 py-3 border-none"
          >
            Your Replied Post
          </Link>
        </div>
        <div className="flex flex-col font-bold ">
          <Link
            to="/create-post"
            className="flex items-center pl-10 pr-24 py-3 justify-center gap-4 text-xl border rounded-lg bg-[
            text-[#808080]"
          >
            <TbCirclePlus className="text-3xl" />
            Create Post
          </Link>
        </div>
      </div>
      </div>

      {/* Right Screen */}
      <div className=" flex flex-col rounded-lg w-[40%] bg-[#0d0d0d] gap-4 px-6 pt-2">
        <div className="text-xl text-center font-bold">Create Post</div>
        <form className="flex flex-col text-xl  gap-10">
          <div className="flex flex-col gap-4">
            <input
              className=" border-none rounded-lg px-6 py-4  bg-[#191919] text-[#8c8c8c]"
              type="text"
              title="title"
              placeholder="Post Title..."
            />
            <textarea
              className=" border-none rounded-lg px-6 py-4 pb-24 bg-[#191919] text-[#8c8c8c]"
              type="text"
              description="description"
              placeholder="Describe your post..."
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="border-none rounded-lg bg-[#252525] text-[#929292] px-12 py-3">
              Post Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createpost;
