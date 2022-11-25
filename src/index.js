import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import MainPage from './components/main_page/jsx/MainPage.jsx';
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </React.StrictMode>
, document.getElementById('root'));