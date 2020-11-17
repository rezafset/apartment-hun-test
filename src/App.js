import React, { createContext, useState } from "react";
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
import Login from "./components/Authentication/Login/Login";
import ApartmentDetails from "./components/ApartmentDetails/ApartmentDetails";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/login">
            <Login></Login>
          </PrivateRoute>
          <PrivateRoute path="/apartmentDetails/:id">
            <ApartmentDetails></ApartmentDetails>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/booking">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/dashboard/addHouse">
            <AddHouse></AddHouse>
          </Route>
          <Route path="/dashboard/myRent">
            <MyRent></MyRent>
          </Route>
          <Route path="/dashboard/makeAmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
