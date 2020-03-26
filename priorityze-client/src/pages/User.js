import  React, {Component} from 'react';
import { connect } from 'react-redux';

import GoalList from '../containers/GoalList';
import { fetchGoals } from '../actions/goal';


class User extends Component {
	state = {
		test: true,
		goals: []
	}
	componentDidMount() {
		this.loadGoals()
	}
	loadGoals = () => {
		this.props.fetchGoals()
	}
	render() {
		
		return (
			<div className="flex flex-column flex-start">
			goals
				<GoalList goals={ this.props.goals } />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		goals: state.goal.goals
	}
}

export default connect(mapStateToProps, { fetchGoals })(User)