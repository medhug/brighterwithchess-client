import '../Header/Header.scss';
import {Link} from "react-router-dom";
import logo from "../../assets/images/knightlogo.jpg";
import knight from "../../assets/images/knight.png";

function Header({userStatus}) {

    if(userStatus === true){
        return (
            <nav className="navbar">
              <Link to="/dashboard/user">
                <div className="navbar__logo-container">
                  <img className="navbar__logo-container--image" src={logo} alt="knight by Hassan Pasha, unsplash" />
                </div> 
              </Link>
              <Link to="/dashboard/user">dash</Link>
              <Link to="/learn">learn</Link>
              <Link to="/quiz">quiz</Link>
            </nav>
          );
    } else {
        return (
            <nav className="navbar">
              <Link to="/">
                <div className="navbar__logo-container">
                  <img className="navbar__logo-container--image" src={knight} alt="knight by Hassan Pasha, unsplash" />
                </div> 
              </Link>
              <Link to="/">Home</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </nav>
          );
    }

  }
  
  export default Header;