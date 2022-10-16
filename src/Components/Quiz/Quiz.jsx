import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import './quiz.scss'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import {Helmet} from "react-helmet";

function Quiz() {    
    let location = useLocation()
    let navigate = useNavigate()
    // These are the difficulty/category values that were passed from the previous page
    let categoryName = location.state?.name
    let difficulty = location.state?.difficulty

    // This is the variable that will contain the question array data
    const [questionArrayRes, setQuestionArrayRes] = useState(null)
    // This will keep track of how many answers the user got correct
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0)

    useEffect(()=>{

        const getQuizData = async(difficulty, categoryName) => {
            try{
                // This url uses the values from location to send a request
                const API_URL = `https://the-trivia-api.com/api/questions?categories=${categoryName}&limit=10&difficulty=${difficulty}`

                const response = await axios.get(API_URL)    

                setQuestionArrayRes(response.data)

            }catch(err){
                console.log(err) 
            }
        }
        // Execute function on mount
        getQuizData(difficulty, categoryName)



    },[])

    // This  is used for displaying the category name
   const [displayCategoryName, setDisplayCategoryName] = useState("")

    // This controls what question in the array to display 
    const [questionNum, setQuestionNum] = useState(0)
    // This is the current question to display to the user
    const [currentQuestion, setCurrentQuestion] = useState("")
    // These are the possible choices
    const [choices, setChoices] = useState([])
    // This is the correct answer
    const [correctAnswer, setCorrectAnswer] = useState("")
    useEffect(()=>{
        if (questionArrayRes){
            console.log(questionArrayRes)      
            // Sets and displays the category name
            setDisplayCategoryName(questionArrayRes[0].category)
    
            // This sets and displays the current question
            setCurrentQuestion(questionArrayRes[questionNum].question)  

            // This sets the correct answer
            setCorrectAnswer(questionArrayRes[questionNum].correctAnswer)

            // This creates an unshuffled array of the possible choices
            let unshuffledArray = questionArrayRes[questionNum].incorrectAnswers
            unshuffledArray.push(questionArrayRes[questionNum].correctAnswer)

            let shuffledArray = unshuffledArray.sort(() => (Math.random() > .5) ? 1 : -1)

            setChoices(shuffledArray.slice(0,4))
            
        }
    },[questionArrayRes])

    const [questionCount, setQuestionCount] = useState(1)
    
    // This will trigger every time the questionNum is incremented
    useEffect(()=>{
   
        const updateNextQuestion = () =>{
            if(questionArrayRes){
                setCurrentQuestion(questionArrayRes[questionNum].question)  
                // This sets the correct answer
                setCorrectAnswer(questionArrayRes[questionNum].correctAnswer)
    
                // This creates an unshuffled array of the possible choices
                let unshuffledArray = questionArrayRes[questionNum].incorrectAnswers
                unshuffledArray.push(questionArrayRes[questionNum].correctAnswer)
    
                let shuffledArray = unshuffledArray.sort(() => (Math.random() > .5) ? 1 : -1)
                
                // This sets the displayed choices to the shuffled array of choices
                setChoices(shuffledArray)

                // This increments the question count so the user knows what question they are on
                setQuestionCount(prevCount => prevCount + 1)
            }
        }


        setTimeout(() => {
            if(questionNum === 10){
                navigate("/quiz/results", {state:{results: correctAnswersCount}})
            }

            updateNextQuestion()
        }
        , 900)
    },[questionNum])

    // This will be executed whenever the user chooses their answer
    const checkAnswer = (e) =>{
        console.log("user choice: " + e.target.innerText)
        console.log("correct answer: " + correctAnswer)
        if (e.target.innerText === correctAnswer){
            let ct = e.currentTarget
            ct.style.backgroundColor = "#00e400c9";

            setTimeout((e) => {ct.style.backgroundColor = '#FFCC01'}, 850)
            setCorrectAnswersCount(prevCount => prevCount + 1)
        }else{
            let ct = e.currentTarget

            ct.style.backgroundColor = "#E93036"
            setTimeout((e) => {ct.style.backgroundColor = '#FFCC01'}, 850)
        }

    }

    return (
        <motion.div
        id='quiz'
        initial={{x: -window.innerWidth, y: 0, opacity:0}}
        animate={{x:0, transition: {duration: .3}, y:0, opacity:1}}
        exit={{x: -window.innerWidth, transition: {duration: .3}, opacity:0}}
        >
            <Helmet>
                <title>Quiz</title>
                <meta name="theme-color" content="#006CB7" />
            </Helmet>
            <div className="title">
                <h5>{displayCategoryName}</h5>
                {/* Placeholder */}
                <h5>{questionCount}/10</h5>
            </div>
            <header className="questionDiv">
                <h4>{currentQuestion}</h4>
            </header>
            <main>
                {choices.map((possibleAnswer)=>{
                    return (
                        <div 
                            // style={handleStyling(bgColorChoice)}
                            key={possibleAnswer}
                            onClick={(e)=>{
                            setQuestionNum(questionNum => questionNum + 1)
                            checkAnswer(e)
                            }} 

                        >
                            <h3>{possibleAnswer}</h3>
                        </div>
                    )
                })}
            </main>
        </motion.div>
    )
}

export default Quiz