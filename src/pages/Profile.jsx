import React, { Fragment } from 'react'
import NavBarInicio from '../components/Navbars/NavBarInicio';
import ProfileComp from '../components/ProfileComp';

const Profile = () => {
    return (
        <Fragment>
        <ProfileComp />
        <NavBarInicio color={'profile'}/>
        </Fragment>
    )
}

export default Profile