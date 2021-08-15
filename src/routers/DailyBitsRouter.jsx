import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";
import Profile from "../pages/Profile";
import Statitics from "../pages/Statitics";

import { inicio } from "../pages/inicio";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Question3 from "../pages/Question3";

import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const DailyBitsRouter = () => {
  const [isLoggedIn, setisLoggedIn] = useState();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, [isLoggedIn]);
  return (
    <Router>
      <Switch>
        <PublicRouter
          exact
          path="/"
          isAuthenticated={isLoggedIn}
          component={inicio}
        />
        <PublicRouter
          exact
          path="/Login"
          isAuthenticated={isLoggedIn}
          component={Login}
        />
        <PublicRouter
          exact
          path="/Register"
          isAuthenticated={isLoggedIn}
          component={Register}
        />

        <PrivateRouter
          exact
          path="/Home"
          isAuthenticated={isLoggedIn}
          component={Home}
        />
        <PrivateRouter
          exact
          path="/Question1"
          isAuthenticated={isLoggedIn}
          component={Question1}
        />
        <PrivateRouter
          exact
          path="/Question2"
          isAuthenticated={isLoggedIn}
          component={Question2}
        />
        <PrivateRouter
          exact
          path="/Question3"
          isAuthenticated={isLoggedIn}
          component={Question3}
        />

        <PrivateRouter
          exact
          path="/Statitics"
          isAuthenticated={isLoggedIn}
          component={Statitics}
        />
        <PrivateRouter
          exact
          path="/profile"
          isAuthenticated={isLoggedIn}
          component={Profile}
        />
      </Switch>
      <Redirect to="/" />
    </Router>
  );
};

export default DailyBitsRouter;
