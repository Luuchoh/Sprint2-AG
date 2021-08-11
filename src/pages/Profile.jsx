import React from 'react'
import styled from 'styled-components'

const Perfil = styled.div`
    width:100%;
    height: 100vh;
    background: black;
    color:white;
`

const Profile = () => {
    return (
        <Perfil>
            <h3>Perfil</h3>
            <div className="perfil">
                <img src="" alt="" />
                <h4>Francisco Javier</h4>
                <p>francisco.javier@gmail.com</p>
            </div>

            <div>
                <p><strong>Cerrar sesión</strong></p>
            </div>
        </Perfil>
    )
}

export default Profile
