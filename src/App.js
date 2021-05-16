
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
