import React from "react";

import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Login, Contacts, Details, Favorites, Update } from "pages";
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
