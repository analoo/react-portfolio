import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import NavBar from "./Components/Navigation/NavBar";
import MainDiv from "./Components/Navigation/MainDiv"

import Detail from "./pages/detail";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import AboutMe from "./pages/aboutMe"
import NoMatch from "./pages/noMatch"


function App() {
  return (
    <Router>
      <MainDiv>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <NavBar /> */}
          <Route exact path="/aboutMe" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/project/:id" component={Detail} />
          <Route component={NoMatch} />
          </Switch>
      </MainDiv>  
    </Router>
      );
    }
    
    export default App;
