import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from "react-router-dom";

import Home from '../pages/Home';


const DailyBitsApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/home" component={Home}/>
                <Route exact={true} path="/" component={Home}/>
            </Switch>
            <Redirect to="/"/>
        </Router>
    )
}

export default DailyBitsApp
