import React, { useState } from "react";


const PatternSide = () => {
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
                <div className="user-title">Patterns</div>
            </div>
            

        </div>


    );
}

export default PatternSide;
