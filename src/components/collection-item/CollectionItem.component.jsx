import React from 'react';
import "../collection-item/collectionitem.styles.scss";
//components
import CustomBtn from "../custom-btn/CustomBtn.component";
//redux
import {connect} from "react-redux";
import {setAddCartItem} from "../../redux/cart/cart.actions";


const CollectionItem = ({item, setAddCartItem}) => {

    const { name, price, imageUrl} = item;

    return (

        <div className="collection-item">

            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />

            <div className="collection-footer">

                <span className="name">{name}</span>
                <span className="price">{price}</span>

             </div>

            <CustomBtn onClick={() => setAddCartItem(item)} inverted>ADD TO CART</CustomBtn>

        </div>
    )
}




const mapDispatchToProps = dispatch => ({

    setAddCartItem: item => dispatch(setAddCartItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);