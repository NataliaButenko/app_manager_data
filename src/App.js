import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import { Login } from "./components/loginPage/loginPage";
import { Registration } from "./components/registrationPage/registrationPage";
import { Content } from "./components/contentPage/contentPage";
import { EditUser } from "./components/editUserPage/editUserPage";
import './App.css';

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login-page" component={ Login }/>
          <Route exact path="/registration-page" component={ Registration }/>
          <Route exact path="/content-page" component={ Content }/>
          <Route exact path="/edit-user/:id" component={ EditUser }/>
          <Route component={ Login }/>
        </Switch>
      </Router>
    )
  }
}

export default App;
