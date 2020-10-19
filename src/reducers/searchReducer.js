const searchReducer = (state, action) => {
	switch(action.type) {
		case 'HANDLE_SEARCH':
			return action.value
		default:
			return state
	}
}



export default searchReducer