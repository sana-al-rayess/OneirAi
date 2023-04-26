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
    <div className="dream-modal">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="dream-modal-content">
        <div className="dream-details">
          <h3>{dream.title}</h3>
          <p2>{dream.date}</p2>
          <br />
          <br />
          <p1>{dream.description}{message}</p1>
        </div>
      </div>
      <div><h1 className="interpret">Interpretation</h1></div>
      <div className="interpret-modal-content">{response}</div>

      <div className="interpret-model-btn">
        <Button3 onClick={onClose}>Close</Button3>
        <Button2 type="submit">Save</Button2>
      </div>
    </div>
  );
};

export default DreamModal;
