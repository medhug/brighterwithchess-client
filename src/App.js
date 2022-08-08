import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Landing from './pages/Landing/Landing';
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Learn from "./pages/Learn/Learn";
import Quiz from "./pages/Quiz/Quiz";


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
              <Route exact path="/" component={Landing}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/dashboard/:id" component={Dashboard}/>
              <Route path="/dashboard/:id/learn" component={Learn}/>
              <Route path="/dashboard/:id/quiz" component={Quiz}/>
              <Route path="/dashboard/:id/learn/:id" />
              <Route path="/dashboard/:id/quiz/:id"  />
            </Switch>
            <Header userStatus={this.state.isLoggedIn}/>
          </BrowserRouter>
          
        </>
      );
    } else {
      return (
        <h1>page loading...</h1>
      )
    }

  
     
  }

}

export default App;