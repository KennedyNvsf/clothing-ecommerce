import React from 'react';
import "./carticon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {setCartHidden} from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({setCartHidden, itemCount}) => {

    return (

        <div className="cart-icon" onClick={setCartHidden}>
            <ShoppingIcon className="shoppingIcon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}



const mapDispatchToProps = dispatch => ({

    setCartHidden: () => dispatch(setCartHidden())
})

const mapStateToProps = createStructuredSelector({

    itemCount: selectCartItemsCount

})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);