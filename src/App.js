import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Landing from './pages/Landing/Landing';
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Learn from "./pages/Learn/Learn";
import LearnMemory from "./pages/LearnMemory/LearnMemory";
import Quiz from "./pages/Quiz/Quiz";


class App extends React.Component {
  state = {
    "user" : null,
    pageDidMount : false,
    systemWideLogIn : false
  }

  componentDidMount(){
    console.log("app mounted");
    console.log("system log in: ", this.state.systemWideLogIn)
    this.setState({
      pageDidMount: true,
    });

  }

  handleSystemWideLogIn = () => {
    console.log("system wide login triggered");
    
    this.setState({
      systemWideLogIn : true
    })
  }

  render (){
    if(this.state.pageDidMount){    
      return (
        <>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Landing}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login"><Login 
                handleSystemWideLogIn={this.handleSystemWideLogIn}
                userStatus={this.state.systemWideLogIn}/>
              </Route>
              <Route path="/dashboard/:id"><Dashboard 
                userStatus={this.state.systemWideLogIn}/>
              </Route> 
              <Route path="/learn"><Learn 
                userStatus={this.state.systemWideLogIn}/>
              </Route>
              <Route path="/quiz"><Quiz 
                userStatus={this.state.systemWideLogIn}/>
              </Route>
              <Route path="/learn/memory" component={LearnMemory}/>
              <Route path="/quiz/memory" component={Quiz} />
            </Switch>
            <Header userStatus={this.state.systemWideLogIn}/>
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