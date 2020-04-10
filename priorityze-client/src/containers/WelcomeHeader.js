import  React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LogOutButton from '../components/LogOutButton';
import { logOut } from '../actions/user';

class WelcomeHeader extends Component {
	render() {
		return (
			<header className="flex flex-center">
				<div className="flex flex-row flex-between flex-vcenter wid-95">
					{ localStorage.getItem('priorityzeIdToken') ? 
						<LogOutButton logOut={ this.props.logOut } history={this.props.history} /> :
						null
					}
				</div>
			</header>
		)
	}
}

export default connect(null, ({ logOut }))(WelcomeHeader)