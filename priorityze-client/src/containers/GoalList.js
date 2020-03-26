import  React, {Component} from 'react';

import GoalCard from './GoalCard';

export default class GoalList extends Component {

	render() {
		return (
			<div className="flex flex-row flex-start flex-wrap">
				{ this.renderGoalCards() }
			</div>
		)
	}
	renderGoalCards = () => {
		const goalsArray = this.props.goals.map(goal => {
			console.log(goal)
			return (
				<GoalCard 
					goal={ goal }
					key={goal.id}
					formSubmit={ this.props.editGoal }
					deleteGoal={ this.props.deleteGoal }
				/>
			)
		})
		const addGoalCard = <GoalCard
				goal={{ title: "+" }}
				key="addCard"
				id="addCard"
				formSubmit={ this.props.addGoal }
				deleteGoal={ this.props.deleteGoal }
			/>
		return goalsArray.concat(addGoalCard)
	}
}