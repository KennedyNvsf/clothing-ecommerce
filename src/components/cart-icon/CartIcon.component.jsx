import React from 'react';
import "./carticon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {connect} from "react-redux";
import {setCartHidden} from "../../redux/cart/cart.actions"

const CartIcon = ({setCartHidden}) => {

    return (

        <div className="cart-icon" onClick={setCartHidden}>
            <ShoppingIcon className="shoppingIcon"/>
            <span className="item-count">5</span>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({

    setCartHidden: () => dispatch(setCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);