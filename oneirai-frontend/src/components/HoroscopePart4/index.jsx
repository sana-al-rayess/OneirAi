import Per2 from "../../images/per2.png"
import Personality from "../Personality";

function HoroscopePart4() {

    return (
        <div>

            <div className="horoscope-part3">
                {/* <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={50} shape="star" /> */}
                <div className="comp"><img className="comp-img" src={Per2} alt="photo" /></div>
                <div><h1 className="horo-slogan2"><div>Unlock the Secrets<br /> of Your True Self:<br />Discover Your Unique Personality.
                </div></h1>
                <div> <Personality /></div>
                </div>

            </div >
        </div>
    );
}

export default HoroscopePart4;
