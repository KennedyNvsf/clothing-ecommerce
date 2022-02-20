import {CartActionTypes} from "./cart.types";



export const setCartHidden = cart => ({

    type: CartActionTypes.SET_CART_HIDDEN,
  
})

export const setAddCartItem = item => ({

    type: CartActionTypes.SET_ADD_CART_ITEM,
    payload: item
})

export const removeItem = item => ({

    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemsFromCart = item => ({

    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})


