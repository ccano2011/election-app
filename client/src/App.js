import React from "react";
import './App.css';
import Home from '../src/screens/home/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import RequestBallotScreen from "./screens/requestballot/RequestBallotScreen"
import { Switch } from "react-router-dom"
import DisclaimerScreen from "./screens/disclaimer/DisclaimerScreen";
import RequestConfirmed from "./screens/requestconfirmed/RequestConfirmedScreen"
import AdminScreen from "./screens/admin/AdminScreen"
import EditBallotScreen from "./screens/requestballot/EditBallotScreen"
import BallotStatusScreen from "./screens/ballotstatus/BallotStatusScreen";
import CreateAccountScreen from "./screens/createaccount/createAccountScreen";
import LogIn from './screens/login/LogIn'
import AccountLandingPage from "./screens/AccountLandingPage/AccountLandingPage";
import DeleteAccount from './screens/DeleteAccount/deleteAccount'
import AccountDeleted from './screens/AccountDeleted/accountDeleted'

function App() {
  
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LogIn} />
        <Route path='/dashboard' component={Home} />
        <Route path='/status' component={BallotStatusScreen} />
        <Route path='/disclaimer' component={DisclaimerScreen} />
        <Route path="/request-ballot" component={RequestBallotScreen} />
        <Route path="/admin" component={AdminScreen} />
        <Route path="/edit-ballot/:id" component={EditBallotScreen} />
        <Route path="/request-confirmed" component={RequestConfirmed} />
        <Route path="/create-account" component={CreateAccountScreen} />
        <Route path="/login" component={LogIn} />
        <Route path="/account-landing-page" component={AccountLandingPage} />
        <Route path="/delete-account" component={DeleteAccount} />
        <Route path="/account-deleted" component={AccountDeleted} />
          
      </Switch>
        </div>
        </Router>
  );
}

export default App;