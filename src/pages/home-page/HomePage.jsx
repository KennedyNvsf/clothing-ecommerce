
import React from "react";
import "../home-page/homepage.styles.scss";//styles
//components
import Directory from "../../components/directory/Directory.component";


const HomePage = () => {

    return (

        <div className="homePage">
            <Directory />
        </div>
    )
}

export default HomePage;