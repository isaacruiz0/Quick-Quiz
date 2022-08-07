import React from 'react'
import './category.scss'
import {useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';

function Category() {
  const navigate = useNavigate()

  const categories = [{category: 'General Knowledge'},{category: 'Geography'},{category: 'History'},{category: 'Science'},{category: 'Music'},{category: 'Film'}]
  return (
    <motion.div
     id='category'  
     initial={{x: -window.innerWidth}}
     animate={{opacity:1, width: "100%", x:0, transition: {duration: .2}}}
     exit={{x: -window.innerWidth, transition: {duration: .2}}}
    >
      <div className="titleDiv">
        <h1 onClick={()=>{navigate('/')}}>Choose Category</h1>
      </div>
      <main>
        {categories.map((categoryObject, key)=>{
          return (
            <div className="categoryChoice">
              <h3>{categoryObject.category}</h3>
            </div>
          )
        })}
      </main>

    </motion.div>
  )
}

export default Category