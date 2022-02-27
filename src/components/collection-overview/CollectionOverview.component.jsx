import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionForPreview}  from "../../redux/shop/shop.selectors"
import "./collectionoverview.styles.scss";//stylesheet
//compoents
import PreviewCollection from "../preview-collection/PreviewCollection.component";




const CollectionOverview = ({collections}) => {


    return (

        <div className="collections-overview">

            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }

        </div>
    )
}

const mapStateToProps = createStructuredSelector({

    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);