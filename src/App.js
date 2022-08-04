import React from "react";
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Landing from './pages/Landing/Landing';

class App extends React.Component {
  state = {
    "user" : null,
    pageDidMount : false,
    isLoggedIn : false

  }

  componentDidMount(){
    console.log("page mounted");
    this.setState({
      pageDidMount: true,
    });

  }

  render (){
    if(this.state.pageDidMount){
      return (
          <>
          <BrowserRouter>
            <Switch>
              <h1>Page mounted and made it to APP.js</h1>
              if(!this.state.isLoggedIn){
                <Landing />
              }
              <Route exact path="/">
                  <Redirect to="/dashboard" />
              </Route>
              <Route path="/signup" />
              <Route path="/login" />
              <Route path="/dashboard" />
              <Route path="/learn" />
              <Route path="/quiz" />
              <Route path="/learn/:id" />
              <Route path="/quiz/:id"  />
            </Switch>
          </BrowserRouter>
          </>
      );
    } else {
      return (
        <>
          <h2>page loading...</h2>
        </>
      )
    }
  }

}

export default App;