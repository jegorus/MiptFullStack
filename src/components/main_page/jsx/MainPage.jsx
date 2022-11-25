import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "../css/MainPageStyles.css";
import "../css/JMLogo.css";
import "../css/StartInfo.css";
import "../css/Header.css";
import "../css/AboutUs.css";
import "../css/Info.css";
import "../css/Forms.css";
import JMLogo from "./JMLogo.jsx";
import StartInfo from "./StartInfo.jsx";
import Header from "./Header.jsx";
import AboutUs from "./AboutUs.jsx";
import SignUpForm from "./SignUpForm.jsx";
import SignInForm from "./SignInForm.jsx";

class MainPage extends Component {
  render() {
    return (
      <div className="gradBackground">
        <header>
          <Header></Header>
        </header>
        <main className="mainPageGrid">
          <div className="JMLogoLocation">
            <JMLogo></JMLogo>
          </div>
          <section className="mainPageInfoLocation">
            <div className="lineInfoSection">
              <div className="verticalLine"></div>
              <div className="infoSection">
                <Routes>
                  <Route path="/" element={<StartInfo />} />
                  <Route path="/aboutUs" element={<AboutUs />} />
                  <Route path="/signUpForm" element={<SignUpForm />} />
                  <Route path="/signInForm" element={<SignInForm />} />
                </Routes>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default MainPage;
