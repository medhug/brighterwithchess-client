import "../Dashboard/Dashboard.scss";
import { Component } from "react";
import axios from "axios";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import NotLoggedIn from "../../components/NotLoggedIn/NotLoggedin";
import NavButton from "../../components/NavButton/NavButton";

const baseUrl = "http://localhost:5050/";

class Dashboard extends Component {
  state = {
    error: "",
    barsLoaded: false,
    Memory: [],
    Calculation: [],
    Patterns: [],
  };

  componentDidMount() {
    console.log("dashboard mounted");

    if (this.props.userStatus === false) {
      window.location.assign("http://localhost:3000/");
    }

    let URI = baseUrl + "progressbars/" + this.props.userID;

    if (this.props.userStatus === true && this.props.userID != null) {
      axios
        .get(URI, {
          params: { _id: this.props.userID },
        })
        .then((response) => {
          if (response.data === null) {
            this.defaultProgressBarsHandler();
          }
          if (response.data != null) {
            this.usersProgressHandler(response.data);
          }
        })
        .catch((err) => {
          console.log("loaded bars into empty database", err);
        });
    }
  }

  defaultProgressBarsHandler() {
    console.log(
      "load bars into database for",
      this.props.user,
      this.props.userID
    );
    axios
      .post(baseUrl + "progressbars", {
        userID: this.props.userID,
        user: this.props.user,
        Memory: [{ 1: false }, { 2: false }, { 3: false }, { 4: false }],
        Calculation: [{ 1: false }, { 2: false }, { 3: false }, { 4: false }],
        Patterns: [{ 1: false }, { 2: false }, { 3: false }, { 4: false }],
      })
      .then(() => {
        this.setState({
          barsLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  usersProgressHandler(response) {
    console.log("actively get bars from db");

    this.setState({
      Memory: response.Memory,
      Calculation: response.Calculation,
      Patterns: response.Patterns,
    });
  }

  handleOnClick() {
    console.log("clicked logout");
    sessionStorage.removeItem("token");
    window.location.reload();
  }

  render() {
    if (this.props.userStatus === true) {
      return (
        <main className="dashboard">
          <div className="dashboard-container">
            <h1>Welcome {this.props.user}!</h1>
            <div className="dashboard-container__progressbars">
              <ProgressBar
                key={1}
                label={"Memory"}
                blockValues={this.state.Memory}
              />
              <ProgressBar
                key={2}
                label={"Calculation"}
                blockValues={this.state.Calculation}
              />
              <ProgressBar
                key={3}
                label={"Patterns"}
                blockValues={this.state.Patterns}
              />
            </div>
            <div
              className="dashboard-container__logoutbutton"
              onClick={() => {
                this.handleOnClick();
              }}
            >
              <NavButton label={"Logout"} />
            </div>
          </div>
        </main>
      );
    } else {
      return <NotLoggedIn />;
    }
  }
}

export default Dashboard;
