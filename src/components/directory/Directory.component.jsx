
import React, {useState} from 'react';
import "../directory/directory.styles.scss";//styles
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
//components
import MenuItem from "../menu-item/MenuItem.component";




const Directory = ({sections}) => {

   
    return (

        <div className="directory-menu">
            {sections.map(({title, imageUrl, id, size, linkUrl}) => (
                <MenuItem key={id} title={title} imageUrl={`url(${imageUrl})`} size={size} history linkUrl={linkUrl} />
            ))}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({

  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);