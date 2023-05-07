import React, { useState } from "react";
import './landing.css';
import Header from "../../components/Header";
import Intro from "../../components/Intro";
import Parallax from "../../components/Parallax";
import Features from "../../components/Features";
import Facts from "../../components/Facts";
import Subscribe from "../../components/Subscribe";
import Feedback from "../../components/Feedback"
import Footer from "../../components/Footer";
import Image1 from "../../images/starry.jpg";
import Image2 from "../../images/starry2.jpg";
import Image3 from "../../images/starry3.jpg";


const Landing = () => {
   
    return (
        
        <div className="landing">
            <div className="force-overflow">
                <div > <Header /> </div>
                <div> <Intro /> </div>
                <br /><br />
                <div className="parallax-div"> <Parallax backgroundImage={Image2}>
                </Parallax></div>
                <br /><br />
                <div> <Features /> </div>
                <br /><br />
                <div> <Parallax backgroundImage={Image2}>
                </Parallax></div>
                <br /><br />
                <div> <Facts /> </div>
                <br /><br />
                <div> <Parallax backgroundImage={Image2}>
                </Parallax></div>
                <br /><br />
                <div> <Subscribe /> </div>
                <div> <Feedback /> </div>
                <br /><br />
                <div> <Footer /> </div>


            </div>
        </div>
    );
};

export default Landing;