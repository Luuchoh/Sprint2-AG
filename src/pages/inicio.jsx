import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../assets/img/logo.png';

const Inicio = styled.div`
    background: #6B47DC;
    height: 100vh;
    display: flex;
    justify-content: center; 
    align-items:center;
`;


export const inicio = () => {
    return (
            <Fragment>
                <Inicio>
                    <Link to="/Home">
                        <img src={logo} alt="logo_daily"/>
                    </Link>
                </Inicio>
            </Fragment>
    )
}
