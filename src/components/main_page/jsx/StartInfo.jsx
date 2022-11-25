import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

class StartInfo extends Component {
  render() {
    return (
      <div>
        <p className="startInfoTextBig">Find the music you like</p>
        <SignUp></SignUp>
        <div className="startInfoTextSmallLocation">
          <span className="textSmall">Already a user?</span>
        </div>
        <SignIn></SignIn>
      </div>
    );
  }
}

export default StartInfo;
