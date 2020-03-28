import  React, {Component} from 'react';

export default class StepForm extends Component {
	state = ({
		metric: ""
	})
	handleDeleteStep = () => {
		
	}
	addStep = (event) => {
		event.preventDefault()
	}
	changeMetric = ({ target }) => {
		this.setState({
			metric: target.value
		})
	}
	componentDidMount = () => {
		const input = document.getElementById("newStep")
		input.addEventListener('blur', () => {
			this.setState({ metric: "" })
		})
	}
	render() {
		return (
				<form onSubmit={ this.addStep } >
					<label>New Step: 
						<input
							type="text"
							id="newStep"
							value={ this.state.metric }
							onChange={ this.changeMetric }
						/>
					</label>
				</form>
		)
	}
}

