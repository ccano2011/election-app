import React, { useState, useMemo, useEffect } from "react";
import './App.css';
import Home from '../src/screens/home/Home'
// import Nav from './components/shared/Nav/Nav'
import RequestBallotScreen from "./screens/requestballot/RequestBallotScreen"
import { BrowserRouter as Router, Route } from "react-router-dom"
import DisclaimerScreen from "./screens/disclaimer/DisclaimerScreen";
import RequestConfirmed from "./screens/requestconfirmed/RequestConfirmedScreen"
import AdminScreen from "./screens/admin/AdminScreen"
import EditBallotScreen from "./screens/requestballot/EditBallotScreen"
import BallotStatusScreen from "./screens/ballotstatus/BallotStatusScreen";
import CreateAccountScreen from "./screens/createaccount/createAccountScreen";
import LogIn from './screens/login/LogIn'
import CreateUsers from "./components/createuser/CreateUser"
import AccountLandingPage from "./screens/AccountLandingPage/AccountLandingPage";
import DeleteAccount from './screens/DeleteAccount/deleteAccount'
import AccountDeleted from './screens/AccountDeleted/accountDeleted'

function App() {
  // const [value, setValue] = useState('hello from context created in "CreateUsers.jsx" and imported here in app.js and "Provided" to other components')
  const [value, setValue] = useState(null)
  //This useMemo code is lifted from a YouTube tutorial: https://youtu.be/lhMKvyLRWo0?t=407
  //From what I understand, useMemo will memorize the function and variable here for use in other components without needing to create objects 
  //everytime to pass in the value in the components. 
  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue])

  useEffect(() => {
    const fetchUser = async () => {
      if (value === null) {
        const user = localStorage.getItem("user")
        setValue(JSON.parse(user))
      }
      return
    }
    fetchUser()
  }, [])
  console.log(value)

  //check if context is available with components and pass local storage to context
  return (
    // react router dom router wraps the routes; removed the switch
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Route exact path='/' component={LogIn} />
        <Route path='/dashboard' component={Home} />
        <Route path='/status' component={BallotStatusScreen} />
        <Route path='/disclaimer' component={DisclaimerScreen} />
        <Route path="/admin" component={AdminScreen} />
        <Route path="/edit-ballot/:id" component={EditBallotScreen} />
        <Route path="/request-confirmed" component={RequestConfirmed} />
        <Route path="/login" component={LogIn} />
        <CreateUsers.Provider value={providerValue}>
          {value && <Route path="/create-account" component={CreateAccountScreen} />}
          {value && <Route path="/request-ballot" component={RequestBallotScreen} />}
          {value && <Route path="/account-landing-page" component={AccountLandingPage} />}
          {value && <Route path="/delete-account" component={DeleteAccount} />}
          {value && <Route path="/account-deleted" component={AccountDeleted} />}
        </CreateUsers.Provider>
      </div>
    </Router>
  );
}

export default App;