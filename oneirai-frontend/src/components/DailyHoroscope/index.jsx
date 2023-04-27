import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./dailyhoroscope.css";
import Button2 from "../Button2";

function DailyHoroscope() {
  const [sign, setSign] = useState("");
  const [horoscope, setHoroscope] = useState("");

  const getHoroscope = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/getHoroscope", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sign: sign }),
    });

    const data = await response.json();
    setHoroscope(data.horoscope);
  };

  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  return (
    <div className="daily-horoscope-container">
     
    </div>
  );
}

export default DailyHoroscope;
