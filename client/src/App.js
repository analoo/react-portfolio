import React from 'react';
import logo from './playful-ANA.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import NavBar from "./Components/Navigation/NavBar";
import MainDiv from "./Components/Navigation/MainDiv"

import Home from "./pages/home";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import AboutMe from "./pages/aboutMe"
import NoMatch from "./pages/noMatch"


function App() {
  return (
    <Router>
      <MainDiv>
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/aboutMe" component={AboutMe} />
          <Route component={NoMatch} />
          </Switch>
      </MainDiv>  
    </Router>
      );
    }
    
    export default App;
