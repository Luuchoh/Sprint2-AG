import React from 'react'
import { Link } from 'react-router-dom';
import '../style/style.css'

const ProfileComp = () => {
    return (
        <div>
        <div className="contenedor">
            <h3>Perfil</h3>
            <div className="perfil">
                <img src="/" alt="" />
                <h4>Francisco Javier</h4>
                <p>francisco.javier@gmail.com</p>
            </div>

            <div>
                <Link to="/Login"><strong>Cerrar sesión</strong></Link>
            </div>
        </div>
        </div>
    )
}

export default ProfileComp