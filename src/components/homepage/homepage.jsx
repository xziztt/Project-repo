import React from "react";
import './homepage.css';
import sortLogo from './img/sort2.gif';
import pathFindingLogo from "./img/pathfinding.gif";
import searchingLogo from "./img/avl.gif";
import { NavBarLoggedIn } from "../navbar/navbar";
import DBMSLogo from './img/database.gif';
import OSLogo from './img/os.gif';
import { useNavigate } from "react-router-dom";
export default function HomePage(){

    const navigate = useNavigate();
    const handleTapStaticContent = (id) => {
        navigate("/" + {id});
    }



    let cards = [{
        title: "Sorting Algorithms",
        link: "./sorting",
        image: "./img/sort2.gif",
        alt: "Sorting image"
    }, {
        title: "Pathfinding Algorithms",
        link: "./pathfinding",
        image: "file:///D:/dev/Viggy/Algorithms-Visualization/templates/pathfinding.html",
        alt: "Pathfinding image"
    }, {
        title: "Searching Algorithms",
        link: "./searching",
        image: "./img/avl.gif",
        alt: "Searching image"
    }, {
        title: "DBMS",
        link: "./dbms",
        image: "./img/avl.gif",
        alt: "Searching image"
    }, {
        title: "Operating Systems",
        link: "./os",
        image: "./img/os.gif",
        alt: "OS image"
    }
];


    return(
        <div>
    <NavBarLoggedIn></NavBarLoggedIn>
    <body className="thisBody">
    <div className="card-deck">
            <div className="card">
                        <a className="homeAnchor" href={cards[0].link}><img className="card-image" src={sortLogo} alt={cards[0].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <h2>{cards[0].title}</h2>
                        </div>
                        <div className="card-buttons">
                            <button className="btn-danger"><a className="homeAnchor" href={cards[0].link}>Visualize</a></button>
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
                            <button className="btn-danger"><a className="homeAnchor" href={cards[1].link}>Visualize</a></button>
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
                            <button className="btn-danger"><a className="homeAnchor" href={cards[2].link}>Visualize</a></button>
                        </div>
                    </div>
                <br/>
            </div>
    

    </div>

    <div className="card-deck">
            <div className="card">
                        <a href={cards[3].link}><img className="card-image" src={DBMSLogo} alt={cards[3].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <h2>{cards[3].title}</h2>
                        </div>
                        <div className="card-buttons">
                            <button className="btn-danger"><a className="homeAnchor" href={cards[3].link}>View</a></button>
                        </div>
                    </div>
                <br/>
            </div>
    

    </div>


    <div className="card-deck">
            <div className="card">
                        <a href={cards[4].link}><img className="card-image" src={OSLogo} alt={cards[4].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <h2>{cards[4].title}</h2>
                        </div>
                        <div className="card-buttons">
                            <button className="btn-danger"><a className="homeAnchor" href={cards[4].link}>View</a></button>
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