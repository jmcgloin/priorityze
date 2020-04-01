export const fetchGoals = () => {
	return dispatch => {
		dispatch(goalsLoading())
		try {
			fetch("http://localhost:3001/api/v1/goal", {
				headers: headers()
			})
			.then(r => r.json())
			.then(rj => {
				return dispatch(addGoals(rj))
			})
			.catch(err => {
				console.log("From then.catch: ", err)
				return dispatch(statusMessage(err.message, "failure"))
			})
		}
		catch(err) {
			console.log("try-catch error: ", err)
			return dispatch(statusMessage(err.message, "failure"))
		}
	}
}

export const addGoal = (goal) => {
	const user_id = localStorage.getItem('priorityzeCurrentUserId')
	const fullGoal = {
		...goal,
		user_id
	}
	console.log("action, goal, addGoal, fullGoal: ", fullGoal)
	return dispatch => {
		try {
			fetch(`http://localhost:3001/api/v1/goal`, {
				method: "POST",
		    headers: headers(),
		    body: JSON.stringify(fullGoal)
			})
			.then(r => r.json())
			.then(rj => {
					console.log("actions, goal, addGoal, rj: ", rj)
				if(rj.ok) {
					return dispatch(updateAddedGoal(rj.goal))
				} else {
					//handle error/redirect here
				}
			})
			.catch(err => {
				console.log("From post goal then.catch: ", err)
				return dispatch(statusMessage(err.message, "failure"))
			})
		}
		catch(err) {
			return dispatch(statusMessage(err, "failure"))
		}
	}
}

export const editGoal = (goal) => {
	return dispatch => {
		try {
			fetch(`http://localhost:3001/api/v1/goal/${goal.id}`, {
				method: "PATCH",
		    headers: headers(),
		    body: JSON.stringify(goal)
			})
			.then(r => r.json())
			.then(rj => {
				if(rj.ok) {
					return dispatch(updateEditedGoal(rj.goal))
				} else {
					//handle error/redirect here
				}
			})
			.catch(err => {
				console.log("From post goal then.catch: ", err)
				return dispatch(statusMessage(err.message, "failure"))
			})
		}
		catch(err) {
			return dispatch(statusMessage(err, "failure"))
		}
	}
}

export const deleteGoal = (goalId) => {
	return dispatch => {
		try {
			fetch(`http://localhost:3001/api/v1/goal/${goalId}`, {
				method: "DELETE",
		    headers: headers()
			})
			.then(r => r.json())
			.then(rj => {
				console.log("actions, goal, deleteGoal, rj", rj)
					console.log("actions, goal, deleteGoal, rj.ok")
					return dispatch(removeDeletedGoal(goalId))
			})
		}
		catch(err) {
			return dispatch(statusMessage(err, "failure"))
		}
	}
}

export const addGoals = (goals) => ({ type: "ADD_GOALS", goals })

export const goalsLoading = () => ({ type: "GOALS_LOADING", loading: true })

export const updateAddedGoal = (goal) => ({ type: "UPDATE_ADDED_GOAL", goal })

export const removeDeletedGoal = (goalId) => ({ type: "REMOVE_DELETED_GOAL", goalId })

export const updateEditedGoal = (goal) => ({ type: "UPDATE_EDITED_GOAL", goal })

export const statusMessage = (msg, msgType) => ({ type: "STATUS_MESSAGE", msg, msgType })

const headers = () => {
	const h = {
    "Accept": "application/json",
		"Content-Type": "application/json",
		"Access-Control-Expose-Headers": "Authorization"
	}
	const token = localStorage.getItem('priorityzeIdToken')
	return token ? { ...h, "Authorization": token } : h
}