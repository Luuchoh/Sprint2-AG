import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Link to="/Question3">Pregunta</Link>
        </div>
    )
}

export default Home
