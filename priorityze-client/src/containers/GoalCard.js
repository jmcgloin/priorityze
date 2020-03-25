import  React, {Component} from 'react';

import GoalForm from './GoalForm';

export default class GoalCard extends Component {
	state = {
		goal: this.props.goal,
		editing: false
	}
	handleOnClick = () => {
		if(this.state.editing) return;
		this.setState({ editing: true })
	}
	handleSubmitEdit = (event) => {
		event.preventDefault()
		this.props.editGoal(this.state.goal)
		this.setState({ editing: false })
	}
	handleCancelEdit = () => {
		this.setState({ editing: false })
	}
	handleonChange = ({ target }) => {
		this.setState({
			goal: {
				...this.state.goal,
				[target.name]: target.value
			}
		})
	}
	render() {
		const { editing, goal } = this.state
		return (
			<div className="flex flex-colum flex-around goal-card card" onClick={ this.handleOnClick } >
				{ editing ? <GoalForm className="flex flex-colum" goal={ this.state.goal } handleCancel={ this.handleCancelEdit } /> : <p>{ goal.title }</p> }
			</div>
		)
	}
}

