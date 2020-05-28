import React from "react";

function NavBar() {
  return (
    <div>
      <div className="name-banner">
        <img src="/assets/images/grey-A.svg" alt ="logo"/>
        <h1>Ana Medrano</h1>
      </div>
      <nav className="navbar navbar-expand-lg text-center">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/aboutMe">About Me <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resume">Resume</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;