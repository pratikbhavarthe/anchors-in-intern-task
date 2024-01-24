import React from "react";
import Emoji from "./Emoji";

const SideBar = ({ onselectLink}) => {
    return (
        <div className="bg-black text-white w-65 h-100 mx-20 my-20">
            <div className="flex flex-col justify-between h-full p-4">
                <div>
                    <div className="space-y-4">
                        <div>
                            <button className="w-full h-12 flex items-center border border-gray-800 justify-center rounded-md hover:bg-gray-800"
                            onClick={() => onselectLink("all")}>
                                <span>All Posts</span>
                            </button>
                        </div>
                        <div>
                            <button className="w-full h-12 flex items-center border border-gray-800 justify-center rounded-md hover:bg-gray-800"
                            onClick={() => onselectLink("commented")}>
                                <span>Commented Posts</span>
                            </button>
                        </div>
                        <div>
                        <button className="w-full h-12 flex items-center border border-gray-800 justify-center rounded-md hover:bg-gray-800"
                            onClick={() => onselectLink("replied")}>
                                <span>Replied Posts</span>
                            </button>
                        </div>
                    </div>
                    <div className="mt-20">
                        <button className="w-full h-12 flex items-center justify-center rounded-md border-white border hover:bg-gray-800 mt-2"
                        onClick={() => onselectLink("create")}>
                            <Emoji symbol="➕" label="plus-sign" />
                            <span className="pl-2">Create Post</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;