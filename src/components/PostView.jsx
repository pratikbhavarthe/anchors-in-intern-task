import React from "react";
import { TbCirclePlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PostView = () => {
  return (
    <div className="flex flex-row justify-center  bg-[#000000] text-white">
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
        <div className="text-xl text-center font-bold">All View Post(10)</div>
        <div className="flex flex-col text-xl rounded-lg bg-[#191919] text-[#929292] px-8 py-3 gap-4">
          <div className="text-xl font-bold">This is Post Title</div>
          <div className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            temporibus mollitia nesciunt nam repellat. Repudiandae quisquam
            fugit molestiae quas nesciunt.
          </div>
          <div className="flex flex-row italic text-base gap-4">
            <div>12 Comment</div>
            <div>10 Reply</div>
          </div>
          <div className="font-semibold">Comments</div>
          {/* Add New Comment */}
          <div>
            <form className="flex flex-row justify-between text-base gap-4 bg-[#252525] border-none rounded-md">
              <input
                className=" border-none rounded-lg focus:outline-none pl-6 pr-24 py-4 text-white  bg-[#252525]"
                type="text"
                name="newComment"
                placeholder="Add new comment here..."
              />
              <button className="flex flex-row items-center justify-center gap-2 border-none rounded-lg bg-[#ffffff] text-[#000000] py-3 px-4">
                Post Comment <FaArrowRight />
              </button>
            </form>
          </div>

          <div>
            <div className="flex flex-row gap-1">
              <div className=" italic font-medium">CommenterName:</div>
              <div className="flex flex-col">
                <div className="pb-4">
                  This is good post Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. A quae obcaecati pariatur est possimus,
                  dolorem nemo cumque cupiditate labore culpa?{" "}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                      <div className="italic font-medium">Replier:</div>
                      <div> No, it's not good</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                      <div className="italic font-medium">Replier:</div>
                      <div>
                        {" "}
                        No, it's not good Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Amet ad iusto blanditiis, fugiat
                        veritatis quos.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                      <div className="italic font-medium">Replier:</div>
                      <div> No, it's not good</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd comment */}
          <div>
            <div className="flex flex-row gap-1">
              <div className=" italic font-medium">Vikash:</div>
              <div className="flex flex-col">
                <div className="pb-4">
                  This is good post Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. A quae obcaecati pariatur est possimus,
                  dolorem nemo cumque cupiditate labore culpa?{" "}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                      <div className="italic font-medium">Deepak:</div>
                      <div> No, it's not good</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                      <div className="italic font-medium">Hemraj:</div>
                      <div>Its good but not perfect.</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-1">
                      <div className="italic font-medium">Replied:</div>
                      <div> No, it's not good</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
