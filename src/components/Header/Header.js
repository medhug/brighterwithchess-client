import '../Header/Header';
import {Link} from "react-router-dom";

function Header({userStatus}) {

    if(userStatus){
        return (
            <nav className="navbar">
              <Link to="/dashboard">dash</Link>
              <Link to="/learn">learn</Link>
              <Link to="/quiz">quiz</Link>
            </nav>
          );
    } else {
        return (
            <nav className="navbar">
              <Link to="/">Home</Link>
              <Link to="/signup">signup</Link>
              <Link to="/login">login</Link>
            </nav>
          );
    }

  }
  
  export default Header;