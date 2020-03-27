import  React, {Component} from 'react';

import GoalCard from './GoalCard';
// import StepList from './StepList';

export default class Card extends Component {
	render() {
		return (
			<div className="flex flex-row">
				<GoalCard />
				{ this.state.extended && <StepList />}
				<div>
					{ this.state.extended ? "<" : ">" }
				</div>
			</div>
		)
	}
}

