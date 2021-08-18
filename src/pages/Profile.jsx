import React, { Fragment } from 'react'
import NavBarInicio from '../components/Navbars/NavBarInicio';
import ProfileComp from '../components/ProfileComp';

const Profile = () => {
    return (
        <Fragment>
        <ProfileComp />
        <NavBarInicio page={'profile'}/>
        </Fragment>
    )
}

export default Profile