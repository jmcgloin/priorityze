import  React, {Component} from 'react';

import GoalForm from './GoalForm';

class GoalCard extends Component {
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
	handleDeleteGoal = () => {
		this.props.deleteGoal(this.props.goal.id)
	}
	render() {
		const newGoal = { ...this.props.goal, title: "" }
		return (
			<div className="flex flex-colum flex-around goal-card card" onClick={ this.handleOnClick } >
				{ this.state.editing ? 
					<GoalForm
						
						handleSubmit={ (goal) => this.props.formSubmit(goal) }
						goal={ this.props.id === "addCard" ? newGoal : this.props.goal }
						handleCancel={ this.handleCancelEdit }
						handleDelete={ this.handleDeleteGoal }
						formType={ this.props.id === "addCard" ? "addGoal" : "editGoal" }
					/> : <p>{ this.props.goal.title }{ this.props.goal.completed && " X" }</p>
				}
			</div>
		)
	}
}

export default GoalCard