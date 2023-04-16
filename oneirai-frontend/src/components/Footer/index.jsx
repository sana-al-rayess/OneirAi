import MyFace from '../../images/fb.png';
import MyIns from '../../images/insta.png';
import Mywapp from '../../images/wapp.png';
import Logo from '../../images/logo2.png';
import './footer.css';


const Footer = () => {

  return (
    <div className="footer">
      <div className="info">
        <p className='hover'>Mobile app</p>
        <p className='hover'>About Us</p>
        <p className='hover'>Contact Us</p>
        <img className='logo_footer ' src={Logo} alt="logo"></img>
        <p className='hover'>Help desk</p>
        <p className='hover'>Terms Of Use</p>
        <p className='hover'>Privacy Policy</p>
      </div>
      <div className="connect">
        <div className="icons">
          <img className="sm_icons" src={MyFace} alt="facebook" />
          <img className="sm_icons" src={MyIns} alt="instagram"></img>
          <img className="sm_icons" src={Mywapp} alt="wapp"></img>
          

        </div>
        <div>
          <p className="slogan">&#9400;Photo,Inc 2023, We love our Users</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;