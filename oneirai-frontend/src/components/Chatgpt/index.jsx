import React, { useState } from 'react';
import axios from 'axios';
import Button2 from '../Button2';
import "./chatgpt.css";

function CompatibilityForm() {
  const [birthday, setBirthday] = useState('');
  const [tableHtml, setTableHtml] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/getPersonality', { userBirthday: birthday });
      setTableHtml(response.data.table);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
   
      <form onSubmit={handleSubmit}>
        <label className='horo-label' htmlFor="birthday">Enter your birthday:</label>
        <input className='date-horo2'
          id="birthday"
          type="date"
          value={birthday}
          onChange={(event) => setBirthday(event.target.value)}
          required
        />
        <Button2 type="submit">Analyze</Button2>
      </form>
      <div className='horo-table'>{tableHtml && <div dangerouslySetInnerHTML={{ __html: tableHtml }} />}</div>
    </div>
  );
}


export default CompatibilityForm;
