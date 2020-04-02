import React from 'react';

import LoginForm from '../containers/LoginForm'

const Login = (props) => {
	return (
		<div className="flex flex-column flex-vcenter flex-between full-height">
			<LoginForm history={props.history} message={ props.message } />
		</div>
	)
}

export default Login
