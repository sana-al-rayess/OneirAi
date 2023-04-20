import React, { useState } from "react";
import axios from 'axios';
import Logo from "../../images/logo_oneira.png";
import "./login.css";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");

    const [loginError, setLoginError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        if (!name.trim()) {
            setNameError("Name is required");
            valid = false;
        }
        if (!email.trim()) {
            setEmailError("Email is required");
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Email is invalid");
            valid = false;
        }
        if (!password.trim()) {
            setPasswordError("Password is required");
            valid = false;
        } else if (password.trim().length < 6) {
            setPasswordError("Password must be at least 6 characters");
            valid = false;
        }
        if (valid) {
            try {
                const formData = { name, email, password };
                const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
                const { user, authorisation } = response.data;
                localStorage.setItem('token', authorisation.token);
                localStorage.setItem("name", response.data.user.name);
                localStorage.setItem("profile_picture", response.data.user.profile_picture);
                localStorage.setItem("email", response.data.user.email);
                console.log('User created successfully:', user);
                window.location.href = "/user";
            } catch (error) {
                console.error(error);
                
            }

        }
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        try {
            const formData = { email, password };
            const response = await axios.post(
                "http://127.0.0.1:8000/api/login", formData);
            const { user, authorisation } = response.data;
            localStorage.setItem("token", authorisation.token);
            localStorage.setItem("name", response.data.user.name);
            localStorage.setItem("user_id", response.data.user.id);
            localStorage.setItem("email", response.data.user.email);
            localStorage.setItem("profile_picture", response.data.user.profile_picture);
            console.log("User logged in successfully:", user);
            if (response.data.user.type == "admin") {
                window.location.href = "/admin";
            } else {
                window.location.href = "/user";
            }
        } catch (error) {

            form.reset();
            setLoginError("Wrong Credentials");
            console.log("wrong credentials");
            console.error(error);
            
        }
    }


    return (
        <div className="body1">
            <div className="flex">
                <div className="flex">
                    <a href="/" className="flex">
                        <img className="logo" src={Logo} alt="logo" />
                    </a>
                </div>
                <div className="container">
                    <input type="checkbox" id="chk" aria-hidden="true" />

                    <div className="signup">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="chk" aria-hidden="true">
                                Sign up
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                className={`input-with-user-icon ${nameError ? "error" : ""}`}
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setNameError("");
                                }}
                            />
                            {nameError && <p className="error-message">{nameError}</p>}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className={`input-with-mail-icon ${emailError ? "error" : ""}`}
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError("");
                                }}
                            />
                            {emailError && <p className="error-message">{emailError}</p>}
                            <input
                                type="password"
                                name="password"
                                placeholder="Password" required
                                className={`input-with-lock-icon ${passwordError ? "error" : ""}`}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError("");
                                }}
                            />
                            {passwordError && <p className="error-message">{passwordError}</p>}
                            <button className="button1" type="submit">Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form id="login-form" onSubmit={handleLogin}>
                            <label htmlFor="chk" aria-hidden="true">
                                Login
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                className={`input-with-mail-icon ${emailError ? "error" : ""}`}
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError("");
                                }}
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                                className={`input-with-lock-icon ${passwordError ? "error" : ""}`}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError("");
                                }}
                            />
                            {passwordError && <p className="error-message">{passwordError}</p>}
                            {loginError && <p className="error-message">{loginError}</p>}
                            <button className="button1" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;