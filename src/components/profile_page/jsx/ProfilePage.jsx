import React, { Component } from "react";
import Header from "./Header.jsx";
import AccountInfo from "./AccountInfo.jsx";
import TracksInterface from "./TracksInterface.jsx";
import "../css/ProfilePage.css";
import "../css/Header.css";
import "../css/AccountInfo.css";
import "../css/TracksInterface.css";

class ProfilePage extends Component {
  render() {
    return (
      <div className="profileBackground">
        <header>
          <Header></Header>
        </header>
        <section>
          <AccountInfo></AccountInfo>
        </section>
        <div>
          <TracksInterface></TracksInterface>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
