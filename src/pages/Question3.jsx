import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import estilo from '../style/estilo.css'
import { Button } from './Button';
const ContenedorLogin = styled.div`
    background: #16161A;
    height: 800px;
    align-items: center;
    display: flex;
    flex-direction: column
`;

const QuestionTecnologias = styled.div`
color: white;
margin-left: -125px;
`;

const Question3 = () => {
    return (
        <ContenedorLogin>

            <p className="title-Pregunta">¿Qué tecnologías pertenece al MEVN Stack?</p>
            <QuestionTecnologias>

                <ul className="ul-Question5Html">
                    <li>
                        <p>Angular</p>
                    </li>
                    <li>
                        <p>Vue.js</p>
                    </li>
                </ul>
                <ul className="ul-Question5Html">
                    <li>
                        <p>Window</p>
                    </li>
                    <li>
                        <p>Kotlin</p>
                    </li>
                </ul>

            </QuestionTecnologias>
            <Button/>
        </ContenedorLogin>
    )
}

export default Question3
