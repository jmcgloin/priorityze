const goal = (state = { goals: [], loading: false }, action) => {
	switch(action.type) {
		case "ADD_GOALS":
			return {
				goals: action.goals,
				loading: false
			}
			case "GOALS_LOADING":
				return {
					goals: state.goals,
					loading: true
				}
		case "ADD_GOAL":
			return {
				goals: [...state.goals, action.goal],
				loading: false
			}
		case "DELETE_GOAL":
			return {
				goals: [...state.goals].filter(goal => goal.id !== action.goalId),
				loading: false
			}
		case "EDIT_GOAL":
			return {
				goals: [...state.goals].map(goal => goal.id === action.goal.id ? action.goal : goal),
				loading: false
			}
		default:
			return state
	}
}

export default goal