import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom'



export const PrivateRouter = ({isAuthenticated,component: Component, ...options}) => {

    isAuthenticated = true
    return (
        <Route {...options} component={ (props) => (( isAuthenticated )? ( <Component { ...options } /> ): ( <Redirect to="/Login" /> ))}/>
    )

}
PrivateRouter.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}