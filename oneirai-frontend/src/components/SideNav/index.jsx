import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_oneira.png";
import PP1 from "../../images/prof1.jpg"
import Journal from "../../images/journal.png"
import Pattern from "../../images/pattern.png"
import Edit from "../../images/editprof.png"
import Button from "../../components/Button"
import './sidenav.css';


const SideNav = () => {
  

  return (
    <div className="nav-container">

      <div> <img className="logo" src={Logo} alt="logo" /></div>

      

    </div>
  );
}

export default SideNav;