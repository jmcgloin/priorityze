import  React, {Component} from 'react';
import { connect } from 'react-redux';

import GoalList from '../components/GoalList';
import { fetchGoals } from '../actions/goal';


class User extends Component {
	state = {
		test: true
	}
	componentDidMount() {
		this.props.fetchGoals()
	}
	render() {
		const goals = [{
					title: "Testing how big this will be",
					deadline: "2020-03-30",
					importance: 10,
					icon: "none",
					id: 5
				}]
		return (
			<div className="flex flex-column flex-start">
			goals
				<GoalList goals={ goals } />
			</div>
		)
	}
}

export default connect(({goals}) => ({goals}), { fetchGoals })(User)