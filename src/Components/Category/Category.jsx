import React from 'react'
import './category.scss'
import {useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdMenuBook } from "react-icons/md";
import { FaMountain } from 'react-icons/fa';
import { BsClockHistory } from 'react-icons/bs';
import { MdOutlineScience } from 'react-icons/md';
import { BsMusicNoteList } from 'react-icons/bs';
import { FaFilm } from 'react-icons/fa';

function Category() {
  const navigate = useNavigate()

  const categories = [
    {category: 'General Knowledge', icon: MdMenuBook},
    {category: 'Geography', icon: FaMountain},
    {category: 'History', icon: BsClockHistory},
    {category: 'Science', icon: MdOutlineScience},
    {category: 'Music', icon: BsMusicNoteList},
    {category: 'Film and Tv', icon: FaFilm}]
  return (
    <motion.div
     id='category'  
     initial={{x: -window.innerWidth, y: 0}}
     animate={{x:0, transition: {duration: .3}, y:0}}
     exit={{x: -window.innerWidth, transition: {duration: .3}}}
    >
      <div className="titleDiv">
        <h1 onClick={()=>{navigate('/')}}>Choose Category</h1>
      </div>
      <main>

        {categories.map((categoryObject, key)=>{
          const Icon = categoryObject.icon

          return (
            <div className="categoryChoice">
              <Icon className='categoryIcons'/>
              <h3>{categoryObject.category}</h3>
            </div>
          )
        })}
      </main>

    </motion.div>
  )
}

export default Category