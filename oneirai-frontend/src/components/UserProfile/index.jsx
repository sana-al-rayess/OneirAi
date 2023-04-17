import React, { useState } from "react";

import Button from "../Button";
import Button2 from "../Button2";
import ProfilePhoto from "../ProfilePhoto";

import "./userprofile.css"
import EditProfileForm from "../EditProfileForm";


const UserProfile = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };


    const active_user = localStorage.getItem("name");
    const today = new Date().toLocaleDateString();

    return (
        <div className="user-container">
            <div>
                <p> Hello, {active_user}</p>
            </div>
            <div className="date">
                <p> Today is, {today}</p>
            </div>
            <br /><br />
            <div className="row1">
                <div className="user-title">Edit Profile</div>
            </div>
            <br/><br/>

            <div className="row3">
            <div> <ProfilePhoto/> </div>
            <div className="div2"> <EditProfileForm/></div>
            
            </div>

        </div>


    );
}

export default UserProfile;
