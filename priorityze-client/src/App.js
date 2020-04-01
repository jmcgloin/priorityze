import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import User from './pages/User';
import Welcome from './pages/Welcome';
import Header from './containers/Header';
import AuthRoute from './components/AuthRoute'


function App() {
  return (
    <div className="main-content">
    	<Router>
    		<Route path="/" component={ Header } />
    		<Switch>
  	  		<Route exact path="/" component={ Welcome } />
  				<Route path="/login" component={ Login } />
  				<Route path="/signup" component={ Signup } />
          <AuthRoute path="/user" component={ User } />
          <Route component={() =>  "404 Not Found" } />
  			</Switch>
      </Router>
    </div>
  );
}

export default App;
