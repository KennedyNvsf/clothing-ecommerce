import {CartActionTypes} from "./cart.types";
import {addItemToCart, removeItemFromCart} from "./cart.utils";


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

        case CartActionTypes.REMOVE_ITEM:

         return {

            ...state,
            addCartItem: removeItemFromCart(state.addCartItem, action.payload)
            
         }

        case CartActionTypes.CLEAR_ITEM_FROM_CART:

        return {

            ...state,
            addCartItem: state.addCartItem.filter(cartItem => cartItem.id !== action.payload.id)
        }

        default:

        return state

    }


}

export default cartReducer;