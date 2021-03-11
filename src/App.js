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
import NotFound from './Components/NotFound/NotFound';

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
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
