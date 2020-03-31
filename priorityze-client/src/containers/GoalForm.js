import  React, {Component} from 'react';
import { connect } from 'react-redux';

import { addGoal, editGoal, deleteGoal } from '../actions/goal';

class GoalForm extends Component {
	state = ({
		goal: this.props.goal,
		userId: this.props.userId
	})
	handleChange = ({ target }) => {
		this.setState({
			goal: {
				...this.state.goal,
				[target.name]: target.value
			}
		})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		const { goal } = this.state
		goal.id ? editGoal(goal) : addGoal(goal)
		this.props.handleCancel()
	}
	render() {
		const { title, deadline, importance, icon, id } = this.state.goal
		return (
			<form className="flex flex-column flex-around flex-center" onSubmit={ this.handleSubmit } >
				<input
					type="text"
					value={ title }
					name="title"
					placeholder={ title || "Add goal title" }
					onChange={ this.handleChange }
				/>
				<input
					type="date"
					value={ deadline }
					name="deadline"
					placeholder={ deadline || "Add deadline" }
					onChange={ this.handleChange }
				/>
				<input
					type="text"
					value={ importance }
					name="importance"
					placeholder={ importance || "Importance: 1 - 10" /*this should be a dropdown*/ }
					onChange={ this.handleChange }
				/>
				<input
					type="text"
					value={ icon }
					name="icon"
					placeholder={ icon || "Choose an icon" /*how to do this one? dialog? dropdown?*/ }
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