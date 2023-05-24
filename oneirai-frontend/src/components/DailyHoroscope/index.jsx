import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./dailyhoroscope.css";
import Button2 from "../Button2";
import CustomCircularProgress from "../CircularProgress";

function DailyHoroscope() {
  const [sign, setSign] = useState("");
  const [horoscope, setHoroscope] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getHoroscope = async () => {
    setIsLoading(true);
    const response = await fetch("http://127.0.0.1:8000/api/getHoroscope", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sign: sign }),
    });

    const data = await response.json();
    setHoroscope(data.horoscope);
    setIsLoading(false);
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
        <Button2 onClick={getHoroscope} disabled={isLoading}>
          Daily Horoscope
        </Button2>
        {isLoading && <CustomCircularProgress />}
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
