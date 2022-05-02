import React from "react";
import './homepage.css';
import sortLogo from './img/sort2.gif';
import pathFindingLogo from "./img/pathfinding.gif";
import searchingLogo from "./img/avl.gif";
import { NavBarLoggedIn } from "../navbar/navbar";
export default function HomePage(){
    let cards = [{
        title: "Sorting Algorithms",
        link: "http://localhost:3000/sorting-visualizer",
        image: "./img/sort2.gif",
        alt: "Sorting image"
    }, {
        title: "Pathfinding Algorithms",
        link: "./templates/pathfinding.html",
        image: "./img/pathfinding.gif",
        alt: "Pathfinding image"
    }, {
        title: "Searching Algorithms",
        link: "./templates/searching.html",
        image: "./img/avl.gif",
        alt: "Searching image"
    }];


    return(
        <div>
    <NavBarLoggedIn></NavBarLoggedIn>
    <body>
    <div className="card-deck">
            <div className="card">
                        <a href={cards[0].link}><img className="card-image" src={sortLogo} alt={cards[0].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <h2>{cards[0].title}</h2>
                        </div>
                        <div className="card-buttons">
                            <button className="btn-danger"><a href={cards[0].link}>Visualize</a></button>
                        </div>
                    </div>
                <br/>
            </div>
    

    </div>
    <div className="card-deck">
            <div className="card">
                        <a href={cards[1].link}><img className="card-image" src={pathFindingLogo} alt={cards[1].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <h2>{cards[1].title}</h2>
                        </div>
                        <div className="card-buttons">
                            <button className="btn-danger"><a href={cards[1].link}>Visualize</a></button>
                        </div>
                    </div>
                <br/>
            </div>
    

    </div>
        <div className="card-deck">
            <div className="card">
                        <a href={cards[2].link}><img className="card-image" src={searchingLogo} alt={cards[2].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <h2>{cards[2].title}</h2>
                        </div>
                        <div className="card-buttons">
                            <button className="btn-danger"><a href={cards[2].link}>Visualize</a></button>
                        </div>
                    </div>
                <br/>
            </div>
    

    </div>

    <div className="card-deck">
            <div className="card">
                        <a href={cards[2].link}><img className="card-image" src={searchingLogo} alt={cards[2].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <h2>{cards[2].title}</h2>
                        </div>
                        <div className="card-buttons">
                            <button className="btn-danger"><a href={cards[2].link}>Visualize</a></button>
                        </div>
                    </div>
                <br/>
            </div>
    

    </div>

    <br/>
    <br/>
</body>
</div>
    );
}