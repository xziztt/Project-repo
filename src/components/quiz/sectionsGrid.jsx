import React, { useEffect, useState } from "react";
import './sections.css';
import sortLogo from './img/sort2.gif';
import pathFindingLogo from "./img/pathfinding.gif";
import searchingLogo from "./img/avl.gif";
import dbmsLogo from "./img/database.gif";
import osLogo from "./img/os.gif";
import { NavBarLoggedIn } from "../navbar/navbar";
import { db } from "../firebase/firebase_config";
import { getDoc,doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase_config";


export default function SelectionsGrid(){

    const [uid,setUid] = useState('');
    let adminOnly = <div></div>

    const [isAdmin,setIsAdmin] = useState(false);
    const [userId,setUserId] = useState('');
    const checkLogin = async () => {

    }


    const checkIfAdmin = async (uid) => {
        console.log("loading data from database");
        const docRef = doc(db,"userInfo",uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            const user = docSnap.data();
            setUserId(user.userId);
            console.log(user);
            if(user.isAdmin == "true"){
                setIsAdmin(true);
                console.log("admin");
                console.log(isAdmin);
                  /*  adminOnly = `<div className="card-deck">
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
*/
        console.log(adminOnly);
            }
            else{
                console.log("not admin");
                console.log(isAdmin);
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
        
        let temp = {}
        const querySnapshot = await getDocs(collection(db, sid));
        querySnapshot.forEach(element => {
            let answerOptions = [];
            let text = element.data();
            const question = text.questionText;
            const answers = text.answerOptions[0];
            console.log("this is answeroptions[o]");
            console.log(answers);
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
            sid:sid,
            userId:userId,
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
        title: "Add New questions",
        link: "./templates/searching.html",
        image: "./img/avl.gif",
        alt: "Add Questions"
    },
    {
        title: "DBMS",
        link: "./templates/searching.html",
        image: "./img/database.gif",
        alt: "DBMS image"
    },

    {
        title: "Operating Systems",
        link: "./templates/searching.html",
        image: "./img/os.gif",
        alt: "OS image"
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
    <body className="thisBody">
    <div className="card-deck">
            <div className="card">
                        <a ><img className="card-image" src={sortLogo} alt={cards[0].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <h2>{cards[0].title}</h2>
                        </div>
                        <div className="card-buttons">
                            <button onClick={() => handleQuiz("sorting")} className="btn-danger">Attempt</button>
                        </div>
                    </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
    

    </div>
    <div className="card-deck">
            <div className="card">
                        <a><img className="card-image" src={pathFindingLogo} alt={cards[1].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <h2>{cards[1].title}</h2>
                        </div>
                        <div className="card-buttons">
                            <button className="btn-danger" onClick={() => handleQuiz("pathfinding")}>Attempt</button>
                        </div>
                    </div>
                <br/>
            </div>
    
            <br></br>
    </div>
        <div className="card-deck">
            <div className="card">
                        <a><img className="card-image" src={searchingLogo} alt={cards[2].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <h2>{cards[2].title}</h2>
                        </div>
                        <div className="card-buttons">
                            <button className="btn-danger" onClick={() => handleQuiz("searching")}>Attempt</button>
                        </div>
                    </div>
                <br/>
            </div>
    

    </div>
    
    <div className="card-deck">
            <div className="card">
                        <a><img className="card-image" src={dbmsLogo} alt={cards[5].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <h2>{cards[4].title}</h2>
                        </div>
                        <div className="card-buttons">
                            <button className="btn-danger" onClick={() => handleQuiz("dbms")}>Attempt</button>
                        </div>
                    </div>
                <br/>
            </div>
    

    </div>

    <div className="card-deck">
            <div className="card">
                        <a><img className="card-image" src={osLogo} alt={cards[5].alt}/></a>
                        <div className="new-container">
                        <div className="card-title">
                            <div>
                            <h2>{cards[5].title}</h2>
                            </div>
                            
                        </div>
                        <div className="card-buttons">
                            <button className="btn-danger" onClick={() => handleQuiz("os")}>Attempt</button>
                        </div>
                    </div>
                <br/>
            </div>
    

    </div>



    

    {isAdmin?<div className="card-deck">
                <div className="card">
                            <a><img className="card-image" src={searchingLogo} alt={cards[3].alt}/></a>
                            <div className="new-container">
                            <div className="card-title">
                                <h2>{cards[3].title}</h2>
                            </div>
                            <div className="card-buttons">
                                <button className="btn-danger" onClick={() => handleEdit()}>Add New</button>
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