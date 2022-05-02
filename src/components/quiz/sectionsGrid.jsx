import React, { useEffect, useState } from "react";
import './sections.css';
import sortLogo from './img/sort2.gif';
import pathFindingLogo from "./img/pathfinding.gif";
import searchingLogo from "./img/avl.gif";
import { NavBarLoggedIn } from "../navbar/navbar";
import { db } from "../firebase/firebase_config";
import { getDoc,doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { isAdmin } from "@firebase/util";
import { auth } from "../firebase/firebase_config";


export default function SelectionsGrid(){

    const [uid,setUid] = useState('');
    let adminOnly = <div></div>


    const checkLogin = async () => {

    }


    const checkIfAdmin = async (uid) => {


        console.log("loading data from database");
        let isAdmin = "false";
        const docRef = doc(db,"userInfo",uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const user = docSnap.data();
            console.log(user);
            if(user.isAdmin == "true"){
                isAdmin = "true";
                console.log("admin");
                    adminOnly = `<div className="card-deck">
                <div className="card">
                            <a href={cards[2].link}><img className="card-image" src={searchingLogo} alt={cards[2].alt}/></a>
                            <div className="new-container">
                            <div className="card-title">
                                <h2>{cards[2].title}</h2>
                            </div>
                            <div className="card-buttons">
                                <button className="btn-danger"><a href={cards[2].link}>Attempt</a></button>
                            </div>
                        </div>
                    <br/>
                </div>
    
        </div>`

        console.log(adminOnly);
            }
            else{
                console.log("not admin");
            }
        }
        else{
            console.log("no such document");
        }
    }

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate("/add-new");
    }
    const handleQuiz = async (sid) => {
        let quizArray = [];
        console.log(sid);
        let answerOptions = [];
        let temp = {}
        const querySnapshot = await getDocs(collection(db, sid));
        querySnapshot.forEach(element => {
            let text = element.data();
            const question = text.questionText;
            const answers = text.answerOptions[0];
            Object.keys(answers).forEach(element=>{

                let answerObj = {
                    "answerText":element,
                    "isCorrect":answers[element],
                }

               answerOptions.push(answerObj);
               temp = {
                   "questionText": question,
                   "answerOptions":answerOptions, 
               }
            })

            quizArray.push(temp);
            console.log(quizArray);
        });

        navigate("/quiz",{state:{
            quizArray: quizArray,
        }});
    }




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
    },{
        title: "Add questions",
        link: "./templates/searching.html",
        image: "./img/avl.gif",
        alt: "Add Questions"
    },

];


    useEffect(()=>{
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("user logged in");
            const uid = user.uid;
            console.log(uid);
            setUid(uid);
            checkIfAdmin(uid);
        // ...
        } else {
            console.log("Error");
        }
    });

          /*checkIfAdmin().then(()=>{
            if(isAdmin){
                let adminOnly =     <div className="card-deck">
                <div className="card">
                            <a href={cards[2].link}><img className="card-image" src={searchingLogo} alt={cards[2].alt}/></a>
                            <div className="new-container">
                            <div className="card-title">
                                <h2>{cards[2].title}</h2>
                            </div>
                            <div className="card-buttons">
                                <button className="btn-danger"><a href={cards[2].link}>Attempt</a></button>
                            </div>
                        </div>
                    <br/>
                </div>
    
        </div>
            }
        });

          checkIfAdmin();*/

    },[]);

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
                            <button onClick={() => handleQuiz("pathfinding")} className="btn-danger">Attempt</button>
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
                            <button className="btn-danger"><a href={cards[1].link}>Attempt</a></button>
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
                            <button className="btn-danger"><a href={cards[2].link}>Attempt</a></button>
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
                            <button className="btn-danger"><a href={cards[2].link}>Attempt</a></button>
                        </div>
                    </div>
                <br/>
            </div>

    </div>

    

    {isAdmin?<div className="card-deck">
                <div className="card">
                            <a href={cards[2].link}><img className="card-image" src={searchingLogo} alt={cards[2].alt}/></a>
                            <div className="new-container">
                            <div className="card-title">
                                <h2>{cards[2].title}</h2>
                            </div>
                            <div className="card-buttons">
                                <button className="btn-danger" onClick={() => handleEdit()}>Attempt</button>
                            </div>
                        </div>
                    <br/>
                </div>
    
        </div>:<div></div>}

    <br/>
    <br/>
</body>
</div>
    );
}