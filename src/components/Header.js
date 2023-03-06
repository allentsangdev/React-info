import React from "react";
import logo from "../react-logo.png";

function Navbar() {
    return (
      <>
      <ul className="nav-items">
          <li>Pricing</li>  
          <li>About</li>
          <li>Contact</li>
        </ul>
      </>
    )   
  }

function Header() {
    return (
      <>
        <header>
          <nav className="nav">
            <img src={logo} className="logo"/>
            <Navbar />
          </nav>
        </header>
      </>
    )
  }

export default Header