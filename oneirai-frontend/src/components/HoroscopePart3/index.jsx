import "./horoscopepart3.css";
import Comp3 from "../../images/comp3.png"
import Button2 from "../Button2";
import ParticlesBg from "particles-bg";
import CompatibilityForm from "../CompatibilityForm";

function HoroscopePart3() {

    return (
        <div>

            <div className="horoscope-part3">
                <ParticlesBg type="cobweb" bg={true} color="#ffffff" num={50} shape="star" />

                <div><h1 className="horo-slogan2">
                    <div>Discover the stars' perfect match<br />  with AI-powered Zodiac-<br />Compatibility Test.
                    </div></h1>
        
                    <div> <CompatibilityForm /></div>
                </div>
                <div className="comp"><img className="comp-img" src={Comp3} alt="photo" /></div>
            </div >
        </div>
    );
}

export default HoroscopePart3;
