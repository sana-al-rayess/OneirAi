import React from 'react';
import "./header.css";
import Logo from "../../images/logo_oneira.png";

const Header = () => {
  return (
    <div className='header1'>
    <div>
      <img className='logo' src={Logo} alt='logo' />
    </div>
    <div className="button-container">
      <button className='login-button'>Login</button>
      <button className='signup-button'>SignUp</button>
    </div>
  </div>
  );
};

export default Header;