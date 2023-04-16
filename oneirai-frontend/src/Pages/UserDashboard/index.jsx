import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import './userdashboard.css';


const UserDashboard = () => {
  return (
    <div className="body2">
     <div className="box">

      <div className="side-nav"> <SideNav /> </div>
      <div className="page-left"> </div>

     </div>
    </div>
  );
};

export default UserDashboard;