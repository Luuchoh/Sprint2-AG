import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export const PublicRouter = ({
  isAuthenticated,
  component: Component,
  ...options
}) => {
  return (
    <Route
      {...options}
      component={(props) =>
        isAuthenticated ? <Redirect to="/home" />: <Component {...props} /> 
      }
    />
  );
};
PublicRouter.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};