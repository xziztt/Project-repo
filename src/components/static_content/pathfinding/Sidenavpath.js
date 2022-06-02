import { Button } from "bootstrap";
import React from "react";
const Sidenav = (props) => {
    return (
    <div className="sidenav">
    <ul>
     <li> <a href="#dj">Djikstra's Algorithm</a></li>
      <li><a href="#bfs">BFS Algorithm</a></li>
      <li><a href="#dfs">DFS Algorithm</a></li>
      <li><a href="#A">A<sup>*</sup> Algorithm</a></li>
      <br>
      </br>
      <button className="btn-danger"><a className="homeAnchor" href="http://127.0.0.1:8080/templates/pathfinding.html">Visualize</a></button>
    </ul>
    </div> 
    );
 };
 export default Sidenav;