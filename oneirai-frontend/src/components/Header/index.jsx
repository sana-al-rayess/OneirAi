import React from 'react';
import "./header.css";
import Logo from "../../images/logo_oneira.png";
import Button from "../../components/Button";

const Header = () => {
  return (
    <div className='header1'>
    <div>
      <img className='logo' src={Logo} alt='logo' />
    </div>
    <div className="button-container">
      <button className='login-button'>Login</button>
      <Button>SignUp</Button>
    </div>
  </div>
  );
};

export default Header;