import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <Link to="/signInForm">
        <button className="whiteButton">Sign In</button>
      </Link>
    );
  }
}

export default SignUp;
