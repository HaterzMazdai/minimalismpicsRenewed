import React from 'react';
import './App.scss';
import Header from './Header'
import Home from './Home'
import AuthComponent from './Auth/AuthComponent'
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Header/>
      <Route exact path="/minimalismpicsRenewed/" >
        <Home/>
      </Route>
      <Route path="/minimalismpicsRenewed/auth" >
        <AuthComponent/>
      </Route>
      <Redirect to="/minimalismpicsRenewed/" />
    </Router>
  );
}

export default App;
