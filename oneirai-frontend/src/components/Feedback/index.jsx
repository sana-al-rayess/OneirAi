import './feedback.css';
import PP1 from "../../images/prof1.jpg"
import PP2 from "../../images/p2.jpg"
import PP3 from "../../images/p3.jpg"

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
                        <p className="name">" Best experience I ever had!</p>
                    </div>
                </div>

                <div className="card1">
                    <div className="card-header">
                        <img src={PP2} alt="Profile Image" className="profile-img"></img>
                    </div>
                    <div className="card-body">
                        <p className="name">" Best experience I ever had!</p>
                    </div>
                </div>

                <div className="card1">
                    <div className="card-header">
                        <img src={PP3} alt="Profile Image" className="profile-img"></img>
                    </div>
                    <div className="card-body">
                        <p className="name">" Best experience I ever had!</p>
                    </div>
                </div>


            </div>
        </div>

    );


};
export default Feedback;