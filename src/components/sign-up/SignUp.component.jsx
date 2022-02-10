
import React, {useState} from 'react';
import "./signup.styles.scss";
//firebase 
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

//components
import FormInput from '../form-input/FormInput.component';
import CustomBtn from "../custom-btn/CustomBtn.component";


const SignUp = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {

            alert('Passwords do not match');
            setPassword("");
            setConfirmPassword("");
            return;
        }

        try {

            const {user} = await auth.createUserWithEmailAndPassword(email, password);
           await createUserProfileDocument(user, {displayName});

           setDisplayName("");
           setEmail("");
           setPassword("");
           setConfirmPassword("");

        } catch (error) {
            console.log(error);
        }

     
        
    }

  
    return (

        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign in with your email and password</span>

            <form className="sign-up-form" onSubmit={handleSubmit}>

                <FormInput   onChange={({target}) => setDisplayName(target.value)} name="displayName" label="Name" value={displayName} type="text" required />

                <FormInput   onChange={({target}) => setEmail(target.value)} name="email" label="Email" value={email} type="email" required />

                <FormInput  onChange={({target}) => setPassword(target.value)} name="password" label="Password" value={password} type="password" required />

                <FormInput   onChange={({target}) => setConfirmPassword(target.value)} name="confirmPassword" label="Confirm Password" value={confirmPassword} type="password" required />
               
                <div className="buttons">
                    <CustomBtn type="submit" value="Submit"> SIGN UP </CustomBtn>
                    
                </div>
               
            </form>
        </div>
    )
}

export default SignUp;