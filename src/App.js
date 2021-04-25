import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
