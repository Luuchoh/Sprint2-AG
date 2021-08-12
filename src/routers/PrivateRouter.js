import React from 'react'
import { Redirect, Route } from 'react-router-dom'



export const PrivateRouter = ({component: Component, ...options}) => {
    let Auth;
    Auth = null
    Auth = true 
    return (
        <Route {...options}> {Auth ? <Component /> : <Redirect to="/Login" />}</Route>
    )

}
