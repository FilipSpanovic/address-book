import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/Login";
import Contacts from "./components/contacts/Contacts";
import Details from "./components/contact-details/Details";
import Favorites from "./components/contact-favorites/Favorites";
import Update from "./components/contact-update/Update";
import Layout from "./hoc/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/contacts/favorites" exact component={Favorites} />
            <Route path="/contacts/:id" exact component={Details} />
            <Route path="/contacts/update/:id" exact component={Update} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
