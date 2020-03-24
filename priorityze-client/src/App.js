import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import User from './pages/User';
import Welcome from './pages/Welcome';


function App() {
  return (
  	<Router>
  		<Route exact path="/"><Welcome /></Route>
			<Route path="/login"><Login /></Route>
			<Route path="/signup"><Signup /></Route>
			<Route path="/user"><User /></Route>
    </Router>
  );
}

export default App;
