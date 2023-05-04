import './subscribe.css';

const Subscribe = () => {

    return (
        <div className="subscribe-container">
          <p className="subscribe-title">Get In Touch</p>
          <p className="subscribe-slogan">
          Join us to unlock the mysteries of your dreams<br /> & explore the hidden depths of your subconscious mind.
          </p>
          <form className='form-subs'>
            <input className='input-subs' type="email" id="email" placeholder="Your email" />
            <button className='subscribe-btn'>Subscribe</button>
          </form>
        </div>
      );

};

export default Subscribe;
