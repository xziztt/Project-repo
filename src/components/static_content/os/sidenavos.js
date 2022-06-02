import React from "react";
const Sidenav = (props) => {
    return (
    <div className="sidenav">
    <ul>
     <li> <a href="#os">What is OS</a></li>
      <li><a href="#fun">Functions os OS</a></li>
      <li><a href="#types">Types of OS</a></li>
      <li><a href="#proc">Process</a></li>
      <li><a href="#stat">Sates of Process</a></li>
      <li><a href="#cpu">CPU Scheduling Algorithms</a></li>
      <li><a href="#sync">Process Synchronization</a></li>
    </ul>
    </div> 
    );
 };
 export default Sidenav;