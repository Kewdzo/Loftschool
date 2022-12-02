import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = connect((state) => ({
  isLoggedIn: state.serverAPI.isLoggedIn,
}))(({ component: Component, isLoggedIn,...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
  ));
export default PrivateRoute;