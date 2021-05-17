import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Contacts from "./components/contacts/Contacts";
import Details from "./components/contacts/Details";
import Update from "./components/contacts/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/contacts/:id" exact component={Details} />
          <Route path="/contacts/update/:id" exact component={Update} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
