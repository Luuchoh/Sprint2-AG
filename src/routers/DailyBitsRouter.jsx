import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Statitics from '../pages/Statitics';
import Navbar from '../pages/Navbar';

import {inicio}  from '../pages/inicio';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Question3 from '../pages/Question3';

const DailyBitsRouter = () => {
    return (
        <BrowserRouter>
            <div>
            
            <Switch>
                <Route exact path="/" component={inicio}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Register" component={Register}/>
                <Route exact path="/Question3" component={Question3}/>

                <Route exact path="/home" component= {Home} />
                <Route exact path="/estadisticas" component= {Statitics} />
                <Route exact path="/Perfil" component= {Profile} />
            </Switch>
            </div>
        </BrowserRouter>  
    )
}

export default DailyBitsRouter
