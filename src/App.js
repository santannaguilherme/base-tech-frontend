import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loginView from './app/login/view/login.view';
import Registration from './app/registration/components/registration.component';


function App() {

  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Base Tech</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Registre-se</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <Switch>
        <Route exact path='/' component={loginView} />
        <Route path="/sign-in" component={loginView} />
        <Route path="/sign-up" component={Registration} />
      </Switch>
    </div></Router>
  );

}

export default App;
