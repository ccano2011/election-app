import React from "react";
import './App.css';
import Home from '../src/screens/home/Home'
import Nav from './components/shared/Nav/Nav'
import RequestBallotScreen from "./screens/requestballot/RequestBallotScreen"
import { Route, Switch } from "react-router-dom"
import DisclaimerScreen from "./screens/disclaimer/DisclaimerScreen";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/disclaimer' component={DisclaimerScreen} />
        <Route path="/request-ballot" component={RequestBallotScreen} />
      </Switch>
    </div>
  );
}

export default App;
