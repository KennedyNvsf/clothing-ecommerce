import React from 'react';
import {Route, Switch} from 'react-router-dom'
import "./styles/app.styles.scss";

//pages
import HomePage from "./pages/home-page/HomePage";
//components




function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
     
    </div>
  );
}

export default App;
