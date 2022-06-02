import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProfilePage} from './components/profile';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import LoggedIn from './routes/loggedIn';
import UpdatedLoginPage, {NewLoginPage} from "./components/AuthPageNew/newLoginPage/newLogin"
import 'bootstrap/dist/css/bootstrap.css';
import MakeQuiz from './components/quiz/index'
import NavBarNotLoggedIn from './components/navbar/navbar';
import { Nav } from 'react-bootstrap';
import { auth } from './components/firebase/firebase_config';
import SelectionsGrid from './components/quiz/sectionsGrid';
import HomePage from './components/homepage/homepage';
import AddNewQuestion from './components/quiz/addNewQuestion'
import PlacementInfo from './components/placement_info/placement_info';
import AddNewPlacement from './components/placement_info/addNewPlacement';
import Dbms from './components/static_content/dbms/Dbms';
import Os from './components/static_content/os/os';
import Paths from './components/static_content/pathfinding/pathfinding';
import Sort from './components/static_content/sorting/Sorting'
import Searching from './components/static_content/searching/searching';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/loggedIn" element={<LoggedIn />} />
      <Route path="/profile-page" element={<ProfilePage/>}/>
      <Route path="/new-login" element={<UpdatedLoginPage/>}/>
      <Route path="/quiz" element={<MakeQuiz/>}/>
      <Route path="/sections" element={<SelectionsGrid/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/add-new" element={<AddNewQuestion/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/placements" element={<PlacementInfo/>}/>
      <Route path="/placements/add-new" element={<AddNewPlacement/>}/>
      <Route path="/dbms" element={<Dbms/>}/>
      <Route path="/pathfinding" element={<Paths/>}/>
      <Route path="/sorting" element={<Sort/>}/>
      <Route path="/os" element={<Os/>}/>
      <Route path="/searching" element={<Searching/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
