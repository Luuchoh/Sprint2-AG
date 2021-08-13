import React  from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../assets/img/logo-morado.png';
import '../style/estilo.css'
import { useForm } from '../hooks/useForm';

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


const RegisterComp = () => {
    const [values , handleInputChange] = useForm({
        nombre :'',
        correo : '',
        pass : ''
    })

    const {nombre , correo, pass} = values

    const ver = localStorage.setItem('value', JSON.stringify(values))|| [];
    console.log(ver);
    
    
    return (
        <ContenedorLogin>
            
            <Imagen>
                <img src={logo} alt='logo_daily' className="img-Login"/>
            </Imagen>
                <h1 className="title-login">Registrarte</h1>
            <Form> 
            <p className="p-login">Nombre</p>

                <input name="nombre" className="email-login" type="text" value={nombre} placeholder="Introduce tu nombre"   onChange={handleInputChange}/>

                <p className="p-login">Correo electrónico</p>
                <input name="correo" className="email-login" type="email" value={correo} placeholder="Ingresa su correo electrónico" onChange={handleInputChange}/>

                <p className="p-login">Contraseña</p>
                <input name="pass" type="password" className="email-login" value={pass} placeholder="Introduce tu contraseña" onChange={handleInputChange}/>
                
                <Link className="Button-LR">Registrar</Link>
            
            </Form>
        </ContenedorLogin>
    )
}

export default RegisterComp;
