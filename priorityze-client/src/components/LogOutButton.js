import React from 'react';

const LogOutButton = (props) => {
	const logOut = () => {
		props.history.push("/login")
		props.logOut()
	}
	return (
		<button className="button rounded medium-button" type="button" onClick={ logOut } >Log Out</button>
	)
}

export default LogOutButton
