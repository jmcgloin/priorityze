import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
	return (
		<div className="flex flex-column flex-vcenter full-height">
			<h1 className="app-title">Priorityze Your Goals</h1>
			<div className="flex flex-row flex-between">
				<Link to="/signup" ><button className="big-button rounded" type="button">Create an Account</button></Link>
				<Link to="/login" ><button className="big-button rounded" type="button">Login</button></Link>
			</div>
		</div>
	)
}

export default Welcome

