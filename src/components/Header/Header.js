import '../Header/Header.scss';
import {Link} from "react-router-dom";
import knight from "../../assets/images/knight.png";
import NavButton from '../NavButton/NavButton';

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
              <Link to="/dashboard/user"><NavButton label={"Dash"}/></Link>
              <Link to="/learn"><NavButton label={"Learn"}/></Link>
              <Link to="/quiz"><NavButton label={"Quiz"}/></Link>
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
              <Link to="/"><NavButton label={"Home"}/></Link>
              <Link to="/signup"><NavButton label={"Signup"}/></Link>
              <Link to="/login"><NavButton label={"Login"}/></Link>
            </nav>
          </header>
        );
    }

  }
  
  export default Header;