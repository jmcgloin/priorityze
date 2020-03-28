import  React, {Component} from 'react';
import { connect } from 'react-redux';

import GoalList from '../components/GoalList';
import { fetchGoals, editGoal, addGoal, deleteGoal } from '../actions/goal';


class User extends Component {
	state = {
		sortMethod: "recent"
	}
	componentDidMount() {
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
		addGoal: (goal) => dispatch(addGoal(goal))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(User)