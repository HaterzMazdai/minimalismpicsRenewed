import React from 'react';
import './App.scss';
import Header from './Header'
import Home from './Home'
import AuthComponent from './Auth/AuthComponent'
import { BrowserRouter as Router, Route } from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Header/>
      <Route exact path="/" >
        <Home/>
      </Route>
      <Route path="/auth" >
        <AuthComponent/>
      </Route>
    </Router>
  );
}

export default App;
