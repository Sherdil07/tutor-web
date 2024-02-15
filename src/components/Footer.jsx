import { Link } from "react-router-dom";

import HeaderLogo from "../../src/assets/tutor-logo.png";




import "./Footer.css";


export const Footer = () => {
  return (
    <div className="footer">
      
        <div className="main-div">
            <div className="col-3">
          <div  className="logo-container">
            <Link to="/">
              <img className="logo-image" src={HeaderLogo} alt="tutor logo" />
            </Link>
          </div>
          </div>
          
          <div  className="col-9">
            <ul>
              <li>
                <Link to="/about"> AboutUs </Link>
              </li>
              <li>
                <Link to="/services"> Services </Link>
              </li>
              <li>
                <Link to="/reviews"> Reviews </Link>
              </li>
              <li>
                <div className="button-container">
                 <button className="custom-button"> Become a Tutor </button>
                </div>
              </li>
              <li>
                <div className="button-container">
                 <button className="custom-button"> Find a Tutor </button>
                </div>
              </li>
              <li>
                <div className="Contact-wrapper">
                    <div className="contact-h-wrapper">
                        <h3>Contact</h3>
                    </div>
                    <div className="contact-p-wrapper">
                        <p>03321969500</p>
                    </div>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      
      
    </div>
    
  );
};
export default Footer;
