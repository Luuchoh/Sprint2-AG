import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../assets/img/logo-morado.png';
import google from '../assets/img/icon-google.png';
import '../style/estilo.css'

const ContenedorLogin = styled.div`
    background: black;
    height: auto;
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



const LoginComp = () => {
    return (
        <ContenedorLogin>
            <Imagen>
                <Link to="/"><img src={logo} alt='logo_daily' className="img-Login"/></Link>
            </Imagen>
                <h1 className="title-login">Iniciar Sesión</h1>
            <Form>
                
                <Link className="enlace-Login" to="/Home">
                    <img src={google}/>
                    Continuar con Google
                </Link>
                <hr id="hr-login"></hr>
                
                <p className="p-login">Correo electrónico</p>
                <input name="email" className="email-login" type="email" placeholder="Ingresa su correo electrónico" required/>
                
                <p className="p-login">Contraseña</p>
                <input name="email" className="pass-login" type="email" placeholder="Ingresa su correo electrónico" required/>

                <Link to="/Home" className="Button-LR">Iniciar sesión</Link>
                
                <Link className="enlace-pass">¿Se te olvidó tu contraseña?</Link>
                <p className="p-enlace">¿Aún no tienes cuenta? <Link className="enlace-inscribirse" to="/Register">Inscribirse</Link></p>
                
                
            </Form>
        </ContenedorLogin>
    )
}

export default LoginComp;
