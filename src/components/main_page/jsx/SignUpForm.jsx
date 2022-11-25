import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  render() {
    return (
      <div className="formFrame">
        <form>
          <label className="formEmailLocation">
            <input
              type="text"
              placeholder="Email"
              className="formFieldStyle"
            ></input>
            <div className="formLine"></div>
          </label>
          <label className="formPasswordLocation">
            <input
              type="text"
              placeholder="Password"
              className="formFieldStyle"
            ></input>
            <div className="formLine"></div>
          </label>
          <label className="formConfirmPasswordLocation">
            <input
              type="text"
              placeholder="Confirm Password"
              className="formFieldStyle"
            ></input>
            <div className="formLine"></div>
          </label>
          <div className="submitLocation">
            <Link to="../toProfile">
              <input type="submit" value="Sign up" className="whiteButton" />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
