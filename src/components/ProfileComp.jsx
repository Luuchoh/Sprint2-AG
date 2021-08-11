import React from 'react'
import { Link } from 'react-router-dom';
import perfil from '../assets/img/Ellipse 3.png';
import '../style/style.css'
import NavBarInicio from "../components/Navbars/NavBarInicio";

const ProfileComp = () => {
    return (
        <div>
        <div className="contenedor">
            <h3>Perfil</h3>
            <div className="perfil">
                <img src={perfil} alt="" />
                <h4>Francisco Javier</h4>
                <p>francisco.javier@gmail.com</p>
            </div>

            <div>
                <Link to="/Login"><strong>Cerrar sesión</strong></Link>
            </div>
        </div>
        <NavBarInicio></NavBarInicio>
        </div>
    )
}

export default ProfileComp