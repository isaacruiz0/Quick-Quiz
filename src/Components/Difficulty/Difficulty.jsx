import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';

function Difficulty() {
    const location = useLocation()
    const categoryName = location.state?.name
    const paramName = categoryName?.toLowerCase().replace(/ /g,"_");
    return (
    <div>
        <h1>{paramName}</h1>
    </div>
    )
}

export default Difficulty