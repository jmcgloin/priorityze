import React from 'react';

import GoalCard from '../containers/GoalCard'

const GoalList = (props) => {
	const renderGoalCards = () => {
		const goalsArray = props.goals.map(goal => {
			console.log(goal)
			return (
				<GoalCard 
					goal={ goal }
					key={goal.id}
					formSubmit={ props.editGoal }
					deleteGoal={ props.deleteGoal }
				/>
			)
		})
		const addGoalCard = <GoalCard
				goal={{ title: "+" }}
				key="addCard"
				id="addCard"
				formSubmit={ props.addGoal }
				deleteGoal={ props.deleteGoal }
			/>
		return goalsArray.concat(addGoalCard)
	}
	return (
		<div className="flex flex-row flex-start flex-wrap">
				{ renderGoalCards() }
		</div>
	)
}

export default GoalList