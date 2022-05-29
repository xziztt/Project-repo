import React, { useEffect, useState } from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase_config";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth, updateProfile } from "firebase/auth";

export const NavBarNotLoggedIn = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Visualization Tool</div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div>        

    </header>
);



export function NavBarLoggedIn (){

    const [userName,setUserName] = useState('');
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("user logged in");
            console.log(user.displayName);
            setUserName(user.displayName);
        // ...
        } else {
            console.log("Error");
        }
    });
    })

    const handleQuiz = () =>{
        navigate("/sections");
    }

    const handleHome = () => {
        navigate("/home");
    }

    const handlePlacements = () => {
        navigate("/placements")
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
        <div className='navbar__item' style={{fontSize:"20px",fontWeight:"bold"}}>Welcome, {userName}</div>
        <div className='navbar__item' onClick={handleHome}>Home</div>
        <div className='navbar__item' onClick={handleQuiz}>Quiz</div>      
        <div className='navbar__item' onClick={handleProfileClick}>Profile</div>
        <div className='navbar__item' onClick={handlePlacements}>Placements</div>
        <div className='navbar__item' onClick={handleLogout}>Logout</div>         
    </header>
    )

};

export function NavBarLoggedInAdmin (){
    const [userName,setUserName] = useState('');
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
        <div className='navbar__item' >Welcome {userName} </div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item' onClick={handleQuiz}>Quiz</div>      
        <div className='navbar__item' onClick={handleProfileClick}>Profile</div>
        <div className='navbar__item' onClick={handleLogout}>Logout</div>         
    </header>
    )

};



export default NavBarNotLoggedIn
