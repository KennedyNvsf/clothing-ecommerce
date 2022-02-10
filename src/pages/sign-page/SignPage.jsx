import React from 'react';
import "./signpage.styles.scss";//styles
//components
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";

const SignPage = () => {

    return (

        <div className="sign-in-and-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignPage;