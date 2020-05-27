import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutMe">About Me</a>
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
    )
}

export default NavBar;