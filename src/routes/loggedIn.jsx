import React from "react";
import { useLocation } from "react-router-dom";
export default function LoggedIn(state){

    const location = useLocation();
    console.log(location.state) 

    return(
        <div>
            User with the userID: {location.state.userId} has been logged In with the token {location.state.authToken}
        </div>
    )
}