import React from 'react';
import { connect } from 'react-redux';

import { logOut } from '../actions/user';

const Header = (props) => {
	const handleLogOut = () => {
		if(!props.user.currentUser) props.history.push("/")
		props.logOut()
		console.log("header after  logout currentUser:",props.user.currentUser)
	}
	return (
		props.user.currentUser ? <button type="button" onClick={ handleLogOut } >Log Out</button> : null
	)
}

export default connect(({ user }) => ({ user }), { logOut })(Header)