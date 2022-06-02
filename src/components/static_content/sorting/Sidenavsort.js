import React from "react";
const Sidenav = (props) => {
    return (
    <div className="sidenav">
    <ul>
     <li> <a href="#sl">Selection Sort</a></li>
      <li><a href="#bb">Bubble Sort</a></li>
      <li><a href="#mg">Merge Sort</a></li>
      <li><a href="#qs">Quick Sort</a></li>
      <li><a href="#ss">Shell Sort</a></li>
      <li><a href="#hs">Heap Sort</a></li>
      <br></br>
      <button className="btn-danger"><a className="homeAnchor" href="http://localhost:5555/sorting-visualizer">Visualize</a></button>
    </ul>
    </div> 
    );
 };
 export default Sidenav;