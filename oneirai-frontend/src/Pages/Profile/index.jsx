import React, { useState } from "react";
import SideNav from "../../components/SideNav";

import UserProfile from "../../components/UserProfile";


const Profile = () => {
  return (
    <div className="body2">
     <div className="box">

      <div className="side-nav"> <SideNav /> </div>
      <div className="page-left"> <UserProfile /> </div>

     </div>
    </div>
  );
};

export default Profile;