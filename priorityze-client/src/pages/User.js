import  React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import GoalList from '../components/GoalList';
import { fetchGoals } from '../actions/goal';


class User extends Component {
	state = {
		sortMethod: "recent"
	}
	componentDidMount = () => {
		if(localStorage.getItem('priorityzeIdToken')) this.props.fetchGoals();
	}
	setSortMethod = ({ target }) => {
		this.setState({
			sortMethod: target.value
		})
	}
	renderUser = () => {
		return (
			<div className="flex flex-column flex-start">
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
					sortMethod={ this.state.sortMethod }
				/>
			</div>
		)
	}
	render() {
		return (
			<div>
				{ localStorage.getItem('priorityzeIdToken') ? this.renderUser() : <Redirect to="/login" /> }
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		goals: state.goal.goals,
		authorized: state.user.authorized
	}
}
const mapDispatchToProps = dispatch => {
	return {
		fetchGoals: () => dispatch(fetchGoals())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(User)