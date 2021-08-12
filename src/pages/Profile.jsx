import React from 'react'
<<<<<<< HEAD
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
=======
import ProfileComp from '../components/ProfileComp';

const Profile = () => {
    return (
        <ProfileComp></ProfileComp>
>>>>>>> 8de5ff0c60dbb8aa62fd70810d86d1b1261be940
    )
}

export default Profile