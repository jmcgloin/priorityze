import  React, {Component} from 'react';

import Step from './Step'
import StepForm from './StepForm'

export default class StepList extends Component {
	state = ({
		extended: false
	})
	renderSteps = () => {
		if(this.props.steps === undefined) return null;
		if(!this.props.steps.length) return <StepForm />
		const steps = this.props.steps.sort((a,b) => {
			let comp = 0
			if(a.order < b.order) comp = 1;
			if(a.order > b.order) comp = -1;
			return comp
		})
		return steps.map(step => {
			return (
				<Step step={ step } key={ step.id } />		
			)
		})
	}
	mouseOver = () => {
		this.setState({
			extended: !this.state.extended
		})
	}
	render() {
		return (
			<div
				className="flex flex-row flex-start"
				onMouseEnter={ this.mouseOver }
				onMouseLeave={ this.mouseOver}
			>
				<div className={ this.state.extended ? "flex flex-column" : "hidden" } >
					{ this.renderSteps() }
				</div>
				<div className="menu-extend flex flex-column flex-center">
					{ this.state.extended ? "<" : ">" }
				</div>
			</div>
		)
	}
}









// import React from 'react';

// import Step from '../containers/Step';

// const StepList = (props) => {
		// const renderSteps = () => {
		// 	const steps = props.steps.sort((a,b) => {
		// 		let comp = 0
		// 		if(a.order < b.order) comp = 1;
		// 		if(a.order > b.order) comp = -1;
		// 		return comp
		// 	})
		// 	return steps.map(step => <Step step={ step } />)
		// }
// 	return (
// 		<div className="flex flex-row flex-start">
// 			renderSteps()
// 		</div>
// 	)
// }

// export default StepList
