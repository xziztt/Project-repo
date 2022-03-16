import React from "react";
import {useState} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "./firebase_config";
import { Routes, Route, Link } from "react-router-dom";
import { signOut,signInWithEmailAndPassword } from "firebase/auth";


export const registerUser = async (registerEmail,registerPassword) => {
      console.log("hello")
      try{
        const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
        console.log(user.user.email)
      }
     catch(error){
       console.log(error.value)
     }
} 



export const loginUser = async (loginEmail,loginPassword) => {
      try{
        const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
        console.log(user)
        //change state
      }
      catch(error){
        console.log(error.value) 
      }
}


export const logoutUser = () => {
        try{
            signOut(auth)
            
        }
        catch(error){
            console.log(error)
        };
}