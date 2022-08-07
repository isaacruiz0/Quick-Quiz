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
     initial={{x: -window.innerWidth, y: 0, opacity:0}}
     animate={{x:0, transition: {duration: .3}, y:0, opacity:1}}
     exit={{x: -window.innerWidth, transition: {duration: .3}, opacity:0}}
    >
      <div className="titleDiv">
        <h1 onClick={()=>{navigate('/')}}>Choose Category</h1>
      </div>
      <main>
        {/* I am mapping through the categories array to make a div for each category and its icon */}
        {categories.map((categoryObject, index)=>{
          const Icon = categoryObject.icon
          const categoryName = categoryObject.category
          return (
            <div className="categoryChoice" key={index} onClick={()=>{navigate('/category/difficulty',{state:{name: categoryName}})}}>
              <Icon className='categoryIcons'/>
              <h3>{categoryName}</h3>
            </div>
          )
        })}
      </main>

    </motion.div>
  )
}

export default Category