import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../images/logo_oneira.png";
import Button2 from "../Button2";

const Navbar = () => {


    return (
        <div className='header1'>
            <div>
                <img className='logo' src={Logo} alt='logo' />
            </div>
            <div className="button-container-horo">
                <Link to="/home" className="linking">
                    Dreams
                </Link>
                <Link to="/editor" className="linking">
                    Profile
                </Link>
                
                <Button2 className="button-horo">Logout</Button2>

            </div>
        </div>
    );
};


export default Navbar;
