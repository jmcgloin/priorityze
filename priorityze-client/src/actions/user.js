export const signUp = (user) => {
	console.log("...signing up")
	return dispatch => {
		try {
			fetch(`${baseURL}signup`, {
				method: "POST",
		    headers: headers(),
		    body: JSON.stringify(user)
			})
			.then(r => {
				const token = r.headers.get(["authorization"])
				if(token) {
					dispatch(addSessionToken({ token }))
					return dispatch(getCurrentUser(user.email, token ))
				} else {
					console.log(r.message)
				}
			})
			// .then(rj => {
			// 	console.log(`rj user: ${rj.user}, token: ${token}`)
			// 	// dispatch(addGoals(rj))
			// })
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

const getCurrentUser = (email, token) => {
	return dispatch => {
		try {
			fetch(`${baseURL}user`, {
				headers: headers(token)
			})
			.then(r => r.json())
			.then(rj => {
				console.log(rj)
				dispatch(addCurrentuser(rj.user))
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

const headers = (token = null) => {
	const h = {
    "Accept": "application/json",
		"Content-Type": "application/json",
		"Access-Control-Expose-Headers": "Authorization"
	}
	return token ? {...h, "Authorization": token} : h
}

const baseURL = "http://localhost:3001/"