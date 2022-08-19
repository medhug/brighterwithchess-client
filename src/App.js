import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Learn from "./pages/Learn/Learn";
import LearnMemory from "./pages/LearnMemory/LearnMemory";
import Quiz from "./pages/Quiz/Quiz";
import QuizMemory from "./pages/QuizMemory/QuizMemory";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";

let tableValuesAll = [
  [
    { id: "1", completed: false },
    { id: "2", completed: false },
    { id: "3", completed: false },
    { id: "4", completed: false },
  ],
  [
    { id: "1", completed: false },
    { id: "2", completed: false },
    { id: "3", completed: false },
    { id: "4", completed: false },
  ],
  [
    { id: "1", completed: false },
    { id: "2", completed: false },
    { id: "3", completed: false },
    { id: "4", completed: false },
  ],
];

class App extends React.Component {
  state = {
    user: null,
    pageDidMount: false,
    systemWideLogIn: false,
  };

  componentDidMount() {
    console.log("app mounted");
    this.setState({
      pageDidMount: true,
    });

    const token = sessionStorage.getItem("token");
    if (token) {
      this.setState({
        systemWideLogIn: true,
      });
    }
  }

  handleSystemWideLogIn = () => {
    console.log("system wide login triggered");

    this.setState({
      systemWideLogIn: true,
    });
  };

  handleProgressBars = (status, skill, question) => {
    tableValuesAll[skill][0].completed = true;
  };

  render() {
    if (this.state.pageDidMount) {
      return (
        <>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/signup" component={Signup} />
              <Route path="/login">
                <Login
                  handleSystemWideLogIn={this.handleSystemWideLogIn}
                  userStatus={this.state.systemWideLogIn}
                />
              </Route>
              <Route path="/dashboard/:id">
                <Dashboard
                  userStatus={this.state.systemWideLogIn}
                  tableValuesAll={tableValuesAll}
                />
              </Route>
              <Route exact path="/learn/memory">
                <LearnMemory userStatus={this.state.systemWideLogIn} />
              </Route>
              <Route path="/quiz/memory">
                <QuizMemory
                  userStatus={this.state.systemWideLogIn}
                  handleProgressBars={this.handleProgressBars}
                />
              </Route>
              <Route exact path="/construction" component={UnderConstruction} />
              <Route path="/learn">
                <Learn userStatus={this.state.systemWideLogIn} />
              </Route>
              <Route path="/quiz">
                <Quiz userStatus={this.state.systemWideLogIn} />
              </Route>
            </Switch>
            <Header userStatus={this.state.systemWideLogIn} />
          </BrowserRouter>
        </>
      );
    } else {
      return <h1>page loading...</h1>;
    }
  }
}

export default App;
