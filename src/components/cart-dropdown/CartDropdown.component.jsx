
import React from 'react';
import {connect} from "react-redux";
import "./cartdropdown.styles.scss";
//components
import CustomBtn from "../custom-btn/CustomBtn.component";
import CartItem from '../cart-item/CartItem.component';





const CartDropdown = ({addCartItem}) => {

    return (

        <div className="cart-dropdown">

            <div className="cart-items" >
                {
                    addCartItem.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomBtn>GO TO CHECKOUT</CustomBtn>
        </div>
    )
}


const mapStateToProps = ({cart: {addCartItem}}) => ({

    addCartItem

})

export default connect(mapStateToProps)(CartDropdown);