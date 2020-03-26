export const fetchGoals = () => {
	return dispatch => {
		dispatch(goalsLoading())
		try {
			fetch("http://localhost:3001/api/v1/goal")
			.then(r => r.json())
			.then(rj => dispatch(addGoals(rj)))
			.catch(err => {
				console.log("From then.catch: ", err)
				return { error: err}
			})
		}
		catch(err) {
			console.log("try-catch error: ", err)
			return err // update these to return error messages
		}
	}
}

export const sendGoal = (goal, verb) => {
	console.log("goal action verb: ", verb)
	return dispatch => {
		verb === "POST" ? dispatch(addGoal(goal)) : dispatch(editGoal(goal))
		try {
			fetch("http://localhost:3001/api/v1/goal", {
				method: verb,
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(goal)
			})
			.then(r => r.json())
			.then(rj => dispatch(statusMessage(rj.message)))
			.catch(err => {
				console.log("From post goal then.catch: ", err)
				return { error: err }
			})
		}
		catch(err) {
			console.log("post try-catch error: ", err)
			return err
		}
	}
}

export const addGoals = (goals) => ({ type: "ADD_GOALS", goals })

export const goalsLoading = () => ({ type: "GOALS_LOADING", loading: true })

export const addGoal = (goal) => ({ type: "ADD_GOAL", goal })

export const deleteGoal = (goalId) => ({ type: "DELETE_GOAL", goalId })

export const editGoal = (goal) => ({ type: "EDIT_GOAL", goal })

export const statusMessage = (msg) => ({ type: "STATUS_MESSAGE", msg })