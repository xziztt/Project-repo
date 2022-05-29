import React, { useState } from "react";
import { useEffect } from "react";
import "./Posts.css";
import Post from "./post.jsx";
import { db } from "../../firebase/firebase_config";
import { getDocs,getDoc,collection,doc } from "firebase/firestore";
import { setUserId } from "firebase/analytics";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase_config";
import { useNavigate } from "react-router-dom";
const Posts = () => {


  const [postArray,setPostArray] = useState([]);
  const [isAdmin,setIsAdmin] = useState('');
  const [uid,setUid] = useState('');

  const navigate = useNavigate();

    const handleNewPlacement = () => {
        navigate("/placements/add-new");
    }
  


  const checkIfAdmin = async (uid) => {

    console.log("Checking if admin");
    const docRef = doc(db,"userInfo",uid);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        const user = docSnap.data();
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
  const getInfoFromDB = async () => {

    console.log("getting info");
    const querySnapshot = await getDocs(collection(db, "placements"));
    querySnapshot.forEach(element => {
        let text = element.data();
        console.log(text);
        let tempObj = {
          link: text.link,
          image:text.image,
          info:text.info,
          title:text.title,
        }
        console.log("this is")
        console.log(tempObj);
        setPostArray(prevArray => [...prevArray,tempObj]);
        //console.log(postArray);
    });
    console.log(postArray);

}

 

  const blogPosts = [
    {
      title: "Data Structure ",
      body: `There are many real-life examples of 
      a stack. Consider an example of plates stacked 
      over one another in the canteen. The plate 
      which is at the top is the first one to be 
      removed, i.e. the plate which has been placed 
      at the bottommost position remains in the 
      stack for the longest period of time. So, it 
      can be simply seen to follow LIFO(Last In 
      First Out)/FILO(First In Last Out) order.`,
      author: "Suresh Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    },
    {
      title: "Algorithm",
      body: `The word Algorithm means “a process 
      or set of rules to be followed in calculations 
      or other problem-solving operations”. Therefore 
      Algorithm refers to a set of rules/instructions 
      that step-by-step define how a work is to be 
      executed upon in order to get the expected 
      results. `,
      author: "Monu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
      title: "Computer Network",
      body: `An interconnection of multiple devices, 
      also known as hosts, that are connected using 
      multiple paths for the purpose of sending/
      receiving data media. Computer networks can 
      also include multiple devices/mediums which 
      help in the communication between two different 
      devices; these are known as Network devices
      and include things such as routers, switches,
      hubs, and bridges. `, 
      author: "Sonu Kr",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
  ];

  useEffect(() => {
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
    getInfoFromDB();
  },[])
  
  return (
    <div className="posts-container">
    <div className="posts-container ">
      {postArray.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
    <br></br>
    {isAdmin?<div className="post-container">
      <button onClick={() => handleNewPlacement()}>Add new post</button>
    </div>:<div></div>}
    </div>

    
  );
};
  
export default Posts;