import logo from './logo.svg';
import './App.scss';
import React from 'react';
import {Login,Register} from "./components/login";
import { Link } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import loggedIn from './routes/loggedIn';




const ToggleLogin = props => {
  return(
    <div className='toggleLogin' ref = {props.containerRef} onClick={props.onClick}>
      <div className='inner-container'>
        <div className ='text'>
          {props.current}
        </div>
      </div>
    </div>
  )
}



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLoginActive: false,

    }
  }

  

  changeState(){
    const {isLoginActive} = this.state;
      this.setState(prevState => ({isLoginActive: !prevState.isLoginActive}));
  }


  render(){
    const {isLoginActive} = this.state;
    const current = isLoginActive?"Not a member yet? Register here":"Already a member? Login here"
    return(
      <div className='App'>
        <div className='login'>
          <div className='container'>
            {isLoginActive && <Login containerRef = {(ref)=>this.current = ref}/> }
            {!isLoginActive && <Register containerRef = {(ref)=>this.current = ref}/> }
            <div className="toggleText" onClick = {this.changeState.bind(this)}>
            <ToggleLogin current = {current} containerRef = {ref => this.toggleLogin = ref} ></ToggleLogin>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}



export default App;
