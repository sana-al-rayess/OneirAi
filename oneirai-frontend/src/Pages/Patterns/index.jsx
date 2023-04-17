import React, { useState } from "react";
import SideNav from "../../components/SideNav";
import PatternSide from "../../components/PatternSide";

import UserProfile from "../../components/UserProfile";


const Patterns = () => {
  return (
    <div className="body2">
     <div className="box">

      <div className="side-nav"> <SideNav /> </div>
      <div className="page-left"> <PatternSide /> </div>

     </div>
    </div>
  );
};

export default Patterns;