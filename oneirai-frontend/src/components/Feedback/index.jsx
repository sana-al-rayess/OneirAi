import './feedback.css';
import PP1 from "../../images/mhmd.png"
import PP2 from "../../images/hasan.png"
import PP3 from "../../images/karim.png"

const Feedback = () => {

    return (
        <div>
            <p className="feedback-title">FEEDBACK</p>
            <div className="cards-container">

                <div className="card1">
                    <div className="card-header">
                        <img src={PP1} alt="Profile Image" className="profile-img"></img>
                    </div>
                    <div className="card-body">
                        <p className="name">"  The use of AI technology to analyze and interpret dreams is truly innovative, 
                        and the user interface is very intuitive and easy to use."
                        <br /><br />
                        <b>Mhammad Atout</b>
                        
                        </p>
                    </div>
                </div>

                <div className="card1">
                    <div className="card-header">
                        <img src={PP2} alt="Profile Image" className="profile-img"></img>
                    </div>
                    <div className="card-body">
                        <p className="name">"Your website is a dream come true! The visualization tools
                         are truly unique. I'm excited to keep using this
                          site to gain insights into my dreams.""
                          <br /><br />
                          <b>Hasan Zeineddine</b>
                          </p>
                    </div>
                </div>

                <div className="card1">
                    <div className="card-header">
                        <img src={PP3} alt="Profile Image" className="profile-img"></img>
                    </div>
                    <div className="card-body">
                        <p className="name">"Your dream analysis website is a game-changer! 
                        The use of AI technology is incredible
                         Thanks for creating such a cool resource!"
                         <br /> <br />
                         <b>Mhammad Karim</b>
                         </p>
                    </div>
                </div>


            </div>
        </div>

    );


};
export default Feedback;