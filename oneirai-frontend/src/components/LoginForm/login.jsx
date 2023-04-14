import React, { useState } from "react";
import Logo from "../../images/logo_oneira.png";
import("./login.css");

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [nameError, setNameError] = useState("");

    const handleSubmit = (e) => {
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
		
			console.log("Form submitted");
		}
	};


return (
    <div className="flex">
        <div className="flex">
            <a href="/" className=" flex">
                <img className="logo" src={Logo} alt="logo" />
            </a>
        </div>
        <div className="container">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className="signup">
                <form>
                    <label htmlFor="chk" aria-hidden="true">
                        Sign up
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <button>Sign up</button>
                </form>
            </div>

            <div className="login">
                <form>
                    <label htmlFor="chk" aria-hidden="true">
                        Login
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required

                    />
                   
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
);


export default LoginForm;
