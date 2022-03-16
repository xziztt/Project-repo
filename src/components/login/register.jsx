import React from "react";
import loginImg from "../../images/login.jpg";
import './style.scss'
import { auth } from "../firebase/firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase/firebase_config";
import { collection,addDoc,setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import RegisterPopup from "./login_popup";


export class Register extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            registerEmail:'',
            userName:'',
            registerPassword:'',
            confirmRegisterPassword:'',
            confirmMessage:'',
            userToken:'',
        }
    }



    addNewUserToDatabase = async(uid) => { 
        try{
            console.log("here" + uid)
            console.log("adding to firestore")
            console.log(this.state.userName)
            const docRef = await setDoc(doc(db,"users",uid),{
                userName:this.state.userName,
                email:this.state.registerEmail,
                
            });
        }
        catch(error){
            console.log(error)
        }
    }

    


    registerNewUser = async () => {
        console.log("hello")
        try{
          const user = await createUserWithEmailAndPassword(auth,this.state.registerEmail,this.state.registerPassword);
          console.log(user.user);
          console.log(user.user.email);
          this.addNewUserToDatabase(user.user.uid);
        }
       catch(error){
         console.log(error.value)
       }
    }



    checkConfirmPassword = (val) => {
        if(this.state.registerPassword == this.state.confirmRegisterPassword){
            console.log("password matches")
            this.setState({
                confirmMessage:"Password Matches",
            })
        }
        else
            this.setState({
                confirmMessage:"Passwords doesnt match"
            })
    }



    setConfirmRegisterPassword = (val) => {
        this.setState({
            confirmRegisterPassword:val,
        })
    }


    setRegisterEmail = (registerEmail) => {
        this.setState({
            registerEmail:registerEmail,
        })
        console.log(registerEmail)
    }

    setRegisterPassword = (registerPassword) => {
        this.setState({
            registerPassword:registerPassword,
        })
        console.log(registerPassword)
    }

    setUserName = (userName) => {
        this.setState({
            userName:userName,
        })
        console.log(userName)
    }

    render(){
        
        return(         
        
                <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <div className="content" style={{alignItems:"center"}}>
                <img src = {loginImg} height="20%" width="20%" alt="hello"/>    
                
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="name">UserName</label>
                        <input type = "text"  onChange={(event) => {this.setUserName(event.target.value)}} name = "username" placeholder="username"/>
                    </div>
                    

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type = "email" name = "password" onChange={(event) => {this.setRegisterEmail(event.target.value)}} placeholder="password"/>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type = "password" name = "password" onChange={(event) => {this.setRegisterPassword(event.target.value)}} placeholder="password"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type = "password" name = "password-confirm" onChange={(event) => {this.setConfirmRegisterPassword(event.target.value)}} placeholder="password"/>
                    </div>
                    <div>{this.state.confirmMessage}</div>
                    <div className="footer">
                    <button type = "button" className="btn" onClick={this.registerNewUser}>Register</button>
                    </div>

                    <div>

                    </div>
                </div>
                </div>                
            </div>
        )
    }
}