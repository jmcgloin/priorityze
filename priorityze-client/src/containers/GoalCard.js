import  React, {Component} from 'react';

import GoalForm from './GoalForm';

export default class GoalCard extends Component {
	state = {
		goal: {
			title: this.props.title,
			deadline: this.props.deadline,
			importance: this.props.importance,
			icon: this.props.icon,
		}
		editing: false
	}
	handleOnClick = () => {
		if(this.state.editing) return;
		this.setState({ editing: true })
		this.renderEditForm()
	}
	handleSubmitEdit = (event) => {
		event.preventDefault()
		this.renderGoal()
		this.props.editGoal(this.state.goal)
	}
	handleonChange = ({ target }) => {
		this.setState({
			goal: {
				...this.state.goal,
				[target.name]: target.value
			}
		})
	}
	renderEditForm = () => {
		return <GoalForm />
	}
	renderGoal = () => {
		const { title } = this.state.goal
		return (
			<p></p>
		)
	}
	render() {
		const { editing, goal } = this.state
		return (
			<div className="flex flex-colum flex-around goal-card card">
				{ editing ? <GoalForm className="flex flex-colum" /> : <p>{ goal.title }</p> }
			</div>
		)
	}
}

