import  React, {Component} from 'react';
import { connect } from 'react-redux';

import GoalList from '../components/GoalList';
import { getCurrentUser } from '../actions/user';
import { fetchGoals } from '../actions/goal'


class User extends Component {
	state = {
		sortMethod: "recent"
	}
	componentDidMount = () => {
		this.props.getCurrentUser(this.props.user.token)
		this.props.fetchGoals(this.props.user.token)
	}
	setSortMethod = ({ target }) => {
		this.setState({
			sortMethod: target.value
		})
	}
	render() {
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
}

const mapStateToProps = state => {
	return {
		goals: state.goal.goals,
		user: state.user
	}
}
const mapDispatchToProps = dispatch => {
	return {
		fetchGoals: (token) => dispatch(fetchGoals(token)),
		getCurrentUser: (token) => dispatch(getCurrentUser(token))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(User)