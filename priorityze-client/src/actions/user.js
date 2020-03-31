export const signUp = (user) => {
	return dispatch => {
		// dispatch(addCurrentuser(user))
		try {
			fetch(`${baseURL}signup`, {
				method: "POST",
		    headers: headers(),
		    body: JSON.stringify(user)
			})
			.then(r => {
				const token = r.headers.get(["authorization"])
				if(token) {
					localStorage.setItem('priorityzeIdToken', token)
					// return dispatch(addSessionToken({ token }))
				} else {
					console.log(r.message)
					return dispatch(addCurrentuser({ user: null }))
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

export const getCurrentUser = (token) => {
	return dispatch => {
		try {
			console.log("action user, token: ", token)
			fetch(`${baseURL}user`, {
				headers: headers(token)
			})
			.then(r => r.json())
			.then(rj => {
				console.log("actions user, getCurrentUser, rj: ", rj)
				localStorage.setItem('priorityzeCurrentUser', rj.user)
				// return dispatch(addCurrentuser(rj.user))
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
		dispatch(addCurrentuser(user))
		try {
			fetch(`${baseURL}login`, {
				method: "POST",
		    headers: headers(),
		    body: JSON.stringify(user)
			})
			.then(r => {
				const token = r.headers.get(["authorization"])
				if(token) {
					return dispatch(addSessionToken({ token }))
				} else {
					console.log(r.message)
					return dispatch(addCurrentuser({ user: null }))
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

export const logOut = () => {
	return dispatch => {
		try {
			fetch(`${baseURL}logout`, {
				method: "DELETE",
		    headers: headers()
			})
			.then(r => r.json())
			.then(rj => {
				console.log("logged out: ", rj)
				return dispatch(logoutUser())
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

const addCurrentuser = user => ({ type: "ADD_CURRENT_USER", user })

const addSessionToken = token => ({ type: "ADD_SESSION_TOKEN", token })

const logoutUser = () => ({ type: "LOGOUT_USER" })

const headers = (token = null) => {
	const h = {
    "Accept": "application/json",
		"Content-Type": "application/json",
		"Access-Control-Expose-Headers": "Authorization"
	}
	return token ? {...h, "Authorization": token.token} : h
}

const baseURL = "http://localhost:3001/"