import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import Question1 from "../pages/Question1";
import Profile from "../pages/Profile";
import Statitics from "../pages/Statitics";

import { inicio } from "../pages/inicio";
import CssComp from "../components/category/CssComp";
import JsComp from "../components/category/JsComp";
import MongoComp from '../components/category/MongoComp';
import JavaComp from '../components/category/JavaComp';


const DailyBitsRouter = () => {
  
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={inicio}
        />

        <Route
          exact
          path="/Home"
          component={Home}
        />
        <Route
          exact
          path="/Question1"
          component={Question1}
        />
        <Route
          exact
          path="/QuestionCss"
          component={CssComp}
        />
        <Route
          exact
          path="/QuestionJs"
          component={JsComp}
        />
        <Route
          exact
          path="/QuestionJava"
          component={JavaComp}
        />
        <Route
          exact
          path="/QuestionMongo"
          component={MongoComp}
        />

        <Route
          exact
          path="/Statitics"
          component={Statitics}
        />
        <Route
          exact
          path="/profile"
          component={Profile}
        />
      </Switch>
      <Redirect to="/" />
    </Router>
  );
};

export default DailyBitsRouter;
