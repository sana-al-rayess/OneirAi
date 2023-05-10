import React, { useState } from "react";
import Button from "../Button";
import Feature1 from "../../images/Mask.png";
import Feature2 from "../../images/transai.png";
import Feature3 from "../../images/7248902.png"
import Feature4 from "../../images/horo.png"
import { Link } from "react-router-dom";

import './features.css';

const Features = () => {

    return (
        <div>
            <p className="feature-title">FEATURES</p>
            <div className="features-container">

                <img className="photo" src={Feature1} alt="photo" />

                <div className="feature-txt-button">
                    <div><p className="feature1">"Experience the Future of Dream Analysis Today - <br />Try Now and Unleash the Power of AI to Interpret Your Dreams!"</p></div>
                  
                        <Link to="/user">
                            <div><Button>Try Now</Button></div>
                        </Link>
                    
                </div>
            </div>

            <div className="features-container">

                <div className="feature-txt-button">
                    <div><p className="feature1">See Your Dreams Come to Life -<br />
                     Try Now & Visualize Your Dreams with the Power of AI Technology!</p></div>

                    <div><Button>Try Now</Button></div>
                </div>
                <img className="photo" src={Feature2} alt="photo" />
            </div>

            <div className="features-container">

                <img className="photo" src={Feature3} alt="photo" />

                <div className="feature-txt-button">
                    <div><p className="feature1">Explore the Royal Road to Your Unconscious Mind -<br /> Try Now and Uncover the Psychology of Your Dreams with AI Technology!"</p></div>

                    <div><Button>Try Now</Button></div>
                </div>
            </div>

            <div className="features-container">

                <div className="feature-txt-button">
                    <div><p className="feature1">Get Personalized Horoscopes Like Never Before - <br />Try Now and Discover the Power of AI Technology!</p></div>

                    <Link to="/horo">
                            <div><Button>Try Now</Button></div>
                        </Link>
                </div>
                <img className="photo" src={Feature4} alt="photo" />
            </div>
        </div>
    );

};

export default Features;
