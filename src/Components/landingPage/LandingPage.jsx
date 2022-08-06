import React from 'react'
import './landingPage.scss'



function LandingPage() {
  return (
    <div id='landingPage'>
        <div className="titleDiv">
            <h1>Quick Quiz</h1>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#006CB7" fill-opacity="1" d="M0,64L60,58.7C120,53,240,43,360,85.3C480,128,600,224,720,234.7C840,245,960,171,1080,160C1200,149,1320,203,1380,229.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
        <main>

                <p>Get tested with questions from any category</p>
                <button>Start Now</button>
                
        </main>
    </div>
  )
}

export default LandingPage