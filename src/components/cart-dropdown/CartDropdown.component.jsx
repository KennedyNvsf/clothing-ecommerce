
import React from 'react';
import "./cartdropdown.styles.scss";
//components
import CustomBtn from "../custom-btn/CustomBtn.component";





const CartDropdown = () => {

    return (

        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomBtn>GO TO CHECKOUT</CustomBtn>
        </div>
    )
}

export default CartDropdown;