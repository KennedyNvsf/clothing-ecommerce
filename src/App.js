import React from 'react';
import {Route, Switch} from 'react-router-dom'
import "./styles/app.styles.scss";

//pages
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage"
//components
import Header from "./components/header/Header.component";



function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
