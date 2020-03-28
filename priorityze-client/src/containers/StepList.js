import  React, {Component} from 'react';

import Step from './Step'
import StepForm from './StepForm'

export default class StepList extends Component {
	state = ({
		extended: false,
		editing: false
	})
	renderSteps = () => {
		if(this.props.steps === undefined) return null;
		if(!this.props.steps.length || this.state.editing === true) return <StepForm />
		const steps = this.props.steps.sort((a,b) => {
			let comp = 0
			if(a.order < b.order) comp = 1;
			if(a.order > b.order) comp = -1;
			return comp
		})
		const stepArray = steps.map(step => {
			return (
				<Step
					step={ step }
					key={ step.id }
					markCompleted={ (id) => this.markCompleted(id) }
				/>		
			)
		}).concat([<StepForm key="addStep" />])
		return (
			<div className={ this.state.extended ? "flex flex-column step-list" : "hidden" } >
				{ stepArray }
			</div>
		)
	}
	markCompleted = (id) => {
		//dispatch the action or maybe pass up to 
	}
	mouseOver = () => {
		this.setState({
			extended: !this.state.extended
		})
	}
	clickMenu = () => {
		this.setState({
			extended: !this.state.extended
		})
	}
	showStepForm = () => {
		this.setState({
			editing: true
		})
	}
	cancelEdit = () => {
		this.setState({
			editing: false
		})
	}
	render() {
		return (
			<div
				className="flex flex-row flex-start"
			>
				{ this.state.extended && this.renderSteps() }
				<div
					className="menu-extend flex flex-column flex-center"
					onClick={ this.clickMenu }
				>
					{ this.state.extended ? "<" : ">" }
				</div>
			</div>
		)
	}
}
				//{/* onMouseEnter={ this.mouseOver } */}
				//{/* onMouseLeave={ this.mouseOver} */}