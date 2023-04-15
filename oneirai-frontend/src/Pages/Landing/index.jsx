import React, { useState } from "react";
import './landing.css';
import Header from "../../components/Header";
import Intro from "../../components/Intro";




const Landing = () => {
    return (
        <div className="landing">

            <div > <Header /> </div>
            <div> <Intro /> </div>


        </div>
    );
};

export default Landing;