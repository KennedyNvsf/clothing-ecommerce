
import {createSelector} from 'reselect';


const selectCart = state => state.cart;

//cart selection selector
export const selectCartItems = createSelector(

    [selectCart],
    cart => cart.addCartItem
)

//cart visible or not selector
export const selectCartHidden = createSelector(

    [selectCart],
    cart => cart.cartHidden 
)

//cart increasing items selector
export const selectCartItemsCount = createSelector(

    [selectCartItems],
    addCartItem => addCartItem.reduce((accumulatedQt, cartItem) => accumulatedQt + cartItem.quantity, 0)
)

//cart total items selector
export const selectCartTotal = createSelector(
   
    [selectCartItems],
    addCartItem => addCartItem.reduce((accumulatedQt, cartItem) => accumulatedQt + cartItem.quantity * cartItem.price, 0)

)