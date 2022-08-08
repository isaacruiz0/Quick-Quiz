import React from 'react'
import './landingPage.scss'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import {useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';

import { BsArrowRightCircle } from 'react-icons/bs'


function LandingPage() {
  const navigate = useNavigate()
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])


  return (
    // This will animate our page transitions
    <motion.div
     id='landingPage'
     initial={{x: -window.innerWidth, y: 0, opacity:0}}
     animate={{x:0, transition: {duration: .3}, y:0, opacity:1}}
     exit={{x: -window.innerWidth, transition: {duration: .3}, opacity:0}}
     >

        <Helmet>
          <title>Quiz</title>
          <meta name="theme-color" content="#FFCC01" />
        </Helmet>
        <div className="titleDiv">
            <h1>Quick Quiz</h1>
        </div>
        <main>
                <p>Get tested with questions from any category</p>
                <button onClick={()=>{navigate('/category')}}>Start Now <BsArrowRightCircle/></button>
        </main>
    </motion.div>
  )
}

export default LandingPage