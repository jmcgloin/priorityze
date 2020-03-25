export const fetchGoals = () => {
	return dispatch => {
		dispatch(goalsLoading())
		console.log("fetching...")
		try {
			fetch("http://localhost:3001/api/v1/goals")
			.then(r => r.json())
			.then(rj => dispatch(addGoals(rj.goals)))
			.catch(err => {
				console.log("From then.catch: ", err)
				return { error: err}
			})
		}
		catch(err) {
			console.log("try-catch error: ", err)
			return err
		}
	}
}

const addGoals = (goals) => ({ type: "LIST_GOALS", goals })

const goalsLoading = () => ({ type: "GOALS_LOADING", loading: true })

const addGoal = (goal) => ({ type: "ADD_GOAL", goal })

const deleteGoal = (goalId) => ({ type: "DELETE_GOAL", goalId })

const editGoal = (goal) => ({ type: "EDIT_GOAL", goal })