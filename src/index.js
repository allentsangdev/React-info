import ReactDOM from "react-dom";
import React from "react";
import logo from "./react-logo.png";
import "./style.css"

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

function Footer() {
  return (
    <>
      <footer>
        <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
    </>
  );
}

function MainContent() {
  return (
    <div className="maincontent">
      <h1>Reasons I'm excited to learn React</h1>
      <ol className="order-list">
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("app"));
