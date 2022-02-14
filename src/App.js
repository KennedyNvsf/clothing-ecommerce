import React, {useEffect } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import "./styles/app.styles.scss";
//firebase 
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
//redux
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

//pages
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import SignPage from "./pages/sign-page/SignPage";
//components
import Header from "./components/header/Header.component";


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user)),

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
