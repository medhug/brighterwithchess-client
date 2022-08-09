import '../NotLoggedIn/NotLoggedIn.scss';
import {Component} from "react";


class NotLoggedIn extends Component {

  render(){
      return (
        <main className="notloggedin">
          <div className="notloggedin-container">
            <h1>Not logged in</h1>
          </div>
        </main>
      )
    }
}

  
export default NotLoggedIn;