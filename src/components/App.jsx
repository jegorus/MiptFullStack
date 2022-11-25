import React, { Component } from "react";
import MainPage from "./main_page/jsx/MainPage.jsx";
import ProfilePage from "./profile_page/jsx/ProfilePage.jsx";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/toProfile" element={<ProfilePage />} />
      </Routes>
    );
  }
}

export default App;
