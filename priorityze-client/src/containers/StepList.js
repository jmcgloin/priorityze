import  React, {Component} from 'react';
import { connect } from 'react-redux';

import Step from './Step'
import StepForm from './StepForm'
import { addStep, editStep, deleteStep } from '../actions/step';

class StepList extends Component {
	state = {
		extended: false
	}
	renderSteps = () => {
		return this.props.steps.map(step => {
			return (
				<Step
					step={ step }
					key={ step.id }
					editStep={ this.props.editStep }
					deleteStep={ this.props.deleteStep }
				/>
			)
		}).concat(
			<StepForm
				addStep={ this.props.addStep }
				goalId={ this.props.goalId }
			/>
		)
	}
	clickMenu = () => {
		this.setState({ extended: !this.state.extended })
	}
	render() {
		return (
			<div className="flex flex-row flex-start">
	 			{ this.state.extended && this.renderSteps() }
	 			<div className="menu-extend flex flex-column flex-center" onClick={ this.clickMenu }>
	 				{ this.state.extended ? "<" : ">" }
	 			</div>
	 		</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addStep: (step) => dispatch(addStep(step)),
		editStep: (step) => dispatch(editStep(step)),
		deleteStep: (stepId) => dispatch(deleteStep(stepId))
	}
}

export default connect(null, mapDispatchToProps)(StepList)