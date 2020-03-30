import React from 'react';

import SignupForm from '../containers/SignupForm'

const Signup = (props) => {
	return (
		<SignupForm history={props.history} message={ props.message } />
	)
}

export default Signup