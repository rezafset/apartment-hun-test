import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddHouse from "./components/Dashboard/AddHouse/AddHouse";
import MyRent from "./components/Dashboard/MyRent/MyRent";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard/booking">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/dashboard/addHouse">
          <AddHouse></AddHouse>
        </Route>
        <Route path="/dashboard/myRent">
          <MyRent></MyRent>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
