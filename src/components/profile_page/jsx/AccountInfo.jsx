import React, { Component } from "react";
import profileImg from "../images/profile_photo.png";

class AccountInfo extends Component {
  render() {
    return (
      <section className="accountInfoLocation">
        <div className="accountPicture">
          <img
            src={profileImg}
            alt="profileImg"
            className="profileImageProperties"
          ></img>
        </div>
        <div className="accountDescription">
          <p className="username">jegorus</p>
          <div className="descriptionLocation">
            <span className="profilePageSmallText">Description</span>
          </div>
        </div>
      </section>
    );
  }
}

export default AccountInfo;
