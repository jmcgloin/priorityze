import  React, {Component} from 'react';
import { connect } from 'react-redux';

import GoalForm from './GoalForm';
import { addGoal, editGoal, deleteGoal } from '../actions/goal';

class GoalCard extends Component {
	state = {
		editing: false
	}
	handleOnClick = () => {
		if(this.state.editing) return;
		this.setState({ editing: true })
	}
	handleCancelEdit = () => {
		this.setState({ editing: false })
	}
	render() {
		console.log("GoalCard goal: ", this.props.goal)
		return (
			<div className="flex flex-colum flex-around goal-card card" onClick={ this.handleOnClick } >
				{ this.state.editing ? 
					<GoalForm
					className="flex flex-colum"
					handleSubmit={ (goal) => this.props.formSubmit(goal) }
					goal={ this.props.goal }
					handleCancel={ this.handleCancelEdit } /> : 
					<p>{ this.props.goal.title }</p>
				}
			</div>
		)
	}
}

export default GoalCard