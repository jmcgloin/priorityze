import { statusMessage, editGoal } from './goal'

export const addStep = (step) => {
	return dispatch => {
		try {
			fetch(`http://localhost:3001/api/v1/step`, {
				method: "POST",
		    headers: headers(),
		    body: JSON.stringify({
		    	step: {
		    		metric: step.metric,
		    		goal_id: step.goalId
		    	}
		    })
			})
			.then(r => r.json())
			.then(rj => {
				if(rj.ok) {
					let goalCompleted = true
					rj.goal.steps.forEach(step => !step.completed && (goalCompleted = false))
					const goal = {
						...rj.goal,
						completed: goalCompleted
					}
					return dispatch(editGoal(goal))
				} else {
					//handle error/redirect here
				}
			})
			.catch(err => {
				console.log("From post step then.catch: ", err)
				return dispatch(statusMessage(err.message, "failure"))
			})
		}
		catch(err) {
			return dispatch(statusMessage(err, "failure"))
		}
	}	
}

export const editStep = (step) => {
	return dispatch => {
		try {
			fetch(`http://localhost:3001/api/v1/step/${step.id}`, {
				method: "PATCH",
		    headers: headers(),
		    body: JSON.stringify({
		    	step: {
		    		metric: step.metric,
			    	id: step.id,
		    		goal_id: step.goalId,
		    		completed: step.completed
		    	}
		    })
			})
			.then(r => r.json())
			.then(rj => {
				if(rj.ok) { // check to see if all steps are now completed, if so, mark goal completed
					let goalCompleted = true
					rj.goal.steps.forEach(step => !step.completed && (goalCompleted = false))
					const goal = {
						...rj.goal,
						completed: goalCompleted
					}
					return dispatch(editGoal(goal))
				} else {
					//handle error/redirect here
				}
			})
			.catch(err => {
				console.log("From post step then.catch: ", err)
				return dispatch(statusMessage(err.message, "failure"))
			})
		}
		catch(err) {
			return dispatch(statusMessage(err, "failure"))
		}
	}
}

export const deleteStep = (stepId) => {
	return dispatch => {
		try {
			fetch(`http://localhost:3001/api/v1/step/${stepId}`, {
				method: "DELETE",
		    headers: headers()
			})
			.then(r => r.json())
			.then(rj => {
				if(rj.ok) {
					let goalCompleted = true
					rj.goal.steps.forEach(step => !step.completed && (goalCompleted = false))
					const goal = {
						...rj.goal,
						completed: goalCompleted
					}
					return dispatch(editGoal(goal))
				} else {
					//handle error/redirect here
				}
			})
			.catch(err => {
				console.log("From post step then.catch: ", err)
				return dispatch(statusMessage(err.message, "failure"))
			})
		}
		catch(err) {
			return dispatch(statusMessage(err, "failure"))
		}
	}
}

const headers = () => {
	const h = {
    "Accept": "application/json",
		"Content-Type": "application/json",
		"Access-Control-Expose-Headers": "Authorization"
	}
	const token = localStorage.getItem('priorityzeIdToken')
	return token ? {...h, "Authorization": token.token} : h
}