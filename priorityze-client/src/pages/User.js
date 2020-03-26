import  React, {Component} from 'react';
import { connect } from 'react-redux';

import GoalList from '../containers/GoalList';
import { fetchGoals, sendGoal, deleteGoal } from '../actions/goal';


class User extends Component {
	state = {
		test: true,
		goals: []
	}
	componentDidMount() {
		this.props.fetchGoals()
	}
	// editGoal = (goal) => {
	// 	this.props.sendGoal(goal)
	// }
	// addGoal = (goal) => {
	// 	this.props.sendGoal(goal)
	// }
	deleteGoal = (goalId) => {
		this.props.deleteGoal(goalId)
	}
	render() {
		return (
			<div className="flex flex-column flex-start">
			goals
				<GoalList
					goals={ this.props.goals }
					editGoal={ (goal, verb = "PATCH") => this.props.sendGoal(goal, verb) }
					addGoal={ (goal, verb = "PUT") => this.props.sendGoal(goal, verb) }
					deleteGoal={ this.props.deleteGoal }
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		goals: state.goal.goals
	}
}
const mapDispatchToProps = dispatch => {
	return {
		fetchGoals: () => dispatch(fetchGoals()),
		sendGoal: (goal, verb) => dispatch(sendGoal(goal, verb)),
		deleteGoal: (goalId) => dispatch(deleteGoal(goalId))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(User)