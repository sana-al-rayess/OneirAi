import "./horoscopepart1.css";
import Zodiac2 from "../../images/z03.png"
import Button2 from "../Button2";
import DailyHoroscope from "../DailyHoroscope";
function HoroscopePart1() {

    return (
        <div className="horoscope-part1">


            <div class="overlay"></div>

            <div class="text">
                <div class="wrapper">
                    <div id="L" class="letter">H</div>
                    <div class="shadow">H</div>
                </div>
                <div class="wrapper">
                    <div id="I" class="letter">O</div>
                    <div class="shadow">O</div>
                </div>
                <div class="wrapper">
                    <div id="G" class="letter">R</div>
                    <div class="shadow">R</div>
                </div>
                <div class="wrapper">
                    <div id="H" class="letter">O</div>
                    <div class="shadow">O</div>
                </div>
                <div class="wrapper">
                    <div id="T" class="letter">S</div>
                    <div class="shadow">S</div>
                </div>
                <div class="wrapper">
                    <div id="N" class="letter">C</div>
                    <div class="shadow">C</div>
                </div>
                <div class="wrapper">
                    <div id="E" class="letter">O</div>
                    <div class="shadow">O</div>
                </div>
                <div class="wrapper">
                    <div id="S" class="letter">P</div>
                    <div class="shadow">P</div>
                </div>
                <div class="wrapper">
                    <div id="Stwo" class="letter">E</div>
                    <div class="shadow">E</div>
                </div>
            </div>



            <div className="text-photo-horo">
                <div><h1 className="horo-slogan"><div>Get daily insights<br /> Powered by AI Technology<br /> & the wisdom of the stars -
                    <br />Read your daily horoscope now.</div></h1>
                    {/* <div><Button2>Daily Horoscope</Button2></div> */}
                    <div><DailyHoroscope /></div>
                </div>
                <div>
                    <img className="zodiac-photo" src={Zodiac2} alt="photo" />
                </div>
            </div>
            
        </div>

    );
}

export default HoroscopePart1;
