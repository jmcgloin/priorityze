import  React, {Component} from 'react';
import { connect } from 'react-redux';

import GoalList from '../components/GoalList';
import { fetchGoals, editGoal, addGoal, deleteGoal } from '../actions/goal';


class User extends Component {
	state = {
		test: true,
		goals: []
	}
	componentDidMount() {
		this.props.fetchGoals()
	}
	deleteGoal = (goalId) => {
		this.props.deleteGoal(goalId)
	}
	render() {
		return (
			<div className="flex flex-column flex-start">
			goals
				<GoalList
					goals={ this.props.goals }
					editGoal={ this.props.editGoal }
					addGoal={ this.props.addGoal }
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
		editGoal: (goal, verb) => dispatch(editGoal(goal, verb)),
		deleteGoal: (goalId) => dispatch(deleteGoal(goalId)),
		addGoal: (goal) => dispatch(addGoal(goal))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(User)