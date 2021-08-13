import React from 'react'
import { useParams } from 'react-router';
import Question1Comp from '../components/Question1/Question1Comp';
import '../style/style.css'

const Question1 = () => {
    
    const id = useParams();

    return (

        
        <Question1Comp id='1'></Question1Comp>
        

    )
}

export default Question1
