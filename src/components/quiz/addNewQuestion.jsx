//Form component
import React, { useState } from "react";
import { NavBarLoggedIn } from "../navbar/navbar";
import './questionsForm.css';

function ContactForm(){
    
    const [question,setQuestion] = useState('');
    const [option1,setOption1] = useState('');
    const [option2,setOption2] = useState('');
    const [option3,setOption3] = useState('');
    const [option4,setOption4] = useState('');
    const [correctOption,setCorrectOption] = useState('');

    const handleFormSubmit = () => {
      
    }
      
      return (
        <div className="form-div">



          <form onSubmit={()=> handleFormSubmit()} >

            <div className="dropdown form-group">
            <label for="lang">Section</label>
            <br></br>
      <select name="Section" id="lang">
        <option value="Pathfinding">PathFinding</option>
        <option value="Sorting">Searching</option>
        <option value="Searching">Sorting</option>
      </select>

      </div>
            <div className="form-group">
              <label for="emailInput">Question</label>
              <input name="question" value='' onChange= {(event) =>{setQuestion(event.target.value)}} className="form-control" id="emailInput" placeholder="Question here" />
            </div>
            <div className="form-group">
              <label for="emailInput">Option 1</label>
              <input  value='' onChange={(event) => setOption1(event.target.value)} className="form-control"  />
            </div>
            <div className="form-group">
              <label for="emailInput">Option 2</label>
              <input   value='' onChange={(event) => setOption2(event.target.value)} className="form-control"   />
            </div>
            <div className="form-group">
              <label for="emailInput">Option 3</label>
              <input   value='' onChange={(event) => setOption3(event.target.value)} className="form-control"   />
            </div>
            <div className="form-group">
              <label for="emailInput">Option 4</label>
              <input   value='' onChange={(event) => setOption4(event.target.value)} className="form-control"  />
            </div>
            <div className="form-group">
              <label for="emailInput">Correct Option</label>
              <input  value='' onChange={(event) => setCorrectOption(event.target.value)} className="form-control"  />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
            
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