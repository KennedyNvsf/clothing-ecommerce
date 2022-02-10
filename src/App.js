import React, {useState, useEffect, useLayoutEffect } from 'react';
import {Route, Switch} from 'react-router-dom'
import "./styles/app.styles.scss";

//firebase 
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

//pages
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import SignPage from "./pages/sign-page/SignPage";
//components
import Header from "./components/header/Header.component";



function App() {

  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;

  useEffect(()=>{
   unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 

            id: snapShot.id,
            ...snapShot.data(),
          })
        })

        console.log(currentUser); 

      }else{
        setCurrentUser(userAuth);
      }
      
    })
  });

  useEffect(() =>{
    unsubscribeFromAuth();
 
  });



  return (
    <div className="app">
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
