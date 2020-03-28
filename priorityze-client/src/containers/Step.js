import  React, {Component} from 'react';

export default class Step extends Component {
	state = {
		completed: this.props.completed
	}
	onMarkCompleted = () => {
		this.setState({
			completed: !this.state.completed
		})
		// this needs to dipatch something to set the step completed in the db
		// once all steps are completed the goal should be autmatically marked completed
	}
	render() {
		return (
				<span>this.props.step.metric <input type="checkbox" checked={ this.state.completed } /></span>
		)
	}
}

