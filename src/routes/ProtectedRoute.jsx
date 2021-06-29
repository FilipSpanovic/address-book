import React from "react";
import { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../hoc";
import { logout, selectIsAuthenticated } from "../store/slices/authSlice";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const token = localStorage.getItem("X-token");

  if (!token) {
    dispatch(logout());
  }

  if (!isAuthenticated) {
    localStorage.removeItem("X-token");
  }

  const renderLayoutIfAuthenticated = (props) => {
    if (isAuthenticated && token) {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }
    return <Redirect to="/login" />;
  };

  const constructProtectedRoute = () => {
    return <Route {...rest} render={renderLayoutIfAuthenticated} />;
  };

  return <Fragment>{constructProtectedRoute()}</Fragment>;
};
