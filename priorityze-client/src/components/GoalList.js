import  React, {Component} from 'react';

import GoalCard from '../containers/GoalCard';

export default class GoalList extends Component {

	render() {
		return (
			<div className="flex flex-row flex-start flex-wrap">
				{ this.renderGoalCards() }
			</div>
		)
	}
	renderGoalCards = () => {
		return this.props.goals.map(goal => <GoalCard goal={ goal } key={goal.id} />)
	}
}

// export default connect()(GoalList)