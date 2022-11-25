import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  render() {
    return (
      <Link to="/signUpForm">
        <button className="whiteButton">Sign Up</button>
      </Link>
    );
  }
}

export default SignUp;
