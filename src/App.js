import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loginView from './app/login/view/login.view';
import Registration from './app/registration/components/registration.component';
import Menu from './app/baseMenu/component/menu.component';


function App() {

  return (<Router>
    <div className="App">
     <Menu/>
      <Switch>
        <Route exact path='/' component={loginView} />
        <Route path="/sign-in" component={loginView} />
        <Route path="/sign-up" component={Registration} />
      </Switch>
    </div></Router>
  );

}

export default App;
