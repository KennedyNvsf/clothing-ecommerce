
import React from 'react';
import "../header/header.styles.scss";//styles
import {ReactComponent  as Logo} from "../../assets/crown.svg";

import {Link} from "react-router-dom";


const Header = () => {

    return (

        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>

            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                <Link className="option" to="/"></Link>
                <Link className="option" to="/"></Link>
            </div>
        </div>
    )
}

export default Header;