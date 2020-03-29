import  React, {Component} from 'react';
import { connect } from 'react-redux';

import GoalList from '../components/GoalList';
import { fetchGoals, editGoal, addGoal, deleteGoal } from '../actions/goal';
import { addStep, editStep, deleteStep } from '../actions/step';


class User extends Component {
	state = {
		sortMethod: "recent"
	}
	componentDidMount = () => {
		this.props.fetchGoals()
	}
	deleteGoal = (goalId) => {
		this.props.deleteGoal(goalId)
	}
	setSortMethod = ({target}) => {
		this.setState({
			sortMethod: target.value
		})
	}
	render() {
		
		return (
			<div className="flex flex-column flex-start">
				goals
				<div className="buttons flex flex-row flex-start" >
					<span>Sort By:</span>
					<button
						className="button rounded"
						type="button"
						onClick={ this.setSortMethod }
						disabled={ this.state.sortMethod === "recent" }
						value="recent"
					>Most Recent</button>
					<button
						className="button rounded"
						type="button"
						onClick={ this.setSortMethod }
						disabled={ this.state.sortMethod === "importance" }
						value="importance"
					>Most Important</button>
					<button
						className="button rounded"
						type="button"
						onClick={ this.setSortMethod }
						disabled={ this.state.sortMethod === "deadline" }
						value="deadline"
					>Due Soonest</button>
					
				</div>
				<GoalList
					goals={ this.props.goals }
					editGoal={ this.props.editGoal }
					addGoal={ this.props.addGoal }
					deleteGoal={ this.props.deleteGoal }
					sortMethod={ this.state.sortMethod }
					addStep={ this.props.addStep }
					editStep={ this.props.editStep }
					deleteStep={ this.props.deleteStep }
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
		editGoal: (goal) => dispatch(editGoal(goal)),
		deleteGoal: (goalId) => dispatch(deleteGoal(goalId)),
		addGoal: (goal) => dispatch(addGoal(goal)),
		addStep: (step) => dispatch(addStep(step)),
		editStep: (step) => dispatch(editStep(step)),
		deleteStep: (stepId) => dispatch(deleteStep(stepId))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(User)