import React from "react";
import loginImg from "../../images/login.jpg";
import './style.scss'
import { auth } from "../firebase/firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/firebase_config";
import { collection,addDoc,setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import RegisterPopup from "./login_popup";
import { useState } from "react";
import PopupExample from "../popups/loggedInPopup";
import Popup from "reactjs-popup";



function isEmpty(str) {
    return !str.trim().length;
}

export function Register() {
    

    const [registerEmail,setRegisterEmail] = useState('');
    const [firstName,setFirstName] = useState('');  
    const [lastName,setLastName] = useState('');
    const [registerPassword,setRegisterPassword] = useState('');
    const [confirmRegisterPassword,setConfirmRegisterPassword] = useState('');
    const [confirmMessage,setConfirmMessage] = useState('');
    const [userToken,setUserToken] = useState('');
    const [checkPasswordMatch,setPasswordMatch] = useState('');


    const isEmpty = (str) => !str.trim().length;

    const addNewUserToDatabase = async(uid) => { 
        try{
            var today = new Date();
            var registerDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            console.log("here" + uid)
            console.log("adding to firestore")
            console.log(firstName + " " + lastName)
            const docRef = await setDoc(doc(db,"users",uid),{
                userId:uid,
                firstName: firstName,
                lastName: lastName,
                email:registerEmail,
                registerDate:registerDate
                
            });
        }
        catch(error){
            console.log(error)
            alert(error)
        }
    }

    


    const registerNewUser = async () => {
        console.log("hello")
        try{
          if(firstName == "" && lastName == "")throw("Please enter a valid name")
          if(firstName == "")throw("Please enter a valid first name");
          if(lastName == "")throw("Please enter a valid last name");
          const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
          console.log(user.user);
          console.log(user.user.email);
          addNewUserToDatabase(user.user.uid);
          alert("Added new user. Please Login.")
        }
       catch(error){
         console.log(error.value)
         alert(error)
       }
    }

        /*const generatePopup = () => {
        <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
        </Popup>
        }*/


    const checkConfirmPassword = async (pass1,pass2) => {
        if(pass1 == pass2){
            setConfirmMessage("Passwords match")
        }
        else{
            setConfirmMessage("Passwords do not match")
        }
        
    }

        
        return(         
                
                <div className="base-container" >
                <div className="header" style={{fontSize:50}}>Register</div>
                <div className="content" style={{alignItems:"center"}}>
                <img src = {loginImg} height="20%" width="20%" alt="hello"/>    
                
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type = "text"  onChange={(event) => {setFirstName(event.target.value)}} name = "username" placeholder="First Name"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastNamee">Last Name</label>
                        <input type = "text"  onChange={(event) => {setLastName(event.target.value)}} name = "username" placeholder="Last Name"/>
                    </div>
                    

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type = "email" name = "email" onChange={(event) => {setRegisterEmail(event.target.value)}} placeholder="Email"/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type = "password" name = "password" onChange={(event) => {checkConfirmPassword(event.target.value,confirmRegisterPassword);setRegisterPassword(event.target.value);console.log(registerPassword)}} placeholder="Password"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type = "password" name = "password-confirm" onChange={(event) => {checkConfirmPassword(event.target.value,registerPassword);setConfirmRegisterPassword(event.target.value)}} placeholder="Password"/>
                    </div>
                    <div>{confirmMessage}</div>
                    <div className="footer">
                    <button type = "button" className="btn" onClick={registerNewUser}>Register</button>
                    </div>

                    <div>

                    </div>
                </div>
                </div>                
            </div>
        )
}