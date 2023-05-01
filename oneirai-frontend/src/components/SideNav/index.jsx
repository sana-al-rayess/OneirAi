import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_oneira.png";
import PP1 from "../../images/blankprofile.jpg"
import Journal from "../../images/journal.png"
import Pattern from "../../images/pattern.png"
import Edit from "../../images/editprof.png"
import Button from "../../components/Button"
import ChangePass from "../../components/ChangePass";
import './sidenav.css';


const SideNav = () => {
  const [clicked, setClicked] = useState(false);
  const active_user = localStorage.getItem("name");
  const user_email = localStorage.getItem("email");
  const user_photo = localStorage.getItem("profile_picture");
  const [showPopup, setShowPopup] = useState(false);

  const profilePic = user_photo && user_photo !== "null" ? <img src={user_photo} alt="Profile Image" className="profile-pic" /> : <img src={PP1} alt="Profile Image" className="profile-pic" />;

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClick = () => {
    window.location.href = "/login";
    localStorage.clear();
  };

  return (
    <div className="nav-container">

      <div>  <a href="/landing">
        <img className="logo" src={Logo} alt="logo" />
      </a></div>

      <div className="personal-info">
        {/* <div> <img src={user_photo} alt="Profile Image" className="profile-pic"></img> </div> */}

        {profilePic}

        <div><p>{active_user}</p></div>
        <div><p>{user_email}</p></div>

        <div><a className="passchange" onClick={togglePopup}><u>Change Password</u></a></div>
        {showPopup && <ChangePass closePopup={togglePopup} />}


      </div>


      <br /><br />
      <div className="menu">
        <div>
          <div className="menu-item">
            <img src={Edit} alt="icon" className="menu-icon"></img>
            <Link to="/profile" className="linking" style={window.location.pathname === '/profile' ? { fontWeight: 'bold', textDecoration: 'underline' } : {}}>
              Profile
            </Link>

          </div>
          <br />
          <div>
            <div className="menu-item">
              <img src={Pattern} alt="icon" className="menu-icon"></img>
              <Link to="/horo" className="linking" style={window.location.pathname === '/horo' ? { fontWeight: 'bold', textDecoration: 'underline' } : {}}>
                Horoscopes
              </Link>
            </div>
            <br />
            <div>
              <div className="menu-item">
                <img src={Journal} alt="icon" className="menu-icon"></img>
                <Link to="/user" className="linking" style={window.location.pathname === '/user' ? { fontWeight: 'bold', textDecoration: 'underline' } : {}}>
                  Dream Journal
                </Link>
              </div>
            </div>

          </div>

        </div>
        <div className="empty-space"></div>
        <div><Button className="logout" onClick={handleClick}>Logout</Button></div>
        <div className="empty-space"></div>



      </div>

    </div>
  );
}

export default SideNav;