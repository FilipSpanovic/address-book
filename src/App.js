import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Contacts from "./components/contacts/Contacts";
import Details from "./components/contacts/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/contacts/:id" component={Details} />

          <Route path="/contacts" exact component={Contacts} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
