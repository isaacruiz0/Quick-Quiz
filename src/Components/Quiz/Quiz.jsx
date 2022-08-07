import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import './quiz.scss'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


function Quiz() {
    const location = useLocation()
    const navigate = useNavigate()
    const categoryName = location.state?.name
    const difficulty = location.state?.difficulty
    useEffect(()=>{
        window.scrollTo(0, 0)
        console.log(categoryName, difficulty)
      },[])
    return (
    <div>
        <motion.div
        id='quiz'
        initial={{x: -window.innerWidth, y: 0, opacity:0}}
        animate={{x:0, transition: {duration: .3}, y:0, opacity:1}}
        exit={{x: -window.innerWidth, transition: {duration: .3}, opacity:0}}
        >
           <header className="questionDiv">
               <h1 onClick={()=>{navigate('/')}}>Quiz</h1>
           </header>
           <main>
            
           </main>
       </motion.div>
    </div>
    )
}

export default Quiz