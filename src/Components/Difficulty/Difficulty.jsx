import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import './difficulty.scss'
import { motion } from 'framer-motion';

function Difficulty() {
    const location = useLocation()
    const navigate = useNavigate()
    // This is the name that was passed down from the user selected category in the category component
    const categoryName = location.state?.name
    // This will be the name we pass to the quiz component to be used for requests to the api
    const paramName = categoryName?.toLowerCase().replace(/ /g,"_");
    // I am mapping through here to and making a div for each word
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
            // On click this div will pass the category name and the difficulty to the quiz component
            <div className='difficultyDiv' key={index} onClick={()=>{navigate('/quiz',{state:{name: paramName, difficulty: choice}})}}>
                <h1>
                    {/* This is to capitalize the first letter of the difficulty choice word */}
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