import '../Header/Header.scss';
import {Link} from "react-router-dom";
import logo from "../../assets/images/knightlogo.jpg";

function Header({userStatus}) {

    if(userStatus){
        return (
            <nav className="navbar">
              <Link to="/dashboard">
                <div className="navbar__logo-container">
                  <img className="navbar__logo-container--image" src={logo} alt="knight by Hassan Pasha, unsplash" />
                </div> 
              </Link>
              <Link to="/dashboard">dash</Link>
              <Link to="/learn">learn</Link>
              <Link to="/quiz">quiz</Link>
            </nav>
          );
    } else {
        return (
            <nav className="navbar">
              <Link to="/">
                <div className="navbar__logo-container">
                  <img className="navbar__logo-container--image" src={logo} alt="knight by Hassan Pasha, unsplash" />
                </div> 
              </Link>
              <Link to="/">Home</Link>
              <Link to="/signup">signup</Link>
              <Link to="/login">login</Link>
            </nav>
          );
    }

  }
  
  export default Header;