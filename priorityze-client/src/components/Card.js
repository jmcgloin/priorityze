import React from 'react';

import GoalCard from '../containers/GoalCard';
import StepList from '../containers/StepList';

const Card = ({ goal, formSubmit, deleteGoal, id, addStep, editStep, deleteStep }) => {
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

export default Card