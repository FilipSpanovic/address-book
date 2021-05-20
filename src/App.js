import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Contacts from "./components/contacts/Contacts";
import Details from "./components/contact-details/Details";
import Favorites from "./components/contact-favorites/Favorites";
import Update from "./components/contact-update/Update";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
