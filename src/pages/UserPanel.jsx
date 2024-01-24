import React, { useState } from "react";
import SideBar from "../components/SideBar";

const UserPanel = () => {
    const [selectedLink, setSelectedLink] = useState("all");

    const handleSelectedLink = (link) => { 
        setSelectedLink(link);
    };

    return (
        <div className="flex">
            <SideBar onselectLink={handleSelectedLink} />
            <div className="flex-1 p-8">
                {/* Content on the right side adjusts according to the selected link */}  
                {selectedLink === "all" && <h2>All Posts Content</h2>}
                {selectedLink === "commented" && <h2>Commented Posts Content</h2>}
                {selectedLink === "replied" && <h2>Replied Posts Content</h2>}
                {selectedLink === "create" && <h2>Create Post Form</h2>}
            </div>
        </div>
    );
};

export default UserPanel;