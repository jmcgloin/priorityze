import React from 'react';

import Card from '../containers/Card'

const GoalList = (props) => {
	const renderCards = () => {
		const goalsArray = sortGoals().map(goal => {
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
	const sortGoals = () => {
		switch(props.sortMethod) {
			case "recent":
				return sortGoalsByRecent()
			case "importance":
				return sortGoalsByImportance()
		}
	}
	const sortGoalsByRecent = () => {
		return [...props.goals].sort((a,b) => {
			let comp = 0;
			if(a.created_at < b.created_at) comp = 1;
			if(a.created_at > b.created_at) comp = -1;
			return comp
		})
	}
	const sortGoalsByImportance = () => {
		return [...props.goals].sort((a,b) => {
			let comp = 0;
			if(a.importance < b.importance) comp = 1;
			if(a.importance > b.importance) comp = -1;
			return comp
		})
	}
	return (
		<div className="flex flex-row flex-start flex-wrap">
				{ renderCards() }
		</div>
	)
}

export default GoalList