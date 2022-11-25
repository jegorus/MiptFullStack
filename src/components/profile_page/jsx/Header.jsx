import React, { Component } from "react";
import logoImg from "../images/logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="profilePageHeader">
          <img src={logoImg} alt="logo" className="logoProperties" />
        </div>
        <div className="profilePageheaderBottomLine"></div>
      </header>
    );
  }
}

export default Header;
