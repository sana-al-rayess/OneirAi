import React from "react";
import ParticlesBg from "particles-bg";
import './horoscope.css';
import Navbar from "../../components/NavBar";
import DailyHoroscope from "../../components/DailyHoroscope";


const Horoscope = () => {
  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={50} shape="star" />
      <Navbar className="navbar-horo" />
      <DailyHoroscope />
   
    </div>
  );
};

export default Horoscope;
