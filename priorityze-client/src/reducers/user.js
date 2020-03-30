const user = (state = { currentUser: null, token: null }, action) => {
	switch(action.type) {
		case "ADD_CURRENT_USER":
			console.log("user reducer add user: ", action.user)
			return {
				...state,
				currentUser: action.user
			}
		case "ADD_SESSION_TOKEN":
		console.log("user reducer add session: ", action.token)
			return {
				...state,
				token: action.token
			}
		default:
			return state
	}
}

export default user