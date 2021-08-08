import React from 'react'
import perfil from '../assets/img/Ellipse 3.png';

const Profile = () => {
    return (
        <div className="contenedor">
            <h3>Perfil</h3>
            <div className="perfil">
                <img src={perfil} alt="" />
                <h4>Francisco Javier</h4>
                <p>francisco.javier@gmail.com</p>
            </div>

            <div>
                <p><strong>Cerrar sesión</strong></p>
            </div>
        </div>
    )
}

export default Profile
