import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import './userdashboard.css';
import UserDash from "../../components/UserDash";


const UserDashboard = () => {
  return (
    <div className="body2">
     <div className="box">

      <div className="side-nav"> <SideNav /> </div>
      <div className="page-left"> <UserDash /> </div>

     </div>
    </div>
  );
};

export default UserDashboard;