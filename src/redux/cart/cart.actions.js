import {CartActionTypes} from "./cart.types";



export const setCartHidden = cart => ({

    type: CartActionTypes.SET_CART_HIDDEN,
  
})

export const setAddCartItem = item => ({

    type: CartActionTypes.SET_ADD_CART_ITEM,
    payload: item
})


