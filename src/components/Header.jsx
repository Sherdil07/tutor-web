import { Link } from "react-router-dom";

// import HeaderLogo from "../../src/assets/tutor-logo.png";
import LOGO  from "../../src/assets/tutor-logo.png"




import "./Header.css";


export const Header = () => {
  return (
    <header className="header">
      
        <div className="main-div">
            <div className="col-3">
          <div  className="logo-container">
            <Link to="/">
              <img className="logo-image" src={LOGO} alt="tutor logo" />
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
                 <button className="custom-button"> Find a Tutor </button>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      
      
    </header>
    
  );
};
export default Header;
