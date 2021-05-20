import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../hoc/Layout";
import { logout, selectIsAuthenticated } from "../store/slices/authSlice";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const token = localStorage.getItem("X-token");

  const dispatch = useDispatch();

  if (!token) {
    dispatch(logout());
  }

  if (!isAuthenticated) {
    localStorage.removeItem("X-token");
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && token ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/login" />
        )
      }
    ></Route>
  );
};
