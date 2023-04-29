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
    <div>
      <div className="daily-horoscope-container">
        {/* <h2 className="title-horo">Daily Horoscope</h2> */}
        <select
          value={sign}
          onChange={(event) => setSign(event.target.value)}
          className="input-horo"
        >
          <option value="">Select your zodiac sign</option>
          {signs.map((sign) => (
            <option key={sign} value={sign}>
              {sign}
            </option>
          ))}
        </select>
        <Button2 onClick={getHoroscope}>
          Daily Horoscope
        </Button2>
      </div>
      <div>
        {horoscope && (
          <p className="horoscope" onAnimationEnd={() => setHoroscope("")}>
            {horoscope}
          </p>
        )}
      </div>
    </div>
  );
}

export default DailyHoroscope;
