import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import User from './pages/User';
import Welcome from './pages/Welcome';
import Header from './containers/Header';


function App() {
  return (
  	<Router>
  		<Header />
  		<Switch>
	  		<Route exact path="/" component={Welcome} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
				<Route path="/user" component={User} />
			</Switch>
    </Router>
  );
}

export default App;
