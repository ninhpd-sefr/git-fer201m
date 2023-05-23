import React from "react";
import './Navigation.css';

function Navigation() {
  return (
    <div>
      <nav>
        <ul className="navBar">
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation