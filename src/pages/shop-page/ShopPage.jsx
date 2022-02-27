import React,{useState} from 'react';
import {Route} from "react-router-dom";
import "../shop-page/shop.styles.scss";//styles
//components
import CollectionOverview from "../../components/collection-overview/CollectionOverview.component";
//pages
import CollectionPage from '../collection-page/CollectionPage';

const ShopPage = ({match}) => (


        <div className="shop-page">
           <Route exact path={`${match.path}`} component={CollectionOverview} /> 
           <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    
)




export default ShopPage;