import React from 'react';
import { connect } from 'react-redux';

import { logOut } from '../actions/user';

const Header = (props) => {
	return (
		props.user.currentUser ? <button type="button" onClick={ props.logOut } >Log Out</button> : null
	)
}

export default connect(({ user }) => ({ user }), { logOut })(Header)