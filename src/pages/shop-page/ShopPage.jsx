import React,{useState} from 'react';
import "../shop-page/shop.styles.scss";//styles
import SHOP_DATA from '../../shop.data'; 

import PreviewCollection from '../../components/preview-collection/PreviewCollection.component';

const ShopPage = () => {

    const [collections, setCollections] = useState(SHOP_DATA);

    return (

        <div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default ShopPage;