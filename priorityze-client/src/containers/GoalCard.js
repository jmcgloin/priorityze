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
		const newGoal = { ...this.props.goal, title: "" }
		return (
			<div className="flex flex-colum flex-around goal-card card" onClick={ this.handleOnClick } >
				{ this.state.editing ? 
					<GoalForm
						goal={ this.props.id === "addCard" ? newGoal : this.props.goal }
						handleCancel={ this.handleCancelEdit }
					/> : <p>{ this.props.goal.title }{ this.props.goal.completed && " X" }</p>
				}
			</div>
		)
	}
}