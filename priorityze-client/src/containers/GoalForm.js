import  React, {Component} from 'react';

export default class GoalForm extends Component {
	state = ({
		goal: {
			...this.props.goal,
			icon: ""
		}
	})
	handleCancel = () => {
		this.props.handleCancel()
	}
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
		this.props.handleSubmit(this.state.goal)
		this.props.handleCancel()
	}
	render() {
		const { title, deadline, importance, icon } = this.state.goal
		return (
			<form className="flex flex-column flex-around" onSubmit={ this.handleSubmit } >
				<input
					type="text"
					value={ title }
					name="title"
					id="goal-form-title"
					placeholder={ title || "Add goal title" }
					onChange={ this.handleChange }
				/>
				<input
					type="text"
					value={ deadline }
					name="deadline"
					id="goal-form-deadline"
					placeholder={ deadline || "Add deadline" }
					onChange={ this.handleChange }
				/>
				<input
					type="text"
					value={ importance }
					name="importance"
					id="goal-form-importance"
					placeholder={ importance || "Importance: 1 - 10" /*this should be a dropdown*/ }
					onChange={ this.handleChange }
				/>
				<input
					type="text"
					value={ icon }
					name="icon"
					id="goal-form-icon"
					placeholder={ icon || "Choose an icon" /*how to do this one? dialog? dropdown?*/ }
					onChange={ this.handleChange }
				/>
				<div className="buttons flex flex-row flex-around">
					<button type="submit">Update</button>
					<button type="button" onClick={ this.handleCancel } >Cancel</button>
				</div>
			</form>
		)
	}
}

