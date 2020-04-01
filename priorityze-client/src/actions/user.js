export const signUp = (user) => {
	return dispatch => {
		dispatch(beginRequest())
		try {
			fetch(`${baseURL}signup`, {
				method: "POST",
		    headers: headers(),
		    body: JSON.stringify(user)
			})
			.then(r => r.json().then(rj => ({ rj, r })))
			.then(({ rj, r }) => {
				dispatch(finishRequest())
				console.log("actions, login, r", r)
				console.log("actions, login, rj", rj)
				if(!r.ok) return dispatch(responseError("That username or email already exists."));
				localStorage.setItem('priorityzeIdToken', r.headers.get(["Authorization"]))
				localStorage.setItem('priorityzeCurrentUserId', rj.id)
				dispatch(isAuthorized(true))
			})
			.catch(err => {
				console.log("From then.catch: ", err)
				// return dispatch(statusMessage(err.message, "failure"))
			})
		}
		catch(err) {
			console.log("try-catch error: ", err)
			// return dispatch(statusMessage(err.message, "failure"))
		}
	}
}

export const logIn = (user) => {
	return dispatch => {
		dispatch(beginRequest())
		try {
			fetch(`${baseURL}login`, {
				method: "POST",
		    headers: headers(),
		    body: JSON.stringify(user)
			})
			.then(r => r.json().then(rj => ({ rj, r })))
			.then(({ rj, r }) => {
				dispatch(finishRequest())
				console.log("actions, login, r", r)
				console.log("actions, login, rj", rj.id)
				if(!r.ok) return dispatch(responseError(rj.error));
				localStorage.setItem('priorityzeIdToken', r.headers.get(["Authorization"]))
				localStorage.setItem('priorityzeCurrentUserId', rj.id)
			})
			.catch(err => {
				console.log("From then.catch: ", err)
				dispatch(finishRequest())
				// return dispatch(statusMessage(err.message, "failure"))
			})
		}
		catch(err) {
			dispatch(finishRequest())
			console.log("try-catch error: ", err)
			// return dispatch(statusMessage(err.message, "failure"))
		}
	}
}

export const logOut = () => {
	return dispatch => {
		try {
			fetch(`${baseURL}logout`, {
				method: "DELETE",
		    headers: headers()
			})
			.then(r => r.json())
			.then(rj => {
				if(rj.ok) {
					localStorage.removeItem('priorityzeIdToken')
					localStorage.removeItem('priorityzeCurrentUserId')
				}
			})
			.catch(err => {
				console.log("From then.catch: ", err)
				// return dispatch(statusMessage(err.message, "failure"))
			})
		}
		catch(err) {
			console.log("try-catch error: ", err)
			// return dispatch(statusMessage(err.message, "failure"))
		}
	}
}

export const responseError = errorMessage => ({ type: "RESPONSE_ERROR", errorMessage })

const beginRequest = () => ({ type: "BEGIN_REQUEST" })

const finishRequest = () => ({ type: "FINISH_REQUEST" })

const isAuthorized = (authorized) => ({ type: "IS_AUTHORIZED", authorized })

// const isVerified = (verified) => ({ type: "IS_VERIFIED", verified })

const headers = (token = null) => {
	const h = {
    "Accept": "application/json",
		"Content-Type": "application/json",
		"Access-Control-Expose-Headers": "Authorization"
	}
	return token ? {...h, "Authorization": token.token} : h
}

const baseURL = "http://localhost:3001/"





