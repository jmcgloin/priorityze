import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {
	return (
		<div className="flex flex-row flex-around">
			<Link to="/signup" ><button className="big-button rounded" type="button">Create an Account</button></Link>
			<Link to="/login" ><button className="big-button rounded" type="button">Login</button></Link>
		</div>
	)
}

export default Welcome

