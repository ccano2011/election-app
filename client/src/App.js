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
import ProgressBar from "./components/trackingbar/TrackingBar";

class App extends React.Component {

  state = {
    percent: 0
  };
  updateProgress = (field, val) => {
    this.setState({ [field]: val });
  };
  render() {

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
        </Switch>
        <div className="div">
          {/* <ProgressBar width={400} percent={this.state.percent} />
          <button onClick={() =>
            this.updateProgress("percent", this.state.percent + 0.2)
          }
          >
            More Progress
          </button> */}
        </div>
      </div>
    );
  }
}

export default App;
