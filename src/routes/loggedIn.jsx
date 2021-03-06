import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavBarLoggedIn } from "../components/navbar/navbar";
export default function LoggedIn(state){

    const location = useLocation();
    console.log(location.state) 

    return(
        <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
            <NavBarLoggedIn></NavBarLoggedIn>
        <div style={{width:"100px"}}>
            User with the userID: {location.state.userId} has been logged In with the token {location.state.authToken}
        </div>
        </div>
    )
}