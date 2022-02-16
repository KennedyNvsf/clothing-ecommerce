import {CartActionTypes} from "./cart.types";
import {addItemToCart} from "./cart.utils";


const INITIAL_STATE = {

    cartHidden: true,
    addCartItem: []
}

const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case CartActionTypes.SET_CART_HIDDEN:

        return {

            ...state,
            cartHidden: !state.cartHidden
        }

        case CartActionTypes.SET_ADD_CART_ITEM:

        return {

            ...state,
            addCartItem: addItemToCart(state.addCartItem, action.payload)
        }

        default:

        return state

    }


}

export default cartReducer;