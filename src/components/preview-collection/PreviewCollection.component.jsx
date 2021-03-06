
import React from 'react';
import "../preview-collection/previewcollection.styles.scss";//styles
//components
import CollectionItem from "../collection-item/CollectionItem.component";



const PreviewCollection = ({title, items}) => {

    return (

        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, index) => index < 4).map((item) => (

                        <CollectionItem key={item.id} item={item}/>
                       
                    ))
                }
            </div>
        </div>
    )
}

export default PreviewCollection;