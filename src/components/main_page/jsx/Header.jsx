import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="headerButtonLocation">
            <div className="aboutUsLocation">
              <span className="textSmall">
                <Link to="/aboutUs">About us</Link>
              </span>
            </div>
            <SignIn></SignIn>
          </div>
        </header>
        <div className="headerBottomLine"></div>;
      </div>
    );
  }
}

export default Header;
