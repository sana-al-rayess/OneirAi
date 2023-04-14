import React, { useState } from "react";
import Logo from "../../images/logo_oneira.png";
import("./login.css");



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
