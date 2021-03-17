import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import RegisterVolunteer from './Components/RegisterVolunteer/RegisterVolunteer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import EventTasks from './Components/EventTasks/EventTasks';

export const userContext = createContext();

function App() {

const [loggedInUser,setLoggedInUser]=useState({})

  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
        <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/events">
            <EventTasks></EventTasks>
          </Route>
          <PrivateRoute path="/:id">
        <RegisterVolunteer></RegisterVolunteer>
          </PrivateRoute>
          <Route exact path="/">
          <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
