import React, { useState } from "react";
import './userdash.css';
import Button2 from "../Button2";
import AddDream from "../AddDream";

const UserDash = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };


    const active_user = localStorage.getItem("name");
    const today = new Date().toLocaleDateString();

    return (
        <div className="user-container">
            <div>
                <p className="date"> Hello, {active_user}</p>
            </div>
            <div className="date">
                <p> Today is, {today}</p>
            </div>
            <br /><br />
            <div className="row1">
                <div className="user-title">Dream Journal</div>
                <div>
                    <Button2 onClick={togglePopup}>Add Dream</Button2>
                    {showPopup ? (<AddDream closePopup={togglePopup} />) : null}</div>
            </div>
        </div>


    );
}

export default UserDash;
