import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBVMEhAIsRgsv-MaQnkM2Tw1679Kv9MiDg",
    authDomain: "crown-dv-85c8c.firebaseapp.com",
    projectId: "crown-dv-85c8c",
    storageBucket: "crown-dv-85c8c.appspot.com",
    messagingSenderId: "292306024700",
    appId: "1:292306024700:web:f99f5add0f669581a2ff79"
  };
  
  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    const userRef =firestore.doc(`users/${userAuth.id}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists) {

      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {

        await userRef.set({

          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(error) {

        console.log('error creating user', error.message)

      }
    }
    return userRef;
  }

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});//always trigger the google pop when we use google auth provider

 export const  signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;