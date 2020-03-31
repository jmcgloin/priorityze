import React from 'react';

import Card from './Card'

const GoalList = (props) => {
	const renderCards = () => {
		const goalsArray = sortGoals().map(goal => {
			return (
				<Card 
					goal={ goal }
					key={goal.id}
				/>
			)
		})
		const addCard = <Card
				goal={{ title: "+" }}
				key="addCard"
			/>
		return goalsArray.concat(addCard)
	}
	const sortGoals = () => {
		switch(props.sortMethod) {
			case "recent":
				return sortGoalsByRecent()
			case "importance":
				return sortGoalsByImportance()
			case "deadline":
				return sortGoalsByDeadline()
			default:
				return props.goals
		}
	}
	const sortGoalsByRecent = () => {
		console.log("goallist, sortGoalsByRecent, props.goals", props.goals)
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
	const sortGoalsByDeadline = () => {
		return [...props.goals].sort((a,b) => {
			let comp = 0;
			if(a.deadline > b.deadline) comp = 1;
			if(a.deadline < b.deadline) comp = -1;
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