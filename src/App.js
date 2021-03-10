import './App.css';
import Body from './Components/Body/Body';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Body></Body>
        </Route>
        <Route path="/allTeam/:idTeam">
          <TeamDetails></TeamDetails>
        </Route>
        <Route path="*">
          <h1 className="text-center my-5">404 - Not Found!</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
