// Do I need any of this anymore???????
const user = (state = { authorized: false, errorMessage: "", requestPending: false }, action) => {
	const { authorized, errorMessage, requestPending } = action
	switch(action.type) {
		case "IS_AUTHORIZED":
			return {
				...state,
				authorized
			}
		case "RESPONSE_ERROR":
			return {
				...state,
				errorMessage
			}
		case "BEGIN_REQUEST":
			return {
				...state,
				requestPending
			}
		case "FINISH_REQUEST":
			return {
				...state,
				requestPending
			}
		default:
			return state
	}
}

export default user