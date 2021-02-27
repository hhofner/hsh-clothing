import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}
// Remember the action is just an object {type, payload}
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            console.log(`Setting user: ${action.payload}`);
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;