import React, { Component } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

class AboutUs extends Component {
  render() {
    return (
      <section>
        <div className="aboutUsFrame">
          <div className="aboutUsPadding">
            <p className="textSmall">
              Jegor Music is a platform that specializes on finding
              recommendations to the track.
            </p>
            <p className="textSmall">
              You can search for track and find tracks and playlists similar to
              this track and made by other users and you can make your own
              recommendations.
            </p>
          </div>
        </div>
        <div className="aboutUsButtonLocation">
          <SignUp></SignUp>
        </div>
        <SignIn></SignIn>
      </section>
    );
  }
}

export default AboutUs;
