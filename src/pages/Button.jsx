import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import estilo from '../style/estilo.css'

const Boton = styled.div`
margin-top: 7px;
margin-bottom: 10px;
width: 328px;
height: 45px;
background: #D4CAF3;
border: 0px;
border-radius: 16px;
color: white;
display: flex;
font-weight: 500;
align-items: center;
justify-content: center;
}
`;

export const Button = () => {
    return (

            <Boton><Link class="container__input--button">Comprobar</Link></Boton>

    )
}
