
import React from 'react';
//redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import { withRouter } from 'react-router-dom';
import {setCartHidden} from "../../redux/cart/cart.actions";
//styling
import "./cartdropdown.styles.scss";
//components
import CustomBtn from "../custom-btn/CustomBtn.component";
import CartItem from '../cart-item/CartItem.component';





const CartDropdown = ({addCartItem, history, dispatch}) => {

    return (

        <div className="cart-dropdown">

            <div className="cart-items" >
                {
                    addCartItem.length ? (
                    addCartItem.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                    
                    ) : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomBtn onClick={() => {
                history.push('/checkout');
                dispatch(setCartHidden())

                }}>GO TO CHECKOUT</CustomBtn>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({

    addCartItem: selectCartItems

})



export default withRouter(connect(mapStateToProps)(CartDropdown));