import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../assets/img/logo-morado.png';
import estilo from '../style/estilo.css'

const ContenedorLogin = styled.div`
    background: black;
    height: 657px;
`;

const Imagen = styled.div`
    display: flex;
    justify-content: center;
`;

const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 320px;
    margin: 0px auto;
`;

const Register = () => {
    return (
        <ContenedorLogin>
            <Imagen>
                <img src={logo} alt='logo_daily' className="img-Login"/>
            </Imagen>
                <h1 className="title-login">Registrarse</h1>
            <Form> 
            
            <p className="p-login">Nombre</p>
                <input name="text" className="email-login" type="text" placeholder="Introduce tu nombre" required/>

                <p className="p-login">Correo electrónico</p>
                <input name="email" className="email-login" type="email" placeholder="Ingresa su correo electrónico" required/>

                <p className="p-login">Contraseña</p>
                <input type="password" className="email-login" name="password" placeholder="Introduce tu contraseña" required/>
                
                <Link to="/Login" className="Button-LR">Registrarse</Link>
            
            </Form>
        </ContenedorLogin>
    )
}

export default Register
