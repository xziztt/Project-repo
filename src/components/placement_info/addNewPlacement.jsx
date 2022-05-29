//Form component
import React, { useState } from "react";
import { NavBarLoggedIn } from "../navbar/navbar";
import './questionsForm.css';
import { setDoc,getDocs,collection } from "firebase/firestore";
import { db } from "../firebase/firebase_config";
import { doc } from "firebase/firestore";
function ContactForm(){
    
    const [title,setTitle] = useState('');
    const [info,setInfo] = useState('');
    const [image,setImage] = useState('');
    const [link,setLink] = useState('');



  const addNewPlacementToDB = async() => { 
    try{
        const querySnapshot = await getDocs(collection(db, "placements"));
        let qid = (querySnapshot.size).toString();
        console.log(qid);
        console.log("adding question")
        const docRef = doc(db,"placements",qid);
        console.log(docRef);
        const question = await setDoc(docRef,{
          "title":title,
          "info":info,
          "image":image,
          "link":link
        }).then(() => {
          alert("Placement info added")
        });

        console.log(question);

        
    }
    catch(error){
        alert(error);
        //alert(error)
    }
}
      
      return (
        <div className="form-div">



          <form >

            <div className="form-group">
              <label>Title</label>
              <input name="Title"  onChange= {(event) =>{setTitle(event.target.value)}} className="form-control" id="emailInput"/>
            </div>
            <div className="form-group">
              <label >Info</label>
              <input   onChange={(event) => setInfo(event.target.value)} className="form-control"  />
            </div>
            <div className="form-group">
              <label >Link</label>
              <input    onChange={(event) => setLink(event.target.value)} className="form-control"   />
            </div>
            <div className="form-group">
              <label >Image</label>
              <input    onChange={(event) => setImage(event.target.value)} className="form-control"   />
            </div>
            <button type="button" value="Submit" className="btn btn-primary" onClick={()=>{addNewPlacementToDB()}} >Submit</button>
            
          </form>
        </div>
      )
  
  }
  
  class MainTitle extends React.Component {
    render(){
      return(
        <div></div>
      )
    }
  }
  
  export function AddNewPlacement(){
      return(
        <div>
        <NavBarLoggedIn></NavBarLoggedIn>
          <MainTitle/>
          <ContactForm/>
        </div>
      )
    
  }
  
export default AddNewPlacement