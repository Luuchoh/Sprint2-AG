
import { BrowserRouter,Switch,Route , Redirect} from 'react-router-dom'
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Statitics from '../pages/Statitics';
//import Navbar from '../pages/Navbar';

import {inicio}  from '../pages/inicio';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Question3 from '../pages/Question3';

import Question1 from '../pages/Question1';
import Question2 from '../pages/Question2';
import {PrivateRouter}  from './PrivateRouter';


const DailyBitsRouter = () => {
    return (
        <BrowserRouter>
            
            <Switch>
                <Route exact path="/" component={inicio}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Register" component={Register}/>
 
                <PrivateRouter exact path="/Home" component= {Home} />
                <PrivateRouter exact path="/Question1" component={()=>
                <Question1/>}/>
                <PrivateRouter exact path="/Question2" component={Question2}/>
                <PrivateRouter exact path="/Question3" component={Question3}/>
                

                
                <PrivateRouter exact path="/Statitics" component= {Statitics} />
                <PrivateRouter exact path="/profile" component= {Profile} />
            </Switch>
            {/*<Redirect to="/"/>*/}
        </BrowserRouter>  

    )
}

export default DailyBitsRouter
