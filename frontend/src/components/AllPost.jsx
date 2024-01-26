import React from "react";
import { TbCirclePlus } from "react-icons/tb";
import { Link } from "react-router-dom";

const AllPost = () => {
  return (
    <div className="flex flex-row justify-center h-screen bg-[#000000] text-white">
      {/* Left Screen */}
      <div className="w-[25%] flex flex-col text-xl gap-4 items-start">
        <div>
          <div className="flex flex-col text-[#868686] gap-4 pb-10">
            <Link
              to="/posts"
              className="border-none rounded-lg bg-[#0d0d0d] px-8 py-3"
            >
              All Post
            </Link>
            <Link
              to="/commented-post"
              className="border-none rounded-lg bg-[#0d0d0d] pl-8 pr-20 py-3"
            >
              Your Commented Post
            </Link>
            <Link
              to="/replied-post"
              className="rounded-lg bg-[#0d0d0d] px-8 py-3 border-none"
            >
              Your Replied Post
            </Link>
          </div>
          <div className="flex flex-col font-bold">
            <Link
              to="/create-post"
              className="flex items-center pl-10 pr-24 py-3 justify-center gap-4 text-xl border rounded-lg text-[#808080]"
            >
              <TbCirclePlus className="text-3xl" />
              Create Post
            </Link>
          </div>
        </div>
      </div>

      {/* Right Screen */}
      <div className="flex flex-col rounded-lg w-[40%] bg-[#0d0d0d] gap-4 px-6 pt-2">
        <div className="text-xl text-center font-bold">All Post(10)</div>
        <div className="flex flex-col text-xl rounded-lg bg-[#191919] text-[#929292] px-8 py-3 gap-4">
        <Link to='/post'>
          <div className="text-xl font-bold">This is Post Title</div>
          <div className="flex flex-row text-base gap-4">
            <div>12 Comment</div>
            <div>10 Reply</div>
          </div>
        </Link>
        </div>
        <div className="flex flex-col text-xl rounded-lg bg-[#191919] text-[#929292] px-8 py-3 gap-4">
        <Link to='/post'>
          <div className="text-xl font-bold">This is Second Post Title</div>
          <div className="flex flex-row text-base gap-4">
            <div>0 Comment</div>
            <div>0 Reply</div>
          </div>
        </Link>
        </div>
        <div className="flex flex-col text-xl rounded-lg bg-[#191919] text-[#929292] px-8 py-3 gap-4">
        <Link to='/post'>
          <div className="text-xl font-bold">This is Third Post Title</div>
          <div className="flex flex-row text-base gap-4">
            <div>0 Comment</div>
            <div>0 Reply</div>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default AllPost;
