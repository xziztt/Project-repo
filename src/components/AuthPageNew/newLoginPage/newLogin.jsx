import React from "react";
import './style.css'
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { useEffect,useRef,useState } from "react";
import {db,auth} from '../../firebase/firebase_config'
import { doc } from "firebase/firestore";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { collection,addDoc,setDoc,getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import NavBarNotLoggedIn from "../../navbar/navbar";


export function UpdatedLoginPage(){


  //
  //
  // Code for logging a user in
  //
  //


  const [loginEmail,setLoginEmail] = useState('');
  const [loginPassword,setLoginPassword] = useState('');

  const navigate = useNavigate();
  
  const updateUserProfileFirebase = (name,pfp) => {
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      console.log("added user name and pic to firebase");
  }
  const resetHandler = async () => {
    try{
        if(loginEmail == ''){
            console.log("email empty")
            alert("Enter the email used to register and try again!");
        }
        const resetStatus = await sendPasswordResetEmail(auth,loginEmail).then(()=>{
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error.message);
        });
        
        
    }
    catch(error){
        
    }

    

  }

  const loginUser = async () => {
      console.log("calling login func");
      try{
          const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
          const docRef = doc(db,"userInfo",user.user.uid);
          const docSnap = await getDoc(docRef);
          var userInfo = "";

          if(docSnap.exists()){
              userInfo = docSnap.data();
              console.log(userInfo);
              
          }
          else{
              throw("something went wrong. Please try again later");
          }


          if(user.user.emailVerified == false){
              throw("Please verify your email before logging in.")
          }


          console.log("user id" + user.user.uid)
          user.user.getIdToken().then(function(result){
              var accessToken = result;
              console.log(userInfo.isProfileUpdated);
              if(userInfo.isProfileUpdated == "false"){
                navigate("/profile-page",{state:{
                    authToken: accessToken,
                    userId: user.user.uid
                }});
                console.log("Setup account page, first time login")
              }
              else{
                navigate("/home",{state:{
                    authToken: accessToken,
                    userId: user.user.uid
                }});
                console.log("Not first time login")
              }
          })
          
  
      }
      catch(error){
          console.log(error);
          alert(error)
      }
  }








  //
  //
  //    Code for Registering new user
  //
  //
  const [registerEmail,setRegisterEmail] = useState('');
  const [firstName,setFirstName] = useState('');  
  const [lastName,setLastName] = useState('');
  const [registerPassword,setRegisterPassword] = useState('');
  const [confirmRegisterPassword,setConfirmRegisterPassword] = useState('');
  const [confirmMessage,setConfirmMessage] = useState('');
  const [userToken,setUserToken] = useState('');
  const [checkPasswordMatch,setPasswordMatch] = useState('');
  

  const addNewUserInfoToDatabase = async(uid,registerDate) => { 
      try{
          console.log("here" + uid)
          console.log("adding to firestore")
          console.log(firstName + " " + lastName)
          const docRef = doc(db,"userInfo",uid);
          const user = await setDoc(docRef,{
              isProfileUpdated:"false",
              userId:uid,
              firstName: firstName,
              lastName: lastName,
              email:registerEmail,
              isAdmin:"false",
              phoneNumber:'',
              addressLine1:'',
              addressLine2:'',
              city:'',
              pinCode:'',
              region:'',
              country:'',     
              registerDate:registerDate,
              pathfinding:0,
              sorting:0,
              searching:0,
              dbms:0,
              os:0,           
          });
          console.log(user.user)
          
      }
      catch(error){
          console.log(error)
          //alert(error)
      }
  }

  const isEmpty = (str) => !str.trim().length;

  const addNewUserToDatabase = async(uid) => { 
      try{
          var today = new Date();
          var registerDate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + (today.getFullYear())
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
          updateUserProfileFirebase(firstName,'');
          addNewUserInfoToDatabase(uid,registerDate);
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
        await sendEmailVerification(user.user)
        await addNewUserToDatabase(user.user.uid);
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

     



  const onClickSignIn = () => {
    if(mounted.current){
      const container = document.getElementById('container');
      container.classList.remove('right-panel-active');
    }
  }

  const onClickSignUp = () => {
    if(mounted.current){
      const container = document.getElementById('container');
      container.classList.add('right-panel-active')
    }
  }

  const mounted = useRef(false);
  useEffect(()=>{

    const container = document.getElementById('container');
    container.classList.remove('right-panel-active');
    mounted.current = true;
    return () => {
      mounted.current = false;
  };
  },[])


  return (
      
  <div style={{width:"100%"}}>
    <NavBarNotLoggedIn></NavBarNotLoggedIn>
  <div className="container" id="container">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossOrigin="anonymous"/>
        <div className="form-container sign-up-container">
            <form >
                <h1>Create Account</h1>
                <div className="scrollable-div">
                <input type="text" onChange={(event) => {setFirstName(event.target.value)}} placeholder="First Name" />
                <input type="text" onChange={(event) => {setLastName(event.target.value)}} placeholder="Last Name" />
                <input type="email" onChange={(event) => {setRegisterEmail(event.target.value)}} placeholder="Email" />
                <input type="password" onChange={(event) => {checkConfirmPassword(event.target.value,confirmRegisterPassword);setRegisterPassword(event.target.value);console.log(registerPassword)}} placeholder="Password" />
                <input type="password" onChange={(event) => {checkConfirmPassword(event.target.value,registerPassword);setConfirmRegisterPassword(event.target.value)}} placeholder="Confirm Password" />
                <div>{confirmMessage}</div>
                </div>

                <button type="button" onClick={registerNewUser}>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form action="">
                <h1>Sign in</h1>
                <span>or use your account</span>
                <input type="email" placeholder="Email" onChange={(event) => {setLoginEmail(event.target.value)}} />
                <input type="password" placeholder="Password" onChange={(event) => {setLoginPassword(event.target.value)}} />
                <a href="#" onClick={resetHandler}>Forgot your password?</a>
                <button type="button" onClick={loginUser}>Sign In</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p className="thisPara">To keep connected with us please login with your personal info</p>
                    <button className="ghost" id="signIn" onClick={onClickSignIn}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p className="thisPara">Enter your personal details and start journey with us</p>
                    <button className="ghost" id="signUp" onClick={onClickSignUp}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>


    </div>
    
  );
}

export default UpdatedLoginPage