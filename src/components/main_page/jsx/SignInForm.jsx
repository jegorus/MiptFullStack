import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignInForm extends Component {
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
          <div className="submitSignInLocation">
            <Link to="../toProfile">
              <input type="submit" value="Sign in" className="whiteButton" />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
