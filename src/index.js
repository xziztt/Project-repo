import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProfilePage} from './components/profile';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import LoggedIn from './routes/loggedIn';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/loggedIn" element={<LoggedIn />} />
      <Route path="/profile-page" element={<ProfilePage/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
