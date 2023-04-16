import React, { useState } from "react";
import Button3 from "../Button3";


const ChangePass = (props) => {
  
  const [password, setPassword] = useState("");
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="popup">

      <div className="popup-inner">
        <div className="title-model"><h1>Change Password</h1></div>
        <form onSubmit={handleSubmit}>
          <div className="labeltext">
            <label>Current Password:</label>
            <input
              type="password"
              id="password"
              name="password"
            /></div>
          <div className="labeltext">
            <label htmlFor="password">New Password:</label>
            <input type="password"
              id="new-pass"
              value={password}
              onChange={handlePasswordChange}
            ></input></div>

          <div className="labeltext">
            <label>Confirm Password:</label>
            <input
              type="password"
              
            /></div>
          <div className="model-btn">
            <Button3 type="submit">Save</Button3>
            <Button3 onClick={props.closePopup}>Close</Button3></div>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
