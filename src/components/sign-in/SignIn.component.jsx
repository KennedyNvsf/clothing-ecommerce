
import React, {useState} from 'react';
import "./signin.styles.scss";
//firebase 
import {signInWithGoogle} from "../../firebase/firebase.utils";

//components
import FormInput from '../form-input/FormInput.component';
import CustomBtn from "../custom-btn/CustomBtn.component";


const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail("");
        setPassword("");
    }

    // const handleChange = (e) => {
    //     e.preventDefault();
    //      setEmail(e.target.value);
    //      setPassword(e.target.value);
    // }

    console.log(email, password);
    return (

        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput   onChange={({target}) => setEmail(target.value)} name="email" label="Email" value={email} type="email" required />

                <FormInput  onChange={({target}) => setPassword(target.value)} name="password" label="Password" value={password} type="password" required />
               
                <div className="buttons">
                    <CustomBtn type="submit" value="Submit Form"> Sign in </CustomBtn>
                    <CustomBtn onClick={signInWithGoogle} value="Submit Form" isGoogleSignIn>  Sign in with Google</CustomBtn>
                </div>
               
            </form>
        </div>
    )
}

export default SignIn;