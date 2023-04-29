import React, { useState } from 'react';
import Button2 from '../Button2';
import axios from 'axios';
import './personality.css';

function Personality() {
  const [userBirthday, setUserBirthday] = useState('');
  const [compatibilityScore, setCompatibilityScore] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [birthday, setBirthday] = useState('');
  const [tableHtml, setTableHtml] = useState('');

  const handleSubmit = async (event) => {
   
  };

  return (
    <div>
     
    </div>
  );
}

export default Personality;
