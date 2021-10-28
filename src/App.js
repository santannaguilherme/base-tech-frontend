import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loginView from './app/login/view/login.view';
import Registration from './app/registration/components/registration.component';
import Menu from './app/baseMenu/component/menu.component';
import Dashboard from './app/dashboard/component/dashboard.component';

import forumHome from './app/forum/views/forumHome/forumHome.view';
import Questions from './app/questions/components/question.component';

function App() {
  return (<Router>
    <div className="App">
     <Menu/>
      <Switch>
        <Route exact path='/' component={loginView} />
        <Route path="/sign-in" component={loginView} />
        <Route path="/sign-up" component={Registration} />
        <Route path="/dashboard" component={Dashboard} />

        <Route path="/forum" component={forumHome} />
        <Route path="/create-question" component={Questions} />
      </Switch>
    </div></Router>
  );
}

export default App;
