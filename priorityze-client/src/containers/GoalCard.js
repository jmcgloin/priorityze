import  React, {Component} from 'react';

import GoalForm from './GoalForm';

export default class GoalCard extends Component {
	state = {
		editing: false
	}
	handleOnClick = (event) => {
		if(this.state.editing) return;
		this.setState({ editing: true })
	}
	handleCancelEdit = () => {
		this.setState({ editing: false })
	}
	render() {
		const { id, goal } = this.props
		const newGoal = { ...goal, title: "" }
		return (
			<div
				className={
					`flex flex-colum flex-around goal-card card ${goal.completed && !this.state.editing ? "completed" : null}`
				}
				id={ id ? `gc${id}` : "new-goal-card" }
				onClick={ this.handleOnClick }
			>
				{ this.state.editing ? 
					<GoalForm
						goal={ id === "addCard" ? newGoal : goal }
						id={ id }
						handleCancel={ this.handleCancelEdit }
					/> : <p>{ goal.title }</p>
				}
			</div>
		)
	}
}