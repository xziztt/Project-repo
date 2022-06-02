import React from "react";
const Sidenavdbms = (props) => {
    return (
    <div className="sidenav">
    <ul>
      <li><a href="#DBMS">Database Management System</a></li>
      <ul>
        <li> <a href="#Database">What is a Database</a></li>
        <li><a href="#Features" >Features</a></li>
        <li><a href="#Why">Why DBMS?</a></li>
        <li><a href="#Architecture">3-Level Architecture</a></li>
        <li><a href="#Independence">Data Independence</a></li>
        <li><a href="#Phases">Phases of Database Design</a></li>
        <li><a href="#Advantages">Advantages of DBMS</a></li>
        <li><a href="#Concurrency">Concurrency Control</a></li>
        <li><a href="#ACID">ACID Properties of Transaction</a></li>
      </ul>
      <li><a href="#Normalization">Database Normalization</a></li>
      <ul>
        <li><a href="#Redundancy">Problems of Data Redundancy</a></li>
        <li><a href="#Functional">Functional Redundancy</a></li>
      </ul>
    </ul>
    </div> 
    );
 };
 export default Sidenavdbms;