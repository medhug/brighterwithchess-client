import "../Dashboard/Dashboard.scss";
import { Component } from "react";
// import axios from 'axios';
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import NotLoggedIn from "../../components/NotLoggedIn/NotLoggedin";
import NavButton from "../../components/NavButton/NavButton";

class Dashboard extends Component {
  state = {
    error: "",
  };

  componentDidMount() {
    console.log("dashboard mounted");
    console.log("systemwide login state", this.props.userStatus);
  }

  handleOnClick() {
    console.log("clicked logout");
    sessionStorage.removeItem("token");
    window.location.reload();
  }

  render() {
    let tableValues1 = [
      { id: "1", completed: false },
      { id: "2", completed: false },
      { id: "3", completed: false },
      { id: "4", completed: false },
    ];
    let tableValues2 = [
      { id: "1", completed: false },
      { id: "2", completed: false },
      { id: "3", completed: false },
      { id: "4", completed: false },
    ];
    let tableValues3 = [
      { id: "1", completed: false },
      { id: "2", completed: false },
      { id: "3", completed: false },
      { id: "4", completed: false },
    ];

    if (this.props.userStatus === true) {
      return (
        <main className="dashboard">
          <div className="dashboard-container">
            <h1>Welcome back, Hugo!</h1>
            <div className="dashboard-container__progressbars">
              <ProgressBar
                tableName={"Memory Progress"}
                tableValues={tableValues1}
              />
              <ProgressBar
                tableName={"Calculate Progress"}
                tableValues={tableValues2}
              />
              <ProgressBar
                tableName={"Pattern Progress"}
                tableValues={tableValues3}
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
