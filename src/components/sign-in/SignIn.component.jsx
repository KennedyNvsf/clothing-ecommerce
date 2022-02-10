
import React, {useState} from 'react';
import "./signin.styles.scss";
//firebase 
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

//components
import FormInput from '../form-input/FormInput.component';
import CustomBtn from "../custom-btn/CustomBtn.component";


const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {

           await auth.signInWithEmailAndPassword(email, password);

           setEmail("");
           setPassword("");
          

        } catch (error) {
            console.log(error);
        }
    }

  

    return (

        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput   onChange={({target}) => setEmail(target.value)} name="email" label="Email" value={email} type="email" required />

                <FormInput  onChange={({target}) => setPassword(target.value)} name="password" label="Password" value={password} type="password" required />
               
                <div className="buttons">
                    <CustomBtn type="submit" value="Submit Form"> SIGN IN </CustomBtn>
                    <CustomBtn onClick={signInWithGoogle} value="Submit Form" isGoogleSignIn>  SIGN IN WITH GOOGLE</CustomBtn>
                </div>
               
            </form>
        </div>
    )
}

export default SignIn;