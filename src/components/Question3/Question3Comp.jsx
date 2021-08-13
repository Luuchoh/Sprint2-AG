import React from 'react'
import { Link } from 'react-router-dom';
import  Button  from '../Button';
import ProgressBar from '../ProgressBar';
import styled from "styled-components";

const ContenedorLogin = styled.div`
    background: #16161A;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const QuestionTecnologias = styled.div`
    color: white;
    margin-left: -130px;
`;

const Header = styled.div`
    width: 90%;
`

const Question3Comp = () => {
    return (
        <ContenedorLogin>

            <Header><ProgressBar /></Header>
            
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
            <Link to="/Statitics"><Button></Button></Link>
        </ContenedorLogin>
    )
}

export default Question3Comp