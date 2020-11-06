import React from "react";
import './App.css';
import Home from '../src/screens/home/Home'
import Nav from './components/shared/Nav/Nav'
import RequestBallotScreen from "./screens/requestballot/RequestBallotScreen"
import { Route, Switch } from "react-router-dom"
import DisclaimerScreen from "./screens/disclaimer/DisclaimerScreen";
import RequestConfirmed from "./screens/requestconfirmed/RequestConfirmedScreen"
import AdminScreen from "./screens/admin/AdminScreen"
import EditBallotScreen from "./screens/requestballot/EditBallotScreen"
import BallotStatusScreen from "./screens/ballotstatus/BallotStatusScreen";
import DeleteAccount from './screens/DeleteAccount/deleteAccount'
import AccountDeleted from './screens/AccountDeleted/accountDeleted'

function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/status' component={BallotStatusScreen} />
        <Route path='/disclaimer' component={DisclaimerScreen} />
        <Route path="/request-ballot" component={RequestBallotScreen} />
        <Route path="/admin" component={AdminScreen} />
        <Route path="/edit-ballot/:id" component={EditBallotScreen} />
        <Route path="/request-confirmed" component={RequestConfirmed} />
        <Route path="/delete-account" component={DeleteAccount}/>
        <Route path="/account-deleted" component={AccountDeleted}/>
      </Switch>
    </div>
  );
}

export default App;
