import  React, {Component} from 'react';

import GoalCard from './GoalCard';
// import StepList from './StepList';

export default class Card extends Component {
	state = {
		extended: false
	}
	render() {
		const { goal, key, formSubmit, deleteGoal, id } = this.props
		return (
			<div className="flex flex-row card">
				<GoalCard 
					goal={ goal }
					formSubmit={ formSubmit }
					deleteGoal={ deleteGoal }
					id={ id || goal.id }
				/>
				{ /* this.state.extended && <StepList /> */ }
				<div className="menu-extend flex-vcenter flex">
					{ this.state.extended ? "<" : ">" }
				</div>
			</div>
		)
	}
}

