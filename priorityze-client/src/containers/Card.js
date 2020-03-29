import  React, {Component} from 'react';

import GoalCard from './GoalCard';
import StepList from './StepList';

export default class Card extends Component {
	render() {
		const { goal, formSubmit, deleteGoal, id, addStep, editStep, deleteStep } = this.props
		return (
			<div className="flex flex-row card">
				<GoalCard 
					goal={ goal }
					formSubmit={ formSubmit }
					deleteGoal={ deleteGoal }
					id={ id || goal.id }
				/>
				{ id ? null : <StepList
					steps={ goal.steps }
					goalId={ goal.id }
					addStep={ addStep }
					editStep={ editStep }
					deleteStep={ deleteStep }
					/>
				}
			</div>
		)
	}
}

