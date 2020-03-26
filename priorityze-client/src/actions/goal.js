export const fetchGoals = () => {
	return dispatch => {
		dispatch(goalsLoading())
		try {
			fetch("http://localhost:3001/api/v1/goal")
			.then(r => r.json())
			.then(rj => {
				return dispatch(addGoals(rj))
			})
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

const addGoals = (goals) => ({ type: "ADD_GOALS", goals })

const goalsLoading = () => ({ type: "GOALS_LOADING", loading: true })

const addGoal = (goal) => ({ type: "ADD_GOAL", goal })

const deleteGoal = (goalId) => ({ type: "DELETE_GOAL", goalId })

const editGoal = (goal) => ({ type: "EDIT_GOAL", goal })