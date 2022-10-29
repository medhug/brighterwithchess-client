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

    if (this.props.userStatus === true) {
      axios
        .get(baseUrl + "progressbars")
        .then((response) => {
          console.log("getbars failed. empty database", response.data);
          if (response.data.length === 0) {
            this.loadProgressBarsHandler();
          }
        })
        .catch((err) => {
          console.log(err);
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
        memory: [
          { q1: "1", completed: false },
          { q2: "2", completed: false },
          { d3: "3", completed: false },
          { d4: "4", completed: false },
        ],
        calculation: [
          { q1: "1", completed: false },
          { q2: "2", completed: false },
          { d3: "3", completed: false },
          { d4: "4", completed: false },
        ],
        patterns: [
          { q1: "1", completed: false },
          { q2: "2", completed: false },
          { d3: "3", completed: false },
          { d4: "4", completed: false },
        ],
      })
      .then((response) => {
        console.log("loaded bars into database");
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
