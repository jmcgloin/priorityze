import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
	return (
		<div className="flex flex-column flex-vcenter full-height welcome-content">
			<div className="app-title flex flex-column flex-vcenter">
				<h1>Priorityze Your Goals</h1>
				<h2>We'll help you decide what to do next</h2>
			</div>
			<div className="flex flex-row flex-between welcome-buttons">
				<Link to="/signup" ><button className="big-button rounded" type="button">Create an Account</button></Link>
				<Link to="/login" ><button className="big-button rounded" type="button">Login</button></Link>
			</div>
		</div>
	)
}

export default Welcome

