import React from "react";

const Sidenavsearch = (props) => {
    return (
    <div className="sidenav">
      <ul>
        <li> <a href="#Linear">Linear Search</a></li>
        <li><a href="#Binary" >Binary Search</a></li>
        <li><a href="#Exponent">Exponent Search</a></li>
        <li><a href="#Jump">Jump Search</a></li>
        <br></br>
        <button className="btn-danger"><a className="homeAnchor" href="http://127.0.0.1:8080/templates/searching.html">Visualize</a></button>
      </ul>
    </div> 
    );
 };
 export default Sidenavsearch;