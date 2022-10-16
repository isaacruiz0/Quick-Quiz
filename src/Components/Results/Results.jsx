import React from 'react'
import './results.scss'
import { Helmet } from 'react-helmet';

import {useLocation, useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';

import { BsArrowRightCircle } from 'react-icons/bs'

function Results() {
    const navigate = useNavigate()
    const location = useLocation()

    const resultsOfQuiz = location.state?.results
    return (
    <motion.div
        id='results'
        initial={{x: -window.innerWidth, y: 0, opacity:0}}
        animate={{x:0, transition: {duration: .3}, y:0, opacity:1}}
        exit={{x: -window.innerWidth, transition: {duration: .3}, opacity:0}}
        >

        <Helmet>
            <title>Quiz</title>
            <meta name="theme-color" content="#FFCC01" />
        </Helmet>
        <div className="titleDiv">
            <h2>{resultsOfQuiz}/10 answers correct!</h2>
        </div>
        <main>
            <p>Ready for another challenge?</p>
            <button onClick={()=>{navigate('/category')}}>Lets do it! <BsArrowRightCircle/></button>
        </main>
    </motion.div>
    )
}

export default Results