import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../assets/img/logo.png';
import '../style/estilo.css'

const ContenedorInicio = styled.div`
    background: #6B47DC;
    height: 657px;
`;

const Image = styled.div`
    margin-top: 300px;  
    transition-duration: 8s;

`;

const Inicio = styled.div`
    display: flex;
    justify-content: center; 
`;

export const inicio = () => {
    return (
            <ContenedorInicio>
                <Inicio>
                <Link to="/Login">
                    <Image>
                        <img src={logo} alt="logo_daily"/>
                    </Image>
                </Link>
                </Inicio>
            </ContenedorInicio>
    )
}
