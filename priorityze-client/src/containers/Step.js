import  React, {Component} from 'react';

export default class Step extends Component {
	state = {
		editing: false,
		step: {
			metric: this.props.step.metric,
			goalId: this.props.goalId,
			completed: this.props.step.completed,
			id: this.props.step.id
		},
		input: null
	}
	markCompleted = ({ target }) => {
		this.setState({
			step: {
				...this.state.step,
				completed: target.checked
			}
		}, () => {
			this.updateStep()
		})
	}
	editStep = () => {
		this.setState({
			editing: true
		})
	}
	updateStep = () => {
		this.props.editStep(this.state.step)
		this.setState({ editing: false })
	}
	renderStep = () => {
		const editStep = (
			<input 
				id="editInput"
				value={ this.state.step.metric }
				onChange={ ({ target }) => this.setState({
					step: {
						...this.state.step,
						metric: target.value
					}
				}) }
				onKeyDown={ ({ keyCode }) => keyCode === 27 && this.setState({ editing: false }) }
				onKeyPress={ ({key}) => key === 'Enter' && this.updateStep() }
			/>
		)
		const stepMetric = (
			<p>
				<span onClick={ this.editStep } >{ this.props.step.metric }</span>
				<input type="checkbox" checked={ this.state.step.completed } onChange={ this.markCompleted } />
				<button type="button" onClick={ this.deleteStep } >X</button>
			</p>
		)
		return this.state.editing ? editStep : stepMetric
	}
	deleteStep = () => {
		this.props.deleteStep(this.state.step.id)
	}
	componentDidUpdate = () => {
		const input = document.getElementById("editInput")
		if(input && this.state.input !== input) {
			this.setState({ input })
			input.focus()
			input.addEventListener("blur", () => this.setState({ editing: false }))
		}
	}
	render() {
		return (
				this.renderStep()
		)
	}
}

