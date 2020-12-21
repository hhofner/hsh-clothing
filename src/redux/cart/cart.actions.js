import CartActionTypes from "./cart.types";

// This is an action creator, as typically used in the documentation.
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
    //The payload value is optional.
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

// Remember (!) An "action" is just an object with a `type`, and a `payload`.
// And an action creator is a method that will make an action for you.