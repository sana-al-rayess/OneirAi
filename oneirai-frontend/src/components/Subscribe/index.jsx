import './subscribe.css';

const Subscribe = () => {

    return (
        <div className="subscribe-container">
          <p className="subscribe-title">Get In Touch</p>
          <p className="subscribe-slogan">
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero.
          </p>
          <form>
            <input type="email" id="email" placeholder="Your email" />
            <button className='subscribe-btn'>Subscribe</button>
          </form>
        </div>
      );

};

export default Subscribe;
