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
  };

  componentDidMount() {
    console.log("dashboard mounted");

    if (this.props.userStatus === false) {
      window.location.assign("http://localhost:3000/");
    }

    let URI = baseUrl + "progressbars/" + this.props.userID;

    if (this.props.userStatus === true) {
      axios
        .get(URI, {
          params: { _id: this.props.userID },
        })
        .then((response) => {
          if (response.data === null) {
            this.loadProgressBarsHandler();
          }
          if (response.data != null) {
            console.log("data in DB");
          }
        })
        .catch((err) => {
          console.log("loaded bars into empty database", err);
        });
    }
  }

  loadProgressBarsHandler() {
    console.log(
      "load bars into database for",
      this.props.user,
      this.props.userID
    );
    axios
      .post(baseUrl + "progressbars", {
        userID: this.props.userID,
        user: this.props.user,
        memory: { q1: false, q2: false, d3: false, d4: false },
        calculation: { q1: false, q2: false, d3: false, d4: false },
        patterns: { q1: false, q2: false, d3: false, d4: false },
      })
      .then((response) => {
        this.setState({
          barsLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
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
                tableName={"Memory Progress"}
                tableValues={[
                  { q1: "1", completed: false },
                  { q2: "2", completed: false },
                  { d3: "3", completed: false },
                  { d4: "4", completed: false },
                ]}
              />
              <ProgressBar
                tableName={"Calculate Progress"}
                tableValues={[
                  { id: "1", completed: false },
                  { id: "2", completed: false },
                  { id: "3", completed: false },
                  { id: "4", completed: false },
                ]}
              />
              <ProgressBar
                tableName={"Pattern Progress"}
                tableValues={[
                  { id: "1", completed: false },
                  { id: "2", completed: false },
                  { id: "3", completed: false },
                  { id: "4", completed: false },
                ]}
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
