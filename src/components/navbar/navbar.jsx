import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase_config";
import { signOut } from "firebase/auth";


export const NavBarNotLoggedIn = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Visualization Tool</div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>        
    </header>
);

export function NavBarLoggedIn (){

    const handleQuiz = () =>{
        navigate("/sections");
    }

    const handleProfileClick = () => {
        navigate("/profile-page");
    }


    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/new-login");
        }).catch((error) => {
            alert(error);
        }).then(
            ()=>{
                alert("Logged Out")
            }
        ); 
    }
    const navigate = useNavigate();
    return(
        <header className='navbar'>
        <div className='navbar__title navbar__item'>Visualization Tool</div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item' onClick={handleQuiz}>Quiz</div>      
        <div className='navbar__item' onClick={handleProfileClick}>Profile</div>
        <div className='navbar__item' onClick={handleLogout}>Logout</div>         
    </header>
    )

};

export function NavBarLoggedInAdmin (){

    const handleQuiz = () =>{
        navigate("/sections");
    }

    const handleProfileClick = () => {
        navigate("/profile-page");
    }


    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate("/new-login");
        }).catch((error) => {
            alert(error);
        }).then(
            ()=>{
                alert("Logged Out")
            }
        ); 
    }
    const navigate = useNavigate();
    return(
        <header className='navbar'>
        <div className='navbar__title navbar__item'>Visualization Tool</div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item' onClick={handleQuiz}>Quiz</div>      
        <div className='navbar__item' onClick={handleProfileClick}>Profile</div>
        <div className='navbar__item' onClick={handleLogout}>Logout</div>         
    </header>
    )

};



export default NavBarNotLoggedIn
