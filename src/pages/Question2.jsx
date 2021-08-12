import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Question2Comp from '../components/Question2/Question2Comp';

import styled from "styled-components";

const Question2Div = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #16161A;
  color: #FFFFFE;
`;

const Question2 = () => {

    const [categoria, setCategoria] = useState('');

    useEffect(() => {

        const pregunta = async () =>{

            try {
                const { data } = await axios.get(
                    `http://dailybits.herokuapp.com/selecc`
                )
                setCategoria(data[0]);
            } catch (error) {
                console.error(error)
            }
        }
        pregunta();

    }, [])

    
    return (
        <Question2Div>
            <Question2Comp 
                data={categoria}
            />
        </Question2Div>
    )
}

export default Question2
