import React from "react";
import { NavBarLoggedIn } from "../navbar/navbar.jsx";
import Posts from "./post/posts.jsx";
  
const PlacementInfo = () => {
  return (
    
    <div className="main-container">
      <NavBarLoggedIn></NavBarLoggedIn>
      <h1 style={{alignItems:"center"}} className="main-heading">
  
      </h1>
      <Posts />
    </div>
  );
};
  
export default PlacementInfo;