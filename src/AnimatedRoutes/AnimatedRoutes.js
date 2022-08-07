import React from 'react'
import { Routes, Route, useLocation} from 'react-router-dom';
// Pages
import LandingPage from '../Components/LandingPage/LandingPage'
import Category from '../Components/Category/Category'

import {AnimatePresence} from "framer-motion"

function AnimatedRoutes() {
    // We must declare the location hook outside of the router component
    const location = useLocation()
    // Motion divs must be within the animate presence component to be animated
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<LandingPage />} />
            <Route path='/Category' element={<Category />} />
        </Routes>
    </AnimatePresence>
    )
}

export default AnimatedRoutes