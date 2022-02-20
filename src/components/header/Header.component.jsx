
import React from 'react';
import {Link} from "react-router-dom";
import "../header/header.styles.scss";//styles
import {ReactComponent  as Logo} from "../../assets/crown.svg";
//COMPOENTS
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";
//firebase
import {auth} from "../../firebase/firebase.utils";
//redux
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";


const Header = ({currentUser, cartHidden}) => {

    return (

        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>

            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                

                {
                    currentUser ?

                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    
                    :

                    <Link className="option" to="/signin">SIGN IN</Link>
                }

                <CartIcon />
            </div>

            { cartHidden ? null : <CartDropdown/> }
            
        </div>
    )
}


const mapStateToProps =  createStructuredSelector({

    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);

//in the mapStateToProps, the state is the root reducer