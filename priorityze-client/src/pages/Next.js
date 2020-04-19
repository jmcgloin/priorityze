import  React, {Component} from 'react';
import { connect } from 'react-redux';

import fetchNextStep from '../actions/goal';

class Next extends Component {
	render() {
	console.log(this.props.goal)
		return (
			<div>
			</div>
		)
	}
}

export default connect(({ goal }) => ({ goal }))(Next)