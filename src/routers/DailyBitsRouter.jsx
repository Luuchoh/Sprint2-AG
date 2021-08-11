import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from "react-router-dom";

import Home from '../pages/Home';
import Question1 from '../pages/Question1';
import Question2 from '../pages/Question2';
import Profile from '../pages/Profile';
import Statitics from '../pages/Statitics';



const DailyBitsRouter = () => {
    return (
        <Router>
            <Switch>
                
                <Route exact path="/" component={Home}/>
                <Route exact path="/question1" component={Question1}/>
                <Route exact path="/home" component={Question2}/>
                <Route exact path="/Profile" component={Profile}/>
                <Route exact path="/estadisticas" component={Statitics}/>
            </Switch>
            <Redirect to="/"/>
        </Router>
    )
}

export default DailyBitsRouter
