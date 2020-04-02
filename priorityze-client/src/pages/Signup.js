import React from 'react';

import SignupForm from '../containers/SignupForm'

const Signup = (props) => {
	return (
		<div className="flex flex-column flex-vcenter flex-between full-height">
			<SignupForm history={props.history} message={ props.message } />
		</div>
	)
}

export default Signup