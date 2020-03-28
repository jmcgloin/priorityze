import React from 'react';

import Card from '../containers/Card'

const GoalList = (props) => {
	const renderCards = () => {
		const goalsArray = props.goals.map(goal => {
			console.log(goal)
			return (
				<Card 
					goal={ goal }
					key={goal.id}
					formSubmit={ props.editGoal }
					deleteGoal={ props.deleteGoal }
				/>
			)
		})
		const addCard = <Card
				goal={{ title: "+" }}
				key="addCard"
				id="addCard"
				formSubmit={ props.addGoal }
				deleteGoal={ props.deleteGoal }
			/>
		return goalsArray.concat(addCard)
	}
	return (
		<div className="flex flex-row flex-start flex-wrap">
				{ renderCards() }
		</div>
	)
}

export default GoalList