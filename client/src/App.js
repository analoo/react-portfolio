import React from 'react';
import logo from './playful-ANA.svg';
import './App.css';
import NavBar from "./Components/NavBar"

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar/>
    </div>
  );
}

export default App;
