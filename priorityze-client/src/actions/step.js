import { updateEditedGoal, statusMessage } from './goal'

export const addStep = (step) => {
	return dispatch => {
		try {
			fetch(`http://localhost:3001/api/v1/step`, {
				method: "POST",
		    headers: {
		      'Content-Type': 'application/json'
		    },
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
					return dispatch(updateEditedGoal(rj.goal))
				}
				const msgType = rj.ok ? "success" : "failure"
				return dispatch(statusMessage(rj.message, msgType))
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
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(step)
			})
			.then(r => r.json())
			.then(rj => {
				if(rj.ok) {
					return dispatch(updateEditedGoal(rj.goal))
				}
				const msgType = rj.ok ? "success" : "failure"
				return dispatch(statusMessage(rj.message, msgType))
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


// /api/v1/step(.:format)                                                                   api/v1/step#create
//                           api_v1_step PATCH  /api/v1/step/:id