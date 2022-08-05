import React from "react";
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header.js";

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
      if(this.state.isLoggedIn){
        <BrowserRouter>
          <Switch>
            <Dashboard />
            <Route path="/dashboard" />
            <Route path="/signup" />
            <Route path="/login" />
            <Route path="/learn" />
            <Route path="/quiz" />
            <Route path="/learn/:id" />
            <Route path="/quiz/:id"  />
            <Header userStatus={this.state.isLoggedIn} />
          </Switch>
      </BrowserRouter>
      } else {
        return (
          <>
          <BrowserRouter>
            <Landing />
            <Route exact path="/landing">
                <Redirect to="/" />
            </Route>
            <Header userStatus={this.state.isLoggedIn} />
          </BrowserRouter>
          </>
        );
      }
      return (
          <>

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