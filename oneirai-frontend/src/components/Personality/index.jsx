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
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/getPersonality', {
        userBirthday: birthday,
      });
      setTableHtml(response.data.table);
    } catch (error) {
      console.error(error);
    }
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/analysis', {
        userBirthday: birthday,
      });
      setCompatibilityScore(response.data.compatibility);
      setErrorMsg('');
    } catch (error) {
      console.error(error);
      setErrorMsg('Error occurred while fetching data. Please try again later.');
      setCompatibilityScore(null);
    }
  };

  return (
    <div>
      <form className="form-horo" onSubmit={handleSubmit}>
        <div className="horo-field">
          <div>
            <label className="horo-label" htmlFor="birthday">
              Enter your birthday:
            </label>
          </div>
        </div>
        <div className="horo-field">
          <div className="input-btn">
            <input
              className="date-horo3"
              id="birthday"
              type="date"
              value={birthday}
              onChange={(event) => setBirthday(event.target.value)}
              required
            />
          </div>
          <div className="btn-horo2">
            <Button2 type="submit">Analyze</Button2>
          </div>
        </div>
        <div className="per-table">{tableHtml && <div dangerouslySetInnerHTML={{ __html: tableHtml }} />}</div>
        {compatibilityScore && <div className="per-table">{compatibilityScore}</div>}
        {errorMsg && <div className="error">{errorMsg}</div>}
      </form>
    </div>
  );
}

export default Personality;
