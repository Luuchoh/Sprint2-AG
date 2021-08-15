import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Contenedor = styled.div`
    width: 100%;
    height: 88vh;
    background: black;
    color: white;
    `
    
const Perfil = styled.div`
    margin-top: 10%;
    text-align: center;
    display: grid;
    justify-content:center;
    `

const H3 = styled.h3`
margin: 0 auto;
    text-align: center;
    `

const ProfileComp = () => {
    return (
        
        <Contenedor>
            <H3>Perfil</H3>
            <Perfil>
                <img src="/" alt="" />
                <h4>Francisco Javier</h4>
                <p>francisco.javier@gmail.com</p>
                
                <Link to="/Login"><strong>Cerrar sesión</strong></Link>
            </Perfil>

            <div>
                
            </div>
        </Contenedor>
    )
}

export default ProfileComp