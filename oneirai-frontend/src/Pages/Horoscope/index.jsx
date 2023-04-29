import React from "react";
import ParticlesBg from "particles-bg";
import './horoscope.css';
import Navbar from "../../components/NavBar";
import DailyHoroscope from "../../components/DailyHoroscope";
import HoroscopePart1 from "../../components/HoroscopePart1";
import HoroscopePart2 from "../../components/HoroscopePart2";
import HoroscopePart3 from "../../components/HoroscopePart3";
import HoroscopePart4 from "../../components/HoroscopePart4";
import Footer from "../../components/Footer";

const Horoscope = () => {
  return (
    <div className="body-horo">
      <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={50} shape="star" />
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
