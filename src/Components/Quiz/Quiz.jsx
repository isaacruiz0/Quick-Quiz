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
    // This variable is used for displaying the category name
    let displayCategoryName

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

    
    if (questionArrayRes){
        console.log(questionArrayRes)      
        displayCategoryName = questionArrayRes[0].category

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
                <h1>{displayCategoryName}</h1>
                <h5>/10</h5>
            </div>
            <header className="questionDiv">
                <h4></h4>
            </header>
            <main>

            </main>
        </motion.div>
    )
}

export default Quiz