import React, { useState } from 'react';
import "./compatibilityform.css";
import Button2 from '../Button2';
import axios from 'axios';

function CompatibilityForm() {
    const [userBirthday, setUserBirthday] = useState('');
    const [partnerBirthday, setPartnerBirthday] = useState('');
    const [compatibilityScore, setCompatibilityScore] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/getCompatibility', {
            userBirthday: userBirthday,
            partnerBirthday: partnerBirthday,
        }).then(response => {
            setCompatibilityScore(response.data.compatibility);
            setErrorMsg('');
        }).catch(error => {
            console.error(error);
            setErrorMsg('Error occurred while fetching data. Please try again later.');
            setCompatibilityScore(null);
        });
    };

    return (
        <div>

            <form className='form-horo' onSubmit={handleSubmit}>

                <div className='horo-field'>
                    <div><label htmlFor="user-birthday" className='horo-label'>Your Birthdate:</label></div>
                    <div><label htmlFor="partner-birthday" className='horo-label'>Partner's Birthdate:</label></div>
                </div>

                <br />

                <div className='horo-field'>
                    <div>
                        <input
                            className='date-horo2'
                            id='user-birthday'
                            type="date"
                            value={userBirthday}
                            onChange={(e) => setUserBirthday(e.target.value)}
                        />
                    </div>

                    <div className='input-btn'>
                        <input
                            className='date-horo2'
                            id='partner-birthday'
                            type="date"
                            value={partnerBirthday}
                            onChange={(e) => setPartnerBirthday(e.target.value)}
                        />
                    </div>

                    <div className='btn-horo'>
                        <Button2 type="submit">Go</Button2>
                    </div>
                </div>
            </form>
            {errorMsg && <div className="error-msg">{errorMsg}</div>}
            {compatibilityScore && <div className="compatibility-score">{compatibilityScore}</div>}
        </div>
    );
}

export default CompatibilityForm;

