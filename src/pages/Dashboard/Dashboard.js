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
  }

  handleOnClick() {
    console.log("clicked logout");
    sessionStorage.removeItem("token");
    window.location.reload();
  }

  render() {
    let tableValuesAll= this.props.tableValuesAll;

    if (this.props.userStatus === true) {
      return (
        <main className="dashboard">
          <div className="dashboard-container">
            <h1>Welcome!</h1>
            <div className="dashboard-container__progressbars">
              <ProgressBar
                tableName={"Memory Progress"}
                tableValues={tableValuesAll[0]}
              />
              <ProgressBar
                tableName={"Calculate Progress"}
                tableValues={tableValuesAll[1]}
              />
              <ProgressBar
                tableName={"Pattern Progress"}
                tableValues={tableValuesAll[2]}
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
