import React, { useEffect, useState } from 'react';
import { NavBarLoggedIn } from '../navbar/navbar';
import './index.css';
import { useLocation } from 'react-router-dom';
import { doc } from 'firebase/firestore';
import { db } from '../firebase/firebase_config';
import { getDoc } from 'firebase/firestore';
import { updateDoc } from 'firebase/firestore';

export default function MakeQuiz() {

	

	const location = useLocation();
	const quizArray = location.state.quizArray;
	const userId = location.state.userId;
	console.log("quizarrayhere");
	console.log(quizArray);
	const sid = location.state.sid;
	console.log(sid);
	const questions = quizArray

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [totalQuestions,setTotalQuestions] = useState(100);
	const [currentProgress,setCurrentProgress] = useState(0);
	const [newProgress,setNewProgress] = useState(0);

	useEffect(() => {
		getUserProgress();
		calculatePercentage();
     },[score,newProgress,currentQuestion]);

	function shuffle(array) {
		let currentIndex = array.length,  randomIndex;
	  
		// While there remain elements to shuffle.
		while (currentIndex != 0) {
	  
		  // Pick a remaining element.
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex--;
	  
		  // And swap it with the current element.
		  [array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}
	  
		return array;
	  }

	/*const getTotalQuestions = async() => {
		console.log("loading data from database");
		var temp = sid + "Count";
		console.log(temp);
        const docRef = doc(db,"misc",temp);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
			const user = docSnap.data();
			console.log("count is" + user.count);
            setTotalQuestions(user.count); 	 
			
        }
        else{
            console.log("no such document");
        }

		await getUserProgress();
	}*/

	const getUserProgress = async () => {
		console.log("loading data from database");
		var temp = sid + "Count";
		console.log(temp);
        const docRef = doc(db,"userInfo",userId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
			const user = docSnap.data();
			setCurrentProgress(user[sid]);
			console.log("users progress in"+ sid + "is" + user[sid]);
             
        }
        else{
            console.log("no such document");
        }
	}


	const updateProgress = async() => {
        try{
            const docRef = doc(db,"userInfo",userId);
            console.log("here no error")
			var updObj = {

			}
			updObj[sid] = newProgress;
            const user = await updateDoc(docRef,updObj);
        }
        catch(error){
            console.log(error);
        }
    }
	
	const calculatePercentage = () => {
		console.log("inside calculate percentage" + score);
		setNewProgress(score/questions.length * 100);
		console.log(newProgress);
		console.log(currentProgress);
		console.log(currentQuestion+ " " + questions.length);
		const nextQuestion = currentQuestion + 1;
		if(nextQuestion == questions.length && newProgress > currentProgress){
			console.log("tiem to update progress");
			updateProgress();
		}
	}


	const handleAnswerOptionClick =async (isCorrect) => {
		const nextQuestion = currentQuestion + 1;
		if (isCorrect) {
			console.log("increasing score by 1");
			setScore(score + 1);
			console.log(score);
		}

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div>
			<NavBarLoggedIn></NavBarLoggedIn>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}
