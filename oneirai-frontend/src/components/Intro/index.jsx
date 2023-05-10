import React, { useState } from "react";
import Button from "../Button";

import './intro.css';

const Intro = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {

    localStorage.getItem("user_id") ? window.location.href = "/home" : window.location.href = "/login"
  };

  return (

    <div className="intro-container">
      <div>
        <p className="slogan-txt">Oneir<span>Ai</span>: Where Imagination<br /> Meets AI Interpretation.</p>
      </div>
      <div>
        <p className="slogan-txt2">Unleash the power of AI to visualize and interpret<br /> your subconscious mind!</p></div>
      <div>
        <div>
          <Button onClick={handleClick}>Get Started</Button>
        </div>
      </div>

    </div>
  );
};

export default Intro;
