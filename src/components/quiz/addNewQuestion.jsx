//Form component
import React, { useState } from "react";
import { NavBarLoggedIn } from "../navbar/navbar";
import './questionsForm.css';
import { setDoc,getDocs,collection } from "firebase/firestore";
import { db } from "../firebase/firebase_config";
import { doc } from "firebase/firestore";
function ContactForm(){
    
    const [section,setSection] = useState('');
    const [question,setQuestion] = useState('');
    const [option1,setOption1] = useState('');
    const [option2,setOption2] = useState('');
    const [option3,setOption3] = useState('');
    const [option4,setOption4] = useState('');
    const [correctOption,setCorrectOption] = useState('');



    const handleQuiz = async (sid) => {
      console.log(sid);
      let answerOptions = [];
      let temp = {}
      const querySnapshot = await getDocs(collection(db, sid));
      console.log(querySnapshot.size);
  }

    const addNewQuestionToDB = async(sid,obj) => { 
      try{
        console.log(sid);
        console.log(obj);
          const querySnapshot = await getDocs(collection(db, sid));
          let qid = (querySnapshot.size + 1).toString();
          console.log(qid);
          console.log("adding question")
          const docRef = doc(db,section,qid);
          console.log(docRef);
          const question = await setDoc(docRef,obj);
          console.log(question)
          
      }
      catch(error){
          console.log(error)
          //alert(error)
      }
  }

    const handleFormSubmit = () => {
      try{
        let ansArray = [];
        var obj = new Object()
        var aobj = new Object()
  
        obj.questionText = question;
        if(option1 == correctOption){
          aobj[option1] = true;
          console.log("1");
        }
        else{
          aobj[option1] = false;
        }
        if(option2 == correctOption){
          aobj[option2] = true;
          console.log("2");
        }
        else{
          aobj[option2] = false;
        }
        if(option3 == correctOption){
          aobj[option3] = true;
          console.log("3");
        }
        else{
          aobj[option3] = false;
        }
        if(option4 == correctOption){
          aobj[option4] = true;
          console.log("4");
        }
        else{
          aobj[option4] = false;
        }
        ansArray.push(aobj);
        obj.answerOptions = ansArray;
        console.log(obj);
        addNewQuestionToDB(section,obj).then(()=>{
          alert("Added successfully");
        });
      }
      catch(error){
        alert(error);
      }

    }
      
      return (
        <div className="form-div">



          <form onSubmit={()=> handleQuiz("pathfinding")} >

      <div className="dropdown form-group">
            <label>Section</label>
            <br></br>
      <select onChange={(event) => {setSection(event.target.value);console.log(event.target.value)}} name="Section" id="lang">
        <option value="pathfinding">PathFinding</option>
        <option value="searching">Searching</option>
        <option value="sorting">Sorting</option>
        <option value="dbms">DBMS</option>
        <option value="os">OS</option>
      </select>

      </div>
            <div className="form-group">
              <label>Question</label>
              <input name="question"  onChange= {(event) =>{setQuestion(event.target.value)}} className="form-control" id="emailInput" placeholder="Question here" />
            </div>
            <div className="form-group">
              <label >Option 1</label>
              <input   onChange={(event) => setOption1(event.target.value)} className="form-control"  />
            </div>
            <div className="form-group">
              <label >Option 2</label>
              <input    onChange={(event) => setOption2(event.target.value)} className="form-control"   />
            </div>
            <div className="form-group">
              <label >Option 3</label>
              <input    onChange={(event) => setOption3(event.target.value)} className="form-control"   />
            </div>
            <div className="form-group">
              <label>Option 4</label>
              <input    onChange={(event) => setOption4(event.target.value)} className="form-control"  />
            </div>
            <div className="form-group">
              <label for="emailInput">Correct Option</label>
              <input  onChange={(event) => setCorrectOption(event.target.value)} className="form-control"  />
            </div>
            <button type="button" value="Submit" className="btn btn-primary" onClick={()=>{handleFormSubmit()}} >Submit</button>
            
          </form>
        </div>
      )
  
  }
  
  class MainTitle extends React.Component {
    render(){
      return(
        <h1>Add new question</h1>
      )
    }
  }
  
  export function AddNewQuestion(){
      return(
        <div>
        <NavBarLoggedIn></NavBarLoggedIn>
          <MainTitle/>
          <ContactForm/>
        </div>
      )
    
  }
  
export default AddNewQuestion