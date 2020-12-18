import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

// This ☝️ method just returns the action (and object {type, payload}) to be passed into a reducer
// This is probably called an "Action Creator"