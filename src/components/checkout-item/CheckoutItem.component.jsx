import React from 'react';
import "./checkoutitem.styles.scss";//style
//redux
import {connect} from "react-redux";
import {clearItemsFromCart, setAddCartItem, removeItem} from "../../redux/cart/cart.actions";




const CheckoutItem = ({cartItem, clearItem, addCartItem, removeItem}) => {

    const {name, imageUrl, price, quantity} = cartItem;

    return (

        <div className="checkout-item">

            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>

            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addCartItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>

            <div className ="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>

        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({

    clearItem: item => dispatch(clearItemsFromCart(item)),
    addCartItem: item => dispatch(setAddCartItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem); 