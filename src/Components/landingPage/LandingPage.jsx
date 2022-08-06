import React from 'react'
import './landingPage.scss'
import {useNavigate} from 'react-router-dom';

import { BsArrowRightCircle } from 'react-icons/bs'


function LandingPage() {
  return (
    <div id='landingPage'>
        <div className="titleDiv">
            <h1>Quick Quiz</h1>
        </div>
        <main>
                <p>Get tested with questions from any category</p>
                <button>Start Now <BsArrowRightCircle/></button>
        </main>
    </div>
  )
}

export default LandingPage