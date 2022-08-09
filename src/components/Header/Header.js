import '../Header/Header.scss';
import {Link} from "react-router-dom";
import knight from "../../assets/images/knight.png";

function Header({userStatus}) {

    if(userStatus === true){
        return (
          <header className="header">
            <nav className="header-navbar">
              <Link to="/dashboard/user">
                <div className="header-navbar__logo-container">
                  <img className="header-navbar__logo-container--image" src={knight} alt="knight by Hassan Pasha, unsplash" />
                </div> 
              </Link>
              <Link to="/dashboard/user">Dash</Link>
              <Link to="/learn">Learn</Link>
              <Link to="/quiz">Quiz</Link>
            </nav>
          </header>
        );
    } else {
        return (
          <header className="header">
            <nav className="header-navbar">
              <Link to="/">
                <div className="header-navbar__logo-container">
                  <img className="header-navbar__logo-container--image" src={knight} alt="knight by Hassan Pasha, unsplash" />
                </div> 
              </Link>
              <Link to="/">Home</Link>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </nav>
          </header>
        );
    }

  }
  
  export default Header;