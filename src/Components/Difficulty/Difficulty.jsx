import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import './difficulty.scss'
import { motion } from 'framer-motion';

function Difficulty() {
    const location = useLocation()
    const navigate = useNavigate()
    const categoryName = location.state?.name
    const paramName = categoryName?.toLowerCase().replace(/ /g,"_");
    const difficultyChoices = ['easy', 'medium', 'hard']

    useEffect(()=>{
        window.scrollTo(0, 0)
      },[])

    return (
        <motion.div
        id='difficulty'
        initial={{x: -window.innerWidth, y: 0, opacity:0}}
        animate={{x:0, transition: {duration: .3}, y:0, opacity:1}}
        exit={{x: -window.innerWidth, transition: {duration: .3}, opacity:0}}
        >
           <div className="titleDiv">
               <h1 onClick={()=>{navigate('/')}}>{categoryName}</h1>
           </div>
           <main>
           {difficultyChoices.map((choice, index)=>{
          return (
            <div className='difficultyDiv'>
                <h1>
                    {choice.charAt(0).toUpperCase()+ choice.slice(1)}
                </h1>
            </div>
          )
        })}
           </main>
       </motion.div>
    )
}

export default Difficulty