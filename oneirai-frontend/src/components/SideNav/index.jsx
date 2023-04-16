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
  const [clicked, setClicked] = useState(false);
	const active_user = localStorage.getItem("name");
  const user_email = localStorage.getItem("email");

	const handleClick = () => {
		window.location.href = "/login";
		localStorage.clear();
	};

  return (
    <div className="nav-container">

      <div> <img className="logo" src={Logo} alt="logo" /></div>

      <div className="personal-info">
        <div> <img src={PP1} alt="Profile Image" className="profile-pic"></img> </div>
        <div><p>{active_user}</p></div>
        <div><p>{user_email}</p></div>
        <div><a><u>Change Password</u></a></div>
      </div>
      <br /><br />
      <div className="menu">
        <div>
          <div className="menu-item">
            <img src={Journal} alt="icon" className="menu-icon"></img>
            <Link to="/user" className="linking">
              Dream Journal
            </Link>
          </div>
          <br />
          <div>
            <div className="menu-item">
              <img src={Pattern} alt="icon" className="menu-icon"></img>
              <Link to="/pattern" className="linking">
                Pattern Tracker
              </Link>
            </div>
            <br />
            <div>
              <div className="menu-item">
                <img src={Edit} alt="icon" className="menu-icon"></img>
                <Link to="/profile" className="linking">
                  Profile
                </Link>
              </div>
            </div>

          </div>

        </div>
        <div><Button onClick={handleClick}>Logout</Button></div>
        
        

      </div>

    </div>
  );
}

export default SideNav;