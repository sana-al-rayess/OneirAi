import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo_oneira.png";
import PP1 from "../../images/blankprofile.jpg"
import Button from "../../components/Button";
import ChangePass from "../../components/ChangePass";
import './adminnav.css';


const AdminNav = () => {
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
        <div className="nav-container2">

            <div>  <a href="/landing">
                <img className="logo" src={Logo} alt="logo" />
            </a></div>

            <div className="admin-info">
                {profilePic}

                <div><p>{active_user}</p></div>
                <div><p>{user_email}</p></div>

                <div><a className="passchange" onClick={togglePopup}><u>Change Password</u></a></div>
                {showPopup && <ChangePass closePopup={togglePopup} />}
            </div>


            <br /><br />
            <div className="menu-admin">
                <div>
                    <div className="menu-item-admin">

                        <Link to="/admin/view-users" className="linking" style={window.location.pathname === '/admin/view-users' ? { fontWeight: 'bold', textDecoration: 'underline' } : {}}>
                            Users
                        </Link>
                    </div>
                    <div className="menu-item-admin">

                        <Link to="/admin/piechart" className="linking" style={window.location.pathname === '/admin/piechart' ? { fontWeight: 'bold', textDecoration: 'underline' } : {}}>
                            Pie Charts
                        </Link>

                    </div>

                    <div>
                        <div className="menu-item-admin">

                            <Link to="/admin/linechart" className="linking" style={window.location.pathname === '/admin/linechart' ? { fontWeight: 'bold', textDecoration: 'underline' } : {}}>
                                Line Charts
                            </Link>
                        </div>

                        <div>
                            <div className="menu-item-admin">

                                <Link to="/admin/barchart" className="linking" style={window.location.pathname === '/admin/barchar' ? { fontWeight: 'bold', textDecoration: 'underline' } : {}}>
                                    Bar Charts
                                </Link>
                            </div>

                            <div className="menu-item-admin">

                                <Link to="/admin/polarchart" className="linking" style={window.location.pathname === '/admin/polarchart' ? { fontWeight: 'bold', textDecoration: 'underline' } : {}}>
                                    Polar Area Charts
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

export default AdminNav;