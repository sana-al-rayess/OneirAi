import React, { useState } from "react";
import axios from 'axios';
import "./forgotpassword.css";
import Logo from "../../images/logo_oneira.png";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError("");
        setSuccessMessage("");
        setErrorMessage("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        if (!email.trim()) {
            setEmailError("Email is required");
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Email is invalid");
            valid = false;
        }
        if (valid) {
            try {
                const formData = { email };
                const response = await axios.post(
                    "http://127.0.0.1:8000/api/password/email",
                    formData
                );
                console.log("Password reset email sent successfully:", response);
                setSuccessMessage("Password reset email sent successfully");
            } catch (error) {
                console.error(error);
                setErrorMessage("Something went wrong. Please try again later.");
            }
        }
    };

    return (
        <div className="modal-overlay">
            <div className="flex">
                <a href="/landing" className="flex">
                    <img className="logo" src={Logo} alt="logo" />
                </a>
            </div>
            <div className="modal">
                <div className="modal-header">
                    <h2>Reset Password</h2>
                </div>

                <form className="modal-body">
                    <label>Enter Your Email:</label>
                    <input type="email" name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        className={`input-with-mail-icon ${emailError ? "error" : ""} reset-email`} />
                    {emailError && <span className="reset-message">{emailError}</span>}
                    {successMessage && <span className="reset-message">{successMessage}</span>}
                    {errorMessage && <span className="reset-message">{errorMessage}</span>}
                    <button className="btn2" onClick={handleSubmit}>Reset</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;
