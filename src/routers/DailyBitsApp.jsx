import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from "react-router-dom";

import Home from '../pages/Home';
import Question2 from '../pages/Question2';


const DailyBitsApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/" component={Question2}/>
                <Route exact={true} path="/question5" component={Question2}/>
                <Route exact={true} path="/home" component={Home}/>
            </Switch>
            <Redirect to="/"/>
        </Router>
    )
}

export default DailyBitsApp
