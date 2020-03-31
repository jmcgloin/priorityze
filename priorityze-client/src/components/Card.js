import React from 'react';

import GoalCard from '../containers/GoalCard';
import StepList from '../containers/StepList';

const Card = ({ goal }) => {
	return (
		<div className="flex flex-row card">
			<GoalCard 
				goal={ goal }
				id={ goal.id || null }
			/>
			{ goal.id ? null : <StepList
				steps={ goal.steps }
				goalId={ goal.id }
				/>
			}
		</div>
	)
}

export default Card