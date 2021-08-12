<<<<<<< HEAD
import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
    } from "react-router-dom";

=======

import { BrowserRouter,Switch,Route , Redirect} from 'react-router-dom'
>>>>>>> 8de5ff0c60dbb8aa62fd70810d86d1b1261be940
import Home from '../pages/Home';
import Question1 from '../pages/Question1';
import Question2 from '../pages/Question2';
import Profile from '../pages/Profile';
import Statitics from '../pages/Statitics';
<<<<<<< HEAD

=======
//import Navbar from '../pages/Navbar';

import {inicio}  from '../pages/inicio';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Question3 from '../pages/Question3';

import Question1 from '../pages/Question1';
import Question2 from '../pages/Question2';
import {PrivateRouter}  from './PrivateRouter';
>>>>>>> 8de5ff0c60dbb8aa62fd70810d86d1b1261be940


const DailyBitsRouter = () => {
    return (
<<<<<<< HEAD
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
=======
        <BrowserRouter>
            
            <Switch>
                <Route exact={true} path="/" component={inicio}/>
                <Route exact={true} path="/Login" component={Login}/>
                <Route exact={true} path="/Register" component={Register}/>
 
                <PrivateRouter exact path="/Home" component= {Home} />
                <PrivateRouter exact path="/Question1" component={Question1}/>
                <PrivateRouter exact path="/Question2" component={Question2}/>
                <PrivateRouter exact path="/Question3" component={Question3}/>
                

                
                <PrivateRouter exact path="/Statitics" component= {Statitics} />
                <PrivateRouter exact path="/profile" component= {Profile} />
            </Switch>
            {/*<Redirect to="/"/>*/}
        </BrowserRouter>  

>>>>>>> 8de5ff0c60dbb8aa62fd70810d86d1b1261be940
    )
}

export default DailyBitsRouter
