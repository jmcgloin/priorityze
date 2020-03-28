import  React, {Component} from 'react';

export default class Step extends Component {
	state = {
		completed: this.props.completed,
		editing: false,
		metric: this.props.step.metric,
		input: null
	}
	onMarkCompleted = () => {
		this.setState({
			completed: !this.state.completed
		})
		// this needs to dipatch something to set the step completed in the db
		// once all steps are completed the goal should be autmatically marked completed
	}
	editStep = ({ target }) => { //also need editing to keep extended true
		this.setState({
			editing: true
		})
	}
	updateStep = () => {
		console.log(this.state.metric) //wire this up to dispatch to edit metric
		this.setState({ editing: false })
	}
	renderStep = () => {
		const editStep = (
			<input 
				id="editInput"
				value={ this.state.metric }
				onChange={ ({ target }) => this.setState({ metric: target.value }) }
				onKeyDown={ ({ keyCode }) => keyCode === 27 && this.setState({ editing: false }) }
				onKeyPress={ ({key}) => key === 'Enter' && this.updateStep() }
				focus={ this.state.focus }
			/>
		)
		const stepMetric = (
			<span onClick={ this.editStep } >
				{ this.props.step.metric }
				<input type="checkbox" checked={ this.state.completed } />
			</span>
		)
		return this.state.editing ? editStep : stepMetric
	}
	componentDidUpdate = () => {
		const input = document.getElementById("editInput")
		if(input && this.state.input !== input) {
			console.log(input)
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

