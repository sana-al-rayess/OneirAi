
import React, { useState } from 'react';
import "./header.css";
import Logo from "../../images/logo_oneira.png";
import Button from "../../components/Button";


const Header = () => {

  const [clicked, setClicked] = useState(false);
  const active_user = localStorage.getItem("token");
  const handleClick = () => {
    window.location.href = "/login";
    localStorage.clear();
  };

  function handleLogin() {
    if (localStorage.getItem("token")) {
      window.location.href = "/user";
    } else {
      window.location.href = "/login";
    }
  }

  const handleRoute = (route) => {
    return active_user ? route : "/reg";
  };

  return (
    <div className='header1'>
      <div>
        <img className='logo' src={Logo} alt='logo' />
      </div>
      <div className="button-container">
        <button className='login-button' onClick={handleLogin}>
          {localStorage.getItem("token") ? "My Profile" : "Log In"}
        </button>

        <Button onClick={handleClick}>{localStorage.getItem("user_id") ? "Log Out" : "Sign Up "}</Button>
      </div>
    </div>
  );
};

export default Header;