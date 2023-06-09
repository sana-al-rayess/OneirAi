import React, { useState } from "react";
import axios from 'axios';
import Logo from "../../images/logo_oneira.png";
import "./login.css";
import { Link } from "react-router-dom";

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");

    const [loginError, setLoginError] = useState("");
    const [registerError, setRegisterError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
       
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
                const response = await api.post("/register", formData);
                const { user, authorisation } = response.data;
                localStorage.setItem('token', authorisation.token);
                localStorage.setItem("name", response.data.user.name);
                localStorage.setItem("profile_picture", response.data.user.profile_picture);
                localStorage.setItem("email", response.data.user.email);
                localStorage.setItem("type", response.data.user.type);
                localStorage.setItem("id", response.data.user.id);
                console.log('User created successfully:', user);
                window.location.href = "/profile";
            } catch (error) {
                console.error(error);
                console.log("email already exists");
                setRegisterError("Email already Exists");
            }
        }
        
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        try {
            const formData = { email, password };
            const response = await api.post("/login", formData);
            const { user, authorisation } = response.data;
            localStorage.setItem("token", authorisation.token);
            localStorage.setItem("name", response.data.user.name);
            localStorage.setItem("user_id", response.data.user.id);
            localStorage.setItem("email", response.data.user.email);
            localStorage.setItem("profile_picture", response.data.user.profile_picture);
            localStorage.setItem("type", response.data.user.type);
            localStorage.setItem("id", response.data.user.id);
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
                    <a href="/landing" className="flex">
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
                                className={`input-with-mail-icon ${registerError ? "error" : ""}`}
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError("");
                                    setRegisterError("")
                                }}
                            />
                            {registerError && <p className="error-message">{registerError}</p>}
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
                            {passwordError && <p className="error1">{passwordError}</p>}
                            {loginError && <p className="error1">{loginError}</p>}
                            <br />
                            <div className="forgot-pass">
                                <Link className="pass-txt" to="/ForgotPass">
                                Forgot password?</Link>
                              
                            </div>
                                
                            <button className="button1" type="submit">Login</button>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;