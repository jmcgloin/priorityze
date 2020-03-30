import React from 'react';

import LoginForm from '../containers/LoginForm'

const Login = (props) => {
	return (
		<LoginForm history={props.history} message={ props.message } />
	)
}

export default Login
