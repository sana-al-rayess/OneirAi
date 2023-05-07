import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../images/logo_oneira.png";
import Button2 from "../Button2";

const Navbar = () => {
    const handleClick = () => {
        window.location.href = "/login";
        localStorage.clear();
      };
    

    return (
        <div className='header1'>
            <div>
                <img className='logo' src={Logo} alt='logo' />
            </div>
            <div className="button-container-horo">
                <Link to="/landing" className="linking">
                    Home
                </Link>
                <Link to="/user" className="linking">
                    Dreams
                </Link>
                
                <Button2 className="button-horo" onClick={handleClick}>Logout</Button2>

            </div>
        </div>
    );
};


export default Navbar;
