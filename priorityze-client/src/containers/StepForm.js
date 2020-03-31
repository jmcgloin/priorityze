import  React, {Component} from 'react';

export default class StepForm extends Component {
	state = ({
		step: {
			metric: "",
			goalId: this.props.goalId
		},
		input: ""
	})
	addStep = (event) => {
		event.preventDefault()
		this.props.addStep(this.state.step)
		this.state.input.blur();
	}
	changeMetric = ({ target }) => {
		this.setState({
			step: {
				...this.state.step,
				metric: target.value
			}
		})
	}
	componentDidMount = () => {
		const input = document.getElementById("newStep")
		this.setState({ input })
		input.addEventListener('blur', () => {
			this.setState({
				step: {
					...this.state.step,
					metric: ""
				}
			})
		})
		input.addEventListener('keydown', ({ keyCode }) => {
			if(keyCode === 27 ) {
				input.blur()
			}
		})
	}
	render() {
		return (
				<form onSubmit={ this.addStep } >
					<label>New Step: 
						<input
							type="text"
							id="newStep"
							value={ this.state.step.metric }
							onChange={ this.changeMetric }
						/>
					</label>
				</form>
		)
	}
}

