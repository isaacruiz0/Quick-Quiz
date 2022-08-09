import React, { Component } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import './quiz.scss'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import {Helmet} from "react-helmet";

function Quiz() {
    const location = useLocation()
    const navigate = useNavigate()
    const titleName = location.state?.originalName
    const [questionNumber, setQuestionNumber] = useState(1)

    // These states will display the data of the question
    const [question,setQuestion] = useState('')
    const [shuffledArray, setShuffledArray] = useState([])
    // This will contain the array of objects regarding the question data
    const [questionArray, setQuestionArray] = useState([])
    // This will display what number the user is on
    const [numberUserIsOn, setNumberUserIsOn] =useState(1)
    const [textOfUserAnswer, setTextOfUserAnswer] = useState('')

    let timeOutTime = 400



    // const categoryName = location.state?.name
    // const difficulty = location.state?.difficulty

    const getQuiz = async () => {
        try{
            // These values were passed by the difficulty Component
            const categoryName = location.state?.name
            const difficulty = location.state?.difficulty

            // This makes a get request to get data for the quiz
            let response = await axios.get(`https://the-trivia-api.com/api/questions?categories=${categoryName}&limit=10&difficulty=${difficulty}`)
            let arrayDataResponse = await response.data

            // This sets the data to question array so that it is accessible outside of this function
            setQuestionArray(arrayDataResponse)

            // this outputs an empty array
            console.log(questionArray)

        } catch(err){
            console.log(err)
        }

    }

    // This fetches the data on mount
    useEffect(() => { getQuiz() }, [])

    // This will set the data for the elements once the state of the question array has been set from the get request
    useEffect(() => { 

        if (questionArray[0]) { 
            setQuestion(questionArray[0].question) 
            console.log(questionArray)

            // This array will take in the incorrect answers and correct answers
            let unshuffledArray = []

            // This will push all possible answers to the unshuffled array 
            questionArray[0].incorrectAnswers.forEach(incorrectAnswer => unshuffledArray.push(incorrectAnswer))
            unshuffledArray.push(questionArray[0].correctAnswer)
            // We will shuffle the inncorrect and correct answers and then display the choces to the user
            let shuffledArray = unshuffledArray.sort(() => (Math.random() > .5) ? 1 : -1)

            // This will set the unshuffled array to the be displayed 
            setShuffledArray(shuffledArray)

            console.log(unshuffledArray)
        }

    }, [questionArray])
    // This will increment the question by displaying the next question and its possiblew answers
    const incrementQuestion = () =>{
        // This will delay the increment of the question so that the user has time to see whether they got the question correct or wrong via the green and red highlight
        setTimeout(()=>{
            
            setQuestion(questionArray[questionNumber].question)
            // This array will take in the incorrect answers and correct answers
            let unshuffledArray = []

            // This will push all possible answers to the unshuffled array 
            questionArray[questionNumber].incorrectAnswers.forEach(incorrectAnswer => unshuffledArray.push(incorrectAnswer))
            unshuffledArray.push(questionArray[questionNumber].correctAnswer)
            // We will shuffle the inncorrect and correct answers and then display the choces to the user
            let shuffledArray = unshuffledArray.sort(() => (Math.random() > .5) ? 1 : -1)

            // This will set the unshuffled array to the be displayed 
            setShuffledArray(shuffledArray)
            
            setQuestionNumber(questionNumber + 1)
        }, timeOutTime)
    }
    const handleCorrectAnswer = (e) => {
        console.log(e.target)
        // This is the content of the div that the user clicked
        let userAnswer = e.target.outerText
        setTextOfUserAnswer(userAnswer)
        // Since our "numberUserIsOn" state begins on 1 I am manually checking the first questions answers
        if(numberUserIsOn === 1){
            if(questionArray[0].correctAnswer === userAnswer){
                console.log('correct answer!', questionNumber)
                e.currentTarget.classList.add('green')

            }
            else{
                console.log(questionNumber)
                e.currentTarget.classList.add('red')
            }
        }
        else{
            // Subtract for array index reasons
            if(questionArray[questionNumber-1].correctAnswer === userAnswer){
                console.log('correct answerj', questionNumber)
                e.currentTarget.classList.add('green')
            }
            else{
                e.currentTarget.classList.add('red')
                console.log('incorrect answer', questionNumber)
            }
        }
    }
    const handleNextQuestion = (e) =>{
        setTimeout(()=>setNumberUserIsOn(numberUserIsOn + 1), timeOutTime) 
        if (numberUserIsOn > 10){
            // This will take them to page where they can see how well they did

            
        }
        else{
            incrementQuestion()
            handleCorrectAnswer(e)
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
                <h5>{titleName}</h5>
                <h5>{numberUserIsOn}/10</h5>
            </div>
            <header className="questionDiv">
                <h4>{question}</h4>
            </header>
            <main>
                {shuffledArray.map((possibleAnswer)=>{
                    return (
                        <div key={possibleAnswer} onClick={handleNextQuestion} >
                            <h3>
                                {possibleAnswer}
                            </h3>
                        </div>
                    )
                })}
            </main>
        </motion.div>
    )
}

export default Quiz