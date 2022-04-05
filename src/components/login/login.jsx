import React from "react";
import loginImg from "../../images/login.jpg";
import './style.scss'
import { auth } from "../firebase/firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate,useLocation,useParams } from "react-router-dom";
import { useState } from "react";

export function Login() {

    const [loginEmail,setLoginEmail] = useState('');
    const [loginPassword,setLoginPassword] = useState('');
    const [userToken,setUserToken] = useState('');

    const navigate = useNavigate();
    


    const loginUser = async () => {
        console.log("calling login func");
        try{
            const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
            console.log("user id" + user.user.uid)
            user.user.getIdToken().then(function(result){
                var accessToken = result;
                navigate("/loggedIn",{state:{
                    authToken: accessToken,
                    userId: user.user.uid
                }});
            })
            
    
        }
        catch(error){
            console.log(error);
            alert(error)
        }
    }

        
        return( 
                
                <div className="base-container">
                
                <div className="header" style={{fontSize:50}}>Login</div>
                <div className="content" style={{alignItems:"center"}}> 
                <img src = {loginImg} height="20%" width="20%" alt="hello"/>    
                
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email" style={{fontSize:"10"}}>Email</label>
                        <input type = "text" name = "email" onChange={(event) => {setLoginEmail(event.target.value)}} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={{fontSize:"5"}}>Password</label>
                        <input type = "password" name = "password" onChange={(event) => {setLoginPassword(event.target.value)}} placeholder="Password"/>
                    </div>

                    <div className="footer">
                    <button type = "button" className="btn" onClick={loginUser}>Login</button>
                    </div>
                </div>
                </div>
                
            </div>
        )
    
}
