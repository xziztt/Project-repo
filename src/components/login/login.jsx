import React from "react";
import loginImg from "../../images/login.jpg";
import './style.scss'
import { auth } from "../firebase/firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export class Login extends React.Component {

    
    
    


    constructor(props){
        super(props);
        this.state = {
            loginEmail:'',
            loginPassword:'',
            userToken:'',
        }

    }

    

    setLoginEmail = (loginEmail) => {
        console.log(loginEmail)
        this.setState({
            loginEmail:loginEmail,
        })
    }



    setLoginPassword = (loginPassword) => {
        console.log(loginPassword)
        this.setState({
            loginPassword:loginPassword
        })
    }

    loginUser = async () => {
        console.log("calling login func");
        try{
            const user = await signInWithEmailAndPassword(auth,this.state.loginEmail,this.state.loginPassword);
            console.log(user.user.email)
        }
        catch(error){
            console.log(error);
        }
    }


    render(){
        
        return( 
                
                <div className="base-container" ref={this.props.containerRef}>
                <div>            
                    <nav style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}>
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
                </nav>
            </div>
                <div className="header">Login</div>
                <div className="content" style={{alignItems:"center"}}>
                <img src = {loginImg} height="20%" width="20%" alt="hello"/>    
                
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type = "text" name = "email" onChange={(event) => {this.setLoginEmail(event.target.value)}} placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type = "password" name = "password" onChange={(event) => {this.setLoginPassword(event.target.value)}} placeholder="password"/>
                    </div>

                    <div className="footer">
                    <button type = "button" className="btn" onClick={this.loginUser}>Login</button>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}