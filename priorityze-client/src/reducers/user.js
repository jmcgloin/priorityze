const user = (state = { currentUser: null, token: null }, action) => {
	switch(action.type) {
		case "ADD_CURRENT_USER":
			return {
				...state,
				currentUser: action.user
			}
		case "ADD_SESSION_TOKEN":
			return {
					...state,
					token: action.token
			}
		case "LOGOUT_USER":
			return {
				currentUser: null,
				token: null
			}
		default:
			return state
	}
}

export default user