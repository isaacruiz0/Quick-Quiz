import React from 'react'
import './landingPage.scss'
import {useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';


import { BsArrowRightCircle } from 'react-icons/bs'


function LandingPage() {
  const navigate = useNavigate()

  return (
    // This will animate our page transitions
    <motion.div
     id='landingPage'
     initial={{x: -window.innerWidth}}
     animate={{opacity:1, width: "100%", x:0, transition: {duration: .2}}}
     exit={{x: -window.innerWidth, transition: {duration: .2}}}
     >
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