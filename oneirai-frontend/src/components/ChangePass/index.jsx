import React, { useState } from "react";
import Button3 from "../Button3";
import Button2 from "../Button2";
import "./changepass.css";
import axios from "axios";



const ChangePass = (props) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false); // add state variable
  const [errors, setErrors] = useState({});

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    axios.post("http://127.0.0.1:8000/api/updatePassword", {
      current_password: currentPassword,
      password: newPassword,
      password_confirmation: confirmPassword,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        localStorage.clear();
        window.location.href = '/login';

      })
      .catch((error) => {
        console.log(error.response.data);
        setErrors(error.response.data.errors);
      });
  }

  const togglePasswordVisibility = () => { // add toggle function
    setShowPasswords(!showPasswords);
  }

  return (
    <div className="popup-forgotpass">
      <div className="popup-inner-forgotpass">
        <div className="title-model">
          <h1>Change Password</h1>
        </div>
        <form onSubmit={handleSubmit}>

          <div className="labeltext2">
            <label>Current Password:</label>
            <input
              type={showPasswords ? "text" : "password"} // conditionally set type
              name="current_password"
              value={currentPassword || ''}
              onChange={handleCurrentPasswordChange}
            />

          </div>
          <div className="error-forgotpass">{errors?.current_password && (
            <span className="text-danger">{errors.current_password[0]}</span>
          )}</div>


          <div className="labeltext2">
            <label htmlFor="password">New Password:</label>
            <input
              type={showPasswords ? "text" : "password"} // conditionally set type
              name="password"
              value={newPassword || ''}
              onChange={handleNewPasswordChange}
            />
            </div>
            <div className="error-forgotpass">{errors?.password && (
              <span className="text-danger">{errors.password[0]}</span>
            )}
          </div>
          <div className="labeltext2">
            <label>Confirm Password:</label>
            <input
              type={showPasswords ? "text" : "password"} // conditionally set type
              name="password_confirmation"
              value={confirmPassword || ''}
              onChange={handleConfirmPasswordChange}
            />
            </div>
            <div className="error-forgotpass"> {errors?.password_confirmation && (
              <span className="text-danger">
                {errors.password_confirmation[0]}
              </span>
            )}
          </div>
          <div className="model-btn btn3">
            
            <Button3 onClick={props.closePopup}>Close</Button3>
            <Button2 type="submit">Save</Button2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;

