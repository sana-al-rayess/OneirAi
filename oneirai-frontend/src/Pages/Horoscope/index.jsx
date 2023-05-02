import React from "react";
import ParticlesBg from "particles-bg";
import './horoscope.css';
import Navbar from "../../components/NavBar";

import HoroscopePart1 from "../../components/HoroscopePart1";
import HoroscopePart3 from "../../components/HoroscopePart3";
import HoroscopePart4 from "../../components/HoroscopePart4";
import Footer from "../../components/Footer";

const Horoscope = () => {
  return (
    <div className="body-horo">
      
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={80} shape="stars" className="tsparticles" />
      <Navbar className="navbar-horo" />
      <HoroscopePart1 />
      {/* <HoroscopePart2 /> */}
      <HoroscopePart4 />
      <HoroscopePart3 />
    
      <Footer />
      
   
    </div>
  );
};

export default Horoscope;
