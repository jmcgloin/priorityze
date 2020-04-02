import  React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import Picker from 'emoji-picker-react';
import DatePicker from 'react-date-picker';
import moment from 'moment';

import { addGoal, editGoal, deleteGoal } from '../actions/goal';

class GoalForm extends Component {
	state = ({
		goal: {
			...this.props.goal,
			title: this.props.id ? this.props.goal.title : ""
		}
	})
	handleChange = ({ target }) => {
		this.setState({
			goal: {
				...this.state.goal,
				[target.name]: target.value
			}
		})
	}
	dateChange = (date) => {
		console.log(date)
		this.setState({
			goal: {
				...this.state.goal,
				deadline: date
			}
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		const goal = {
			...this.state.goal,
			user_id: this.props.userId
		}
		goal.id ? this.props.editGoal(goal) : this.props.addGoal(goal)
		this.props.handleCancel()
	}
	handleEmoji = (e) => {
		console.log(e)
	}
	render() {
		const { title, deadline, importance, icon, id } = this.state.goal
		console.log("GoalForm, render, deadline: ", moment(deadline).format("MM-DD-YYYY"))
		return (
			<form className="flex flex-column flex-around flex-center" onSubmit={ this.handleSubmit } >
				<input
					type="text"
					value={ title }
					name="title"
					placeholder={ title || "Add goal title" }
					onChange={ this.handleChange }
					required
				/>
				{/*<DatePicker
					value={ moment(deadline).format("YYYY-MM-DD") }
	        
	        dateFormat="YYYY-MM-DD"
	      />*/}
				<input
					type="date"
					value={ moment(deadline).format("YYYY-MM-DD") }
					name="deadline"
					onChange={ (event) => this.handleChange(event) }
					required
				/>
				<input
					type="text"
					value={ importance }
					name="importance"
					placeholder={ importance || "Importance: 1 - 10" /*this should be a dropdown*/ }
					onChange={ this.handleChange }
					required
				/>
				{/*<Picker onEmojiClick={ this.handleEmoji }/>*/}
				<input
					type="text"
					value={ icon }
					name="icon"
					placeholder={ icon || "Choose an icon" /*how to do this one? dialog? dropdown? */}
					onChange={ this.handleChange }
				/>
				<div className="buttons flex flex-row flex-around">
					<button type="submit">{ id ? "Update" : "Add" }</button>
					<button type="button" onClick={ this.props.handleCancel } >Cancel</button>
					{ id ? (<button type="button" onClick={ () => this.props.deleteGoal(id) } >Delete</button>) : null}
				</div>
			</form>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addGoal: (goal) => dispatch(addGoal(goal)),
		editGoal: (goal) => dispatch(editGoal(goal)),
		deleteGoal: (goalId) => dispatch(deleteGoal(goalId))
	}
}

export default connect(null, mapDispatchToProps)(GoalForm)