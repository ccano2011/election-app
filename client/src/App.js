import React from "react";
import './App.css';
import Nav from './components/shared/Nav/Nav'
import RequestBallotScreen from "./screens/requestballot/RequestBallotScreen"
import { Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Route exact path="/request-ballot" component = {RequestBallotScreen}/>
    </div>
  );
}

export default App;
