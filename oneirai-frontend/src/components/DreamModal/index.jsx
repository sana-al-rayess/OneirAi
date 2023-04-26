import React, { useState, useEffect } from "react";
import "./dreamModal.css";
import Button3 from "../Button3";
import Button2 from "../Button2";
import axios from "axios";

const DreamModal = ({ dream, onClose }) => {

  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const apiUrl = 'http://127.0.0.1:8000/api/chatgpt';

  const getResponse = async (message) => {
    const response = await axios.post(apiUrl, {
      message: message
    });

    return response.data;
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getResponse(dream.description);
      if (result && result.choices && result.choices[0] && result.choices[0].text) {
        setResponse(result.choices[0].text);
      } else {
        setResponse('Error: Unable to retrieve response.');
      }
    }
    fetchData();
  }, []);

  return (
   
  );
};

export default DreamModal;