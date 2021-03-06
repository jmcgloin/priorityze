import  React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LogOutButton from '../components/LogOutButton';
import { logOut } from '../actions/user';

class Header extends Component {
	render() {
		return (
			<header className="flex flex-center">
				<div className="flex flex-row flex-between flex-vcenter wid-95">
					<Link to="/">Home</Link> {/*how to change this based on page/component*/}
					{ localStorage.getItem('priorityzeIdToken') ? 
						<LogOutButton logOut={ this.props.logOut } history={this.props.history} /> :
						null
					}
				</div>
			</header>
		)
	}
}

export default connect(null, ({ logOut }))(Header)