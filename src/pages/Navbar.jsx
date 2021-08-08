import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="contenedorNav">
            <nav className="navegador">
                <div className="nav1"><Link to="/home">Home</Link></div>
                
                <div className="nav2"><Link to="/estadisticas">Estadisticas</Link></div>

                <div className="nav3"><Link to="/perfil">Perfil</Link></div>
            </nav>
        </div>
    )
}

export default Navbar
