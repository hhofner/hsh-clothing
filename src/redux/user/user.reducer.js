const INITIAL_STATE = {
    currentUser: null
}
// Remember the action is just an object {type, payload}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;