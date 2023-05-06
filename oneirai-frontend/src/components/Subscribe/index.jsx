import './subscribe.css';
import axios from 'axios';
import { useState } from 'react';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/subscribe', { email });
            setSuccess(response.data.success);
            setError(null);
        } catch (error) {
            if (error.response.status === 422) {
                setError('This email address has already been subscribed.');
            } else {
                setError('There was an error subscribing. Please try again later.');
            }
            setSuccess(false);
        }
    };

    return (
        <div className="subscribe-container">
            <p className="subscribe-title">Get In Touch</p>
            <p className="subscribe-slogan">
                Join us to unlock the mysteries of your dreams<br /> & explore the hidden depths of your subconscious mind.
            </p>
            {success && (
                <div className="success-message">Thank you for subscribing to our email, please check your inbox</div>
            )}
            {error && (
                <div className="error-message">{error}</div>
            )}
            <form className='form-subs' onSubmit={handleSubmit}>
                <input
                    className='input-subs'
                    type="email"
                    id="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button className='subscribe-btn' type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;
