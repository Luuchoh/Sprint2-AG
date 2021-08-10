import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from "react-router-dom";

import Home from '../pages/Home';
import Question2 from '../pages/Question2';
import Profile from '../pages/Profile';
import Statitics from '../pages/Statitics';



const DailyBitsRouter = () => {
    return (
        <Router>
            <Switch>
                
                <Route exact={true} path="/" component={Question2}/>
                <Route exact={true} path="/question5" component={Question2}/>
                <Route exact={true} path="/home" component={Home}/>
                <Route exact={true} path="/Profile" component={Profile}/>
                <Route exact={true} path="/Statitics" component={Statitics}/>
            </Switch>
            <Redirect to="/"/>
        </Router>
    )
}

export default DailyBitsRouter
