import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../apiAxios/api';

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
const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius:100%;
    text-align: center;
    margin: 0 auto;
`

const ProfileComp = () => {

    const [user,setUser] = useState([]);

    useEffect(() =>{
        getUsers();
    }, [])

    const getUsers = async() =>{
    const resp = await api.get('https://dailybits.herokuapp.com/users');
    setUser (resp.data[1]);
    }

    return (
        
        <Contenedor>
        <Fragment>
            <H3>Perfil</H3>
            <Perfil>
                <Img src={user.avatar} alt="" />
                <h4>{user.name} {user.lastName}</h4>
                <p>{user.email}</p>
                
                <Link to="/Login"><strong>Cerrar sesión</strong></Link>
            </Perfil>
            </Fragment>  
        </Contenedor>
    )
}

export default ProfileComp