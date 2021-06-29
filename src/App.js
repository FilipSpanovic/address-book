import React from "react";

import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./pages/login/Login";
import Contacts from "./pages/contacts/Contacts";
import Details from "./pages/contact-details/Details";
import Favorites from "./pages/contact-favorites/Favorites";
import Update from "./pages/contact-update/Update";
import { ProtectedRoute } from "./routes/ProtectedRoute";

import { selectIsAuthenticated } from "./store/slices/authSlice";

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/contacts" exact component={Contacts} />
          <ProtectedRoute
            path="/contacts/favorites"
            exact
            component={Favorites}
          />
          <ProtectedRoute path="/contacts/:id" exact component={Details} />
          <ProtectedRoute
            path="/contacts/update/:id"
            exact
            component={Update}
          />
          <Route
            path=""
            render={() => {
              return isAuthenticated ? (
                <Redirect to="/contacts" />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
