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
    // These values were passed by the difficulty Component
    const categoryName = location.state?.name
    const difficulty = location.state?.difficulty
    const titleName = location.state?.originalName
    // These states will display the data of the question
    const [question,setQuestion] = useState('')

    const possibleAnswers = []

    const getQuiz = async () => {
        try{
            let response = await axios.get(`https://the-trivia-api.com/api/questions?categories=${categoryName}&limit=10&difficulty=${difficulty}`)
            setQuestion(response.data[0].question)
            // This will add the correct answer to the possibleAnswers array
            possibleAnswers.append(response.data[0].correctAnswer)

        } catch(err){
            console.log(err)
        }

    }
    useEffect(()=>{
        window.scrollTo(0, 0)
        getQuiz()

      },[])
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
                <h5></h5>
            </div>
            <header className="questionDiv">
                <h4>{question}</h4>
            </header>
            <main>

            </main>
        </motion.div>
    )
}

export default Quiz