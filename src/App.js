import React from 'react';
import {Route, Switch} from 'react-router-dom'
import "./styles/app.styles.scss";

//pages
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage"
//components




function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
