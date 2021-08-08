import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Statitics from '../pages/Statitics';
import Navbar from '../pages/Navbar';

const DailyBitsRouter = () => {
    return (
        <BrowserRouter>
            <div>
            <Navbar />
            <Switch>
                <Route exact path="/home" component= {Home} />
                <Route exact path="/estadisticas" component= {Statitics} />
                <Route exact path="/Perfil" component= {Profile} />
            </Switch>
            </div>
        </BrowserRouter>  
    )
}

export default DailyBitsRouter
